import {
  Button,
  ButtonCancel,
  ButtonTitle,
} from "../../components/Button/Style";
import {
  Container,
  ContainerInputProntuario,
  ContainerScroll,
} from "../../components/Container/Style";
import { LinkAccount } from "../../components/ContextAccount/Style";
import { ImagePerfil } from "../../components/Images/Style";
import {
  Input,
  InputDisabled,
  InputMaior,
  InputMaiorDisabled,
} from "../../components/Input/Style";
import { TextModalProntuario } from "../../components/Modal/Style";
import { Title, TitleLabel } from "../../components/Title/Style";

export const ProntuarioMedico = ({ setModal, navigation }) => {
  async function Home() {
    navigation.navigate("Main");
  }

  return (
    <ContainerScroll>
      <Container>
        <ImagePerfil source={require("../../assets/paciente.png")} />

        <Title>Richard Kosta</Title>

        <TextModalProntuario>
          28 anos richard.kosta@gmail.com
        </TextModalProntuario>

        <ContainerInputProntuario>
          <TitleLabel>Descrição da consulta</TitleLabel>
          <InputMaior placeholder="Descrição" />
        </ContainerInputProntuario>

        <ContainerInputProntuario>
          <TitleLabel>Diagnóstico do paciente</TitleLabel>
          <Input placeholder="Diagnóstico" />
        </ContainerInputProntuario>

        <ContainerInputProntuario>
          <TitleLabel>Prescrição médica</TitleLabel>
          <InputMaior placeholder="Prescrição médica" />
        </ContainerInputProntuario>

        <Button  onPress={() => Home()}>
          <ButtonTitle>salvar</ButtonTitle>
        </Button>

        <ButtonCancel setModal={false} />
      </Container>
    </ContainerScroll>
  );
};

export const EditarProntuario = () => {
  return (
    <ContainerScroll>
      <Container>
        <ImagePerfil source={require("../../assets/paciente.png")} />
        <Title>Richard Kosta</Title>

        <TextModalProntuario>
          28 anos richard.kosta@gmail.com
        </TextModalProntuario>

        <ContainerInputProntuario>
          <TitleLabel>Descrição da consulta</TitleLabel>
          <InputMaiorDisabled placeholder="Descrição" editable={false} />
        </ContainerInputProntuario>

        <ContainerInputProntuario>
          <TitleLabel>Diagnóstico do paciente</TitleLabel>
          <InputDisabled placeholder="Diagnóstico" editable={false} />
        </ContainerInputProntuario>

        <ContainerInputProntuario>
          <TitleLabel>Prescrição médica</TitleLabel>
          <InputMaiorDisabled
            placeholder="Prescrição médica"
            editable={false}
          />
        </ContainerInputProntuario>

        <Button>
          <ButtonTitle>Salvar</ButtonTitle>
        </Button>

        <Button>
          <ButtonTitle>Editar</ButtonTitle>
        </Button>

        <LinkAccount>Cancelar</LinkAccount>
      </Container>
    </ContainerScroll>
  );
};
