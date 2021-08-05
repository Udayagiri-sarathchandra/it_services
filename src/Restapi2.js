import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
let restapi_url = "https://jsonplaceholder.typicode.com/photos"
export default class Restapi extends Component {
    constructor(props) {
        super(props)

        this.state = {
            users: ['']
        }
    }
    componentDidMount() {
        axios.get(restapi_url)
            .then((res) => this.setState({ users: res.data }))
            .catch(() => console.error("Api Data Fetching Failed"))
    }
    render() {
        return (<>
            <div className="container p-5">
                <h2 className="text-center pt-2">
                    REST API CALLS WITH AXIOS PACKAGE
                </h2>
                <table className="table table-borered table-dark">
                    <thead className="table-light text-center">
                        <tr>
                            <th>ID</th>
                            <th>NAME</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th colSpan="3">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.users.map((result, i) => {
                                return (<tr key={i}>
                                    <td>{result.id}</td>
                                    <td>{result.title}</td>
                                    <td>{result.url}</td>
                                    <td>{result.thumbnailUrl}</td>
                                    <td>
                                        <Link to={`/Restapi/${result.id}`} className="btn btn-primary">View</Link>
                                    </td>
                                    <td><button className="btn btn-warning">edit</button></td>
                                    <td><button onClick={() => window.confirm(`Do you delete ${result.id}Record now?`)} className="btn btn-danger" > delete</button></td>

                                </tr>);

                            })
                        }
                    </tbody>
                </table>
            </div>
        </>)
    }
}


