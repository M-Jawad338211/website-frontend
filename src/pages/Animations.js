import React from 'react';
import './animations.css';
function Animations() {
    return (
        <div className="container mx-auto px-4 py-12">
            <h1 className="text-2xl font-bold text-center mb-4">Animations Page</h1>
            <p className="text-gray-700 text-center">This is where animations will go!</p>
            <div className='mt-20 flex flex-col h-auto'><p>Animation 1: <span className='text-xl font-semibold'>Animation Stretch</span></p>
                <div className="Animate-Stretch"></div>
                <p className='mt-16'>Animation 2: <span className='text-xl font-semibold'>Animation Roller</span></p>  
                <div className="Animate-roller"></div>
            </div>
        </div>
       
    );
}

export default Animations;
