// import React, { useEffect, useState } from "react";
// import axios from "axios";

// function LiveEmotion() {
//   const [emotionData, setEmotionData] = useState(null);
//   const [data, setData] = useState(null);
//   const [videoStream, setVideoStream] = useState(null);
//   const [start, setStart] = useState(false);
//   const [isSendingFrames, setIsSendingFrames] = useState(false); // State to control frame sending

//   console.log(emotionData, data);

//   // Using Server-Sent Events to listen for emotion updates
//   useEffect(() => {
//     if (start) {
//       const eventSource = new EventSource("http://127.0.0.1:5000/events");

//       eventSource.onmessage = (event) => {
//         setEmotionData(event.data); // Update the emotion data received from the backend
//       };

//       return () => {
//         eventSource.close(); // Cleanup on unmount
//       };
//     }
//   }, [start]);

//   const startWebcam = async () => {
//     const stream = await navigator.mediaDevices.getUserMedia({ video: true });
//     setVideoStream(stream); // Store the stream for later use
//     const video = document.getElementById("webcam");
//     video.srcObject = stream;
//   };

//   const startDetection = async () => {
//     await startWebcam(); // Start webcam before detection
//     setStart(true);
//     await axios.post("http://127.0.0.1:5000/faceanalysis/start"); // Trigger backend detection
//     setIsSendingFrames(true); // Start sending frames
//   };

//   const stopDetection = async () => {
//     setStart(false); // Stop frame capturing
//     setIsSendingFrames(false); // Stop sending frames

//     if (videoStream) {
//       // Stop all tracks of the video stream
//       videoStream.getTracks().forEach(track => track.stop());
//     }

//     const video = document.getElementById("webcam");
//     video.srcObject = null; // Clear the video source

//     const response = await axios.post("http://127.0.0.1:5000/faceanalysis/stop"); // Stop the backend
//     setData(response.data); // Assuming you want to set emotion durations
//   };

//   // Capture frames every 200ms when isSendingFrames is true
//   useEffect(() => {
//     const sendFrame = async () => {
//       const video = document.getElementById("webcam");
//       const canvas = document.createElement("canvas");
//       const context = canvas.getContext("2d");

//       // Set canvas dimensions to match video dimensions
//       canvas.width = video.videoWidth;
//       canvas.height = video.videoHeight;

//       context.drawImage(video, 0, 0, canvas.width, canvas.height);

//       // Get full-quality image as a base64 string
//       const imageData = canvas.toDataURL("image/jpeg", 1.0); // 1.0 for full quality
//       const base64Image = imageData.split(",")[1]; // Get base64 part

//       // Send the frame to the backend
//       const response = await axios.post(
//         "http://127.0.0.1:5000/faceanalysis/frame",
//         { image: base64Image },
//         {
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       );

//       console.log(response.data);
//     };

//     let intervalId;
//     if (isSendingFrames) {
//       intervalId = setInterval(() => {
//         sendFrame(); // Call sendFrame every 200ms
//       }, 200);
//     }

//     // Cleanup interval on unmount or when isSendingFrames changes
//     return () => {
//       clearInterval(intervalId);
//     };
//   }, [isSendingFrames]);

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
//       <h1 className="text-3xl font-bold mb-6">Emotion Detection</h1>
//       <video
//         id="webcam"
//         autoPlay
//         className={`border-2 border-gray-300 rounded mb-4 ${start ? "block" : "hidden"}`}
//         width="640"
//         height="480"
//       />
//       <div className="flex space-x-4 mb-4">
//         {!start ? (
//           <button
//             onClick={startDetection}
//             className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600 transition"
//           >
//             Start Detection
//           </button>
//         ) : (
//           <button
//             onClick={stopDetection}
//             className="bg-red-500 text-white px-4 py-2 rounded shadow hover:bg-red-600 transition"
//           >
//             Stop Detection
//           </button>
//         )}
//       </div>
//       {emotionData && (
//         <h2 className="text-xl font-semibold">
//           Current Emotion: <span className="font-bold">{emotionData}</span>
//         </h2>
//       )}
//     </div>
//   );
import React, { useEffect, useState } from "react";
import axios from "axios";
import { videoRecommendations } from "./data.js";
import { bookRecommendations } from "./data.js";
import "./LiveEmotion.css";

