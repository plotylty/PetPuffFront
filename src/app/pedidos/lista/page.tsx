import { HiOutlineUser } from "react-icons/hi";

import { Button, Flex, Text, Image, Spacer, IconButton, Stack, Box, ButtonGroup, Wrap, WrapItem } from "@chakra-ui/react";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { NavBar } from "@/components/navbar";
import Link from "next/link";

export default function Pedidos() {

  return (
    <main>
        <Flex align={"center"} direction={"column"} mt={10}>
      <NavBar />

      <Stack spacing={10} direction='row' align='left'>
        <Stack spacing={2} direction='column' align='left'>
          <Button colorScheme='Gray' variant='link'>
            Orçamentos
          </Button>
          <Text fontSize='16px' color='tomato'>
            Pedidos
          </Text>
          <Button colorScheme='Gray' variant='link'>
            Meus dados
          </Button>
        </Stack>
        <Stack spacing={5} direction='column'>
          <Box>
            <Text fontSize='xl'>
              Dragonilda Fofinha  
            </Text>
            <Wrap spacing={10}>
              <WrapItem>
              <Image boxSize='100px' src='https://png.pngtree.com/png-vector/20240726/ourmid/pngtree-cartoon-colorful-baby-dragon-png-image_13237225.png' alt='Dragonilda Fofinha' />
              </WrapItem>
              <WrapItem>
                <Box w='100%' alignItems='center'>
                  Número do Pedido
                <br />
                  P-082917
                </Box>
              </WrapItem>
              <WrapItem>
                <Box w='100%' alignItems='center'>
                  Status
                <br />
                <Box bg='lightcyan'>
                  Pagamento pendente
                </Box>
                </Box>
              </WrapItem>
              <WrapItem>
                <Box w='100%' alignItems='center'>
                  Data do Pedido
                  <br />
                  01/10/2024
                </Box>
              </WrapItem>
              <WrapItem>
                <Box w='100%' alignItems='center'>
                  Data de Entrega
                <br />
                  -
                </Box>
              </WrapItem>
              <WrapItem>
                <Box w='100%' alignItems='center'>
                  Valor
                <br />
                  R$ 66,30
                </Box>
              </WrapItem>
              <WrapItem>
                <Button colorScheme='gray'>
                  ver detalhes 
                </Button>
              </WrapItem>
            </Wrap>
          </Box>
          <Box>
            <Text fontSize='xl'>
              Fofucha  
            </Text>
            <Wrap spacing={10}>
              <WrapItem>
              <Image boxSize='100px' src='https://png.pngtree.com/png-vector/20240726/ourmid/pngtree-cartoon-colorful-baby-dragon-png-image_13237225.png' alt='Dragonilda Fofinha' />
              </WrapItem>
              <WrapItem>
                <Box w='100%' alignItems='center'>
                  Número do Pedido
                <br />
                  P-082917
                </Box>
              </WrapItem>
              <WrapItem>
                <Box w='100%' alignItems='center'>
                  Status
                <br />
                <Box bg='lightcyan'>
                  Produzindo
                </Box>
                </Box>
              </WrapItem>
              <WrapItem>
                <Box w='100%' alignItems='center'>
                  Data do Pedido
                  <br />
                  25/09/2024
                </Box>
              </WrapItem>
              <WrapItem>
                <Box w='100%' alignItems='center'>
                  Data de Entrega
                <br />
                  -
                </Box>
              </WrapItem>
              <WrapItem>
                <Box w='100%' alignItems='center'>
                  Valor
                <br />
                  R$ 50,00
                </Box>
              </WrapItem>
              <WrapItem>
                <Button colorScheme='gray'>
                  ver detalhes 
                </Button>
              </WrapItem>
            </Wrap>
          </Box>
          <Box>
            <Text fontSize='xl'>
              Fofucho
            </Text>
            <Wrap spacing={10}>
              <WrapItem>
              <Image boxSize='100px' src='https://png.pngtree.com/png-vector/20240726/ourmid/pngtree-cartoon-colorful-baby-dragon-png-image_13237225.png' alt='Dragonilda Fofinha' />
              </WrapItem>
              <WrapItem>
                <Box w='100%' alignItems='center'>
                  Número do Pedido
                <br />
                  P-082917
                </Box>
              </WrapItem>
              <WrapItem>
                <Box w='100%' alignItems='center'>
                  Status
                <br />
                <Box bg='lightcyan'>
                  Postado
                </Box>
                </Box>
              </WrapItem>
              <WrapItem>
                <Box w='100%' alignItems='center'>
                  Data do Pedido
                  <br />
                  25/09/2024
                </Box>
              </WrapItem>
              <WrapItem>
                <Box w='100%' alignItems='center'>
                  Data de Entrega
                <br />
                  -
                </Box>
              </WrapItem>
              <WrapItem>
                <Box w='100%' alignItems='center'>
                  Valor
                <br />
                  R$ 55,30
                </Box>
              </WrapItem>
              <WrapItem>
                <Button colorScheme='gray'>
                  ver detalhes 
                </Button>
              </WrapItem>
            </Wrap>
          </Box>
          <Box>
            <Text fontSize='xl'>
              Fofucho
            </Text>
            <Wrap spacing={10}>
              <WrapItem>
              <Image boxSize='100px' src='https://png.pngtree.com/png-vector/20240726/ourmid/pngtree-cartoon-colorful-baby-dragon-png-image_13237225.png' alt='Dragonilda Fofinha' />
              </WrapItem>
              <WrapItem>
                <Box w='100%' alignItems='center'>
                  Número do Pedido
                <br />
                  P-082917
                </Box>
              </WrapItem>
              <WrapItem>
                <Box w='100%' alignItems='center'>
                  Status
                <br />
                <Box bg='lightcyan'>
                  A caminho
                </Box>
                </Box>
              </WrapItem>
              <WrapItem>
                <Box w='100%' alignItems='center'>
                  Data do Pedido
                  <br />
                  05/05/2024
                </Box>
              </WrapItem>
              <WrapItem>
                <Box w='100%' alignItems='center'>
                  Data de Entrega
                <br />
                  -
                </Box>
              </WrapItem>
              <WrapItem>
                <Box w='100%' alignItems='center'>
                  Valor
                <br />
                  R$ 110,00
                </Box>
              </WrapItem>
              <WrapItem>
                <Button colorScheme='gray'>
                  ver detalhes 
                </Button>
              </WrapItem>
            </Wrap>
          </Box>
          <Box>
            <Text fontSize='xl'>
              Fofucho  
            </Text>
            <Wrap spacing={10}>
              <WrapItem>
              <Image boxSize='100px' src='https://png.pngtree.com/png-vector/20240726/ourmid/pngtree-cartoon-colorful-baby-dragon-png-image_13237225.png' alt='Dragonilda Fofinha' />
              </WrapItem>
              <WrapItem>
                <Box w='100%' alignItems='center'>
                  Número do Pedido
                <br />
                  P-082917
                </Box>
              </WrapItem>
              <WrapItem>
                <Box w='100%' alignItems='center'>
                  Status
                <br />
                <Box bg='lightpink'>
                  Entregue
                </Box>
                </Box>
              </WrapItem>
              <WrapItem>
                <Box w='100%' alignItems='center'>
                  Data do Pedido
                  <br />
                  05/02/2024
                </Box>
              </WrapItem>
              <WrapItem>
                <Box w='100%' alignItems='center'>
                  Data de Entrega
                <br />
                  20/02/2024
                </Box>
              </WrapItem>
              <WrapItem>
                <Box w='100%' alignItems='center'>
                  Valor
                <br />
                  R$ 60,00
                </Box>
              </WrapItem>
              <WrapItem>
                <Button colorScheme='gray'>
                  ver detalhes 
                </Button>
              </WrapItem>
            </Wrap>
          </Box>
        </Stack>
      </Stack>
      </Flex>
    </main>
    
  );
}