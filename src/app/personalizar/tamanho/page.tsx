"use client";
import { useState, useRef } from "react";
import {
  Button,
  Flex,
  Text,
  Step,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  Stepper,
  useSteps,
  Box,
  Input,
  Grid,
  GridItem,
  RadioGroup,
  Radio,
} from "@chakra-ui/react";
import { NavBar } from "@/components/navbar";
import { useRouter } from "next/navigation";

const steps = [{}, {}, {}, {}];

export default function Tamanho() {
  const { activeStep } = useSteps({
    index: 1,
    count: steps.length,
  });
  const router = useRouter()

  const [customSize, setCustomSize] = useState(""); // Estado para o valor do input customizado
  const [selectedSize, setSelectedSize] = useState(""); // Estado para o tamanho selecionado
  const customSizeRef = useRef(null); // Referência ao campo de input personalizado

  // Atualiza o valor do input e seleciona o radio correspondente ao valor customizado
  const handleCustomSizeChange = (e) => {
    const value = e.target.value;
    setCustomSize(value);
    setSelectedSize(`${value}cm`); // Atualiza o RadioGroup com o valor do input
  };

  // Função para lidar com a seleção do tamanho
  const handleSizeChange = (value) => {
    setSelectedSize(value);

    // Se o valor for "custom", foca no input de tamanho customizado
    if (value === "custom") {
      customSizeRef.current.focus();
    }
  };

  const handleNext = () => {
    router.push("/personalizar/materiais");
  };

  return (
    <main>
      <Flex align={"center"} direction={"column"} marginTop={10}>
        <NavBar />

        {/* Flex container principal */}
        <Flex gap={5} direction={"column"} align={"center"} textAlign={"center"} p={5}>
          {/* Texto inicial */}
          <Text fontSize={14}>
            Legal! Vamos começar a personalizar a sua pelúcia. Siga os passos abaixo para enviar a proposta.
          </Text>

          {/* Stepper */}
          <Stepper colorScheme={"pink"} index={activeStep} w="80%">
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

          {/* Texto descritivo */}
          <Text>
            Escolha a altura da pelúcia. O tamanho final, com o preenchimento, será proporcional à referência enviada
          </Text>

          {/* Grupo de opções de tamanho */}
          <RadioGroup onChange={handleSizeChange} value={selectedSize}>
            <Grid templateColumns="repeat(3, 1fr)" gap={2}>
              <GridItem>
                <Box border="1px" borderColor="black" p={3} borderRadius="md">
                  <Radio colorScheme="pink" value="PP - 15cm">
                    PP - 15cm
                  </Radio>
                </Box>
              </GridItem>
              <GridItem>
                <Box border="1px" borderColor="black" p={3} borderRadius="md">
                  <Radio colorScheme="pink" value="P - 20cm">
                    P - 20cm
                  </Radio>
                </Box>
              </GridItem>
              <GridItem>
                <Box border="1px" borderColor="black" p={3} borderRadius="md">
                  <Radio colorScheme="pink" value="M - 30cm">
                    M - 30cm
                  </Radio>
                </Box>
              </GridItem>
              <GridItem>
                <Box border="1px" borderColor="black" p={3} borderRadius="md">
                  <Radio colorScheme="pink" value="G - 45cm">
                    G - 45cm
                  </Radio>
                </Box>
              </GridItem>
              <GridItem>
                <Box border="1px" borderColor="black" p={3} borderRadius="md">
                  <Radio colorScheme="pink" value="GG - 50cm">
                    GG - 50cm
                  </Radio>
                </Box>
              </GridItem>
              <GridItem>
                <Box border="1px" borderColor="black" p={3} borderRadius="md">
                  <Radio colorScheme="pink" value="custom">
                    <Flex align="center">
                      <Input
                        ref={customSizeRef}
                        value={customSize}
                        onChange={handleCustomSizeChange} // Função que atualiza o valor
                        maxW={"80px"}
                        maxH={"25px"}
                        mr={2}
                      />
                      cm
                    </Flex>
                  </Radio>
                </Box>
              </GridItem>
            </Grid>
          </RadioGroup>

          {/* Botão de próximo */}
          <Button colorScheme="teal" size="sm" w="20%" mt={4} onClick={handleNext}>
            Próximo
          </Button>
        </Flex>
      </Flex>
    </main>
  );
}
