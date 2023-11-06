import React from "react";
import '../Style/Home.css';
import axios from "axios";
import navHook from "./nav";


class Welcome extends React.Component {

    constructor() {
        super();
        this.state = {
            restaurant: [],
            inputText: undefined,
            suggestions: []
        }
    }

    handleLocation = (location) => {
        const locationId = location.target.value;
        console.log(locationId)
        axios({
            url: `http://localhost:5500/restaurants/${locationId}`,
            method: 'GET',
            headers: { 'Content-Type': 'application/JSON' },
        })
            .then(res => {
                this.setState({ restaurant: res.data.restaurants })
            })
            .catch(err => console.log(err))
    }

    handleInput = (event) => {
        const { restaurant } = this.state;
        console.log(restaurant)
        const inputText = event.target.value;
        //console.log(event)
        let suggestions = [];

        suggestions = restaurant.filter(item => item.name.toLowerCase().includes(inputText.toLowerCase()));
        this.setState({ inputText, suggestions })
    }

    showSuggestions = () => {
        const { suggestions, inputText } = this.state;

        if (suggestions.length == 0 && inputText == undefined) {
            return null;
        }

        if (suggestions.length > 0 && inputText == '') {
            return null;
        }

        if (suggestions.length == 0 && inputText) {
            return (
                <li> No Search Results Found </li>
            )
        }

        return (
            suggestions.map((item) => (
                <li onClick={() => this.selectRestaurant(item._id)}>
                    <img className='sugg_img' src={`${item.thumb}`} alt="" />
                    <span className='fw-bolder sugg_title'>{`${item.name}`}</span> <br />
                    <span className='sugg_loca'>{`${item.locality}`}</span> <hr className='sugg_line' />
                </li>
            ))
        );
    }

    selectRestaurant = (value) => {
        this.props.navigate(`/details?restaurant=${value}`);
    }

    render() {

        // const { location } = this.state

        const { locationData } = this.props;
        //const { suggestions } = this.state

        return (
            <div>

                {/* <!--Banner Part (upper)--> */}

                <div className="bg-cover bg-image d-flex">
                    <div className="container mt-3">
                        <div className="row">
                            {/* <div className="col text-end">
                                <button type="button" className="btn btn-outline-light">Login</button>
                                <button type="button" className="btn btn-outline-light">Create an account</button>
                            </div> */}
                        </div>
                        <div className="row mt-5">
                            <div className="col d-flex justify-content-center">
                                <div className="text-danger circle">
                                    <h2 className="logo">e!</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col d-flex justify-content-center">
                                <h3 className="text-light line">Find the best restaurants, cafés, and bars</h3>
                            </div>
                        </div>
                        <div className="row mt-3 d-flex justify-content-center">
                            <div className="col selectbar">
                                <select className="form-control input1 py-2" onChange={this.handleLocation}>

                                    {locationData.map((item) => {
                                        // console.log(item)
                                        return (
                                            <option value={item.city_id}>{item.name}</option>
                                        )

                                    })}


                                </select>

                            </div>
                            <div className="col input-group searchbar">
                                <i className="input-group-text bi bi-search input2"></i>
                                <input type="text" className="form-control input2 py-2" placeholder="Search for restaurants" onChange={this.handleInput} />
                                <ul className='suggestion'>{this.showSuggestions()}</ul>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default navHook(Welcome);
