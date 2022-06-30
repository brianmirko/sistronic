import React from "react";
import {
  Typography,
  Container,
  Box,
  Paper,
  BottomNavigation,
} from "@mui/material";
import ImageCollage from "../../components/exampleMUI/ImageCollage";
import CustomizedAccordions from "../../components/exampleMUI/Accordion";
import BasicModal from "../../components/exampleMUI/Modal";

const Tour = () => {
  return (
    <Container sx={{ width: 900, marginY: 10 }}>
      <Typography variant="h3" component="h1" marginTop={3}>
        Explore the World in Vegas
      </Typography>
      <Box marginTop={3} sx={{ display: "flex" }}>
        <img
          src="https://placeimg.com/700/500/nature"
          alt="nature"
          height={325}
        />
        <ImageCollage />
      </Box>
      <Box>
        <Typography variant="h6" component="h4" marginTop={3}>
          About this ticket
        </Typography>
        <Typography variant="paragraph" component="p" marginTop={3}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod,
          similique quas! Molestiae deserunt qui ducimus dolor ipsam,
          consequuntur quo totam iste a, eius rem natus? Nulla odio unde labore
          incidunt. Eos nostrum officia possimus dolores suscipit in dolor,
          labore vel, culpa cupiditate doloremque rerum minima deserunt
          excepturi itaque repellendus facere laboriosam aliquid iure commodi
          odit? Pariatur atque distinctio doloremque itaque.
        </Typography>
      </Box>
      <Box marginBottom={10}>
        <Typography variant="h6" component="h4" marginTop={3} marginBottom={2}>
          Frequently Asked Questions
        </Typography>
        <CustomizedAccordions />
      </Box>
      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation>
          <BasicModal />
        </BottomNavigation>
      </Paper>
    </Container>
  );
};

export default Tour;
