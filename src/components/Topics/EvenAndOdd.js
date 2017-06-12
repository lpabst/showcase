import React, {Component} from 'react';

class EvenAndOdd extends Component{

    constructor(){
        super();

        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: ''
        }
    }

    updateUserInput = (val) => {
        this.setState({
            userInput: val
        })
    }

    solveToyProblem = () => {
        var arr = this.state.userInput.split(',');
        var evens = [];
        var odds = [];
        for (var i = arr.length - 1; i >= 0; i --){
            if (arr[i] % 2 === 0){
                evens.push(arr[i])
            } else if (arr[i] % 2 === 1){
                odds.push(arr[i])
            }
        }

        this.setState({
            evenArray: evens,
            oddArray: odds
        })
    }

    render(){
        return (
            <div className='puzzleBox evenAndOddPB'>   
                <h4>Evens and Odds</h4>
                <input className='inputLine' onChange={ (e) => this.updateUserInput(e.target.value) } />
                <button className='confirmationButton' onClick={ () => this.solveToyProblem() }>Split</button>
                <span className='resultsBox'>Evens: { JSON.stringify(this.state.evenArray) } </span>
                <span className='resultsBox'>Odds: { JSON.stringify(this.state.oddArray) } </span>
            </div>
        );
    }
}

export default EvenAndOdd;
