import styled from "styled-components";

export const Input = styled.TextInput.attrs({
  placeholderTextColor: "#34898f",
})`
  width: 90%;
  height: 53px;
  padding: 16px;
  margin-top: 15px;

  border: 2px solid #49b3ba;
  border-radius: 5px;
  color: #34898f;
  font-size: 16px;
  font-family: "MontserratAlternates_600SemiBold";
`;

export const InputCode = styled(Input)`
  width: 65px;
  height: 62px;

  text-align: center;
  border-color: #49b3ba;
  font-size: 40px;
  margin-top: 20px;
`;

export const InputEndereco = styled(Input)`
  border-radius: 5px;
  border: 0px;
  background-color: #33303e;
  opacity: 0.1;
  width: 90%;
  height: 7%;
  margin-left: 0px;
  margin-top: 0px;
`;

export const InputNumero = styled(InputEndereco)`
  width: 40%;
  margin-left: -190px;
`;

export const InputBairro = styled(InputNumero)`
  margin-left: 190px;
`;

export const InputMaior = styled(Input)`
  padding-top: 2px;
  height: 121px;
`;

export const InputMaiorDisabled = styled(InputMaior).attrs({
  placeholderTextColor: "#4E4B59",
})`
  border: 1px solid #f5f3f3;
  background-color: #f5f3f3;
  text-align: justify;
`;

export const InputDisabled = styled(Input).attrs({
  placeholderTextColor: "#4E4B59",
})`
  border: 1px solid #f5f3f3;
  background-color: #f5f3f3;
`;
