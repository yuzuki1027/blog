'use client';
import { useState } from 'react';

const Counter = () => {
    const countUp = () => {
        setCount((prev) => prev + 1);
      };
      const [count, setCount] = useState(0);
    return (
        <>
         <h2 className="text-lg font-bold mt-4">カウンター</h2>
         <div>Count:{count}</div>
         <button onClick={countUp} className="px-2 py-1 rounded-full bg-blue-300">+</button>

        </>
    )

};
export default  Counter;