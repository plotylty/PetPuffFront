"use client";
import { useState } from "react";
import {
  Box,
  Flex,
  Text,
  Stepper,
  Step,
  StepIndicator,
  StepStatus,
  StepSeparator,
  Button,
  Checkbox,
  Grid,
  GridItem,
  Stack,
  useSteps,
  StepNumber,
} from "@chakra-ui/react";
import { NavBar } from "@/components/navbar";
import { useRouter } from "next/navigation";

const steps = [{}, {}, {}, {}];

export default function ResumoPage() {
  const [isChecked, setIsChecked] = useState(false);
  const { activeStep } = useSteps({
    index: 4,
    count: steps.length,
  });
  const router = useRouter();

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleNext = () => {
    router.push("/personalizar/sucesso");
  };

  return (
    <main>
      <Flex align={"center"} direction={"column"} marginTop={10}>
        <NavBar />

        {/* Texto e Stepper */}
        <Flex direction={"column"} align={"center"} textAlign={"center"} p={5} w="100%" maxW="1200px">
          {/* Stepper */}
          <Box w="100%">
            <Stepper colorScheme={"pink"} index={activeStep} w="60%" mx="auto">
              {steps.map((step, index) => (
                <Step key={index}>
                  <StepIndicator textColor={"#f0598e"}>
                    <StepStatus
                      complete={<StepNumber />}
                      incomplete={<StepNumber />}
                      active={<StepNumber />}
                    />
                  </StepIndicator>
                  <StepSeparator />
                </Step>
              ))}
            </Stepper>
          </Box>

          {/* Texto de instrução */}
          <Text mt={4} fontSize="lg" textAlign="center">
            Legal! Já temos o que precisamos saber sobre a pelúcia. Está tudo certo?
          </Text>

          {/* Container principal */}
          <Flex w="100%" justifyContent="space-between" mt={6}>
            {/* Coluna esquerda */}
            <Box w="65%">
              {/* Título */}
              <Text fontWeight="bold" fontSize="2xl" mb={4} textAlign="left">
                Dragonilda Fofinha
              </Text>

              {/* Imagem e detalhes */}
              <Grid templateColumns="100px 1fr" gap={5}>
                {/* Quadrado como exemplo de imagem */}
                <GridItem>
                  <Flex direction="column" alignItems="flex-start">
                    <Box
                      bg="gray.300"
                      w="108px"
                      h="108px"
                      borderRadius="md"
                      mb={2}
                    />
                    <Flex gap={2}>
                      <Box bg="gray.300" w="50px" h="50px" borderRadius="md" />
                      <Box bg="gray.300" w="50px" h="50px" borderRadius="md" />
                    </Flex>
                  </Flex>
                </GridItem>

                {/* Detalhes do kit */}
                <GridItem>
                  <Stack spacing={3} textAlign="left">
                    <Text fontSize="md" fontWeight="bold">
                      Tamanho: P (20cm altura)
                    </Text>
                    <Text fontSize="md" fontWeight="bold">
                      Kit de materiais: Kit 1
                    </Text>
                    <Text fontSize="sm">
                      - Pele em fio de lã
                      <br />
                      - Preenchimento de espuma sustentável
                      <br />
                      - Acabamentos foscos
                    </Text>
                    <Text fontSize="md" fontWeight="bold">
                      Detalhes
                    </Text>
                    <Text fontSize="sm" textAlign="justify">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua.
                    </Text>
                  </Stack>
                </GridItem>
              </Grid>
            </Box>

            {/* Coluna direita - Card de orçamento */}
            <Box w="30%" border="1px" borderColor="gray.200" p={5} borderRadius="md">
              {/* Informações de preço */}
              <Flex direction="column" alignItems="flex-start">
                <Text fontWeight="bold" fontSize="md">
                  Valor mínimo
                </Text>
                <Flex align="center" mt={2}>
                  <Text fontSize="xl" fontWeight="bold" color="gray.700">
                    R$
                  </Text>
                  <Text fontSize="2xl" fontWeight="bold" ml={1}>
                    21,00
                  </Text>
                </Flex>

                {/* Checkbox de confirmação */}
                <Flex direction="column" mt={4} gap={2}>
                  <Checkbox
                    isChecked={isChecked}
                    onChange={handleCheckboxChange}
                    colorScheme="pink"
                  >
                    <Text fontSize="xs">
                      Ao marcar essa checkbox, eu confirmo que entendo e concordo que o valor apresentado
                      é o valor mínimo para a pelúcia solicitada e o valor final será dado em orçamento.
                      Por isso, não há garantias de que esse preço será mantido.
                    </Text>
                  </Checkbox>
                </Flex>
              </Flex>

              {/* Botão de enviar orçamento */}
              <Button
                colorScheme="pink"
                width="100%"
                mt={4}
                isDisabled={!isChecked}
                onClick={handleNext}
              >
                Enviar orçamento
              </Button>
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </main>
  );
}
