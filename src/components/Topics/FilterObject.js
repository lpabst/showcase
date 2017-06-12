import React, {Component} from 'react';

class FilterObject extends Component{
    constructor(){
        super();

        this.state = {
            unFilteredArray: [{name: 'Loren'}, {name: 'Stephen'}, {name: 'Clayton'}],
            userInput: '',
            filteredArray: []
        }
    }

    updateUserInput = (val) => {
        this.setState({
            userInput: val
        })
    }

    solveToyProblem = () => {
        var arr = this.state.unFilteredArray.slice();
        var input = this.state.userInput;

        for (var i = arr.length-1; i >= 0; i--){
            if (arr[i].name != input){
                arr.splice(i, 1);
            }
        }
        
        this.setState({
            filteredArray: arr
        })
    }

    render(){
        return (
            <div className='puzzleBox filterObjectPB'>   
                <h4>Filter Object (case sensitive)</h4>
                <span className='puzzleText'>Original List: { JSON.stringify(this.state.unFilteredArray) }</span>
                <input className='inputLine' onChange={ (e) => this.updateUserInput(e.target.value) } />
                <button className='confirmationButton' onClick={ () => this.solveToyProblem() }>Filter</button>
                <span className='resultsBox filterObjectRB'>Filtered Results: { JSON.stringify(this.state.filteredArray) }</span>
            </div>
        );
    }
}

export default FilterObject;
