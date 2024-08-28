"use client";
import { useState } from "react";
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
  Grid,
  GridItem,
  RadioGroup,
  Radio,
  Spacer,
  Textarea,
} from "@chakra-ui/react";
import { NavBar } from "@/components/navbar";
import { useRouter } from "next/navigation";

const steps = [{}, {}, {}, {}];

export default function Detalhes() {
  const { activeStep } = useSteps({
    index: 3,
    count: steps.length,
  });
  const router = useRouter()

  const [selectedKit, setSelectedKit] = useState(""); // Estado para o kit selecionado

  // Função para lidar com a seleção do kit
  const handleKitChange = (value) => {
    setSelectedKit(value);
  };
  const handleNext = () => {
    router.push("/personalizar/confirmacao");
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
          <Text>Você quer dizer mais alguma coisa sobre a sua pelúcia? Escreva qualquer detalhe e observação</Text>
          <Text>que achar que precisamos saber!</Text>
          {/* Grupo de opções de kits */}
          <Textarea resize={"none"} fontSize={"14"} placeholder="Descreva qualquer detalhe que não possa faltar ou que não foi passado anteriormente. Exemplo: detalhes, especificação de cores (como o código ou nome da cor específica), etc."></Textarea>
          {/* Botão de próximo */}
          <Button colorScheme="teal" size="sm" w="20%" mt={4} onClick={handleNext}>
            Próximo
          </Button>
        </Flex>
      </Flex>
    </main>
  );
}
