import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";

export default function S_Flexible_H_D() {
  return (
    <Box>
      <Box
        display={"flex"}
        // border={"1px solid black"}
        h={"400px"}
        ml={"8%"}
        mr={"8%"}
        mb={'50px'}
      >
        <Box
          borderRadius={"10px"}
          h={"100%"}
          w={"62%"}
          border={"1px solid black"}
          boxShadow='xl'
          cursor={'pointer'}
        >
          <Image
            h={"70%"}
            w={"100%"}
            borderTopLeftRadius={"10px"}
            borderTopRightRadius={"10px"}
            src="https://cdn.pixabay.com/photo/2014/12/10/06/46/venetian-562759_960_720.jpg"
          />
          <Text ml={"15px"} mt={"20px"} fontSize={"25px"} fontWeight={500}>
            Flexible hotel deals
          </Text>
          <Text ml={"15px"}>
            Here's a great selection of hotels offering free cancellation if
            your plans change. Because flexibility matters
          </Text>
        </Box>
        <Box w={"35%"} ml={"3%"}>
          <Box
            borderRadius={"10px"}
            display={"flex"}
            border={"1px solid black"}
            h={"190px"}
            boxShadow='xl'
            cursor={'pointer'}
          >
            <Box w={"38%"} h={"100%"}>
              <Image
                borderBottomLeftRadius={"10px"}
                borderTopLeftRadius={"10px"}
                h={"100%"}
                w={"100%"}
                src="https://previews.123rf.com/images/jee1999/jee19991210/jee1999121000085/16038143-tropical-beach-with-coconut-palm-trees.jpg"
              />
            </Box>
            <Box w={"100%"}>
              <Text ml={"20px"} mt={"50px"} fontWeight={500} fontSize={"24px"}>
                Find your next getaway
              </Text>
              <Text ml={"20px"} mt={"10px"}>
                Last minute deals are available.
              </Text>
            </Box>
          </Box>
          <Box
            borderRadius={"10px"}
            border={"1px solid black"}
            mt={"20px"}
            h={"190px"}
            display={'flex'}
            boxShadow='xl'
            cursor={'pointer'}
          >
            <Box w={"38%"} h={"100%"}>
              <Image
                borderBottomLeftRadius={"10px"}
                borderTopLeftRadius={"10px"}
                h={"100%"}
                w={"100%"}
                src="https://i.pinimg.com/originals/68/78/c3/6878c3ba9215618fda59a44cd1f30bdc.jpg"
              />
            </Box>
            <Box w={"100%"}>
              <Text ml={"20px"} mt={"50px"} fontWeight={500} fontSize={"24px"}>
                Find your next getaway
              </Text>
              <Text ml={"20px"} mt={"10px"}>
                Last minute deals are available.
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
