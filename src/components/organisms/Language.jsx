import React from 'react'
import LanguageTitle from '../molecules/LanguageTitle'
import Image from '../../assets/png/daiki-jps.png'
import ContentImages from "../molecules/ContentImages";

const Language = () => {
  return (
    <div className="pb-7 hide">
      <div className="relative rounded-3xl h-auto bg-white md:rounded-10 p-10 bg-no-repeat bg-cover bg-center flex items-center justify-center overflow-hidden shadow-sm">
      <div className="grid lg:grid-cols-6 ">
        <LanguageTitle />
        <ContentImages src={Image} cols={"md:col-span-3  place-items-center"} styles={""}/>
      </div>
      </div>
    </div>
  )
}

export default Language
