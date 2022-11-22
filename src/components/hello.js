import React from 'react'

const hello = () => {
  //return (
    //<div>
      //<h1> Hello World</h1>
    //</div>
  //)
  return React.createElement('div',{id: 'hello',class:'dummyclass'},
  React.createElement('h1',null,'Hello World'));
}

export default hello