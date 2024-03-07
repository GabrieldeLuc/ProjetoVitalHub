import { Modal } from "react-native";
import {
  AppointmentContent,
  ModalContent,
  ModalImage,
  RowTextModal,
  TextModal,
} from "./Style";
import { Title } from "../Title/Style";
import {
  ButtonCancel,
  ButtonModal,
  ButtonSecondaryTitle,
  ButtonTitle,
} from "../Button/Style";
import { ProntuarioMedico } from "../../screens/ProntuarioMedico/ProntuarioMedico";

export const AppointmentModal = ({
  navigation,
  visible,
  setShowModalAppointment,
  typeProfile = "paciente",
  ...rest
}) => {
  async function InserirProntuario()  {
    navigation.navigate("Prontuario Medico");
  }
  
  return (
    <Modal {...rest} visible={visible} transparent={true} animationType="fade">
      <AppointmentContent>
        <ModalContent>
          <ModalImage
            source={{
              uri: "https://avatars.githubusercontent.com/u/125310404?v=4",
            }}
          />

          <Title>Fulano</Title>

          <RowTextModal>
            <TextModal>16 anos</TextModal>

            <TextModal>fulano@gmail.com</TextModal>
          </RowTextModal>

          <ButtonModal onPress={() => InserirProntuario()}>
            <ButtonTitle> Inserir Prontuário </ButtonTitle>
          </ButtonModal>

          <ButtonCancel onPress={() => setShowModalAppointment(false)}>
            <ButtonSecondaryTitle>Cancelar</ButtonSecondaryTitle>
          </ButtonCancel>
        </ModalContent>
      </AppointmentContent>
    </Modal>
  );
};
