import { HiOutlineUser } from "react-icons/hi";

import { Button, Flex, Text, Image, Spacer, IconButton, Stack, Box, ButtonGroup, Wrap, WrapItem, Center } from "@chakra-ui/react";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { NavBar } from "@/components/navbar";
import Link from "next/link";

export default function FazerPedido1() {
  const cpf = ''
  const nome = ''
  const sobrenome = ''
  const email = ''
  const cel = ''
  const cep = ''
  const cidade = ''
  const estado = ''
  const logradouro = ''
  const num = ''
  const bairro = ''
  const com = ''
  const msg = ''

  return (
    <main>
        <Flex align={"center"} direction={"column"} mt={10}>
      <NavBar />

      <Stack spacing={10} direction='row' align='left'>
        <Stack spacing={10} direction='column' align='left'>
          <Text fontSize='2xl'>
            Mensagem (Opcional)
          </Text>
          <input 
              type='text'
              className='input'
              name='mesagem'
              value={msg}
              placeholder='Mesagem'>
            </input>
          <Text fontSize='2xl'>
            Dados Fiscais
          </Text>
            <Box>
            <input 
              type='text'
              className='input'
              name='cpf'
              value={cpf}
              placeholder='CPF'>
            </input>
            <br />
            <br />
            <input 
              type='text'
              className='input'
              name='nome'
              value={nome}
              placeholder='Nome'>
            </input>
            <input 
              type='text'
              className='input'
              name='sobrenome'
              value={sobrenome}
              placeholder='Sobrenome'>
            </input>
            <br />
            <br />
            <input 
              type='text'
              className='input'
              name='email'
              value={email}
              placeholder='E-mail'>
            </input>
            <input 
              type='text'
              className='input'
              name='cel'
              value={cel}
              placeholder='Celular'>
            </input>
          </Box>
          <Box>
            <input 
              type='text'
              className='input'
              name='cep'
              value={cep}
              placeholder='CEP'>
            </input>
            <input 
              type='text'
              className='input'
              name='cidade'
              value={cidade}
              placeholder='Cidade'>
            </input>
            <input 
              type='text'
              className='input'
              name='estado'
              value={estado}
              placeholder='Estado'>
            </input>
            <br />
            <br />
            <input 
              type='text'
              className='input'
              name='logradouro'
              value={logradouro}
              placeholder='Logradouro'>
            </input>
            <input 
              type='text'
              className='input'
              name='numero'
              value={num}
              placeholder='Número'>
            </input>
            <br />
            <br />
            <input 
              type='text'
              className='input'
              name='bairro'
              value={bairro}
              placeholder='bairro'>
            </input>
            <input 
              type='text'
              className='input'
              name='complemento'
              value={com}
              placeholder='Complemento'>
            </input>
          </Box>
          <Button colorScheme='blue'>
            Próximo
          </Button>
        </Stack>
        <Stack spacing={10} direction='column' align='center'>
          <Wrap spacing={1}>
            <WrapItem>
              <Image boxSize='75px' src='https://png.pngtree.com/png-vector/20240726/ourmid/pngtree-cartoon-colorful-baby-dragon-png-image_13237225.png' alt='Dragonilda Fofinha' />
            </WrapItem>
            <WrapItem>
              <Box fontSize='sm'>
                <Text fontSize='md'>
                  Dragonilda Fofinha
                </Text>
                Tamanho: P (20 cm de altura)
                <br />
                Kit de Materiais: Kit 1
              </Box>
            </WrapItem>
          </Wrap>
          <Text>
            Valor da pelúcia:       R$54,00
          </Text>
          <Text>
            Frete:                   -
          </Text>
          <Box bg='lightgray' p={5} alignItems='center'>
            Valor Total:             R$54,00
          </Box>
        </Stack>
      </Stack>
      </Flex>
    </main>
  );
}