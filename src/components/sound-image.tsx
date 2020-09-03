import React, { useState, useEffect } from "react";
// import matu from "./mishi.jpg";
import styled, { keyframes } from "styled-components";
import { useSpring, animated } from "react-spring";
// const mp3 = require("fart").mp3;

const shake = keyframes`
  10%, 90% {
    transform: translate3d(-1px, 0, 0);
  }
  
  20%, 80% {
    transform: translate3d(2px, 0, 0);
  }

  30%, 50%, 70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%, 60% {
    transform: translate3d(4px, 0, 0);
  }
`;

const Picture = styled.img`
  position: fixed;
  top: 2px;
  left: 2px;
  width: 8%;
  cursor: pointer;
  &:active {
    animation: ${shake} 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
    transform: translate3d(0, 0, 0);
    backface-visibility: hidden;
    perspective: 1000px;
  }
`;

interface Props {
  image: string;
}

const SoundImage: React.FC<Props> = ({ image }) => {
  const props = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 3000 });
  const [showPic, setShowPic] = useState(true);

  useEffect(() => {
    const remove = setTimeout(() => {
      setShowPic(false);
    }, 8000);
    return () => {
      clearTimeout(remove);
    };
  }, []);

  function handleClick() {
    // const random = Math.floor(Math.random() * mp3.sound.length);
    // const audio = new Audio(mp3.prefix + "" + mp3.sound[random]);
    // audio.play();
  }

  return (
    <>
      {showPic && (
        <animated.div style={props}>
          <Picture src={image} alt="Matu" width="150" onClick={handleClick} />
        </animated.div>
      )}
    </>
  );
};

export default SoundImage;
