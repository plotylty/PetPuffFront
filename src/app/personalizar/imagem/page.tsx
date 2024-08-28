"use client";
import { HiOutlineUser } from "react-icons/hi";
import { useState } from "react";
import {
  Button,
  Flex,
  Text,
  Image,
  Step,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  Stepper,
  useSteps,
  Box,
  Input,
  FormControl,
  FormLabel,
  IconButton,
} from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons"; // Ícone para o "xizinho"
import { NavBar } from "@/components/navbar";
import { useRouter } from "next/navigation";

const steps = [{}, {}, {}, {}];

export default function Imagem() {
  const { activeStep } = useSteps({
    index: 0,
    count: steps.length,
  });

  const [imageFiles, setImageFiles] = useState([]); // Estado para armazenar imagens em cache
  const [plushName, setPlushName] = useState("");
  const router = useRouter(); // Inicializando o router

  // Função para lidar com o upload das imagens
  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const imageUrls = files.map((file) => URL.createObjectURL(file));
    // Adiciona novas URLs ao estado, mantendo apenas as 3 primeiras
    setImageFiles((prevFiles) => [
      ...prevFiles,
      ...imageUrls
    ].slice(0, 3));
  };

  // Função para remover uma imagem específica
  const handleRemoveImage = (indexToRemove) => {
    setImageFiles((prevFiles) => 
      prevFiles.filter((_, index) => index !== indexToRemove)
    );
  };

  // Função para navegação
  const handleNext = () => {
    router.push("/personalizar/tamanho");
  };

  return (
    <main>
      <Flex align={"center"} direction={"column"} mt={10}>
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
          <Text>Envie de uma a três fotos do desenho da pelúcia que você pretende personalizar</Text>

          {/* Input para o nome da pelúcia */}
          <FormControl id="plush-name" w="60%" mt={4}>
            <FormLabel>Nome da pelúcia</FormLabel>
            <Input
              type="text"
              placeholder="Nome da pelúcia"
              value={plushName}
              onChange={(e) => setPlushName(e.target.value)}
            />
          </FormControl>

          {/* Container do upload e imagens */}
          <Flex w="60%" justify="center" align="flex-start" gap={5}>
            {/* Área de upload de imagens (clicável e centralizada) */}
            <Box
              as="label"
              htmlFor="file-input"
              border="2px dashed gray"
              w="300px"
              h="200px"
              display="flex"
              alignItems="center"
              justifyContent="center"
              cursor="pointer"
              _hover={{ borderColor: "teal" }}
              flexShrink={0} // Mantém o tamanho fixo
            >
              <Text>upload imagem</Text>
            </Box>

            {/* Imagens carregadas (miniaturas à direita) */}
            <Flex direction="column" gap={2}>
              {imageFiles.map((image, index) => (
                <Box key={index} position="relative" boxSize="60px">
                  <Image
                    src={image}
                    boxSize="60px"
                    objectFit="cover"
                    borderRadius="md"
                    border="1px solid gray"
                  />
                  {/* Botão de remoção com o xizinho */}
                  <IconButton
                    aria-label="Remove image"
                    icon={<CloseIcon />}
                    size="xs"
                    position="absolute"
                    top="0"
                    right="0"
                    onClick={() => handleRemoveImage(index)}
                    colorScheme="whiteAlpha"
                    borderRadius="full"
                  />
                </Box>
              ))}
            </Flex>
          </Flex>

          {/* Input oculto para upload de imagens */}
          <Input
            id="file-input"
            type="file"
            multiple
            accept="image/*"
            onChange={handleImageChange}
            display="none"
          />

          {/* Botão de próximo */}
          <Button colorScheme="teal" size="sm" w="20%" onClick={handleNext}>
            Próximo
          </Button>
        </Flex>
      </Flex>
    </main>
  );
}
