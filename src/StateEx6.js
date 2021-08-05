import React from 'react'
//var url = "http://www.fb.com"

class UserData extends React.Component {

    constructor(props) {
        super(props);
        //step-1...
        this.state =
        {
            stateNames: ["AP", "TS", "UP", "MP", "TM"],
            counter: 0
        }
    }

    HandlestateChanges = () => {
        this.setState({ counter: this.state.counter + 1 })
    }


    render() {

        var { stateNames, counter } = this.state
        return (<>
            <div className="container p-5">

                <h4>State Object Demo6</h4>

                {/*Step-2*/}
                {/*{this.state.stateNames[this.state.counter]}*/}
                {stateNames[counter]}
                {/*Step-2*/}

                <br /><br /><br />

                <button onClick={this.HandlestateChanges}>
                    +
                </button>

            </div>
        </>)
    }
}
export default UserData;