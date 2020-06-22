import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createStackNavigator, createAppContainer, createBottomTabNavigator } from "react-navigation";
import SearchScreen from './SearchScreen';
import MovieDetailsScreen from './MovieDetailsScreen';
import SettingsScreen from './SettingsScreen';

const MainNavigator = createStackNavigator(
  {
    SearchScreen,
    MovieDetailsScreen,
  },
  {
    initialRouteName: "SearchScreen",
  }
);

const Settings = createStackNavigator(
  {
    SettingsScreen
  }
);

const TabNavigator = createBottomTabNavigator({
    Search: MainNavigator,
    Settings,
  },
  {
    initialRouteName: 'Search',
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Search') {
          iconName = `ios-search`;
        } else if (routeName === 'Settings') {
          iconName = `ios-options`;
        }

        return <Ionicons name={iconName} size={horizontal ? 20 : 25} color={tintColor} />;
      },
    }),
  }
);

const AppNavigator = createAppContainer(TabNavigator);

export default class App extends React.Component {
  render() {
    return (
      <AppNavigator />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
