import React from 'react';
import unsplash from "../api/unsplash";
import SearchBar from './SearchBar';
import ImageList from './ImageList'


// App.js parent component
class App extends React.Component {
    state = { images: [] }
    //callback function
    onSearchSubmit = async term => {
        const response = await unsplash.get('/search/photos', {
            params: {query: term},
        });

        this.setState({images: response.data.results});
    };

    render(){
        return (
            <div className="ui container" style={{marginTop: '10px'}}> 
            {/* We pass onSearchSubmit callback function down to - the child SearchBar component-  as the props onSubmit  */}
                <SearchBar onSubmit={this.onSearchSubmit} />
                <ImageList images={this.state.images}/>
            </div>
        );
    }
}

export default App;