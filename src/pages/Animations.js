import React from 'react';
import './animations.css';


function Animations() {
    return (
        <div className="Animations">
        <div className="container mx-auto px-4 py-12">
  <h1 className="text-2xl font-bold text-center mb-4">Animations Page</h1>
  <p className="text-gray-700 text-center">This is where animations will go!</p>

  <div className="mt-20 flex flex-col h-auto space-y-16">
    {/* Animation 1 */}
    <div>
      <p>
        Animation 1: <span className="text-xl font-semibold">Animation Stretch</span>
      </p>
      <div className="Animate-Stretch h-32 bg-gray-300 mt-4"></div>
    </div>

    {/* Animation 2 */}
    <div>
      <p>
        Animation 2: <span className="text-xl font-semibold">Animation Roller</span>
      </p>
      <div className="Animate-roller h-32 bg-gray-300 mt-4"></div>
    </div>

    {/* Animation 3 */}
    <div>
      <p>
        Animation 3: <span className="text-xl font-semibold">Animation Accumulate</span>
      </p>
      <section className="flex flex-wrap gap-4 h-auto mt-4">
        <div className="flex-item w-full sm:w-1/2">
          <div className="upDown add h-12 bg-blue-300 flex items-center justify-center">
            <code>add;</code>
          </div>
        </div>
        <div className="flex-item w-full sm:w-1/2">
          <div className="upDown accumulate h-12 bg-green-300 flex items-center justify-center">
            <code>accumulate;</code>
          </div>
        </div>
      </section>
    </div>

    {/* Animation 4 */}
    <div>
      <p>
        Animation 4: <span className="text-xl font-semibold">Animation Marquee</span>
      </p>
      <div className="container-marquee flex flex-wrap gap-4 mt-4">
        <div className="item w-1/2 sm:w-1/4 h-12 bg-red-300"></div>
        <div className="item1 w-1/2 sm:w-1/4 h-12 bg-yellow-300"></div>
        <div className="item2 w-1/2 sm:w-1/4 h-12 bg-green-300"></div>
        <div className="item3 w-1/2 sm:w-1/4 h-12 bg-blue-300"></div>
        <div className="item4 w-1/2 sm:w-1/4 h-12 bg-purple-300"></div>
        <div className="item5 w-1/2 sm:w-1/4 h-12 bg-pink-300"></div>
        <div className="item6 w-1/2 sm:w-1/4 h-12 bg-orange-300"></div>
       
      </div>
    </div>

    {/* Animation 5 */}
    <div>
      <p>
        Animation 5: <span className="text-xl font-semibold">Animation</span>
      </p>
      <section className="flex flex-wrap gap-4 h-auto mt-4">
        <div className="flex-item w-full sm:w-1/2">
          <div className="colorChanges replace h-12 bg-red-300 flex items-center justify-center">
            <code>replace;</code>
          </div>
        </div>
        <div className="flex-item w-full sm:w-1/2">
          <div className="colorChanges add h-12 bg-blue-300 flex items-center justify-center">
            <code>add;</code>
          </div>
        </div>
      </section>
    </div>
  </div>
   
</div>
<div className=" z-10 mt-8 sm:mt-16 h-32 sm:h-28 w-[90%] sm:w-[66.6%] mx-auto rounded-lg bg-cover bg-center relative" style={{ backgroundImage: 'url(./Rectangle3.png)' }}>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4">
            <p className="text-lg sm:text-xl font-bold text-center" style={{fontSize:'1.5rem'}}>Take Your Website to Next Level Right Now!</p>
            <button className="bg-white text-red-800 rounded-3xl h-10 sm:h-8 w-28 sm:w-20 text-sm sm:text-xs mt-3 font-bold">
                Start Now
            </button>
            </div>
</div>
</div>


       
    );
}

export default Animations;
