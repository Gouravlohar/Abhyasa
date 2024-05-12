import React, { useState, useEffect } from 'react';
import axios from 'axios';



const Add = () => {

    const [result, setResult] = useState('');

    useEffect(() => {
        axios.get('http://localhost:5000/add')
            .then(response => setResult(response.data))
            .catch(error => console.error('Error:', error));
    }, []);

  return (
    <>

        <div>
            <h1>Result from Python:</h1>
            <p>{result}</p>
        </div>
    
    </>
  )
}

export default Add