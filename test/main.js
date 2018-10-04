
import React, { Component } from 'react';
import {
Platform,
StyleSheet,
Text,
View
} from 'react-native';

import StarRating from './StarRating/star-rating';

Props = {};
export default class Main extends Component{
render() {

    const ratingObj = {
        ratings: 3,
    }
    return (
    <View style={styles.container}>
        <StarRating ratingObj={ratingObj}/>
    </View>
    );
}
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
}
});