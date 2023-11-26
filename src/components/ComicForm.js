import React, { useState } from 'react';
import './ComicForm.css';

const ComicForm = ({ onSubmit, onFeedbackSubmit }) => {
  const [textInputs, setTextInputs] = useState(new Array(10).fill(''));
  const [feedback, setFeedback] = useState('');

  const handleChange = (index, value) => {
    const newInputs = [...textInputs];
    newInputs[index] = value;
    setTextInputs(newInputs);
  };

  const handleFeedbackChange = (e) => {
    setFeedback(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(textInputs);
  };

  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    onFeedbackSubmit(feedback);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {textInputs.map((input, index) => (
          <div key={index}>
            <label>Panel {index + 1}:</label>
            <textarea
              value={input}
              onChange={(e) => handleChange(index, e.target.value)}
              required
            />
          </div>
        ))}
        <button type="submit">Generate Comic</button>
      </form>

      <div>
        <form onSubmit={handleFeedbackSubmit}>
          <label><b>Feedback:</b></label>
          <textarea
            value={feedback}
            onChange={handleFeedbackChange}
            required
          />
          <button type="submit">Submit Feedback</button>
        </form>
      </div>
    </div>
  );
};

export default ComicForm;
