import React from "react";
import '../Style/Home.css';
import navHook from "./nav";

class QuickSearchItems extends React.Component {

    navigateFilterPage = (id) => {
        this.props.navigate(`/filter?type=${id}`);
    }



    render() {

        const { data } = this.props;

        return (
            <div>
                <div className="d-flex flex-wrap ">
                    {data.map((meal) => {
                        return (
                            <div onClick={() => this.navigateFilterPage(meal.mealtype)}>
                                <div className="d-flex box mt-4" style={{ border: '1px solid greenyellow' }}>
                                    <div className="l-box">
                                        <img src={`./img/${meal.image}`} className="img-fluid img-qs" alt="" />
                                    </div>
                                    <div className="r-box">
                                        <h4 className="card-title">{meal.mealtype}</h4>
                                        <p className="card-content">{meal.content}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}

                </div>
            </div>
        )
    }
}

export default navHook(QuickSearchItems);