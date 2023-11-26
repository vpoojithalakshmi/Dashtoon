import React from 'react';
// import SpeechBubble from './SpeechBubble';


const ComicPanel = ({ images, texts }) => {
  return (
    <div className="comic-panel">
      {images.map((imageURL, index) => (
        <div key={index} className="comic-panel-item">
          <h3 className="panel-name">Panel Name {index + 1}</h3>
          <img src={imageURL} alt={`Panel ${index}`} />
        </div>
      ))}
    </div>
  );
};

export default ComicPanel;

