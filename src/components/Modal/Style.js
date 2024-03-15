import styled from "styled-components";
import { CardSubTitle } from "../Consultas/Style";

export const ModalBackground = styled.View`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  position: absolute;
  z-index: 99;
  align-items: center;
  justify-content: center;
`;
export const BoxModalCancelar = styled.View`
  width: 90%;
  height: 310px;
  position: relative;
  z-index: 100;
  background-color: white;
  align-items: center;
  border-radius: 10px;
`;

// Modal Ver Prontuario
export const BoxModalProntuario = styled(BoxModalCancelar)`
  height: 436px;
`;
export const TextModalProntuario = styled(CardSubTitle)`
  margin-top: 5px;
  color: #4e4b59;
`;
export const ImagePaciente = styled.Image`
  width: 90%;
  height: 181px;
  border-radius: 10px;
  margin-top: 20px;
`;

// Agendar Consultas
export const BoxModalAgendar = styled(BoxModalProntuario)`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 518px;
`;
export const TextAgendar = styled(TextModalProntuario)`
  width: 90%;
  text-align: left;
`;

// Modal para Agendamento
export const BoxModalAgendamento = styled(BoxModalProntuario)`
  height: 554px;
  z-index: 0;
`;

// Box de Dados do Agendamento
export const DadosAgendamento = styled.View`
  padding: 5px;
  height: fit-content;
`;

//Modal da Localização da Consulta.
export const BoxLocalizacao = styled(BoxModalAgendar)`
  position: absolute;
  bottom: 0;
  z-index: 12;
  height: 349px;
`;

