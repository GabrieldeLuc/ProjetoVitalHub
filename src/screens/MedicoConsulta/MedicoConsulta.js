import { StatusBar } from "react-native";
import { Container } from "../../components/Container/Style";
import { Header } from "react-native/Libraries/NewAppScreen";
import { Calendar } from "react-native-calendars";
import { useState } from "react";
import { Situacao } from "../../components/Consultas/Consultas";
import { Cards } from "../../components/Cards/Cards";
import { ButtonAgendar, ContainerButtonAgendar } from "../../components/ButtonIcons/Style";

export const MedicoConsulta = ({ navigation }) => {

    const [situacao, setSituacao] = useState();
    const [modalView, setModalView] = useState();
    const [modalCancel, setModalCancel] = useState();
    const [paciente, setPaciente] = useState();
    const [userRole, setUserRole] = useState('paciente');
  
    return (
      <Container>
        <StatusBar backgroundColor={"transparent"} barStyle={"dark-content"} translucent={true} />
  
        <Header />
  
        <Calendar />
  
         <Situacao situacao={situacao} setSituacao={setSituacao} />
  
        <Cards
          setPaciente={setPaciente}
          setModalView={setModalView}
          setModalCancel={setModalCancel}
          situacao={situacao}
          navigation={navigation}
        />
  
  {
        userRole === 'paciente' ? (
          <ContainerButtonAgendar onPress={() => setModaAgendar(true)}>
            <ButtonAgendar source={require("../../assets/Agendar.png")} />
          </ContainerButtonAgendar>
        ) : null
      }

      {
        modalAgendar ? (
          <ModalAgendarConsulta  navigation={navigation} />
        ) : null
      }
          
      </Container>
    );
  };