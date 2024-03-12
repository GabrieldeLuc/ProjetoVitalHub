import { ButtonCard } from "../AppointmentCard/Style";
import { Button, ButtonCancel, ButtonTitle } from "../Button/Style";
import { ContentAccount, LinkAccount } from "../ContextAccount/Style";
import { SimpleText, Title } from "../Title/Style";
import {
    BoxModalAgendar,
  BoxModalCancelar,
  BoxModalProntuario,
  ImagePaciente,
  ModalBackground,
  TextModalProntuario,
} from "./Style";

export const ModalCancelar = ({ navigation }) => {
  return (
    <ModalBackground>
      <BoxModalCancelar>
        <Title>Cancelar consulta</Title>

        <SimpleText>
          Ao cancelar essa consulta, abrirá uma possível disponibilidade no seu
          horário, deseja mesmo cancelar essa consulta?
        </SimpleText>

        <Button>
          <ButtonTitle>confirmar</ButtonTitle>
        </Button>

        <ButtonCancel screen={`Main`} navigation={navigation} />
      </BoxModalCancelar>
    </ModalBackground>
  );
};

export const ModalConsulta = ({ navigation }) => {
  return (
    <ModalBackground>
      <BoxModalProntuario style={{ justifyContent: "space-evenly" }}>
        <ButtonCard>
          <ImagePaciente source={require("../../assets/paciente.png")} />

          <Title>Dr. Claudio</Title>

          <TextModalProntuario>Cliníco geral CRM-15286</TextModalProntuario>

          <Button>
            <ButtonTitle>Ver local da consulta</ButtonTitle>
          </Button>

          <ContentAccount>
            <LinkAccount>cancelar</LinkAccount>
          </ContentAccount>
        </ButtonCard>
      </BoxModalProntuario>
    </ModalBackground>
  );
};

export const ModalAgendarConsulta = ({ navigation }) => {
  return (
    <ModalBackground>
      <BoxModalAgendar>
        <ContainerInputProntuario>
          <TextAgendar>Qual o nível da consulta</TextAgendar>
          <ContainerCheck>
            <CheckBox>
              <TextCheckbox>Rotina</TextCheckbox>
            </CheckBox>
            <CheckBox>
              <TextCheckbox>Exame</TextCheckbox>
            </CheckBox>
            <CheckBox>
              <TextCheckbox>Urgência</TextCheckbox>
            </CheckBox>
          </ContainerCheck>
        </ContainerInputProntuario>

        <ContainerInputProntuario>
          <TextAgendar>Informe a localização desejada</TextAgendar>
          <Input placeholder="Informe a localização" />
        </ContainerInputProntuario>

        <Button onPress={() => navigation.navigate("SelecionarClinica")}>
          <ButtonTitle>continuar</ButtonTitle>
        </Button>

        <ButtonCancel navigation={navigation} screen={`Main`} />
      </BoxModalAgendar>
    </ModalBackground>
  );
};
