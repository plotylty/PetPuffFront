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
} from "@chakra-ui/react";
import { NavBar } from "@/components/navbar";
import { useRouter } from "next/navigation";

const steps = [{}, {}, {}, {}];

export default function Tamanho() {
  const { activeStep } = useSteps({
    index: 2,
    count: steps.length,
  });
  const router = useRouter()

  const [selectedKit, setSelectedKit] = useState(""); // Estado para o kit selecionado

  // Função para lidar com a seleção do kit
  const handleKitChange = (value) => {
    setSelectedKit(value);
  };

  const handleNext = () => {
    router.push("/personalizar/detalhes");
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
          <Text>Escolha o kit de materiais da sua pelúcia</Text>

          {/* Grupo de opções de kits */}
          <RadioGroup onChange={handleKitChange} value={selectedKit}>
            <Grid templateColumns="repeat(4, 1fr)" gap={5}>
              {/* GridItem para o Kit 1 */}
              <GridItem>
                <Box border="1px" borderColor="black" p={3} borderRadius="md">
                  <Radio value="kit1" colorScheme="pink">
                    <Flex justifyContent="space-between" alignItems="center">
                      <Text marginRight={20}>Kit 1</Text>
                      <Spacer />
                      <Flex direction="column" alignItems="flex-end">
                        <Text fontSize={12}>Tamanho P</Text>
                        <Text>R$21,00</Text>
                      </Flex>
                    </Flex>
                  </Radio>
                  <Flex direction="column" align="flex-start" mt={3}>
                    <Text fontSize={12}>- Pele em fio de lã</Text>
                    <Text fontSize={12}>- Preenchimento de espuma sustentável</Text>
                    <Text fontSize={12}>- Acabamentos foscos</Text>
                  </Flex>
                </Box>
              </GridItem>

              {/* GridItem para o Kit 2 */}
              <GridItem>
                <Box border="1px" borderColor="black" p={3} borderRadius="md">
                  <Radio value="kit2" colorScheme="pink">
                    <Flex justifyContent="space-between" alignItems="center">
                      <Text marginRight={20}>Kit 2</Text>
                      <Spacer />
                      <Flex direction="column" alignItems="flex-end">
                        <Text fontSize={12}>Tamanho P</Text>
                        <Text>R$45,00</Text>
                      </Flex>
                    </Flex>
                  </Radio>
                  <Flex direction="column" align="flex-start" mt={3}>
                    <Text fontSize={12}>- Pele em algodão orgânico</Text>
                    <Text fontSize={12}>- Preenchimento de fibra natural</Text>
                    <Text fontSize={12}>- Acabamentos brilhantes</Text>
                  </Flex>
                </Box>
              </GridItem>

              {/* GridItem para o Kit 3 */}
              <GridItem>
                <Box border="1px" borderColor="black" p={3} borderRadius="md">
                  <Radio value="kit3" colorScheme="pink">
                    <Flex justifyContent="space-between" alignItems="center">
                      <Text marginRight={20}>Kit 3</Text>
                      <Spacer />
                      <Flex direction="column" alignItems="flex-end">
                        <Text fontSize={12}>Tamanho P</Text>
                        <Text>R$60,00</Text>
                      </Flex>
                    </Flex>
                  </Radio>
                  <Flex direction="column" align="flex-start" mt={3}>
                    <Text fontSize={12}>- Pele em pelúcia premium</Text>
                    <Text fontSize={12}>- Preenchimento de plumas sintéticas</Text>
                    <Text fontSize={12}>- Acabamentos metálicos</Text>
                  </Flex>
                </Box>
              </GridItem>

              {/* GridItem para o Kit 4 */}
              <GridItem>
                <Box border="1px" borderColor="black" p={3} borderRadius="md" h={"100%"}>
                  <Radio value="kit4" colorScheme="pink">
                    <Flex justifyContent="space-between" alignItems="center">
                      <Text>   Eu não tenho certeza</Text>
                      <Spacer />
                      <Flex direction="column" alignItems="flex-end">
                        
                      </Flex>
                    </Flex>
                  </Radio>
                  <Flex direction="column" align="flex-start" mt={3}>
                    <Text fontSize={12}>O funcionario responsável pelo seu</Text>
                    <Text fontSize={12}>Atendimento irá indicar o melhor kit</Text>
                    <Text fontSize={12}>de materiais para sua pelúcia</Text>
                  </Flex>
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
