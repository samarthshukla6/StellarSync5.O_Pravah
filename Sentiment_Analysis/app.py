import time
import cv2
import base64
import numpy as np
from PIL import Image
from flask import Flask, request, jsonify, Response
from flask_cors import CORS  # Import CORS
from transformers import AutoFeatureExtractor, AutoModelForImageClassification, pipeline
import torch

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Load the model and feature extractor
model_name = "dima806/facial_emotions_image_detection"
feature_extractor = AutoFeatureExtractor.from_pretrained(model_name)
model1 = AutoModelForImageClassification.from_pretrained(model_name)

# Global variables for emotion detection state
is_processing = False
emotion_durations = {}
emotion_data = None
emotion_array = []

# Define the pipeline for image classification
pipe = pipeline('image-classification', model=model_name, device=-1)

# Emotion mapping
id2label = {
    0: "sad",
    1: "disgust",
    2: "angry",
    3: "neutral",
    4: "fear",
    5: "surprise",
    6: "happy"
}

def preprocess_image(image):
    """Resize and preprocess the image for the model."""
    image = image.resize((224, 224))  # Resize to 224x224
    return feature_extractor(images=image, return_tensors="pt")

@app.route('/faceanalysis/frame', methods=['POST'])
def process_frame():
    global emotion_data

    try:
        data = request.json
        image_data = data['image']  # Base64 image string from frontend
        image = base64.b64decode(image_data)  # Decode base64 image
        np_array = np.frombuffer(image, np.uint8)
        frame = cv2.imdecode(np_array, cv2.IMREAD_COLOR)

        # Convert the frame to RGB format
        frame_rgb = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
        image_pil = Image.fromarray(frame_rgb)

        # Preprocess the image for the model
        inputs = preprocess_image(image_pil)

        # Perform emotion prediction
        with torch.no_grad():
            outputs = pipe(image_pil)

        # Extract the highest scored prediction
        predicted_emotion = outputs[0]['label']
        score = outputs[0]['score']

        # Update global emotion data
        emotion_data = predicted_emotion

        # Track emotion durations
        if predicted_emotion not in emotion_durations:
            emotion_durations[predicted_emotion] = 0
        emotion_durations[predicted_emotion] += 1
        emotion_array.append(predicted_emotion)

        return jsonify({"status": "frame processed", "emotion": predicted_emotion, "score": score}), 200
    except Exception as e:
        return jsonify({"status": "error", "message": str(e)}), 500

@app.route('/faceanalysis/start', methods=['POST'])
def start_detection():
    global is_processing
    if not is_processing:
        is_processing = True
        emotion_durations.clear()
        emotion_array.clear()
    return jsonify({"status": "started"}), 200

@app.route('/faceanalysis/stop', methods=['POST'])
def stop_detection():
    global is_processing
    is_processing = False
    time.sleep(1)

    dominant_emotion = max(emotion_durations, key=emotion_durations.get, default=None)

    return jsonify({
        "duration": emotion_durations,
        "emotionArray": emotion_array,
        "dominantEmotion": dominant_emotion
    }), 200

@app.route('/events')
def events():
    def generate():
        while is_processing:
            if emotion_data:
                yield f"data: {emotion_data}\n\n"
            time.sleep(2)

    return Response(generate(), content_type='text/event-stream')

if __name__ == "__main__":
    app.run(debug=True, host='0.0.0.0', port=3000)
