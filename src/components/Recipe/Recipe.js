import React from 'react';
import './Recipe.css';

class Recipe extends React.Component {

    constructor(props) {
        super(props);

    }

    render() {
        console.log(this.props.recipe)
        if (this.props.recipe) {
            return (
                <div>
                    <h1>{this.props.recipe.name}</h1>
                    <h5>Time: {this.props.recipe.time} mins</h5>
                    <p>{this.props.recipe.method}</p>
                </div>
            );
        };
        return (
            <div>
                <p>No recipe currently displayed</p>
                <i>Click the 'Find Recipe' button above to generate one!</i>
            </div>
        );

    };
};

export default Recipe;