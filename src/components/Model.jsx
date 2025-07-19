import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ModelView from "./ModelView";
import { useEffect, useRef, useState } from "react";
import { View } from "@react-three/drei";
import { yellowImg } from "../utils";
import { models, sizes } from "../constants";

import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { animateWithGsapTimeline } from "../utils/animations";

const Model = () => {
  const [size, setSize] = useState("small");
  const [model, setModel] = useState({
    title: "iphone 15 Pro in Natural Titanium",
    color: ["#8f8a81", "#ffe789", "#6f6c64"],
    img: yellowImg,
  });

  //camera control for view
  const cameraControlSmall = useRef();
  const cameraControlLarge = useRef();

  // actual model
  const small = useRef(new THREE.Group());
  const large = useRef(new THREE.Group());

  // rotation value
  const [smallRotation, setSmallRotation] = useState(0);
  const [largeRotation, setLargeRotation] = useState(0);

  const tl=gsap.timeline();
  
  useEffect(()=>{
    if(size==='large'){
      animateWithGsapTimeline(tl, small, smallRotation, "#view1", "#view2",{
        transform:'translateX(-100%)',
        duration:2
      })
    }

    if(size==='small'){
      animateWithGsapTimeline(tl, large, largeRotation, "#view2", "#view1",{
        transform:'translateX(0)',
        duration:2
      })
    }

  },[size])

  useGSAP(() => {
    gsap.to("#heading", {
      opacity: 1,
      y: 0,
    });
  }, []);

  return (
    <section className="common-padding ">
      <div className="screen-max-width">
        <h1 id="heading" className="section-heading">
          Take a closer look.
        </h1>

        <div className="flex flex-col items-center mt-5">
          <div className="w-full h-[75vh] md:h-[90vh] overflow-hidden relative">
            <ModelView
              index={1}
              groupRef={small}
              gsapType="view1"
              controlRef={cameraControlSmall}
              setRotationState={setSmallRotation}
              item={model}
              size={size}
            />

            <ModelView
              index={2}
              groupRef={large}
              gsapType="view2"
              controlRef={cameraControlLarge}
              setRotationState={setLargeRotation}
              item={model}
              size={size}
            />

            <Canvas
              className="w-full h-full"
              style={{
                position: "fixed",
                top: "0",
                bottom: "0",
                left: "0",
                right: "0",
                overflow: "hidden",
              }}
              eventSource={document.getElementById("root")}
            >
              <View.Port />
            </Canvas>
          </div>
          <div className=" mx-auto w-full">
            <p className="text-sm font-light text-center mb-5">{model.title}</p>
            <div className="flex-center">
              <ul className="flex items-center justify-center px-4 py-4 rounded-full bg-gray-900 backdrop-blur">
                {models.map((item, i) => (
                  <li
                    key={i}
                    className="h-6 w-6 rounded-full mx-2 cursor-pointer"
                    style={{ backgroundColor: item.color[0] }}
                    onClick={() => setModel(item)}
                  ></li>
                ))}
              </ul>
              <button className="flex items-center justify-center p-1 rounded-full bg-gray-800 backdrop-blur ml-3 gap-1">
                {sizes.map(({label, value}) => (
                  <span
                    key={label}
                    className="w-10 h-10 text-sm flex justify-center items-center bg-white text-black rounded-full transition-all"
                    style={{
                      backgroundColor: size === value ? "white" : "transparent",
                      color: size === value ? "black" : "white",
                    }}
                    onClick={() => setSize(value)}
                  >
                    {label}
                  </span>
                ))}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Model;
