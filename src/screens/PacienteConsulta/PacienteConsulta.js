import { StatusBar } from "react-native";
import { Container } from "../../components/Container/Style";

import { Calendar } from "react-native-calendars";
import { useState } from "react";
import { Header } from "../../components/Header/Header";
import { Situacao } from "../../components/Consultas/Consultas";
import { Cards } from "../../components/Cards/Cards";
import { ButtonAgendar, ContainerButtonAgendar } from "../../components/ButtonIcons/Style";
import { ModalAgendarConsulta } from "../../components/Modal/Modal";
import { CalendarHome } from "../../components/CalendarHome/CalendarHome";


export const PacienteConsulta = () => {
    const [showAgendar, setShowAgendar] = useState(false);
    const [state, setState] = useState();
    return (
      <Container>
        <StatusBar backgroundColor={"transparent"} barStyle={"dark-content"} translucent={true} />
  
        <Header/>
  
        <CalendarHome />
  
      <Situacao situacao={state} setSituacao={setState} />
  
        <Cards situacao={state} />
  
        <ContainerButtonAgendar onPress={() => {setShowAgendar(true)}}>
          <ButtonAgendar source={require("../../assets/agendar.png")} />
        </ContainerButtonAgendar>
  
        {
          showAgendar ? 
            <ModalAgendarConsulta 
              setModal={setShowAgendar}
            /> 
          : null
        } 
      </Container>
    );
  };