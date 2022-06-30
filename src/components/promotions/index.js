import React, { useEffect, useRef, useState } from "react";
import { Box, Slide } from "@mui/material";
import { PromotionsContainer, MessageText } from "../../styles/promotions";

const messages = ["Herminia Condarco Rasguido", "Min y Eren", "Hola mundo"];

export default function Promotions() {
  const containerRef = useRef();
  const [messageIndex, setMessageIndex] = useState(0);
  const [show, setShow] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, 3000);

    const intervalID = setInterval(() => {
      setMessageIndex((i) => (i + 1) % messages.length);

      setShow(true);

      setTimeout(() => {
        setShow(false);
      }, 3000);
    }, 4000);

    return () => {
      clearInterval(intervalID);
    };
  }, []);

  return (
    <PromotionsContainer ref={containerRef}>
      <Slide
        container={containerRef.current}
        direction={show ? "left" : "right"}
        in={show}
        timeout={{
          enter: 1000,
          exit: 100,
        }}
      >
        <Box display="flex" justifyContent="center" alignItems="center">
          <MessageText>{messages[messageIndex]}</MessageText>
        </Box>
      </Slide>
    </PromotionsContainer>
  );
}
