"use client";
import { Box, Flex, Text, Button, Link } from "@chakra-ui/react";
import { NavBar } from "@/components/navbar";

export default function SuccessPage() {
  return (
    <main>
      <Flex align="center" direction="column" justifyContent="space-between" mt={10}>
        {/* NavBar */}
        <NavBar />

        {/* Conteúdo principal */}
        <Flex direction="column" align="center" mt={10} textAlign="center">
          <Text fontSize="4xl" fontWeight="bold" color="green.500">
            Sucesso!
          </Text>
          <Text mt={4} fontSize="md">
            Sua proposta de personalização foi enviada para o nosso setor comercial.
          </Text>
          <Text mt={4} fontSize="sm" textAlign="left">
            ✓ Retornaremos em até cinco dias úteis com um orçamento feito sob medida para a sua ideia.
            <br />
            ✓ Após receber o orçamento, você terá 15 dias corridos para realizar o pagamento. A pelúcia só será produzida após essa etapa.
            <br />
            ✓ Durante o período de validade do orçamento, você poderá conversar com o funcionário para tirar dúvidas e pedir alterações.
          </Text>
          <Text mt={4} fontSize="md">
            Você pode acompanhar a sua solicitação através da página <Link href="#" color="blue.500">meus orçamentos</Link>.
            Esse é o número da sua solicitação:
          </Text>
          <Text mt={4} fontSize="3xl" fontWeight="bold">
            O-209821
          </Text>

          {/* Botão de Ver Orçamentos */}
          <Button colorScheme="pink" mt={6}>
            Ver orçamentos
          </Button>
        </Flex>
      </Flex>
    </main>
  );
}
