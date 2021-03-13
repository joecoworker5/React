import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import faker from 'faker';
import ApprovalCard from './ApprovalCard'
const App = () => {
  // <img alt="avatar" src="https://source.unsplash.com/random"/> 
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <div>
          <h4>Warning</h4>
          Are you sure you want to do this ?
        </div>
      </ApprovalCard>
      <ApprovalCard >
        <CommentDetail 
            author="Sam" 
            timeAgo="Today at 4:45PM" 
            content="nice blog" 
            avatar={faker.image.image()}
        />
      </ApprovalCard>
      <ApprovalCard >
        <CommentDetail 
          author="Alex" 
          timeAgo="Today at 2:45AM" 
          content="good blog" 
          avatar={faker.image.image()}
        />
      </ApprovalCard>
      <ApprovalCard >
        <CommentDetail 
          author="Jane" 
          timeAgo="Today at 5:00PM" 
          content="excellent blog" 
          avatar={faker.image.image()}
        />
      </ApprovalCard>
      
    </div>
  );
}
ReactDOM.render(
    <App />,
  document.getElementById('root')
);

