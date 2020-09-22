import React from "react";
import styled, { css } from "styled-components";
import { Theme } from "../context";

interface ToggleProps {
  toggle?: boolean;
  toggleValue?: Theme;
  onClick: () => void;
}

const ToggleContainer = styled.div`
  display: flex;
  width: 1.2rem;
  background: #59baff;
  padding: 0.2rem;
  border-radius: 1000px;
  ${(props: ToggleProps) =>
    props.toggle &&
    css`
      background: grey;
      color: white;
      justify-content: flex-end;
    `};
  }
`;

const ToggleInner = styled.div`
  width: 0.2rem;
  height: 0.2rem;
  background: white;
  padding: 0.2rem;
  border-radius: 1rem;
`;

export const Toggle: React.FC<ToggleProps> = ({ onClick, toggleValue }) => {
  return (
    <>
      <ToggleContainer
        onClick={() => {
          onClick();
        }}
        toggle={toggleValue === "dark"}
      >
        <ToggleInner />
      </ToggleContainer>
    </>
  );
};
