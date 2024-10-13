import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Home";
import Login from "./login"; // Capitalized
import Register from "./register"; // Capitalized
import Profile from "./profile"; // Capitalized
import WelcomePage from "./welcomepage"; // Ensure component name matches
import Register_Method from "./register_method"; // Ensure component name matches
import Details from "./details"; // Ensure component name matches
import Dashboard from "./dashboard"; // Ensure component name matches
import "../global.css";
import HomeHeader from "./homeheader";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: true }}
      />
      <Stack.Screen
        name="login" // Capitalized
        component={Login}
        options={{ headerShown: true }}
      />
      <Stack.Screen
        name="register" // Capitalized
        component={Register}
        options={{ headerShown: true }}
      />
      <Stack.Screen
        name="profile" // Capitalized
        component={Profile}
        options={{ headerShown: true }}
        />
      <Stack.Screen
        name="welcomepage" // Capitalized
        component={WelcomePage}
        options={{ header: () => <HomeHeader /> }}
        />
      <Stack.Screen
        name="register_method" // Capitalized
        component={Register_Method}
        options={{ headerShown: true }}
        />
      <Stack.Screen
        name="details" // Capitalized
        component={Details}
        options={{ header: () => <HomeHeader /> }}
      />
      <Stack.Screen
        name="dashboard" // Capitalized
        component={Dashboard}
        options={{ headerShown: true }}
      />
      {/* <Stack.Screen name="Dashboard" component={Dashboard} /> */}
    </Stack.Navigator>
  );
};

export default App;
