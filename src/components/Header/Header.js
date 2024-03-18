import { ContainerHeader } from "../Container/Style";
import { BoxUser, DataUser, ImageUser, NameUser, TextDefault } from "./Style";
import { MaterialIcons } from "@expo/vector-icons";

export const Header = ({ navigation }) => {
  return (
    <ContainerHeader>
      <BoxUser>
      <ImageUser
          source={{
            uri: "https://avatars.githubusercontent.com/u/125310404?v=4",
          }}
   
        /> 
        <DataUser>
          <TextDefault>Bem vindo !</TextDefault>
          <NameUser>Dr.Moai</NameUser>
        </DataUser>
      </BoxUser>

      {/* material icons */}
      <MaterialIcons name="notifications" size={25} color="#fbfbfb" />
    </ContainerHeader>
  );
};
