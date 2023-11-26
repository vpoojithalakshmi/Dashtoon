import React from 'react';

const ErrorDisplay = ({ error }) => {
  return (
    <div className="error">
      <p>{error}</p>
    </div>
  );
};

export default ErrorDisplay;
