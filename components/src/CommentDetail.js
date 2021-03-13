import React from 'react';


const CommentDetail = (props) => {S
    return (
    <div className="comment">
        <a href="/" className="avatar">
            <img alt="avatar" src={props.avatar}/>
        </a>
        <div className="content">
            D<a href="/" className="author">
                {props.author}
            </a>
            <div className="content">
                <span className="date">{props.timeAgo}</span>
            </div>
            <div className="text">{props.content}</div>
        </div>
    </div>
    );
}

export default CommentDetail;