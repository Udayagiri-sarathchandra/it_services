import React from 'react'
//var url = "http://www.fb.com"

class UserData extends React.Component {


    constructor(props) {
        super(props);
        //step-1
        this.state = { msg: "State Initialization Data....." }

    }

    //class_function...
    myfun = () => {
        return `${this.uname}-${this.email}`
    }

    render() {
        return (<>
            <div className="container p-5">

                <h4>State Object Demo1</h4>


                {/*Step-2*/}
                {this.state.msg}
                {/*Step-2*/}

                <br /><br /><br />

                <button onClick={() => this.setState({ msg: 'State is Changed/ Updated ....' })}>
                    Click_on_BTN_State_Changes
                </button>


            </div>
        </>)
    }
}
export default UserData;