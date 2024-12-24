import os
import cv2
from flask import Flask, request, jsonify, send_file
from werkzeug.utils import secure_filename
import uuid
from flask_cors import CORS  # Importing CORS

app = Flask(__name__)

# Enable CORS for all routes (you can customize it further if needed)
CORS(app)

# Define folder paths for storing videos
VIDEO_FOLDER = 'videos'
PROCESSED_FOLDER = 'processed_videos'

# Make sure the directories exist
os.makedirs(VIDEO_FOLDER, exist_ok=True)
os.makedirs(PROCESSED_FOLDER, exist_ok=True)

# The model for YOLO or any other model you're using
# Assuming you have a model already loaded here
# For example, if using YOLOv5
# from yolov5 import YOLOv5
# model = YOLOv5("path/to/model")

def process_video(input_path, output_path, conf_threshold=0.07, nms_threshold=0.2):
    cap = cv2.VideoCapture(input_path)
    fourcc = cv2.VideoWriter_fourcc(*'avc1')  # H.264 codec
    fps = cap.get(cv2.CAP_PROP_FPS) or 30.0
    width = int(cap.get(cv2.CAP_PROP_FRAME_WIDTH))
    height = int(cap.get(cv2.CAP_PROP_FRAME_HEIGHT))

    out = cv2.VideoWriter(output_path, fourcc, fps, (width, height))

    while cap.isOpened():
        ret, frame = cap.read()
        if not ret:
            break

        # Perform inference on the original full-size frame
        results = model(frame, conf=conf_threshold, iou=nms_threshold)
        detections = results[0].boxes  # Access the detections for the current frame
        person_count = 0

        # Iterate through detections and apply non-max suppression
        for box in detections:
            class_index = int(box.cls.item())
            confidence = float(box.conf.item())

            if class_index == 0 and confidence > conf_threshold:  # Check if the class is "person"
                person_count += 1

                # Draw bounding box and label
                x1, y1, x2, y2 = map(int, box.xyxy[0])  # Get coordinates
                cv2.rectangle(frame, (x1, y1), (x2, y2), (255, 0, 0), 2)
                cv2.putText(frame, f'Person {confidence:.2f}', (x1, y1 - 10), cv2.FONT_HERSHEY_SIMPLEX, 0.5, (255, 0, 0), 2)

        # Write person count text on the frame
        text = f"Persons detected: {person_count}"
        text_size, _ = cv2.getTextSize(text, cv2.FONT_HERSHEY_SIMPLEX, 1, 2)
        text_x = (frame.shape[1] - text_size[0]) // 2
        cv2.putText(frame, text, (text_x, 50), cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 255, 0), 2)

        # Write the processed frame to the output video
        out.write(frame)

    cap.release()
    out.release()
    print("Processing complete.")
        
@app.route('/upload_video', methods=['POST'])
def upload_video():
    # Get the video file and unique name from the request
    video_file = request.files.get('video')
    unique_id = str(uuid.uuid4())  # Create a unique ID for the video

    if not video_file:
        return jsonify({"error": "Video file is required."}), 400

    # Secure the filename to avoid path issues
    filename = secure_filename(video_file.filename)
    # Ensure the unique name ends with .mp4
    unique_name = f"{unique_id}.mp4"

    # Save the original video
    output_path = os.path.join(VIDEO_FOLDER, unique_name)
    video_file.save(output_path)

    # Process the video with YOLO
    processed_path = os.path.join(PROCESSED_FOLDER, unique_name)
    process_video(output_path, processed_path)

    return jsonify({"message": "Video uploaded and processed successfully.", "unique_id": unique_id}), 200

@app.route('/get_processed_video/<unique_id>', methods=['GET'])
def get_processed_video(unique_id):
    # Construct the full file path for the processed video
    video_path = os.path.join(PROCESSED_FOLDER, f"{unique_id}.mp4")
    
    # Check if the processed video exists
    if not os.path.exists(video_path):
        return jsonify({"error": "Processed video not found."}), 404
    
    # Send the processed video file
    return send_file(video_path, mimetype='video/mp4', as_attachment=False)

if __name__ == "__main__":
    app.run(debug=True, host='0.0.0.0', port=5000)