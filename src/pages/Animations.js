import React from 'react';
import './animations.css';


function Animations() {
    return (
        <div className="container  mx-auto px-4 py-12">
            <h1 className="text-2xl font-bold text-center mb-4">Animations Page</h1>
            <p className="text-gray-700 text-center">This is where animations will go!</p>
            <div className='mt-20 flex flex-col h-auto'><p>Animation 1: <span className='text-xl font-semibold'>Animation Stretch</span></p>
                <div className="Animate-Stretch"></div>
                <p className='mt-16'>Animation 2: <span className='text-xl font-semibold'>Animation Roller</span></p>  
                <div className="Animate-roller"></div>
                <p className='mt-16'>Animation 3: <span className='text-xl font-semibold'>Animation Accumulate </span></p>
                <section class="flex h-96">
                    <div class="flex-item">
                        <div class="upDown add h-12">
                        <code>add;</code>
                        </div>
                    </div>
                    <div class="flex-item">
                        <div class="upDown accumulate h-12">
                        <code>accumulate;</code>
                        </div>
                    </div>
                </section>
                <p className='mt-16'>Animation 4: <span className='text-xl font-semibold'>Animation Marquee </span></p>

                <div class="container-marquee">
                    <div class="item"></div>
                    <div class="item1"></div>
                    <div class="item2"></div>
                    <div class="item3"></div>
                    <div class="item4"></div>
                    <div class="item5"></div>
                    <div class="item6"></div>
                    <div class="item7"></div> 
                </div>
                <p className='mt-16'>Animation 5: <span className='text-xl font-semibold'>Animation  </span></p>
                <section class="flex h-44">
                    <div class="flex-item">
                        <div class="colorChanges replace">
                        <code>replace;</code>
                        </div>
                    </div>
                    <div class="flex-item">
                        <div class="colorChanges add">
                        <code>add;</code>
                        </div>
                    </div>
                </section>
                
            </div>
        </div>
       
    );
}

export default Animations;
