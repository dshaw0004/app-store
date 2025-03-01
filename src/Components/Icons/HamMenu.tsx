import React from 'react'

interface Props{
    width?: string;
    height?: string;
}
function HamMenu({width="24", height="24"}: Props) {
    // CREDIT:- this icon is from https://www.svgrepo.com/svg/532195/menu
  return (
        <>
        <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 6H20M4 12H20M4 18H20" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        </>
  )
}

export default HamMenu;