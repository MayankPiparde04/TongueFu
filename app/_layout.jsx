import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Homeheader from "./headers/Homeheader";
import Dashheader from "./headers/Dashheader";
import Otherheader from "./headers/Otherheader";
import Welcomepage from "./Welcomepage";
import Register from "./tabs/Register";
import RegisterMethod from "./tabs/Registermethod";
import Details from "./tabs/Details";
import Login from "./tabs/Login";
import Home from "./tabs/Home";
import Profile from "./tabs/Profile";
import Dashboard from "./tabs/Dashboard";
import VoiceCalibration from "./tabs/VoiceCalibration";
import Task1 from "./tasks/Task1";
import Task2 from "./tasks/Task2";
import Task3 from "./tasks/Task3";
import Task4 from "./tasks/Task4";
import "../global.css";

const Stack = createNativeStackNavigator();

const commonHeaderOptions = { headerShown: true };

const App = () => {
  return (
    <Stack.Navigator initialRouteName="Welcomepage">
      <Stack.Screen
        name="Welcomepage"
        component={Welcomepage}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="tabs/Home"
        component={Home}
        options={{ header: () => <Dashheader /> }}
      />
      <Stack.Screen
        name="tabs/Login"
        component={Login}
        options={{ header: () => <Otherheader /> }}
      />
      <Stack.Screen
        name="tabs/Register"
        component={Register}
        options={{ header: () => <Otherheader /> }}
      />
      <Stack.Screen
        name="tabs/Profile"
        component={Profile}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="tabs/Registermethod"
        component={RegisterMethod}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="tabs/VoiceCalibration"
        component={VoiceCalibration}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="tabs/Details"
        component={Details}
        options={{ header: () => <Otherheader /> }}
      />
      <Stack.Screen
        name="tabs/Dashboard"
        component={Dashboard}
        options={{ headerTitle: "Dashboard" }}
      />
      <Stack.Screen
        name="tasks/Task1"
        component={Task1}
        options={{ header: () => <Homeheader /> }}
      />
      <Stack.Screen
        name="tasks/Task2"
        component={Task2}
        options={{ header: () => <Homeheader /> }}
      />
      <Stack.Screen
        name="tasks/Task3"
        component={Task3}
        options={{ header: () => <Homeheader /> }}
      />
      <Stack.Screen
        name="tasks/Task4"
        component={Task4}
        options={{ header: () => <Homeheader /> }}
      />
    </Stack.Navigator>
  );
};

export default App;
