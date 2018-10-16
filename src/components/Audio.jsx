import React from 'react';

const Audio = () => {
  document.addEventListener('keydown', function(e) {
    if (e.keyCode === 70) {
      document.getElementById('audio').play();
    }
  });

  document.addEventListener('keydown', function(e) {
    if (e.keyCode === 71) {
      document.getElementById('audio1').play();
    }
  });

  return (
    <div>
      <audio id="audio">
        <source src="https://s3-us-west-1.amazonaws.com/mvp-sounds/tom-short.wav" type="audio/mpeg"/>
      </audio>

      <audio id="audio1">
        <source src="https://s3-us-west-1.amazonaws.com/mvp-sounds/snare-big.wav" type="audio/mpeg"/>
    </audio>
    </div>
  );
};

export default Audio;
