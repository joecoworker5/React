import React from 'react';

const Spinner = (props) => {
    return (
         <div className="ui active dimmer">
             <div className="ui big text loader">
                 {props.message }
             </div>
         </div>
    );
    // {props.message  || 'Loading...'}
}
//預設值
Spinner.defaultProps = {
    message: 'Loading...'
}
export default Spinner;