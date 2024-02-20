import React, { useState } from 'react';
import Display from './Display';
import Form from './Form';
import './App.css';

function App() {
    const [data, setData] = useState([]);
    
    const addData = (newData) => {
        setData((prev) => {
            return [...prev, newData];
        });
    };

    return (
        <div className="App">
            <Form addData={addData} />
            <Display data={data} />
        </div>
    );
}

export default App;
