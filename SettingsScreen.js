import React from "react";
import { View, Text, FlatList, TextInput, TouchableOpacity, StyleSheet, Switch, Button} from "react-native";

let settingsBooleans;

export default class SettingsScreen extends React.Component {
    state = {
        showPlot: false,
        showYear: false,
        showRuntime: false,
        showDirector: false,
        showActors: false,
        showAwards: false,
        showBoxOffice: false,
        showimdbRating: false,
    }

    static navigationOptions = {
        headerTitle: 'Settings',
    };

    toggleSwitch(item) {
        this.setState({[item]: !this.state[item]});
    }

    render() {
        settingsBooleans = this.state;
        return(
            <View style={styles.container}>
                <View style={styles.switchContainer}><Text>Show Plot</Text><Switch onValueChange={() => this.toggleSwitch('showPlot')} value={this.state.showPlot} /></View>
                <View style={styles.switchContainer}><Text>Show Year</Text><Switch onValueChange={() => this.toggleSwitch('showYear')} value={this.state.showYear} /></View>
                <View style={styles.switchContainer}><Text>Show Runtime</Text><Switch onValueChange={() => this.toggleSwitch('showRuntime')} value={this.state.showRuntime} /></View>
                <View style={styles.switchContainer}><Text>Show Director</Text><Switch onValueChange={() => this.toggleSwitch('showDirector')} value={this.state.showDirector} /></View>
                <View style={styles.switchContainer}><Text>Show Actors</Text><Switch onValueChange={() => this.toggleSwitch('showActors')} value={this.state.showActors} /></View>
                <View style={styles.switchContainer}><Text>Show Awards</Text><Switch onValueChange={() => this.toggleSwitch('showAwards')} value={this.state.showAwards} /></View>
                <View style={styles.switchContainer}><Text>Show Box Office Total</Text><Switch onValueChange={() => this.toggleSwitch('showBoxOffice')} value={this.state.showBoxOffice} /></View>
                <View style={styles.switchContainer}><Text>Show IMDB Rating</Text><Switch onValueChange={() => this.toggleSwitch('showimdbRating')} value={this.state.showimdbRating} /></View>

                <Button title="Confirm Changes" onPress={() => this.props.navigation.navigate('SearchScreen')} />
            
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: '10%',
        flexDirection: 'column',
        alignItems: 'center', 
        alignContent: "center",
    },
    switchContainer: {
        width: '80%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        alignItems: 'center',
        borderBottomWidth: 1,
    },
});

export {settingsBooleans};
