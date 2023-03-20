import React from 'react'

class Bike extends React.Component {

    colours = ['blue', 'black', 'red', 'yellow','silver']

    constructor(props) {

        //super is used to inherit all the constructor functionality for the parent React.Component class
        super(props);

        //we are storing 3 different elements in state, for the make, model and colour of the bike, and we give them default values
        this.state = {
            make: this.props.make ? this.props.make : "Yamaha", //default to prop make if it exists
            model: "R15",
            colour: "blue"
        };
    }

    //try and create a function which changes the bike colour to a random value
    changeBikeColour = () => { 

    }

    makeRed = () => { //why would we use an arrow function here? what happens if it's not?
        this.setState({colour: 'red'})
    }
  
    render() {

        return (
            <div className="Bike componentBox">
                <h2>My {this.state.make}</h2>

                <p>It is a <span style={{color:this.state.colour}}>{this.state.colour}</span> {this.state.model}.</p>

                <button type="button" onClick={this.changeBikeColour}>Change to random colour</button>

                <button type="button" onClick={this.makeRed}>Make it red</button>
            </div>
        );
    }
  
}

export default Bike;

//now create hooks based functional component equivalent