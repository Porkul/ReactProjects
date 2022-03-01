import React from 'react';

const CommentDetail = (props) => {
    return (
        <div className="comment">
            <a href="/" className="avatar">
                <img alt="avatar" src={props.avatar} />
            </a>
            <div className="content">
                <a href="/" className="autor">
                    {props.author}
                </a>
                <div className="metadata">
                    <span className="date">{props.timeAgo}</span>
                </div>
                <div className="text">
                    <span className="date">{props.userText}</span>
                </div>
            </div>
        </div>
    );

};

//make CommentDetail available to every other file inside of project
export default CommentDetail;
