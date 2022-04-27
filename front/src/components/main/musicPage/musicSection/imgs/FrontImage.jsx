import React from "react";
import styled from "styled-components";
import "./style.css";

const StyledFront = styled.div`
  box-sizing: border-box;
  height: 250px;
  background: #f8f6ea;
  box-shadow: 10px 10px 5px #5f4d63;
  position: absolute;
  border-radius: 10px;
  backface-visibility: hidden;
  transform-style: preserve-3d;
  transition: transform ease 500ms;

  z-index: 2;
  transform: rotateY(0deg);
`;

const StyledImg = styled.img`
  width: 100%;
  border-radius: 10px;
`;

const FrontImage = ({ src, alt }) => {
  return (
    <StyledFront className="front">
      <div className="image-container">
        <StyledImg src={src} alt={alt}></StyledImg>
      </div>
    </StyledFront>
  );
};

export default FrontImage;
