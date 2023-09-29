import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./HomeScreen";
import LoginScreen from "./LoginScreen";

const Stack = createStackNavigator();
const headerTitle = 'Simple App';

const AuthenticatedStack = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen 
            name="Home" 
            component={HomeScreen} 
            options={
                { title: headerTitle }
            } 
        />
        <Stack.Screen 
            name="Login" 
            component={LoginScreen} 
            options={
                { title: headerTitle }
            }
        />
    </Stack.Navigator>
  );
}

export default AuthenticatedStack;