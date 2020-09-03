import React, { useState } from "react";
import BallRender from "./ball-render";
import styled from "styled-components";

const BallRenderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 0 auto;
  max-width: 1024px;
`;

const InputGroup = styled.div`
  display: inline-grid;
  margin: 0 10px;
`;

const InputNumber = styled.input`
  font-size: 3em;
`;

function Amounts() {
  const [sizes, setSizes] = useState({ c: 0, d: 0, u: 0 });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    const trimmed = value.length > 1 ? value.substring(1) : value;
    setSizes((prevState) => {
      return {
        ...prevState,
        [name]: trimmed,
      };
    });
  }

  return (
    <div>
      <div className="input-container">
        <InputGroup>
          <label htmlFor="c">CIENES</label>
          <InputNumber
            type="number"
            pattern="\d*"
            max="9"
            min="0"
            value={sizes.c}
            onChange={handleChange}
            name="c"
          />
        </InputGroup>

        <InputGroup>
          <label htmlFor="d">DIECES</label>
          <InputNumber
            type="number"
            pattern="\d*"
            max="9"
            min="0"
            value={sizes.d}
            onChange={handleChange}
            name="d"
          />
        </InputGroup>

        <InputGroup>
          <label htmlFor="u">SUELTOS</label>
          <InputNumber
            type="number"
            pattern="\d*"
            max="9"
            min="0"
            value={sizes.u}
            onChange={handleChange}
            name="u"
          />
        </InputGroup>
      </div>
      <BallRenderWrapper>
        <BallRender
          color="red"
          size={sizes.c}
          multiplier={100}
          emoji={0x1f49d}
        />
        <BallRender
          color="green"
          size={sizes.d}
          multiplier={10}
          emoji={0x1f49a}
          zoom={2}
        />
        <BallRender
          color="blue"
          size={sizes.u}
          multiplier={1}
          emoji={0x1f49c}
          zoom={3}
        />
      </BallRenderWrapper>
    </div>
  );
}

export default Amounts;
