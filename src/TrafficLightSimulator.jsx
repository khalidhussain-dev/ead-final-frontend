import React from 'react'

const TrafficLightSimulator = () => {
    return (
        <div className='flex w-92 flex-col items-center h-[100vh] m-auto bg-[#111121] justify-center'>
            <h1 className='text-white text-[0.8rem] gap-2' >Traffic Light Simulator</h1>

            <div className='flex flex-col w-22 gap-3 mt-2 p-6 rounded-2xl items-center justify-around bg-[#333]'>
                <div className='flex rounded-full w-12 h-12 bg-red-600'></div>
                <div className='flex rounded-full w-12 h-12 bg-yellow-600'></div>
                <div className='flex rounded-full w-12 h-12 bg-green-600'></div>

            </div>
        </div>
    )
}

export default TrafficLightSimulator
