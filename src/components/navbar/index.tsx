import { Button, Flex, IconButton, Image, Spacer } from "@chakra-ui/react";
import { HiOutlineUser } from "react-icons/hi";
import { LiaShoppingBagSolid } from "react-icons/lia";



export const NavBar = () => {
return(
<Flex bgColor={"#ebdeb0"} w="80%" h="60px" borderRadius="50px" overflow={"hidden"} alignItems={"center"} gap={"70px"}>
        <Image w="45px" h="45px" marginLeft={4} src="https://cdn.discordapp.com/attachments/521141669605670913/1277628578829439097/logo.png?ex=66cddbd6&is=66cc8a56&hm=bb727b9b58f56f7f98585ef7a381f322d8a542d0913b4c69ed2177d5eb8ba2a1&"></Image>
        <Flex alignItems="center" overflow="hidden" gap={5} h="100%">
        <Button variant={"ghost"} textColor={"black"} h="150%" _hover={{ bg: '#faecbb' }} _active={{ bg: '#fff2c4' }}>home</Button>
        <Button variant={"ghost"} textColor={"black"} h="150%" _hover={{ bg: '#faecbb' }} _active={{ bg: '#fff2c4' }}>sobre nós</Button>
        
        </Flex>
        <Spacer/>
        <Flex  alignItems="center" overflow="hidden" h="100%">
        <IconButton
        variant={"ghost"} textColor={"gray"} fontSize={"22px"} h="150%" _hover={{ bg: '#faecbb' }} _active={{ bg: '#fff2c4' }}
        aria-label='User Page'
        icon={<HiOutlineUser />}
        />
        <IconButton paddingRight={10}
        variant={"ghost"} textColor={"gray"} fontSize={"22px"} h="150%" _hover={{ bg: '#faecbb' }} _active={{ bg: '#fff2c4' }}
        aria-label='Shopping Cart'
        icon={<LiaShoppingBagSolid  />}
        />
        <Spacer/>
        </Flex>
      </Flex>
);
};