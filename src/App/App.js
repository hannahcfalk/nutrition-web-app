import React from 'react';
import './App.css';
import FoodList from '../components/FoodList/FoodList';
import Recipe from '../components/Recipe/Recipe';
import Card from 'react-bootstrap/Card';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      foods: [{
        id: 1,
        name: 'Black beans',
        type: 'beans',
        amount: 100,
      },
      {
        id: 2,
        name: 'Kale',
        type: 'salad leaf',
        amount: 500,
      },
      {
        id: 3,
        name: 'Salmon',
        type: 'fish',
        amount: 300,
      }],
      recipe: null,
    }
    this.getRecipe = this.getRecipe.bind(this);
    this.hideRecipe = this.hideRecipe.bind(this);
  }

  getRecipe() {
      console.log(this.state.recipe);
      this.setState({
        recipe: {
          id: 1,
          name: 'Black beans soup',
          method: 'Heat the blackbeans in a pan and then blend to make a soup',
          time: 30,
        }
      });
  }

  hideRecipe() {
    this.setState({
      recipe: null
    });
}

  render() {
    return (
      <div className="App">
        <h1>Virtual Kitchen</h1>
        <div className='row FoodCard'>
          <div className='col'>
            <Card>
              <Card.Body>
                <FoodList foods={this.state.foods} />
              </Card.Body>
            </Card>
          </div>
          <div className='col Buttons'>
            <button type="button" className="btn" onClick={this.getRecipe}>Find Recipe</button>
            <button type="button" className="btn">Add Recipe</button>
            <button type="button" className="btn">Add Food</button>
          </div>
      
        </div>
        <div>
          <Recipe recipe={this.state.recipe}/>
          <button type="button" className="btn" onClick={this.hideRecipe}>Hide Recipe</button>
        </div>

        
      </div>
    );
  }
}

export default App;
