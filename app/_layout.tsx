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
import Otherheader from "./header/Otherheader";
import Homeheader from "./header/Homeheader";
import "../global.css";

const Stack = createNativeStackNavigator();

const commonHeaderOptions = { headerShown: true };

const App = () => {
  return (
    <Stack.Navigator initialRouteName="Welcomepage">
      <Stack.Screen
        name="Welcomepage"
        component={Welcomepage}
        options={{ header: () => <Otherheader /> }}
      />
      <Stack.Screen
        name="tabs/Home"
        component={Home}
        options={{ header: () => <Homeheader /> }}
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
        options={{headerTitle: 'Profile'}}
      />
      <Stack.Screen
        name="tabs/Registermethod" // Double check this name matches the file case-sensitively
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
        options={{headerTitle: 'Dashboard'}}
      />
    </Stack.Navigator>
  );
};

export default App;
