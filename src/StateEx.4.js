import React from 'react'
//var url = "http://www.fb.com"

class UserData extends React.Component {


    constructor(props) {
        super(props);
        //step-1...
        this.state =
        {
            uname_errors: "",
            status: false
        }
    }

    HandlestateChanges = () => {

        this.setState({ status: true })

        if (this.state.status) {
            this.setState({ uname_errors: 'Please Enter Username' })
        }
    }

    render() {
        return (<>
            <div className="container p-5">

                <h4>State Object Demo4</h4>


                {/*Step-2*/}
                {this.state.uname_errors}
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