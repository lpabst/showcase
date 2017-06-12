import React, {Component} from 'react';

class EvenAndOdd extends Component{

    constructor(){
        super();

        this.state = {
            evenArray = [],
            oddArray = [],
            userInput = ''
        }
    }

    updateUserInput = (val) => {
        this.setState({
            userInput: val
        })
    }

    solveToyProblem = () => {

    }

    render(){
        return (
            <div className='puzzleBox evenAndOddPB'>   
                <h4>Evens and Odds</h4>
                <input className='inputLine' onChange={ (e) => this.updateUserInput(e.target.value) } />
                <button className='confirmationButton' onClick={ () => this.solveToyProblem() }></button>
                <span className='resultsBox'>{ this.state.evenArray }</span>
                <span className='resultsBox'>{ this.state.oddArray }</span>
            </div>
        );
    }
}

export default EvenAndOdd;
