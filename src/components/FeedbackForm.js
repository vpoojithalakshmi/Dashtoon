// src/components/FeedbackForm.js
import React, { useState } from 'react';
import { firestore } from '../firebase';

const FeedbackForm = () => {
  const [feedback, setFeedback] = useState('');

  const handleFeedbackChange = (e) => {
    setFeedback(e.target.value);
  };

  const handleSubmitFeedback = async () => {
    try {
      if (feedback.trim() === '') {
        // Add validation if needed
        return;
      }

      // Save feedback to Firestore
      await firestore.collection('feedback').add({
        feedback,
        timestamp: new Date(),
      });

      // Reset the feedback state after submission
      setFeedback('');
    } catch (error) {
      console.error('Error submitting feedback:', error.message);
    }
  };

  return (
    <div className="feedback-container">
      <h2>Feedback</h2>
      <textarea
        placeholder="Enter your feedback..."
        value={feedback}
        onChange={handleFeedbackChange}
      />
      <button onClick={handleSubmitFeedback}>Submit Feedback</button>
    </div>
  );
};

export default FeedbackForm;
