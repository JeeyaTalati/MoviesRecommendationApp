import React from "react";
import HomeScreen from './Screens/Home';
import PopularMovies from './Screens/PopularMovies';
import RecommendedMovies from './Screens/RecommendedMovies';

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createMaterialTopTabNavigator } from "react-navigation-tabs";


export default function App() {
  return (
    <AppContainer />
  );
}

const AppTabNavigator = createMaterialTopTabNavigator({
  RecommendedMovies: {
    screen: RecommendedMovies,
    navigationOptions: {
      tabBarLabel: "Recommended Movies",
      tabBarOptions: {
        tabStyle: { backgroundColor: "blue" },
        labelStyle: { color: "white" }
      }
    }
  },
  PopularMovies: {
    screen: PopularMovies,
    navigationOptions: {
      tabBarLabel: "Popular Movies",
      tabBarOptions: {
        tabStyle: { backgroundColor: "blue" },
        labelStyle: { color: "white" }
      }
    }
  }
})

const AppStackNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      headerShown: false
    }
  },
  AppTopTab: {
    screen: AppTabNavigator,
    navigationOptions: {
      headerTitle: "Recommended Movies",
      headerTitleStyle: {
        color: "black",
        fontWeight: "bold"
      }
    }
  }
},
  {
    initialRouteName: "Home"

  }
)

const AppContainer = createAppContainer(AppStackNavigator)

