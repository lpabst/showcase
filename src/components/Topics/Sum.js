import React, {Component} from 'react';

class Sum extends Component{

    constructor(){
        super();

        this.state = {
            number1: 0,
            number2: 0,
            sum: 0
        }
    }

    updateNum1 = (val) => {
        this.setState({
            number1: val
        })
    }

    updateNum2 = (val) => {
        this.setState({
            number2: val
        })
    }

    sumNumbers = () => {
        var {number1, number2} = this.state;
        var result = number1/1 + number2/1;
        this.setState({
            sum: result
        })
    }

    render(){
        return (
            <div className="puzzleBox sumPB">
                <h4>Sum</h4>
                <input className="inputLine" onChange={ (e) => this.updateNum1(e.target.value) } />
                <input className="inputLine" onChange={ (e) => this.updateNum2(e.target.value) } />
                <button className="confirmationButton" onClick={ () => this.sumNumbers() }>Sum Number</button>
                <span className="resultsBox">Sum: {this.state.sum}</span>
            </div>  
        );
    }

}

export default Sum;
