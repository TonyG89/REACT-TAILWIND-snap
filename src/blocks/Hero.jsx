import React from 'react'
import Button from '../components/Button';
import MenImage from '../images/image-hero-desktop.png';
import MenImageMobile from '../images/image-hero-mobile.png';
import { ReactComponent as Darabiz } from '../images/client-databiz.svg';
import { ReactComponent as Audiophile } from '../images/client-audiophile.svg';
import { ReactComponent as Meet } from '../images/client-meet.svg';
import { ReactComponent as Maker } from '../images/client-maker.svg';

const Hero = () => {
  return (
    <section className='w-full flex-col md:flex-row flex mt-6 md:h-screen justify-between'>
      <div className="relative order-2 md:order-1 w-full md:w-2/4 text-center md:text-left mt-12 md:mt-60">
        <h1 className="text-3xl md:text-8xl font-black md:whitespace-pre-line mt-6">{"Make\n remote work"}</h1>
        <p className="text-medium-gray text-lg my-12 whitespace-pre-line">
          {`Lorem ipsum dolor, sit amet consectetur adipisicing elit.\n Amet ullam dolorum animi atque vitae exercitationem\n quibusdam maiores adipisci qui harum.`}
        </p>
        <Button isFilled={true} children="Learn More" />
        <div className="flex justify-around md:absolute bottom-2 w-full mt-20">
          <Darabiz />
          <Audiophile />
          <Meet />
          <Maker />
        </div>
      </div>
      <div className="hidden md:flex order-3 w-2/4 max-h-full mt-20">
        <img src={MenImage} alt="men" />
      </div>
      <div className="flex md:hidden w-full mt-20 justify-center mb-8">
        <img src={MenImageMobile} alt="men" />
      </div>

    </section>
  )
}

export default Hero