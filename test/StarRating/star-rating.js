
import React, { Component } from 'react';
import {
	StyleSheet,
	View,
    Text,
    Image,
} from 'react-native';

Props = {
    ratingObj : {
        ratings: Number,
    }
};

export default class StarRating extends Component{
	render() {
        let ratingObj = this.props.ratingObj;

        let stars = [];
        for (var i = 1; i <= 6; i++) {
            // path to filled stars
			let path = require('./star-filled.png');
			// ratings is lower,  path to unfilled stars
			if (i > ratingObj.ratings) {
				path = require('./star-unfilled.png');
			}
			// Push the Image tag in the stars array
            stars.push((<Image style={styles.image} source={path} key={i}/>));
		}
		return (
			<View style={ styles.container }>
                {stars}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
        backgroundColor: "transparent",
        flexDirection: 'row',
    },
    image: {
        width: 12,
        height: 12
    }
});