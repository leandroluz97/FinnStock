import React, { useState } from 'react';
import finnstockLogo from './assets/finnstock-white.svg';

// import './App.css';

function App() {
    const [count, setCount] = useState(0);
    const num = 3;

    return (
        <div className="bg-slate-700 h-full">
            <div className="flex h-full">
                <div className="flex-1">
                    <div>
                        <img src={finnstockLogo} alt="finnstock" />
                    </div>
                    <div>
                        <h1 className="text-gray-500">Welcome Back</h1>
                        <p>Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
                    </div>
                </div>
                <div className="flex-1  bg-sky-500">
                    <h1>right</h1>
                </div>
            </div>
        </div>
    );
}

export default App;
