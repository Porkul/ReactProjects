import React from 'react';

//When the SearchBar component is constructed, it is provided this props automatically, since it is a class.
class SearchBar extends React.Component {
    state = {term: ''};

    //callback function will be invoked when the user performs a form submit event <form onSubmit={this.onFormSubmit}>.
    onFormSubmit = event => {
        event.preventDefault();

        //When the onFormSubmit callback is invoked, we also invoke the callback that was passed from the App.js component
        //with whatever the current "term" state is inside of the SearchBar component.
        //this.props.onSubmit is actually the onSearchSubmit callback from the App.js component:
        this.props.onSubmit(this.state.term);
        
    };

    render() {
        return (
            <div className="ui segment"> 
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                    <label>Image Search</label>
                    <input 
                        type="text" 
                        value={this.state.term}
                        onChange={e => this.setState({term: e.target.value})}
                    />  
                    </div>
                </form>
            </div>
        );
    }
};

//onChange={this.onInputChange} === onChange = {(event) => console.log(event.target.value)} 
// event sometimes is "e"
export default SearchBar;