import React, { useEffect, useState } from 'react'

const TrafficLightSimulator = () => {

    const [color, setColor] = useState('red')

    useEffect(() => {

        setInterval(() => {
            if (color == 'red') setColor('yellow');
            else if (color == 'yellow') setColor('green');
            else if (color == 'green') setColor('red');
        }, 3000);

    }
    )



    return (
        <div className='flex w-92 flex-col items-center h-[100vh] m-auto bg-[#111121] justify-center'>
            <h1 className='text-white text-[0.8rem] gap-2' >Traffic Light Simulator Color: {color}</h1>

            <div className='flex flex-col w-22 gap-3 mt-2 p-6 rounded-2xl items-center justify-around bg-[#333]'>
                <div className={`flex rounded-full w-12 h-12 bg-${color == 'red' ? 'red-600' : '[#444]'}`}></div>
                <div className={`flex rounded-full w-12 h-12 bg-${color == 'yellow' ? 'yellow-600' : '[#444]'}`}></div>
                <div className={`flex rounded-full w-12 h-12 bg-${color == 'green' ? 'green-600' : '[#444]'}`}></div>

            </div>
        </div>
    )
}

export default TrafficLightSimulator
