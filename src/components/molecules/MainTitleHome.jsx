import React from 'react'
import TitleContent from '../atoms/TitleContent'

const MainTitleHome = () => {
  return (
    <div className='items-center'>
      <TitleContent 
      text={"DAIKI JAPANESE STUDIES"}
      customStyles={`md:text-mainTitle text-4xl font-extrabold pb-4 text-white text-center animate-scale`}
      />
        <div className="md:flex items-center justify-center text-center">
          <TitleContent text={"BRIDGE TO JAPAN"} customStyles={"text-light-green font-extrabold text-3xl lg:text-nowrap"} />
          <TitleContent text={"日本への掛け橋"} customStyles={"text-white text-3xl font-extrabold lg:text-nowrap"} />
        </div>
    </div>
  )
}

export default MainTitleHome
