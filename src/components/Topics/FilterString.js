import React, {Component} from 'react';

class FilterString extends Component{

    constructor(){
        super();

        this.state = {
            unfilteredArray: ['cheese', 'pizza', 'tomatoes', 'garlic', 'spinach', 'onions'],
            userInput: '',
            filteredArray: []
        }
    }

    updateUserInput = (val) => {
        this.setState({
            userInput: val
        })
    }

    filterArray = () => {
        var arr = this.state.unfilteredArray.slice();
        var input = this.state.userInput;
        
        for (var i = arr.length - 1; i >= 0; i--){
            if (!arr[i].startsWith(input)){
                arr.splice(i, 1);
            }
        }

        this.setState({
            filteredArray: arr
        })
    }

    render(){
        return (
            <div className="puzzleBox filterStringPB">
                <h4>Filter String</h4>
                <span className="puzzleText">Original List: {this.state.unfilteredArray}</span>
                <input className="inputLine" onChange={ (e) => this.updateUserInput(e.target.value) } />
                <button className="confirmationButton" onClick={ () => this.filterArray() }>Filter List</button>
                <span className="resultsBox filterStringRB">Filtered List: {this.state.filteredArray}</span>
            </div>  
        );
    }
}

export default FilterString;
