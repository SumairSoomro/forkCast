import { Heading, Container, Box, Text, Image} from "@chakra-ui/react";

import SumairPic from "../../assets/Sumair.png";
import JamesPic from '../../assets/James.png';
import LoickPic from '../../assets/Loick.png';
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <>
      <Container>
        <Heading ml="29%" mt="5%">
            Meet the Team
        </Heading>
        <Link to="/">
            <Text 
            ml="41%" 
            mt="2%" 
            textDecoration="underline" 
            cursor="pointer"
            _hover={{ textDecoration: "underline", color: "blue.500" }} 
            >
            Back to Main
            </Text>
        </Link>
      </Container>

      <Container display="flex" justifyContent="center" flexWrap="wrap" gap="30px" mt="5%">
        <Box
            w={{ base: "90%", md: "600px" }} 
            minH="250px"
            p="7"
            borderRadius="15px"
            bg="teal.300"
            color="white"
            boxShadow="lg"
            display="flex"
            alignItems="center"
            position="relative"
            gap="20px"
        >
            <Box flex="1">
                <Text fontSize={{ base: "xl", md: "2xl" }} fontWeight="bold" mb="4">
                    Name: Sumair Soomro
                </Text>
                <Text fontSize={{ base: "md", md: "lg" }} mb="4">
                    Email: sumairsoomro@umass.edu
                </Text>
                <Text fontSize={{ base: "md", md: "lg" }}>
                    Interests: Coding, JiuJitsu
                </Text>
            </Box>
            <Image
            src={SumairPic}
            borderRadius="full"
            boxSize={{ base: "80px", md: "120px" }} 
            objectFit="cover"
            objectPosition= "80% 80%"
            border="4px solid white"
            marginRight="20px"
            />
        </Box>
        
        
        

        <Box
            w={{ base: "90%", md: "600px" }} 
            minH="250px"
            p="7"
            borderRadius="15px"
            bg="blue.400"
            color="white"
            boxShadow="lg"
            display="flex"
            alignItems="center"
            position="relative"
            gap="20px"
        >
        <Box flex="1">
            <Text fontSize={{ base: "xl", md: "2xl" }} fontWeight="bold" mb="4">
            Name: James McGillicuddy
            </Text>
            <Text fontSize={{ base: "md", md: "lg" }} mb="4">
            Email: jmcgillicudd@umass.edu
            </Text>
            <Text fontSize={{ base: "md", md: "lg" }}>
            Interests: Soccer, Music
            </Text>
        </Box>
        <Image
            src={JamesPic}
            borderRadius="full"
            boxSize={{ base: "80px", md: "120px" }} 
            objectFit="cover"
            objectPosition="80% 80%" 
            border="4px solid white"
            marginRight="20px"
        />
        </Box>


        <Box
            w={{ base: "90%", md: "600px" }}
            minH="250px"
            p="7"
            borderRadius="15px"
            bg="purple.500"
            color="white"
            boxShadow="lg"
            display="flex"
            alignItems="center"
            position="relative"
            gap="20px"
        >
        <Box flex="1">
            <Text fontSize={{ base: "xl", md: "2xl" }} fontWeight="bold" mb="4">
            Name: Ahmad Shahrour
            </Text>
            <Text fontSize={{ base: "md", md: "lg" }} mb="4">
            Email: ashahrour@umass.edu
            </Text>
            <Text fontSize={{ base: "md", md: "lg" }}>
            Interests: Soccer, Golf
            </Text>
        </Box>
        <Image
            src={SumairPic}
            borderRadius="full"
            boxSize={{ base: "80px", md: "120px" }} 
            objectFit="cover"
            objectPosition="80% 80%"
            border="4px solid white"
            marginRight="20px"
        />
        </Box>


        <Box
            w={{ base: "90%", md: "600px" }}
            minH="250px"
            p="7"
            borderRadius="15px"
            bg="orange.400"
            color="white"
            boxShadow="lg"
            display="flex"
            alignItems="center"
            position="relative"
            gap="20px"
        >
        <Box flex="1">
            <Text fontSize={{ base: "xl", md: "2xl" }} fontWeight="bold" mb="4">
            Name: Loick Marion
            </Text>
            <Text fontSize={{ base: "md", md: "lg" }} mb="4">
            Email: loick.marion@gmail.com
            </Text>
            <Text fontSize={{ base: "md", md: "lg" }} mb="4">
            Interests: Piano, Chess, Videogames
            </Text>
        </Box>
        <Image
            src={LoickPic}
            borderRadius="full"
            boxSize={{ base: "80px", md: "120px" }} 
            objectFit="cover"
            objectPosition="80% 80%"
            border="4px solid white"
            marginRight="20px"
        />
        </Box>

      </Container>
    </>
  );
};

export default Contact;