import React from 'react'

//React.Components-> Parent Class
//userdData-> class-> Child 


//Global statements
var url = "http://www.fb.com"

class UserData extends React.Component {

    //class properties 
    uname = "kumar"
    email = "kumar@gmail.com"

    constructor(props) {
        super(props)
        console.log("...This is Cnstructor....")
    }

    //class_function
    myfun = () => {
        return `${this.uname}-${this.email}`
    }

    render() {
        return (<>

            <div className="container p-5">
                <h1>username is:{this.uname}</h1>
                <h2>Email is: {this.email} </h2>

                Class_outside_Statement: {url}

                <h3>{this.myfun()}</h3>

                <button onClick={() => window.alert("This is Event Handling in React ....")}>CLICK ON ME</button>

                <button onMouseOver={() => window.alert("This is Event Handling in React ....")}>MOUSEOVER</button>



            </div>

        </>)
    }
}

export default UserData;