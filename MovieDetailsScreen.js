import React from "react";
import { StyleSheet, View, Text, Image, ScrollView } from "react-native";
import fetchMovieDetails from './apiSingleResult';
import {settingsBooleans} from './SettingsScreen';

export default class MovieDetailsScreen extends React.Component {
    state = {
        result: {},
        settings: {
            showPlot: (typeof settingsBooleans !== 'undefined' ? settingsBooleans.showPlot : false),
            showYear: (typeof settingsBooleans !== 'undefined' ? settingsBooleans.showYear : false),
            showRuntime: (typeof settingsBooleans !== 'undefined' ? settingsBooleans.showRuntime : false),
            showDirector: (typeof settingsBooleans !== 'undefined' ? settingsBooleans.showDirector : false),
            showActors: (typeof settingsBooleans !== 'undefined' ? settingsBooleans.showActors : false),
            showAwards: (typeof settingsBooleans !== 'undefined' ? settingsBooleans.showAwards : false),
            showBoxOffice: (typeof settingsBooleans !== 'undefined' ? settingsBooleans.showBoxOffice : false),
            showimdbRating: (typeof settingsBooleans !== 'undefined' ? settingsBooleans.showimdbRating : false),
        },
    };

    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: navigation.getParam('title')
        };
    };
    
    componentDidMount() {
        this.getMovieDetails();
    }
    

    getMovieDetails = async () => {
        const key = this.props.navigation.getParam('key');
        const result = await fetchMovieDetails(key);
        this.setState({result: result});
    }


    render() {
        const { settings } = this.state;
        const { Title, Year, Poster, Rated, Runtime, Director, Actors, Plot, imdbRating, BoxOffice, Awards } = this.state.result;
        return (
            <ScrollView contentContainerStyle={{ alignItems: "center", justifyContent: "space-around", alignContent:'center' }}>
                <Text style={styles.title}>{Title}</Text>
                <Image style={styles.image}
                    source={{uri: `${Poster}`}}
                />
                <Text style={styles.year}>{Rated}</Text>
                {settings.showPlot && <Text style={styles.plot}>{Plot}</Text>}
                {settings.showYear && <Text style={styles.plot}>{Year}</Text>}
                {settings.showRuntime && <Text style={styles.plot}>{Runtime}</Text>}
                {settings.showDirector && <Text style={styles.plot}>Directed by {Director}</Text>}
                {settings.showActors && <Text style={styles.plot}>Starring {Actors}</Text>}
                {settings.showAwards && <Text style={styles.plot}>{Awards}</Text>}
                {settings.showBoxOffice && <Text style={styles.plot}>Box Office Total: {BoxOffice}</Text>}
                {settings.showimdbRating && <Text style={styles.plot}>IMDB Rating: {imdbRating}</Text>}
            </ScrollView>
        );
    }
}


const styles = StyleSheet.create({
    image: {
        width: 300,
        height: 300,
        padding: 25
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 25
    },
    year: {
        fontSize: 10,
    },
    plot: {
        padding: 15,
        textAlign: 'center',
    },
    year: {
        fontSize: 10,
    },
});