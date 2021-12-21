import React from 'react';
import './FoodList.css';
import Food from '../Food/Food';

class FoodList extends React.Component {
    render() {
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Food</th>
                        <th scope="col">Type</th>
                        <th scope="col">Amount (g)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.foods.map(food => {
                        return <Food food={food} key={food.id}/>
                        })
                    }
                </tbody>
            </table>
        );
    }
};

export default FoodList;