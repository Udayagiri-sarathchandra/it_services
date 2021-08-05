import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
let restapi_url = "https://jsonplaceholder.typicode.com/users"

export default class RestDetailsPage extends Component {

    constructor(props) {
        super(props)

        this.state = {}

    }

    componentDidMount() {
        axios.get(`${restapi_url}/${this.props.match.params.phone}`)
            .then((res) => this.setState(res.data))
            .catch(() => console.error("APIDATA FECTHING FAILED"))

        /*
            fetch(restapi_url)
                .then(res => res.json())
                .then((result) => this.setState({ users: result }))
        */
    }

    render() {
        console.log(this.props);
        var { id, name, username, email, phone, website } = this.state

        return (
            <div className="text-start p-5">
                <h2>Record No {this.props.match.params.phone} Details are:</h2>


                <ul type="none" className="h1 text-success" >
                    <li>ID NO :{id}</li>
                    <li>Name:{name}</li>
                    <li>{username}</li>
                    <li>{email}</li>
                    <li>{phone}</li>
                    <li>{website}</li>
                </ul>

                <Link to="/Restapi">GO BACK</Link>

            </div>
        )
    }
}