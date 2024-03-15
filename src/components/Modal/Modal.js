import { ButtonCard } from "../AppointmentCard/Style";
import {
  Button,
  ButtonCancel,
  ButtonContinuarConsulta,
  ButtonTi,
  ButtonTitle,
  CheckBox,
} from "../Button/Style";
import {
  ContainerCheck,
  ContainerInputProntuario,
  ContainerTopicoAgendamento,
} from "../Container/Style";
import { ContentAccount, LinkAccount } from "../ContextAccount/Style";
import { SubTitleHeader } from "../Header/Style";
import { Input } from "../Input/Style";
import {
  SimpleText,
  TextCheckbox,
  TextSemiBold,
  Title,
  TitleAgendar,
} from "../Title/Style";
import {
  BoxModalAgendamento,
  BoxModalAgendar,
  BoxModalCancelar,
  BoxModalProntuario,
  DadosAgendamento,
  ImagePaciente,
  ModalBackground,
  TextAgendar,
  TextModalProntuario,
} from "./Style";
import { css } from "styled-components";

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
          <ButtonTitle>Confirmar</ButtonTitle>
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
            <ButtonTi>Ver local da consulta</ButtonTi>
          </Button>

          <ContentAccount>
            <LinkAccount>cancelar</LinkAccount>
          </ContentAccount>
        </ButtonCard>
      </BoxModalProntuario>
    </ModalBackground>
  );
};

export const ModalAgendamento = ({ navigation }) => {
  return (
    <ModalBackground>
      <BoxModalAgendamento>
        <TitleAgendar>Agendar Consulta</TitleAgendar>

        <SimpleText>
          Consulte os Dados selecionados para a sua Consulta
        </SimpleText>

        <ContainerTopicoAgendamento>
          <DadosAgendamento>
            <TextSemiBold>Data da Consulta</TextSemiBold>
            <SubTitleHeader>21 de Março de 2024</SubTitleHeader>
          </DadosAgendamento>

          <DadosAgendamento>
            <TextSemiBold>Médico(a) da Consulta</TextSemiBold>
            <SubTitleHeader>Dra Alessandra</SubTitleHeader>
            <SubTitleHeader>Demartologa, Esteticista</SubTitleHeader>
          </DadosAgendamento>

          <DadosAgendamento>
            <TextSemiBold>Local da consulta</TextSemiBold>
            <SubTitleHeader>São Paulo, SP</SubTitleHeader>
          </DadosAgendamento>

          <DadosAgendamento>
            <TextSemiBold>Tipo da Consulta</TextSemiBold>
            <SubTitleHeader>Rotina</SubTitleHeader>
          </DadosAgendamento>
        </ContainerTopicoAgendamento>

        <Button onPress={() => navigation.replace(`Main`)}>
          <ButtonTitle>confirmar</ButtonTitle>
        </Button>

        <LinkAccount onPress={() => navigation.replace("Main")}>
          Cancelar
        </LinkAccount>
      </BoxModalAgendamento>
    </ModalBackground>
  );
};

export const ModalAgendarConsulta = ({ navigation }) => {
  return (
    <ModalBackground>
      <BoxModalAgendar>
        <ContainerInputProntuario>
          <Title>Agendar Consulta</Title>
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

        <ButtonContinuarConsulta
          onPress={() => navigation.navigate("SelecionarClinica")}
        >
          <ButtonTi>Continuar</ButtonTi>
        </ButtonContinuarConsulta>

        <LinkAccount onPress={() => navigation.replace("Main")}>
          Cancelar
        </LinkAccount>
      </BoxModalAgendar>
    </ModalBackground>
  );
};
