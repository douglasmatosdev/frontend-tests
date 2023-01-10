import React, { useRef } from "react";
import { useDimensions } from "../hooks/useDimensions";
import { Container } from "./Card.styles";

export const Card = () => {
  const cardRef = useRef<HTMLDivElement>(null);

  useDimensions(cardRef);

  return <Container ref={cardRef} data-testid="card-container"></Container>;
};
