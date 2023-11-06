import React from "react";
import axios from "axios";
import Welcome from "./Welcome";
import '../Style/Home.css';
import QuickSearch from './QuickSearch';


class Home extends React.Component {

    constructor() {
        super();
        this.state = {
            locations: [],
            mealtype: []
        }
    }
    componentDidMount() {
        axios({
            url: 'http://localhost:5500/locations',
            method: 'GET',
            headers: { 'ContentType': 'application/JSON' }
        })
            .then(res => {
                this.setState({ locations: res.data.locations })
            })
            .catch(err => console.log(err))

        axios({
            url: 'http://localhost:5500/mealtype',
            method: 'GET',
            headers: { 'ContentType': 'application/JSON' }
        })
            .then(res => {
                this.setState({ mealtype: res.data.mealtype })
            })
            .catch(err => console.log(err))
    }

    render() {

        const { locations } = this.state;
        const { mealtype } = this.state;

        return (
            <div>
                < Welcome locationData={locations} />


                <QuickSearch mealtypeData={mealtype} />

            </div>
        )
    }
}
export default Home;