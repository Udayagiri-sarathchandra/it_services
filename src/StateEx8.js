import React from 'react'
//var url = "http://www.fb.com"

class UserData extends React.Component {

    constructor(props) {
        super(props);
        //step-1...
        this.state =
        {
            uname: '',
            email: ''
        }
    }

    handleUnameTextbox = (input) => {
        this.setState({ uname: input.target.value })
    }

    handleEmailTextbox = (input) => {
        this.setState({ email: input.target.value })
    }

    HandleFormData = (form) => {
        form.preventDefault();
        alert(`  Name: ${this.state.uname} \n 
                 Email: ${this.state.email} 
            `)
    }

    render() {

        //var { stateNames, counter } = this.state
        return (<>
            <div className="container p-5">

                <h4> Form Handlings .. </h4>
                <br /><br />

                <form onSubmit={this.HandleFormData.bind(this)}>

                    <label>Enter Username</label> <br />
                    <input
                        type="text"
                        value={this.state.uname}
                        onChange={this.handleUnameTextbox.bind(this)} required />

                    <br />

                    <label>Enter Email</label> <br />
                    <input
                        type="text"
                        value={this.state.email}
                        onChange={this.handleEmailTextbox.bind(this)} required />

                    <br /><br />

                    <button type="submit">GET FORM DATA</button>

                </form>

                <br /><br />



            </div>
        </>)
    }
}
export default UserData;