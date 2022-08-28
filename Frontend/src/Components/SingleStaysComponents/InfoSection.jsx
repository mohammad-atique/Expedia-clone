import { Box, Link, Text } from "@chakra-ui/react";
import React from "react";
// import { Link } from "react-router-dom";
import StarRatings from "react-star-ratings";
import {
  MdPool,
  MdHotTub,
  MdLocalParking,
  MdOutlineRestaurantMenu,
  MdLocationPin,
} from "react-icons/md";
import { AiOutlineWifi } from "react-icons/ai";
import { BsSnow } from "react-icons/bs";
import Map from "../Map";
const InfoSection = ({singleProduct}) => {
  
  return (
    <Box display="flex" boxShadow={"rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px"} marginTop={"2rem"}>
      <Box
        style={{
          //   border: "1px solid red",
          width: "65%",
          height: "30rem",
          padding: "1rem",
          color: "#141d38",
        }}
      >
        <Text fontSize={"28px"} fontWeight={"bold"} color="#141d38">
          {singleProduct.title || "Pride Hotel"}
        </Text>
        <StarRatings
          rating={Number(singleProduct.rating || 4.2)}
          starDimension="15px"
          starSpacing="3px"
          starRatedColor="gray"
        />
        <Text as={"h1"} fontWeight={"bold"} margin={"0.5rem 0"} color="#141d38">
          {singleProduct?.rating || 4.2} /5 Wonderful
        </Text>
        <Text as={"small"}>
          Guests rated this property {singleProduct.rating ||4.2}/5 for cleanliness.
        </Text>
        <Text>
          <Link to="">
            <h3 className="text-sm font-semibold text-blue mt-1 hover:underline">
              see all {singleProduct.reviews || 482} reviews {">"}
            </h3>
          </Link>
        </Text>
        <Text
          as={"h1"}
          fontWeight={"bold"}
          margin={"1rem 2rem 0 0"}
          color="#141d38"
        >
          Popular amenities
        </Text>
        <Box display={"flex"} color="#141d38">
          <Box  width="50%" color="#141d38">
            <Text
              fontWeight={"500"}
              display={"flex"}
              alignItems="center"
              color="#141d38"
              margin={"1rem 0"}
            >
              <MdPool color="#141d38" />
              <Text marginLeft={"1rem"} color="#141d38">
                Pool
              </Text>
            </Text>
            <Text fontWeight={"500"} display={"flex"} alignItems="center" margin={"1rem 0"}>
              <AiOutlineWifi />
              <Text marginLeft={"1rem"} color="#141d38">
                Free Wifi
              </Text>
            </Text>
            <Text fontWeight={"500"} display={"flex"} alignItems="center" margin={"1rem 0"}>
              <MdLocalParking />
              <Text marginLeft={"1rem"}></Text>
              Parking Included
            </Text>
          </Box>
          <Box  width="50%">
            <Text fontWeight={"500"} display={"flex"} alignItems="center" margin={"1rem 0"}>
              <BsSnow />
              <Text marginLeft={"1rem"}></Text>
              Air Conditioning
            </Text>
            <Text fontWeight={"500"} display={"flex"} alignItems="center" margin={"1rem 0"}>
              <MdHotTub />
              <Text marginLeft={"1rem"}></Text>
              Spa
            </Text>
            <Text fontWeight={"500"} display={"flex"} alignItems="center" margin={"1rem 0"}>
              <MdOutlineRestaurantMenu />
              <Text marginLeft={"1rem"}></Text>
              Restraunt
            </Text>
          </Box>
        </Box>
        <Text>
          <Link to="">
            <h3 className="text-sm font-semibold text-blue mt-1 hover:underline">
              see all {">"}
            </h3>
          </Link>
        </Text>
      </Box>
      <Box width="35%" >
        <Box  borderRadius="10px">
          <Map city={singleProduct.map || "5 University Road, Shivaji Nagar, Pune, Maharashtra, 411 005"} width="350px" height="250px" />
        </Box>
        <Box  fontSize="small">
          {singleProduct.map ||"5 University Road, Shivaji Nagar, Pune, Maharashtra, 411 005"}
        </Box>
        <Box>
          <Text
            as={"h1"}
            fontWeight={"bold"}
            margin={"1rem 0 0.5rem 0"}
            color="#141d38"
          >
            Explore Area
          </Text>
          <Box  width="100%">
            <Text fontSize={"small"} display={"flex"} padding={"0.5rem 0"}  alignItems="center">
              <MdLocationPin />
              <Text marginLeft={"1rem"}>Oberoi Mall</Text>
            </Text>
            <Text padding={"0.5rem 0"} fontSize={"small"} display={"flex"} alignItems="center">
              <MdLocationPin />
              <Text  fontSize={"small"} marginLeft={"1rem"}>
                St. Josephs Convent
              </Text>
            </Text>
            <Text padding={"0.5rem 0"} fontSize={"small"} display={"flex"} alignItems="center">
              <MdLocationPin />
              <Text marginLeft={"1rem"}>
                Bombay Convention & Exhibition Centre
              </Text>
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default InfoSection;
