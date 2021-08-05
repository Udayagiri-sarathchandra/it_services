import React from 'react'
//var url = "http://www.fb.com"

class UserData extends React.Component {

    constructor(props) {
        super(props);
        //step-1...
        this.state =
        {
            uname: ''
        }
    }

    handleUnameTextbox = (input) => {
        this.setState({ uname: input.target.value })
    }


    HandleFormData = (form) => {
        form.preventDefault();
        alert(this.state.uname)
    }



    render() {

        //  var { stateNames, counter } = this.state
        return (<>
            <div className="container p-5">

                <h4> Form Handlings .. </h4>
                <br /><br />

                <form onSubmit={this.HandleFormData.bind(this)}>
                    <label>Enter Username</label> <br />
                    <input
                        type="text"
                        value={this.state.uname}
                        onChange={this.handleUnameTextbox.bind(this)} />
                    <button type="submit">GET FORM DATA</button>


                </form>

                <br /><br />



            </div>
        </>)
    }
}
export default UserData;