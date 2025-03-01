import React from 'react'

interface Props{
    width?:string;
    height?:string;
    color?:string;
}

function DownloadIcon({width='1em', height='1em', color="#123456"}:Props) {
  return (
    <svg viewBox="0 0 24 24" width={width} height={height} style={{display: 'inline'}} fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
        <g id="SVGRepo_iconCarrier"> 
            <path d="M3 15C3 17.8284 3 19.2426 3.87868 20.1213C4.75736 21 6.17157 21 9 21H15C17.8284 21 19.2426 21 20.1213 20.1213C21 19.2426 21 17.8284 21 15" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
            <path d="M12 3V16M12 16L16 11.625M12 16L8 11.625" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </g>
    </svg>
   )
}

export default DownloadIcon