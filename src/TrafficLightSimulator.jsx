import React, { useEffect, useState } from 'react'

const TrafficLightSimulator = () => {

    const [color, setColor] = useState('red')

    useEffect(() => {

        if (color == 'red') {
            setInterval(() => {
                setColor('yellow')
            }, 3000)
        }
        else if (color == 'yellow') {
            setInterval(() => {
                setColor('green')
            }, 3000)
        }
        else if (color == 'green') {
            setInterval(() => {
                setColor('red')
            }, 3000)
        }

        console.log(color);

    }, [color])

    return (
        <div className='flex w-92 flex-col items-center h-[100vh] m-auto bg-[#111121] justify-center'>
            <h1 className='text-white text-[0.8rem] gap-2' >Traffic Light Simulator </h1>

            <div className='flex flex-col w-22 gap-3 mt-2 p-6 rounded-2xl items-center justify-around bg-[#333]'>
                <div className={`flex rounded-full w-12 h-12 transform-fill ${color == 'red' ? 'bg-red-600' : 'bg-[#444]'}`}></div>
                <div className={`flex rounded-full w-12 h-12 transform-fill ${color == 'yellow' ? 'bg-yellow-500' : 'bg-[#444]'}`}></div>
                <div className={`flex rounded-full w-12 h-12 transform-fill ${color == 'green' ? ' bg-green-600' : ' bg-[#444]'}`}></div>
            </div>
        </div >
    )
}

export default TrafficLightSimulator