function LiveEmotion() {
  const [videoStream, setVideoStream] = useState(null);
  const [start, setStart] = useState(false);
  const [isSendingFrames, setIsSendingFrames] = useState(false);
  const [emotionData, setEmotionData] = useState("");
  const [message, setMessage] = useState("");

  // Motivational messages based on emotionData
  const motivationalMessages = {
    happy: "You're radiating positivity! Keep spreading those good vibes!",
    sad: "It's okay to feel down sometimes. Here are some uplifting videos to brighten your day!",
    angry:
      "Take a deep breath! Let's find some calming content to help you relax.",
    neutral: "Sometimes a little inspiration is all you need. Check these out!",
  };

  useEffect(() => {
    if (start) {
      const eventSource = new EventSource("http://127.0.0.1:5000/events");

      eventSource.onmessage = (event) => {
        const emotion = event.data;
        setEmotionData(emotion);
        setMessage(motivationalMessages[emotion] || "Stay awesome!");
      };

      return () => {
        eventSource.close();
      };
    }
  }, [start]);

  const startWebcam = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    setVideoStream(stream);
    const video = document.getElementById("webcam");
    video.srcObject = stream;
  };

  const startDetection = async () => {
    await startWebcam();
    setStart(true);
    await axios.post("http://127.0.0.1:5000/faceanalysis/start");
    setIsSendingFrames(true);
  };

  const stopDetection = async () => {
    setStart(false);
    setIsSendingFrames(false);

    if (videoStream) {
      videoStream.getTracks().forEach((track) => track.stop());
    }

    const video = document.getElementById("webcam");
    video.srcObject = null;

    await axios.post("http://127.0.0.1:5000/faceanalysis/stop");
  };

  useEffect(() => {
    const sendFrame = async () => {
      const video = document.getElementById("webcam");
      const canvas = document.createElement("canvas");
      const context = canvas.getContext("2d");

      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;

      context.drawImage(video, 0, 0, canvas.width, canvas.height);

      const imageData = canvas.toDataURL("image/jpeg", 1.0);
      const base64Image = imageData.split(",")[1];

      await axios.post(
        "http://127.0.0.1:5000/faceanalysis/frame",
        { image: base64Image },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    };

    let intervalId;
    if (isSendingFrames) {
      intervalId = setInterval(() => {
        sendFrame();
      }, 200);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isSendingFrames]);

  const getRecommendedVideos = () => {
    return videoRecommendations[emotionData] || [];
  };

  const getRecommendedBooks = () => {
    return bookRecommendations[emotionData] || [];
  };

  return (
    <div className="flex flex-col items-center  min-h-screen py-10   card relative bg-gradient-to-r from-gray-800 to-gray-600 text-white shadow-md rounded-lg p-5 transition-transform transform">
      <h1 className="text-7xl font-sans font-bold mb-16">Emotion Detection</h1>
      <video
        id="webcam"
        autoPlay
        className={`border-2 border-gray-300 rounded mb-4 ${
          start ? "block" : "hidden"
        }`}
        width="640"
        height="480"
      />
      <div className="flex space-x-4 mb-4">
        {!start ? (
          <button
            onClick={startDetection}
            className="bg-blue-500 bg-opacity-30 backdrop-blur-lg text-white px-4 py-2 rounded shadow-lg hover:bg-blue-600 transition"
          >
            Start Detection
          </button>
        ) : (
          <button
            onClick={stopDetection}
            className="bg-red-500 bg-opacity-30 backdrop-blur-lg text-white px-4 py-2 rounded shadow-lg hover:bg-red-600 transition"
          >
            Stop Detection
          </button>
        )}
      </div>
      {message && (
        <div className="text-xl w-full font-semibold mb-4 p-10">
          <div className="w-full flex items-center justify-center">
            <h2 className="text-center text-4xl font-bold text-gray-500 m-10 max-w-3xl">
              {message}
            </h2>
          </div>
          <h3 className="m-8 text-3xl font-bold">
            Here's Some Video Recommendation According To Your Mood
          </h3>
          <div className="overflow-x-auto slide whitespace-nowrap mb-4">
            {getRecommendedVideos()
              .slice(0, 8)
              .map((video, index) => (
                <div
                  key={index}
                  className="inline-block slide bg-opacity-30 backdrop-blur-sm shadow-lg rounded-lg overflow-hidden w-1/4 p-4 mx-2 border border-white border-opacity-30"
                >
                  <a
                    href={video.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-44 object-cover rounded-lg"
                    />
                    <div className="p-2">
                      <h3 className="font-bold text-lg text-gray-100">
                        {video.title}
                      </h3>
                      <p className="text-gray-400 text-sm mt-1 truncate">
                        {video.description}
                      </p>
                    </div>
                    <button className="bg-blue-500 m-2 bg-opacity-90 backdrop-blur-lg text-white px-3 py-2 rounded shadow-lg text-sm transition">
                      View Now
                    </button>
                  </a>
                </div>
              ))}
          </div>

          <h3 className="m-8 text-3xl font-bold">
            Here's Some Book Recommendations According To Your Mood
          </h3>
          <div className="overflow-x-auto slide whitespace-nowrap">
            {getRecommendedBooks()
              .slice(0, 8)
              .map((book, index) => (
                <div
                  key={index}
                  className="inline-block bg-opacity-30 backdrop-blur-sm shadow-lg rounded-lg overflow-hidden w-1/4 p-4  mx-2 border border-white border-opacity-30"
                >
                  <img
                    src={book.thumbnail}
                    alt={book.title}
                    className="w-full h-32 object-cover rounded-lg"
                  />
                  <div className="p-2">
                    <h3 className="font-bold text-lg text-gray-200">
                      {book.title}
                    </h3>
                    <p className="text-gray-400 text-sm">{book.author}</p>
                  </div>
                  <button className="bg-blue-500 m-2 bg-opacity-90 backdrop-blur-lg text-white px-3 py-2 rounded shadow-lg text-sm transition">
                    View Now
                  </button>
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default LiveEmotion;
