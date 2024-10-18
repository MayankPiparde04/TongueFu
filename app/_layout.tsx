import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./tabs/Home";
import Login from "./tabs/Login";
import Register from "./tabs/Register";
import Profile from "./tabs/Profile";
import Welcomepage from "./Welcomepage";
import RegisterMethod from "./tabs/Registermethod"; // Ensure this matches your file name exactly
import Details from "./tabs/Details";
import Dashboard from "./tabs/Dashboard";
import Homeheader from "./headers/Homeheader";
import Dashheader from "./headers/Dashheader";
import Otherheader from "./headers/Otherheader";
import Task1 from "./tasks/Task1"; // Your Task1 component
import Task2 from "./tasks/Task2"; // Your Task2 component
import Task3 from "./tasks/Task3"; // Your Task3 component
import Task4 from "./tasks/Task4"; // Your Task4 component
import "../global.css";

const Stack = createNativeStackNavigator();

const commonHeaderOptions = { headerShown: true };

const App = () => {
  return (
    <Stack.Navigator initialRouteName="tabs/Home">
      <Stack.Screen
        name="Welcomepage"
        component={Welcomepage}
        options={{ headerShown: false}}
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
        options={{ headerTitle: "Profile" }}
      />
      <Stack.Screen
        name="tabs/Registermethod"
        component={RegisterMethod}
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
