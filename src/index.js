//import the React and ReactDom libraries
import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker'; 
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

//create a react component
//this is a parent
const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail
                    author="Sam" 
                    timeAgo="Todat at 4:45PM" 
                    userText="Nice blog post!" 
                    avatar={faker.image.image()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author="Alex" 
                    timeAgo="Todat at 2:00PM" 
                    userText="Useful information. Definitely worth my time!" 
                    avatar={faker.image.image()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author="Jane" 
                    timeAgo="Yesterday at 5:00PM" 
                    userText="Frankly, too controversial topic to comment" 
                    avatar={faker.image.image()}
                />
            </ApprovalCard>
        </div>
    );
};

//take the react component and show it on the screen
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);