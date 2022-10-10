import { Box, Text } from "@chakra-ui/react";
import React from "react";
import Footer from "../Components/Footer";
import HomeSearchBar from "../Components/HomeSearchBar";
import Navbar from "../Components/Navbar";
import SbarcodeComponent from "../Components/SbarcodeComponent";
import SflexibleHd from "../Components/SflexibleHd";
import SsimpleImageBox2 from "../Components/SsimpleImageBox2";

export default function Spackages() {
  return (
    <Box>
      <Navbar />
      <Box w="84%" m="auto" mt="14" mb="6">
        <HomeSearchBar />
      </Box>
      <Box h={"80px"}></Box>
      <SflexibleHd image={"https://i.postimg.cc/vmBRRw3M/H-Number-1.png"} />
      <Text mt={"15px"} mb={"90px"} fontWeight={500} ml={"8%"} fontSize={"4xl"}>
        Top Holiday Destinations
      </Text>
      <Text mb={"10px"} fontWeight={500} ml={"8%"} fontSize={"4xl"}>
        Explore, discover and save
      </Text>
      <SsimpleImageBox2 />
      <SbarcodeComponent/>
      <Footer />
    </Box>
  );
}
