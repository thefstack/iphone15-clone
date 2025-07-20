import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import { animateWithGsap } from "../utils/animations";
import { explore1Img, explore2Img, exploreVideo } from "../utils";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger)


const Features = () => {

    const videoRef=useRef()

  useGSAP(() => {

    gsap.to("#exploreVideo",{
        scrollTrigger:{
            trigger: "#exploreVideo",
            toggleActions:'play pause reverse restart',
            start:'-10% bottom',
        },

        onComplete:()=>{
            videoRef.current.play()
        }
        
    })

    animateWithGsap("#feature_title", {
      y: 0,
      opacity: 1,
    });

    animateWithGsap(".g_grow",{
        scale:1,
        opacity:1,
        ease:'power1',
        scrub:5.5
    })

    animateWithGsap('.g_text',{
        y:0,
        opacity:1,
        ease:"power2.inOut",
        duration:1
    })
  }, []);

  return (
    <section className="h-full common-padding pg-zinc relative overflow-hidden">
      <div className="screen-max-width">
        <div className="mb-12 w-full">
          <h1 id="feature_title" className="section-heading">
            Explore the full story
          </h1>
        </div>

        <div className="flex flex-col justify-center overflow-hidden items-center">
          <div className="mt-32 mb-24 pl-24">
            <h2 className="text-5xl lg:text-7xl font-semibold">
              Iphone
            </h2>
            <h2 className="text-5xl lg:text-7xl font-semibold">
              Forged in titanium
            </h2>
          </div>

          <div className="flex-center flex-col sm:px-10">
            <div className="relative h-[50vh] w-full flex items-center">
                <video muted playsInline id="exploreVideo" className="w-full h-full object-cover object-center" preload="none" autoPlay ref={videoRef}>
                    <source src={exploreVideo} type='video/mp4'/>
                </video>
            </div>

            <div className="flex flex-col w-full relative">
                <div className="w-full flex flex-col md:flex-row gap-5 items-center">
                    <div className="overflow-hidden flex-1 h-[50vh]">
                        <img src={explore1Img} alt="titanium" className="w-full h-full object-cover object-center scale-150 opacity-0 g_grow" />
                    </div>
                    <div className="overflow-hidden flex-1 h-[50vh]">
                        <img src={explore2Img} alt="titanium2" className="w-full h-full object-cover object-center scale-150 opacity-0 g_grow" />
                    </div>
                </div>

                <div className="feature-text-container">
                    <div className="flex-1 flex-center">
                        <p className="text-gray-600 max-w-md text-lg md:text-xl font-semibold opacity-0 translate-y-[100px] g_text">
                            iPhone 15 Pro is {' '}
                            <span className="text-white">
                                the first iphone to feature an aerospace-grade titanium design using the same alloy that spacecraft use for mission to Mars.
                            </span>
                        </p>
                    </div>

                    <div className="flex-1 flex-center">
                        <p className="text-gray-600 max-w-md text-lg md:text-xl font-semibold opacity-0 translate-y-[100px] g_text">
                            Titanium has one of the best strength-to-weight ratio of any metal, making these our {' '}
                            <span className="text-white">
                                lightest Pro models ever.
                            </span>
                            You'll notice the difference the moment you pick one up.
                        </p>
                    </div>

                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
