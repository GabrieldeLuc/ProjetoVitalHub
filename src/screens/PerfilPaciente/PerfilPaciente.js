import {
  Container,
  ContainerFlex,
  ContainerImage,
  ContainerScroll,
} from "../../components/Container/Style";

import { Title, Subtitle } from "../../components/Title/Style";
import { Button, ButtonLogout } from "../../components/Button/Style";
import { ButtonTitle } from "../../components/ButtonTitle/Style";

import { Input, InputSmall } from "../../components/Input/Style";
import { ContentInputSmall } from "./Style";
import { Text } from "react-native";
import { ProfileImage } from "../../components/AppointmentCard/Style";

export const PerfilPaciente = () => {

  return (
    <ContainerScroll>

    

      <Container>
        <ContainerImage>
          <ProfileImage
            source={{ uri: "https://github.com/enzoquarelo.png" }}
          />
        </ContainerImage>

        <Title>Dr.Enzo Quarelo</Title>

        <Subtitle>22 anos enzo.quarelo@gmail.com</Subtitle>

        <Input placeholder="dd/mm/aaaa" />

        <Input placeholder="879********" />

      
        <Input placeholder="Rua Niterói,180" />

        <ContainerFlex>
       
        </ContainerFlex>

        <Button>
          <ButtonTitle>Salvar</ButtonTitle>
        </Button>

        <Button>
          <ButtonTitle>Editar</ButtonTitle>
        </Button>

        <ButtonLogout onPress={() => {removerLogin()}}>
          <ButtonTitle>Sair do app</ButtonTitle>
        </ButtonLogout>
      </Container>
    </ContainerScroll>
  );
};

export default PerfilPaciente;
