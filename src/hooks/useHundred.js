import { useState, useEffect } from 'react';

function useFirst100Words(text) {
  const [first100Words, setFirst100Words] = useState('');

  useEffect(() => {
    if (text) {
      const wordsArray = text.split(/\s+/); // Split by any whitespace character
      const limitedWords = wordsArray.slice(0, 100).join(' '); // Get first 100 words
      setFirst100Words(limitedWords);
    }
  }, [text]); // Rerun when the input text changes

  return first100Words;
}

export default useFirst100Words;
