import './SeasonDisplay.css';
import React from 'react';

//configuration
const seasonConfig = {
    summer : {
        text:'Lets hit the beach',
        iconName: 'sun'
    },
    winter: {
        text:'Burr it is chilly',
        iconName:'snowflake' 
    }
};

//helpet func
const getSeoson = (lat, month) => {
    if (month > 2 && month < 9 ) {
        return lat > 0 ? 'summer' : 'winter';
    } else {
        return lat >  0 ? 'summer' : 'winter';
    }
};

//function component
const SeasonDisplay = (props) => {
    const season = getSeoson(props.lat, new Date().getMonth());
    const {text, iconName} = seasonConfig[season]; // {text, iconName} , object property accessor method 

    return (
        <div  className={`season-display ${season}`}> 
            <i className={`icon-left massive ${iconName} icon`} />
            <h1>{text}</h1>
            <i className={`icon-right massive ${iconName} icon`} />
        </div>
    );
};

export default SeasonDisplay;

/*
render() {
    //return is a requirement
    if(this.state.errorMessage && !this.state.lat){
       return <div>Error: {this.state.errorMessage}</div> 
    }

    if(!this.state.errorMessage && this.state.lat){
        return <div>Latitude: {this.state.lat}</div> 
     }
    
    return <div> Loading!</div>

};
*/