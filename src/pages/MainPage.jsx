import React, { useRef } from "react";

import ImageContent from "../components/ImageContent";
import VideoContent from "../components/VideoContent";
import HeroContent from "../components/Hero";
import MainContent from "../components/MainContent";
import Notes from "../components/Notes";
import Mockup from "../components/Mockup";

import Illustration from "../resources/content.png";

const MainPage = () => {

    const mainContentRef = useRef(null);

    const scrollToMainContent = (sectionRef) => {
        if (sectionRef.current) {
            sectionRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <main className="flex flex-col gap-24 my-24" id="#">
            <HeroContent title={<><span className="text-[#F0C548]">Find</span> the Sun in Your City!</>} subtitle="Its a pleasure to keep track of the weather!" button="Get Started" click={() => scrollToMainContent(mainContentRef)} />
            <ImageContent title="Real-Time Weather" description="Weather control application will provide you an accurate and real-time weather and temperature data. This application will also show you the weather and temperature forecast for the next few days. So, you can plan your activities and prepare for expected weather conditions!" button="Explore More" navigation="/about" image={Illustration} />
            <Notes />
            <section ref={mainContentRef} />
            <MainContent/>
            <VideoContent title={<>Be Aware of<br />Climate Change</>} description="Climate change refers to long-term changes in temperature and weather patterns. These shifts occur naturally, such as through variations in the solar cycle. But since the 1800s, human activity has become a major cause of climate change, mainly due to the burning of fossil fuels such as coal, oil and gas." button="Explore More" navigation="https://www.youtube.com/embed/wbR-5mHI6bo" />
            <Mockup />
        </main>
    )
}

export default MainPage;