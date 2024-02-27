import styled from "styled-components";

export const CardTitle = styled.Text`
  font-size: 16px;
  font-family: " MontserratAlternates_600SemiBold";
`;

export const CardSubTitle = styled.Text`
  font-size: 14px;
  font-family: "Quicksand_600SemiBold";
  color: #8c8a97;
`;

export const Horario = styled(CardSubTitle)`
  color: #49b3ba;
  background-color: #e8fcfd;
  width: 100px;
  height: 26px;
  border-radius: 5px;
  text-align: center;
`;

export const ImageConsulta = styled.Image`
  width: 77px;
  height: 80px;
  border-radius: 5px;
`;
