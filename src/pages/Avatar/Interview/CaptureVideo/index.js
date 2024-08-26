import React, { useRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Webcam from 'react-webcam';

const VideoComponent = ({ width, height,audio,showConfirmButton }) => {
  const webcamRef = useRef(null);
  const [mediaBlob, setMediaBlob] = useState({});
  const [storedBlobData, setStoredBlobData] = useState(null);
  const mediaRecorderRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const startRecording = () => {
      console.log('Recording started.');

      if (webcamRef.current && webcamRef.current.video && webcamRef.current.video.srcObject) {
        const mediaStream = webcamRef.current.video.srcObject;
        mediaRecorderRef.current = new MediaRecorder(mediaStream);

        const chunks = [];
        mediaRecorderRef.current.ondataavailable = (event) => {
          if (event.data.size > 0) {
            chunks.push(event.data);
          }
        };

        mediaRecorderRef.current.start();
      }
    };

    startRecording(); // Start recording immediately on page load

    return () => {
      stopRecording(); // Stop recording when component unmounts
    };
  }, []);

  const stopRecording = () => {
    console.log('Stopping recording...');
    if (mediaRecorderRef.current && mediaRecorderRef.current.state === 'recording') 
    {
      mediaRecorderRef.current.stop();
      const blob = new Blob([], { type: 'video/webm' }); // Create an empty blob for now
      setMediaBlob((prevMediaBlob) => {
      const updatedMediaBlob = { blob, blobURL: URL.createObjectURL(blob) };
      setStoredBlobData(updatedMediaBlob.blob); // Set storedBlobData here as well
      console.log('Blob Data:  in confirm ', updatedMediaBlob);
      return updatedMediaBlob;
    });
    }
  };

  const confirmRecording = () => {
    console.log('Confirm button clicked');
    

    stopRecording(); 
    console.log('Blob Data:  in confirm ', storedBlobData);

    console.log()// Stop recording

    

    // Navigate to the next page
    navigate('/interview/waitingroom');
  };

  return (
    <div className='d-flex flex-column align-items-center justify-content-around'>
    <div className='object-fit-lg-cover border rounded'>
      <Webcam
        audio={audio}   
        ref={webcamRef}
        screenshotFormat='image/jpeg'
        width={width}
        height={height}
      />
      
    </div>
    <div className='p-2'>
      {showConfirmButton &&(
      <div>
        <button onClick={confirmRecording} className='btn btn-light rounded-4 fs-6 fw-bold'>Confirm</button>
      </div>
      )}
    </div>
    </div>
  );
};

export default VideoComponent;
