// import React, { useState } from 'react';
import React, { useState } from 'react';
import './App.css';
import ComicForm from './components/ComicForm';
import ComicPanel from './components/ComicPanel';
import ErrorDisplay from './components/ErrorDisplay';
import FeedbackForm from './components/FeedbackForm';

const API_URL = "https://xdwvg9no7pefghrn.us-east-1.aws.endpoints.huggingface.cloud";

function App() {
  const [images, setImages] = useState([]);
  const [texts, setTexts] = useState(new Array(10).fill(''));
  const [error, setError] = useState('');

  const generateComic = async (textInputs) => {
    try {
      const imagePromises = textInputs.map((input) => query({ inputs: input }));
      const resolvedImages = await Promise.all(imagePromises);
      setImages(resolvedImages);
      setError('');
    } catch (err) {
      setError('Failed to generate comic. Please try again.');
    }
  };

  const query = async (data) => {
    try {
      const response = await fetch(API_URL, {
        headers: {
          "Accept": "image/png",
          "Authorization": "Bearer VknySbLLTUjbxXAXCjyfaFIPwUTCeRXbFSOjwRiCxsxFyhbnGjSFalPKrpvvDAaPVzWEevPljilLVDBiTzfIbWFdxOkYJxnOPoHhkkVGzAknaOulWggusSFewzpqsNWM",
          "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('API request failed');
      }

      const result = await response.blob();
      return result;
    } catch (error) {
      throw new Error('Failed to fetch image from API');
    }
  };

  return (
    <div className="App">
      <h1>Comic Generator</h1>
      <ComicForm onSubmit={generateComic} />
      {error && <ErrorDisplay error={error} />}
      <div className="comic-container">
        <ComicPanel images={images} texts={texts} />
      </div>
      <FeedbackForm />
    </div>
  );
}

export default App;
