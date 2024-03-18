import styled from "styled-components";
import { CardSubTitle } from "../Consultas/Style";
import { SubTitleHeader } from "../Header/Style";

export const Title = styled.Text`
  font-size: 20px;
  margin-bottom: 5px;
  color: #33303e;
  font-family: "MontserratAlternates_600SemiBold";
`;
export const Subtitle = styled.Text`
  width: 80%;
  color: #5f5c6b;
  font-size: 16px;
  margin-top: 15px;

  align-self: center;
  text-align: center;

  font-family: "Quicksand_500Medium";
`;

export const TitleClinica = styled(Title)`
  margin-top: 90px;
`;

export const TextNote = styled(CardSubTitle)`
  color: #f9a620;
`;

export const ButtonTitleClinica = styled.Text`
  font-size: 14px;
  font-family: "    MontserratAlternates_600SemiBold";
  color: white;
  text-transform: uppercase;
`;

export const TitleMedico = styled(Title)`
  margin-top: 60px;
`;
export const TitleData = styled(Title)`
  margin-top: 60px;
`;

export const TitleHorario = styled(Title)`
  margin-top: 30px;
  font-size: 14px;
  margin-left: -80px;
`;

export const TitleLocalConsulta = styled(Title)`
  margin-top: 30px;
`;

export const TitleEndereco = styled(Title)`
  font-size: 16px;
  margin-top: 30px;
  margin-right: 190px;
  font-family: "Quicksand_600SemiBold";
`;

export const TitleNumero = styled(TitleEndereco)`
  margin-left: -40px;
  margin-top: 40px;
`;

export const TitleBairro = styled(TitleEndereco)`
  margin-right: -80px;
  margin-top: -78px;
`;
export const SimpleText = styled.Text`
  font-size: 16px;
  font-family: "Quicksand_500Medium";
  width: 90%;
  text-align: center;
  margin-top: 15px;
`;

export const TextCheckbox = styled(ButtonTitleClinica)`
  color: #34898f;
  text-transform: none;
  text-align: center;
  background-color: transparent;
`;

export const TextSemiBold = styled(SimpleText)`
  font-family: "Quicksand_600SemiBold";
  text-align: left;
`;

export const TitleAgendar = styled(Title)`
  margin-top: 50px;
`;

export const TitleLabel = styled(SimpleText)`
  text-align: left;
`;
