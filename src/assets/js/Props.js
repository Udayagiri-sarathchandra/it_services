import React from 'react'
import Child from '../../Child'

export default function Parent() {

    var email = "kumar.vijay@gmail.com"
    var emp = [1, "ABC", "abc@gmail.com"]

    function My() { return "This is Function" }

    return (<>

        <div className="container p-5 border my-5">
            <h2>Parent Component</h2>

            {email}-{emp}

            {
                My()
            }

            <Child email={email} uname="kumar" emp={emp} my={My()} />

        </div>


    </>)
}