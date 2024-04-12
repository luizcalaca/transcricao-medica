import { useState } from "react";
import axios from 'axios';

const Recorder = () => {
    const [recording, setRecording] = useState(false);
    const [command, setCommand] = useState('');
    const [mediaRecorder, setMediaRecorder] = useState(null);
    const [audioChunks, setAudioChunks] = useState([]);
    const [response, setResponse] = useState('');

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
                  const response = await axios.post('http://localhost:3012/upload', { audioBuffer: base64data });
                  console.log(response.data);
                  setCommand(response.data.transcription)
                  setAudioChunks([])
                  setResponse('')
                  handleCommand()
              } catch (error) {
                  console.error(error);
              }
          };
      }
  };

  const handleCommand = async () => {
    try {
      const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      };
      console.log('Command', command)
      const response = await fetch(`http://localhost:3012/commands/getresponse/?command=${command}`, requestOptions);
      const data = await response.json();
      console.log('DAta', data)
      if(data.length == 0) {
        setResponse('Não há comando cadastrado');
      }else{
        setResponse(JSON.stringify(data[0]?.textGenerated));
      } 
    } catch (error) {
      console.error('Erro ao enviar o comando:', error);
      setResponse('Erro ao enviar o comando.');
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
            <input value={command} readOnly/>
            <textarea value={response} readOnly/>
        </div>
    );
};

export default Recorder;
