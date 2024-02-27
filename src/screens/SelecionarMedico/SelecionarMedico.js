import { CardConsulta } from "../../components/Cards/Style";
import { CardTitle, ImageConsulta } from "../../components/Consultas/Style";
import {
  Container,
  ContainerIntScroll,
  ContainerSelClinica,
} from "../../components/Container/Style";
import { BoxTitleHeader, SubTitleHeader } from "../../components/Header/Style";
import { Title, TitleMedico } from "../../components/Title/Style";

export const SelecionarMedico = () => {
  return (
    <Container>
      <ContainerSelClinica>
        <ContainerIntScroll>
          <TitleMedico> Selecionar Médico </TitleMedico>
          <CardConsulta>
            <ImageConsulta source={require("../../assets/alessandra.png")} />
            <BoxTitleHeader>
                <CardTitle>
                    Doutora Alessandra
                </CardTitle>
                <SubTitleHeader>Demartologa,Esteticista </SubTitleHeader>
            </BoxTitleHeader>
          </CardConsulta>

          <CardConsulta>
            <ImageConsulta source={require("../../assets/kumushiro.png")} />
            <BoxTitleHeader>
                <CardTitle>
                    Doutor Kumushiro
                </CardTitle>
                <SubTitleHeader>Cirurgião, Cardiologista </SubTitleHeader>
            </BoxTitleHeader>
          </CardConsulta>

          <CardConsulta>
            <ImageConsulta source={require("../../assets/rodrigo.png")} />
            <BoxTitleHeader>
                <CardTitle>
                    Doutor Rodrigo Santos 
                </CardTitle>
                <SubTitleHeader>Clinico, Pediatra </SubTitleHeader>
            </BoxTitleHeader>
          </CardConsulta>
        </ContainerIntScroll>
      </ContainerSelClinica>
    </Container>
  );
};
