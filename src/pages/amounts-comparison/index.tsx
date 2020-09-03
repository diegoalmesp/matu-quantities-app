import React, { useState } from "react";
import Amounts from "../../components/amounts";
import styled from "styled-components";

const AmountsComparisonPageStyled = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-evenly;
`;

const PlusButtonStyled = styled.div`
  position: absolute;
  right: 20px;
  cursor: pointer;

  & h1 {
    font-size: 5em;
    margin: 0;
    background-color: hotpink;
    /* width: 100px;
    height: 100px; */
  }
`;

function AmountsComparisonPage() {
  const [appsQ, setAppsQ] = useState(2);

  function handleAddApp() {
    if (appsQ === 4) setAppsQ(1);
    else setAppsQ(appsQ + 1);
  }

  const renderApps = [...Array(appsQ)];
  return (
    <>
      <PlusButtonStyled onClick={handleAddApp}>
        <h1>+</h1>
      </PlusButtonStyled>
      <span>YEGO SOFT</span>
      <h1>HOLA MATU !!!</h1>
      <AmountsComparisonPageStyled>
        {renderApps.map((app) => {
          return <Amounts />;
        })}
      </AmountsComparisonPageStyled>
    </>
  );
}

export default AmountsComparisonPage;
