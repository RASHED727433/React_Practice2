import React, { Component } from 'react'

class UserGreet extends Component {
    constructor() {
      super()
    
      this.state = {
         isLoggedIn : true
      }
    }
  render() {
    if (this.state.isLoggedIn) {
        return (
            <div>
                <h2>WELCOME DEAR USER</h2>
            </div>
        )
    }
    else{
        return(
            <div>
                <h2>
                    PLEASE LOGIN TO CONTINUE
                </h2>
            </div>
            // if, else method
        )
    }
    // return (
    //   <div>
    //     <h2>HELLO HOW ARE YOU</h2>
    //     <h2>hello how are you</h2>
    //   </div>
    // )
  }
}

////////////////////////////////ANOTHER METHOD OF CONDITIONAL RENDERING////////////////////

class UserGreet2 extends Component {
    constructor() {
      super()
    
      this.state = {
         isLoggedIn : true
      }
    }
  render() {
    let message 
    //element variables method
    if (this.state.isLoggedIn) {
        message = <div><h1>WELCOME USER</h1></div>
    } else {
        message = <div><h1>PLEASE LOGIN</h1></div>
    }
    return<div>{message}</div>
  }
}

////////////////////////////ANOTHER METHOD////////////////


class UserGreet3 extends Component {
    constructor() {
      super()
    
      this.state = {
         isLoggedIn : true
      }
    }
  render() {
    return(
        this.state.isLoggedIn?<h2>welcome user</h2>:<h2>welcome guest</h2>
        // using a ternary operator
    )
   
  }
}

///////////////////////ANOTHER (-_-) ///////////////////////


class UserGreet4 extends Component {
    constructor() {
      super()
    
      this.state = {
         isLoggedIn : true
      }
    }
  render() {
    return(
    this.state.isLoggedIn && <h2>WELCOME USER</h2>
    // this method returns the statement only when its true. if its false, it returns nothing
    // its called a short circuit method
    )  
  }
}

export {UserGreet, UserGreet2, UserGreet3, UserGreet4}