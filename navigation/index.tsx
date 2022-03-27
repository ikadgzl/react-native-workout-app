import { Entypo, FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import PlannerScreen from '../screens/PlannerScreen';
import WorkoutDetailsScreen from '../screens/WorkoutDetailsScreen';

export default function Navigation() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator();
const RootNavigator = (): JSX.Element => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Root' component={BottomTabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name='WorkoutDetails' component={WorkoutDetailsScreen} options={{ headerTitle: '' }} />
    </Stack.Navigator>
  );
};

const BottomTab = createBottomTabNavigator();
const BottomTabNavigator = (): JSX.Element => {
  return (
    <BottomTab.Navigator initialRouteName='Home'>
      <BottomTab.Screen
        name='Home'
        component={HomeScreen}
        options={{ tabBarIcon: ({ color, size }) => <FontAwesome name='home' size={size} color={color} />, headerShown: false }}
      />
      <BottomTab.Screen
        name='Planner'
        component={PlannerScreen}
        options={{ tabBarIcon: ({ color, size }) => <Entypo name='add-to-list' size={size} color={color} />, headerShown: false }}
      />
    </BottomTab.Navigator>
  );
};
