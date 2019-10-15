import React, {Component} from "react";

export default class Movies extends Component {
    render() {
        let tempArray = [...this.props.movieData];
        return (
            <div>
                <span className="bold">Favorite Movies:</span>
                <ol className="moviesList">
                    {tempArray.map((element, index) => {
                        return <li key={index}>{element}</li>
                    })}
                </ol>
            </div>
        )
    }
}