import * as React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import axios from 'axios'
export default class HomeScreen extends React.Component {
    constructor() {
        super()
        this.state = {
            movieDetails: {}
        }
    }
    componentDidMount() {
        this.getMovie()
    }
    timeConvert(num) {
        var hours = Math.floor(num / 60)
        var min = num % 60
        return `${hours} hrs ${min} mins`
    }
    getMovie = () => {
        const url = "http://localhost:5000/get-movies"
        axios.get(url).then(response => {
            var details = response.data.data
            details['duration'] = this.timeConvert(details.duration)
            this.setState({ movieDetails: details })
        }).catch(error => {
            console.log(error.message)
        })
    }
    likedMovie = () => {
        const url = "http://localhost:5000/liked-movies"
        axios.post(url).then(response=>{
            this.getMovie()
        }).catch(error => {
            console.log(error.message)
        })
    }
    dislikedMovie = () => {
        const url = "http://localhost:5000/not-liked-movies"
        axios.post(url).then(response=>{
            this.getMovie()
        }).catch(error => {
            console.log(error.message)
        })
    }
    notWatchedMovie = () => {
        const url = "http://localhost:5000/did-not-watch"
        axios.post(url).then(response=>{
            this.getMovie()
        }).catch(error => {
            console.log(error.message)
        })
    }

    render() {
        return (
            <View>
                <Text>
                    Welcome to Movies Recommendations App
                </Text>
                <TouchableOpacity onPress={this.likedMovie}>
                    <Text>
                        LIKE
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.dislikedMovie}>
                    <Text>
                        DISLIKE
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.notWatchedMovie}>
                    <Text>
                        NOT WATCHED
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}