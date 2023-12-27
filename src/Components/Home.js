import React from 'react';
import heroDesktop from "./../images/image-hero-desktop.png"
import heroMobile from "./../images/image-hero-mobile.png"
import audiophile from "./../images/client-audiophile.svg"
import databiz from "./../images/client-databiz.svg"
import maker from "./../images/client-maker.svg"
import meet from "./../images/client-meet.svg"
const Home = () => {
  return (
    <div>

   <div className='flex flex-col-reverse lg:flex-row md:flex-row lg:m-auto md:items-center lg:items-center lg:max-w-4xl md:max-w-4xl md:m-auto lg:gap-10 md:gap-8 md:pt-10'>

    <div className='flex-1 text-center md:text-left p-5'>
     <h1 className='text-4xl font-bold  lg:text-6xl'>Make Remote Work</h1>
     <p className='mt-5 text-gray-700'>get your team in sync,no matter your location.Streamline processes.create team rituals, and watch productivity soar</p>
     <button className='mt-5 bg-black rounded-lg shadow text-white font-bold hover:opacity-75 transition-all p-3 px-6 cursor-pointer'>Learn more</button>
     <div className='mt-5 flex gap-1 items-center justify-center m-auto lg:mt-24 lg:gap-5'>
      
     <img src={audiophile} />
      <img src={databiz}/>
      <img src={meet}/>
      <img src={maker}/>

     </div>
    </div>
    <div className='flex-1'>
     <picture>
      <source srcSet={heroDesktop} media='(min-width: 768px)' />
      <img  src={heroMobile}/>
     </picture>
    </div>
    

   </div>


  
    </div>
  );
};

export default Home;