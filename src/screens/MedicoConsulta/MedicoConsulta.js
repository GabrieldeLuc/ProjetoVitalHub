import { StatusBar } from "react-native";
import { Container } from "../../components/Container/Style";

import { Calendar } from "react-native-calendars";
import { useState } from "react";
import { Situacao } from "../../components/Consultas/Consultas";
import { Cards } from "../../components/Cards/Cards";
import {
  ButtonAgendar,
  ContainerButtonAgendar,
} from "../../components/ButtonIcons/Style";
import { ModalAgendarConsulta } from "../../components/Modal/Modal";
import { Header } from "../../components/Header/Header";
import { CalendarHome } from "../../components/CalendarHome/CalendarHome";

export const MedicoConsulta = ({ navigation }) => {
  const [situacao, setSituacao] = useState();
  const [modalView, setModalView] = useState();
  const [modalCancel, setModalCancel] = useState();
  const [paciente, setPaciente] = useState();
  const [modalAgendar, setModalAgendar] = useState(false);
  const [userRole, setUserRole] = useState("paciente");

  return (
    <Container>
      <StatusBar
        backgroundColor={"transparent"}
        barStyle={"dark-content"}
        translucent={true}
      />

      <Header/>

      <CalendarHome />

      <Situacao situacao={situacao} setSituacao={setSituacao} />

      <Cards
        setPaciente={setPaciente}
        setModalView={setModalView}
        setModalCancel={setModalCancel}
        situacao={situacao}
        navigation={navigation}
      />

      {userRole === "paciente" ? (
        <ContainerButtonAgendar onPress={() => setModalAgendar(true)}>
          <ButtonAgendar source={require("../../assets/agendar.png")} />
        </ContainerButtonAgendar>
      ) : null}

      {modalAgendar ? <ModalAgendarConsulta navigation={navigation} /> : null}
    </Container>
  );
};
