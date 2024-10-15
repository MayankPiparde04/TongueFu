import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./tabs/Home";
import Login from "./tabs/Login"; 
import Register from "./tabs/Register"; 
import Profile from "./tabs/Profile"; 
import Welcomepage from "./Welcomepage"; 
import RegisterMethod from "./tabs/Register_method"; 
import Details from "./tabs/Details"; 
import Dashboard from "./tabs/Dashboard"; 
import HomeHeader from "./tabs/Homeheader"; 
import "../global.css"; 

const Stack = createNativeStackNavigator(); 

const commonHeaderOptions = { headerShown: true }; 

const App = () => { 
  return (
      <Stack.Navigator initialRouteName="Welcomepage"> 
        <Stack.Screen name="Welcomepage" component={Welcomepage} options={{ header: () => <HomeHeader /> }} /> 
        <Stack.Screen name="tabs/Home" component={Home} options={commonHeaderOptions} /> 
        <Stack.Screen name="tabs/Login" component={Login} options={commonHeaderOptions} /> 
        <Stack.Screen name="tabs/Register" component={Register} options={commonHeaderOptions} /> 
        <Stack.Screen name="tabs/Profile" component={Profile} options={commonHeaderOptions} /> 
        <Stack.Screen name="tabs/Register_method" component={RegisterMethod} options={commonHeaderOptions} /> 
        <Stack.Screen name="tabs/Details" component={Details} options={{ header: () => <HomeHeader /> }} /> 
        <Stack.Screen name="tabs/Dashboard" component={Dashboard} options={commonHeaderOptions} /> 
      </Stack.Navigator> 
  ); 
}; 

export default App;
