import React from 'react';

let Pagination = props => {
    if (props.page == 1 ) {
        return (
            <div class="container-pages">
            <span class="circle" 
            style={{backgroundColor: "#bbb"}} ></span>
            <span class="circle" onClick={props.changePage}></span>
          </div>
    )
    } else {
        return (
            <div class="container-pages">
            <span class="circle" onClick={props.changePage}></span>
            <span class="circle" style={{backgroundColor: "#bbb"}} ></span>
          </div>
    )    }

}

export default Pagination