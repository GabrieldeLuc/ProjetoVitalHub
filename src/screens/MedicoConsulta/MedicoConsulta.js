import { StatusBar } from "react-native";
import { Container } from "../../components/Container/Style";
import { Header } from "react-native/Libraries/NewAppScreen";
import { Calendar } from "react-native-calendars";

export const MedicoConsulta = ({ navigation }) => {

    const [situacao, setSituacao] = useState();
    const [modalView, setModalView] = useState();
    const [modalCancel, setModalCancel] = useState();
    const [paciente, setPaciente] = useState();
  
    
  
    return (
      <Container>
        <StatusBar backgroundColor={"transparent"} barStyle={"dark-content"} translucent={true} />
  
        <Header />
  
        <Calendar />
  
        {/* <Situacao situacao={situacao} setSituacao={setSituacao} />
  
        <Cards
          setPaciente={setPaciente}
          setModalView={setModalView}
          setModalCancel={setModalCancel}
          situacao={situacao}
          navigation={navigation}
        />
   */}
        {/* Modal */}
        {
          // modalCancel === true ?
          //   (
          //     <ModalCancelar
          //       setModal={setModalCancel}
          //     />
          //   ) : null
        }
  
          
      </Container>
    );
  };