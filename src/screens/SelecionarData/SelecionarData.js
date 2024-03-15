import { useState } from "react";
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
import { ModalAgendamento } from "../../components/Modal/Modal";

export const SelecionarData = ({ navigation }) => {
  const [modalAgendar, setModalAgendar] = useState(false);

  return (
    <>
      <Container>
        <TitleData>Selecionar Data</TitleData>

        <CalendarData />

        <TitleHorario>Selecione um horário disponível</TitleHorario>

        <ContainerInputHorario>
          <InputSelect />
        </ContainerInputHorario>

        <ButtonDataConfirm onPress={() => setModalAgendar(true)}>
          <ButtonTitle>Confirmar</ButtonTitle>
        </ButtonDataConfirm>

        <LinkAccount onPress={() => navigation.replace("Main")}>
          Cancelar
        </LinkAccount>
      </Container>

      {modalAgendar ? <ModalAgendamento navigation={navigation} /> : null}
    </>
  );
};
