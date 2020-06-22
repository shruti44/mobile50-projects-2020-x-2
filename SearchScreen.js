import React from "react";
import { View, FlatList, TextInput, TouchableOpacity, StyleSheet} from "react-native";
import fetchMovies from './api';
import Row from './Row';

export default class SearchScreen extends React.Component {
    state = {
        query: '',
        results: []
    };

    static navigationOptions = {
        headerTitle: 'Search Movies',
    };
    
    renderItem = ({item}) => (
        <TouchableOpacity onPress={() => this.props.navigation.navigate('MovieDetailsScreen', item)} >
            <Row {...item} />
        </TouchableOpacity>
    );
    
    getMovies = async () => {
        const results = await fetchMovies(this.state.query);
        this.setState({results: results});
    }

    handleQueryChange() {
        this.getMovies();
    }

    render() {
        return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <View style={{borderBottomWidth: 1, padding:5}} >
                <TextInput style={styles.searchField}
                    placeholder="Search for movies by title..." 
                    onSubmitEditing={() => this.handleQueryChange()} 
                    returnKeyType='search'
                    onChangeText={(text) => this.setState({query: text})}
                />
            </View>
            <FlatList style={{ flex: 1 }}
                data={this.state.results}
                renderItem={this.renderItem}
            />
            
        </View>
        );
    }
}


const styles = StyleSheet.create({
    searchField: {
        padding: 15,
        width :300,
        margin: 10 
    },

});