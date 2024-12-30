import React from 'react'

import Hero from '../components/Hero';
import Content from '../components/Content';
import Main from '../components/Main';
import VideoContent from '../components/VideoContent';
import Floating from '../components/Floating';
import { useRef } from 'react';

const MainPage = () => {
  const mainRef = useRef(null);
  const contentRef = useRef(null);

  const handleScroll = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop, behavior: 'smooth'
    })
  }

  return (
    <div>
        <Hero click = {() => handleScroll(contentRef)}/>
        <Floating className='absolute' click = {() => handleScroll(mainRef)}/>
        <div className='w-full h-0' ref={contentRef}></div>
        <Content/>
        <div className='w-full h-36' ref={mainRef}></div>
        <Main />
        <VideoContent/>
    </div>
  )
}

export default MainPage;