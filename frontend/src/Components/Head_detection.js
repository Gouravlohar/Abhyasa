import React, { useState, useEffect } from 'react';
import axios from 'axios';



const Add = () => {

    const [result, setResult] = useState('');

    useEffect(() => {
        axios.get('http://localhost:5000/head_detect')
            .then(response => setResult(response.data))
            .catch(error => console.error('Error:', error));
    }, []);

  return (
    <>a

        <div>
            <h1>Result from Python:</h1>
            <p>{result}</p>
        </div>
    
    </>
  )
}

export default Add