import React from "react";
import styled from "styled-components";

const RenderContainer = styled.div`
  display: flex;
  max-width: 50%;
  flex-wrap: wrap;
  margin: 0 2%;
  color: ${(props) => props.color || "red"};
  height: 100%;
  z-index: 1;
`;

const Hearts = styled.span`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
  margin: 5px;
  background-color: hotpink;
  max-width: 100px;
`;

interface Props {
  color: string;
  size: number;
  multiplier: number;
  emoji?: number;
  zoom?: number;
}

interface Color {
  color?: string;
  zoom?: number;
}

const Ball = styled.span<Color>`
  color: ${(props) => props.color || "red"};
  /* width: 25px;
  height: 25px; */
  width: 10px;
  height: 10px;
  zoom: ${(props) => props.zoom || 1};
  padding-bottom: 3px;
`;

const BallRender: React.FC<Props> = ({
  color,
  size,
  multiplier,
  emoji,
  zoom,
}) => {
  const multiArray = new Array(size * 1)
    .fill([], 0)
    .map(() => new Array(multiplier).fill("*", 0));

  const character = emoji ? String.fromCodePoint(emoji) : "*";

  return (
    <RenderContainer>
      {multiArray.length < 1 && <span>0</span>}
      {multiArray.map((hearts, index) => {
        return (
          <Hearts key={"hearts" + index}>
            {hearts.map((heart, index) => (
              <Ball key={index + heart} color={color} zoom={zoom}>
                {character}
              </Ball>
            ))}
          </Hearts>
        );
      })}
    </RenderContainer>
  );
};

export default BallRender;
