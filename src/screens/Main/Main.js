import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "../Home/Home";
import PerfilDoutor from "../PerfilDoutor/PerfilDoutor";
import { ContainerIcons, ContentIcon, TextIcon, TextTabBottom } from "./Style";

import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { MedicoConsulta } from "../MedicoConsulta/MedicoConsulta";
import { FontAwesome6 } from "@expo/vector-icons";
import { useState } from "react";
import { PerfilPaciente } from "../PerfilPaciente/PerfilPaciente";
import { PacienteConsulta } from "../PacienteConsulta/PacienteConsulta";

export const Main = () => {
  const Tab = createBottomTabNavigator();

  return (
    <>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route, iconName, color, text, background }) => ({
          tabBarStyle: {
            backgroundColor: "white",
          },
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            if (route.name === "Home") {
              iconName = "calendar-check";
              color = focused ? "#607EC5" : "#4E4B59";
              background = focused ? "#ECF2FF" : "white";
              text = focused ? "Home" : "";
            } else if (route.name === "Perfil") {
              iconName = "user-large";
              color = focused ? "#607EC5" : "#4E4B59";
              background = focused ? "#ECF2FF" : "white";
              text = focused ? "Perfil" : "";
            }

            return (
              <ContainerIcons style={{ backgroundColor: background }}>
                <FontAwesome6 name={iconName} size={18} color={color} />
                <TextTabBottom style={{ color: color }}>{text}</TextTabBottom>
              </ContainerIcons>
            );
          },
          tabBarActiveTintColor: "#607EC5",
          headerShown: false,
        })}
      >
        <Tab.Screen name="Home" component={PacienteConsulta} />
        <Tab.Screen name="Perfil" component={PerfilDoutor} />
      </Tab.Navigator>
    </>
  );
};
