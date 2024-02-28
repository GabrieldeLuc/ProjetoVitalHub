import {
  Button,
  ButtonDataConfirm,
  ButtonTitle,
} from "../../components/Button/Style";
import {
  Calendar,
  CalendarData,
} from "../../components/CalendarData/CalendarData";
import {
  Container,
  ContainerInputHorario,
} from "../../components/Container/Style";
import { LinkAccount } from "../../components/ContextAccount/Style";
import InputSelect from "../../components/InputSelect/InputSelect";
import { Title, TitleData, TitleHorario } from "../../components/Title/Style";

export const SelecionarData = () => {
  return (
    <Container>
      <TitleData>Selecionar Data</TitleData>

      <CalendarData />

      <TitleHorario>Selecione um horário disponível</TitleHorario>

      <ContainerInputHorario>
        <InputSelect />
      </ContainerInputHorario>

      <ButtonDataConfirm>
        <ButtonTitle>Confirmar</ButtonTitle>
      </ButtonDataConfirm>

      <LinkAccount>Cancelar</LinkAccount>
    </Container>
  );
};
