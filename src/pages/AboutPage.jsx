import React from "react";

import ImageContent from "../components/ImageContent";

import Profile from "../resources/profile.png";

const AboutPage = () => {
  return (
    <main className="mt-24">
        <ImageContent title="Hello, I'm Ghirah" description="A computer science education student that is a knowledge-curious, communicative, diligent, hard-worker, responsible, and quick learner person, have passionate and experienced about graphic design and motion graphic." button="Contact" navigation="https://wa.me/6281807362365" image={Profile} />
    </main>
  )
}

export default AboutPage;