import React from 'react';
import './Food.css';

class Food extends React.Component {
    render() {
        return (
            <tr>
                <td>{this.props.food.name}</td>
                <td>{this.props.food.type}</td>
                <td>{this.props.food.amount}</td>
            </tr>

        );
    }
};

export default Food;