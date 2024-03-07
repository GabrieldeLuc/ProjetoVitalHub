import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "../Home/Home";
import PerfilDoutor from "../PerfilDoutor/PerfilDoutor";
import { ContentIcon, TextIcon } from "./Style";

import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

const BottomTab = createBottomTabNavigator();

export const Main = () => {
  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarStyle: {
          backgroundColor: "#FFFFFF",
          height: 80,
          paddingTop: 10,
          paddingBottom: 10,
        },
        tabBarActiveBackgroundColor: "transparent",
        tabBarShowLabel: false,
        headerShown: false,
        tabBarIcon: ({ focused }) => {
          if (route.name === "Home") {
            return (
              <ContentIcon
                tabBarActiveBackgroundColor={
                  focused ? "#ECF2FF" : "transparent"
                }
              >
                <FontAwesome name="calendar" size={24} color="black" />

                {focused && <TextIcon>Agenda</TextIcon>}
              </ContentIcon>
            );
          } else {
            return(
            <ContentIcon
              tabBarActiveBackgroundColor={focused ? "#ECF2FF" : "transparent"}
            >
              <FontAwesome5 name="user-circle" size={24} color="black" />

              {focused && <TextIcon>Perfil</TextIcon>}
            </ContentIcon>
            );
          }
        },
      })}
    >
      <BottomTab.Screen name="Home" component={Home} />
      <BottomTab.Screen name="Perfil" component={PerfilDoutor} />
    </BottomTab.Navigator>
  );
};
