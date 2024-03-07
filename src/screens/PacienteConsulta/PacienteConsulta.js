import { StatusBar } from "react-native";
import { Container } from "../../components/Container/Style";
import { Header } from "react-native/Libraries/NewAppScreen";
import { Calendar } from "react-native-calendars";

export const PacienteConsulta = () => {
    const [showAgendar, setShowAgendar] = useState(false);
    const [state, setState] = useState();
    return (
      <Container>
        <StatusBar backgroundColor={"transparent"} barStyle={"dark-content"} translucent={true} />
  
        <Header />
  
        <Calendar />
  
        {/* <Situacao situacao={state} setSituacao={setState} />
  
        <Cards situacao={state} />
  
        <ContainerButtonAgendar onPress={() => {setShowAgendar(true)}}>
          <ButtonAgendar source={require("../../assets/Agendar.png")} />
        </ContainerButtonAgendar>
  
        {
          showAgendar ? 
            <ModalAgendarConsulta 
              setModal={setShowAgendar}
            /> 
          : null
        } */}
      </Container>
    );
  };