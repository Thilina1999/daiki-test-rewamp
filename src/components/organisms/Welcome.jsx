import React from 'react'
import WelcomeContent from '../molecules/WelcomeContent';

const Welcome = () => {
    return (
        <div className="pb-7 hide">
          <div
            className="relative rounded-3xl h-auto bg-white p-4 md:rounded-10 md:p-10 bg-no-repeat bg-cover bg-center flex items-center justify-center overflow-hidden shadow-sm"

          >
            <WelcomeContent />
          </div>
        </div>
      );
}

export default Welcome
