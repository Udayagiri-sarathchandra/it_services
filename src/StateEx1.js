import React from 'react'
//var url = "http://www.fb.com"

class UserData extends React.Component {


    constructor(props) {
        super(props);
        //step-1
        this.state = { msg: "State Initialization Data....." }

    }

    HandlestateChanges = () => {
        this.setState({ msg: 'State is Changed/ Updated ....' })
    }

    render() {
        return (<>
            <div className="container p-5">

                <h4>State Object Demo2</h4>


                {/*Step-2*/}
                {this.state.msg}
                {/*Step-2*/}

                <br /><br /><br />

                <button onClick={this.HandlestateChanges}>
                    Click_on_BTN_State_Changes
                </button>


            </div>
        </>)
    }
}
export default UserData;