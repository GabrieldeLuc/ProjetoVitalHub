import { Button } from "react-native";
import { AtendimentoHorario, CardClinica } from "../../components/Cards/Style";
import { CardTitle } from "../../components/Consultas/Style";
import { Container, ContainerIntScroll, ContainerSelClinica, InverseBox } from "../../components/Container/Style";
import { BoxTitleHeader, SubTitleHeader } from "../../components/Header/Style";
import { ButtonTitleClinica, TextNote, Title, TitleClinica } from "../../components/Title/Style";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinkAccount } from "../../components/ContextAccount/Style";
import { ButtonClinica } from "../../components/Button/Style";

export const SelecionarClinica = () => {
  return (
    <Container>
      <ContainerSelClinica>
        <ContainerIntScroll>
          <Title>Selecionar Clinica</Title>

          <CardClinica>
            <BoxTitleHeader>
              <CardTitle>Clínica Natureh</CardTitle>

              <SubTitleHeader>São Paulo, SP</SubTitleHeader>
            </BoxTitleHeader>

            <InverseBox>
              <TextNote>
                {" "}
                <AntDesign name="star" size={24} color="#F9A620" /> 4,5
              </TextNote>

              <AtendimentoHorario>
                <MaterialCommunityIcons
                  name="calendar-outline"
                  size={14}
                  color="#49b3ba"
                />{" "}
                Seg-Sex
              </AtendimentoHorario>
            </InverseBox>
          </CardClinica>

          <CardClinica>
            <BoxTitleHeader>
              <CardTitle>Diamond Pró-Mulher</CardTitle>

              <SubTitleHeader>São Paulo, SP</SubTitleHeader>
            </BoxTitleHeader>

            <InverseBox>
              <TextNote>
                {" "}
                <AntDesign name="star" size={24} color="#F9A620" /> 4,8
              </TextNote>

              <AtendimentoHorario>
                <MaterialCommunityIcons
                  name="calendar-outline"
                  size={14}
                  color="#49b3ba"
                />{" "}
                Seg-Sex
              </AtendimentoHorario>
            </InverseBox>
          </CardClinica>

          <CardClinica>
            <BoxTitleHeader>
              <CardTitle>Clinica Villa Lobos</CardTitle>

              <SubTitleHeader>São Paulo, SP</SubTitleHeader>
            </BoxTitleHeader>

            <InverseBox>
              <TextNote>
                {" "}
                <AntDesign name="star" size={24} color="#F9A620" /> 4,2
              </TextNote>

              <AtendimentoHorario>
                <MaterialCommunityIcons
                  name="calendar-outline"
                  size={14}
                  color="#49b3ba"
                />{" "}
                Seg-Sex
              </AtendimentoHorario>
            </InverseBox>
          </CardClinica>

          <CardClinica>
            <BoxTitleHeader>
              <CardTitle>SP Oncologia Clínica</CardTitle>

              <SubTitleHeader>Taboão, SP</SubTitleHeader>
            </BoxTitleHeader>

            <InverseBox>
              <TextNote>
                {" "}
                <AntDesign name="star" size={24} color="#F9A620" /> 4,2
              </TextNote>

              <AtendimentoHorario>
                <MaterialCommunityIcons
                  name="calendar-outline"
                  size={14}
                  color="#49b3ba"
                />{" "}
                Seg-Sex
              </AtendimentoHorario>
            </InverseBox>
          </CardClinica>

          <CardClinica>
            <BoxTitleHeader>
              <CardTitle>Clínica Natureh</CardTitle>

              <SubTitleHeader>São Paulo, SP</SubTitleHeader>
            </BoxTitleHeader>

            <InverseBox>
              <TextNote>
                {" "}
                <AntDesign name="star" size={24} color="#F9A620" /> 4,5
              </TextNote>

              <AtendimentoHorario>
                <MaterialCommunityIcons
                  name="calendar-outline"
                  size={14}
                  color="#49b3ba"
                />{" "}
                Seg-Sex
              </AtendimentoHorario>
            </InverseBox>
          </CardClinica>

          <CardClinica>
            <BoxTitleHeader>
              <CardTitle>Diamond Pró-Mulher</CardTitle>

              <SubTitleHeader>São Paulo, SP</SubTitleHeader>
            </BoxTitleHeader>

            <InverseBox>
              <TextNote>
                {" "}
                <AntDesign name="star" size={24} color="#F9A620" /> 4,8
              </TextNote>

              <AtendimentoHorario>
                <MaterialCommunityIcons
                  name="calendar-outline"
                  size={14}
                  color="#49b3ba"
                />{" "}
                Seg-Sex
              </AtendimentoHorario>
            </InverseBox>
          </CardClinica>

          <CardClinica>
            <BoxTitleHeader>
              <CardTitle>Clinica Villa Lobos</CardTitle>

              <SubTitleHeader>São Paulo, SP</SubTitleHeader>
            </BoxTitleHeader>

            <InverseBox>
              <TextNote>
                {" "}
                <AntDesign name="star" size={24} color="#F9A620" /> 4,2
              </TextNote>

              <AtendimentoHorario>
                <MaterialCommunityIcons
                  name="calendar-outline"
                  size={14}
                  color="#49b3ba"
                />{" "}
                Seg-Sex
              </AtendimentoHorario>
            </InverseBox>
          </CardClinica>

          <CardClinica>
            <BoxTitleHeader>
              <CardTitle>SP Oncologia Clínica</CardTitle>

              <SubTitleHeader>Taboão, SP</SubTitleHeader>
            </BoxTitleHeader>

            <InverseBox>
              <TextNote>
                {" "}
                <AntDesign name="star" size={24} color="#F9A620" /> 4,2
              </TextNote>

              <AtendimentoHorario>
                <MaterialCommunityIcons
                  name="calendar-outline"
                  size={14}
                  color="#49b3ba"
                />{" "}
                Seg-Sex
              </AtendimentoHorario>
            </InverseBox>
          </CardClinica>
        </ContainerIntScroll>
      </ContainerSelClinica>

      <ButtonClinica>
        <ButtonTitleClinica>Continuar</ButtonTitleClinica>
        </ButtonClinica>
      <LinkAccount>Cancelar</LinkAccount>
    </Container>
  );
};
