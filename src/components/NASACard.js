import React from "react";
import styled from "styled-components";

const CardOuter = styled.div`
  transition: transform 0.2s ease-in;
  background: dodgerblue;
  color: black;
  width: 50%;
  max-height: 75%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-left: 25%;
  margin-top: 20px;
  margin-bottom: 50px;
  box-shadow: 0px 1px 6px -2px grey;
  overflow: hidden;
`;

const NASAImage = styled.img`
  width: 300px;
  height: 300px;
  object-fit: scale;
  border: 3px solid black;
`;

const NASACard = props => {
  return (
    <CardOuter div className="photo-list" key={props.id}>
      <h2>{props.title}</h2>
      <p>{props.date}</p>
      <NASAImage img src={props.picture} alt="NASA"/>
      <p>{props.description}</p>
      <button href="https://github.com/ktjhan">Github Repo</button>
    </CardOuter>
  )
};

export default NASACard;
