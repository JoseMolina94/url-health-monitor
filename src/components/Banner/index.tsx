'use client'
import React, { useState, useEffect } from "react";

export const Banner = () => {
  const [imgIndex, setImgIndex] = useState(0)
  const imagesArray = [
    "url-monitoring.jpg",
    "health-score.jpg",
    "uhm.png",
  ]

  const changeImg = () => {
    if ( imgIndex >= imagesArray.length - 1 ) {
      setImgIndex(0)
    } else {
      setImgIndex(prevState => prevState + 1)
    }
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      changeImg()
      clearTimeout(timer)
    }, 5000)
  }, [imgIndex])

  return (
    <div className="relative w-full h-96">
      <div className="absolute inset-0 bg-black opacity-50" />
      <div className="absolute inset-0 flex items-start justify-center">
        <img
          src="/images/logo.png"
          alt="logo"
          className="rounded-lg shadow-lg w-72 h-auto mt-3 relative z-10"
        />
      </div>
      <div
        className="bg-content bg-no-repeat bg-center w-full h-full"
        style={{
          backgroundImage: `url('/images/${imagesArray[imgIndex]}')`
        }}
      />
    </div>
  )
}
