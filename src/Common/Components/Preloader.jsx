import React from 'react'

function Preloader() {
    return (
        <>
            <div className="w-full h-screen  flex justify-center items-center">
                <video
                    src="https://cdnl.iconscout.com/lottie/premium/thumb/green-apple-animated-icon-gif-download-10913073.mp4"
                    autoPlay
                    loop
                    muted
                    className="w-48 h-48"
                ></video>
            </div>
        </>
    )
}

export default Preloader
