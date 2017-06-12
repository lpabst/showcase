import React, {Component} from 'react';

class Palindrome extends Component{
    constructor(){
        super();

        this.state = {
            userInput: '',
            palindrome: ''
        }
    }

    updateUserInput = (val) => {
        this.setState({
            userInput: val
        })
    }

    isPalindrome = () => {
        var input = this.state.userInput.toLowerCase();
        var reverse = input.split('').reverse().join('');
        if (input == reverse){
            this.setState({
                palindrome: 'true'
            })
        }else{
            this.setState({
                palindrome: 'false'
            })
        }
    }

    render(){
        return (
            <div className="puzzleBox filterStringPB">
                <h4>Palindrome</h4>
                <input className="inputLine" onChange={ (e) => this.updateUserInput(e.target.value) } />
                <button className="confirmationButton" onClick={ () => this.isPalindrome() }>Filter List</button>
                <span className="resultsBox">This is a palindrome: {this.state.palindrome}</span>
            </div>  
        );
    }
}

export default Palindrome;
