import { Container } from "../../components/Container/Style";
import { ImageMapa } from "../../components/Images/Style";
import {
  InputBairro,
  InputEndereco,
  InputNumero,
} from "../../components/Input/Style";
import {
  Subtitle,
  Title,
  TitleBairro,
  TitleEndereco,
  TitleLocalConsulta,
  TitleNumero,
} from "../../components/Title/Style";

export const LocalConsulta = () => {
  return (
    <Container>
      <ImageMapa source={require("../../assets/mapa.png")} />

      <TitleLocalConsulta>Clinica Natureh</TitleLocalConsulta>

      <Subtitle>São Paulo - SP</Subtitle>

      <TitleEndereco>Endereço</TitleEndereco>

      <InputEndereco />

      <TitleNumero>Número</TitleNumero>
      <InputNumero />

      <TitleBairro>Bairro</TitleBairro>

      <InputBairro />
    </Container>
  );
};
