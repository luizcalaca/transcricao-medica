import { useState } from "react";
import axios from 'axios';

const App = () => {
    const [recording, setRecording] = useState(false);
    const [mediaRecorder, setMediaRecorder] = useState(null);
    const [audioChunks, setAudioChunks] = useState([]);

    const handleStartRecording = async () => {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        const mediaRecorder = new MediaRecorder(stream);
        setMediaRecorder(mediaRecorder);
        mediaRecorder.start();
        mediaRecorder.addEventListener("dataavailable", handleDataAvailable);
        setRecording(true);
    };

    const handleStopRecording = () => {
        if (mediaRecorder) {
            mediaRecorder.stop();
            setRecording(false);
        }
    };

    const handleDataAvailable = (e) => {
        if (e.data.size > 0) {
            setAudioChunks((prev) => [...prev, e.data]);
        }
    };

    const handleDownload = async () => {
      if (audioChunks.length > 0) {
          const audioBlob = new Blob(audioChunks, { type: "audio/mp3" });
          const reader = new FileReader();
          reader.readAsDataURL(audioBlob);
          reader.onloadend = async () => {
              const base64data = reader.result.split(',')[1]; // Extrai os dados base64 da string
              try {
                  console.log(base64data)
                  const response = await axios.post('http://localhost:3012/upload', { audioBuffer: base64data });
                  console.log(response.data);
              } catch (error) {
                  console.error(error);
              }
          };
      }
  };

    return (
        <div>
            <button onClick={recording ? handleStopRecording : handleStartRecording}>
                {recording ? "Stop Recording" : "Start Recording"}
            </button>
            {audioChunks.length > 0 && (
                <button onClick={handleDownload}>Send Audio</button>
            )}
        </div>
    );
};

export default App;
