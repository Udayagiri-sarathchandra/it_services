import React from 'react'
//var url = "http://www.fb.com"

class UserData extends React.Component {

    constructor(props) {

        console.log("****Constructor****")

        super(props);
        //step-1...
        this.state =
        {
            uname: 'Sarath',
            email: ''
            //pwd:''



        }
    }




    static getDerivedStateFromProps() {
        console.log("*******getDerived State From Props");
        //   pwd: this.props.password
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


    handleStateChane = () => {
        this.setState({ uname: 'sarath.chandra' })
    }


    render() {
        console.log("****Render****")

        var { stateNames, counter } = this.state
        return (<>
            <div className="container p-5">

                <h4> Form Handlings .. </h4>
                <h5>Uname is: {this.state.uname}</h5>

                <br /><br />

                <button onClick={this.handleStateChane}>Click</button>


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

            </div >
        </>)


    }


    componentDidMount() {
        console.log("*******Component Did Mount*********")
        //.....API CALLING Data.....
    }


    /*
        componentWillUnmount() {
            alert("Your are closing/Removeing Your Component logic/data")
            console.log("*******Component Will UnMount*********")
        }
    */

}
export default UserData;


//******************************************************** */
