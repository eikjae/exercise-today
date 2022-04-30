import React from "react";
import styled from "styled-components";
import "./style.css";

const StyledBack = styled.div`
  box-sizing: border-box;
  width: 250px;
  height: 250px;
  background: #f8f6ea;
  box-shadow: 10px 10px 5px #5f4d63;
  position: absolute;
  border-radius: 10px;
  backface-visibility: hidden;
  transform-style: preserve-3d;
  transition: transform ease 500ms;

  background: #f8f6ea;
  transform: rotateY(-180deg);
  padding: 20px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  overflow: hidden;
  /* white-space: nowrap; */
  text-overflow: ellipsis;
`;
const BackImage = ({ music }) => {
  return (
    <StyledBack className="back">
      <h5>Title</h5>
      <p>{music?.title}</p>
      <h5>Artists</h5>
      <p>{music?.artists}</p>
      <h5>{music?.year}</h5>
    </StyledBack>
  );
};

export default BackImage;
