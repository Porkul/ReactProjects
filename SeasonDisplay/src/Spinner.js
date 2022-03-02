import React from 'react'; 

const Spinner = (props) => {
    return (
        <div className='ui active dimmer '>
            <div className='ui big text loader'>{props.message}</div>
        </div>
    );
};

//Basically the same as {props.message  || 'some default text'}
Spinner.defaultProps = {
    message: 'Loading...'
};

export default Spinner;