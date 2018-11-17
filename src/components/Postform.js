import React, { Component } from 'react';


class postform extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }

    }

    render() {


        return (
            <div>
                <h1> add post </h1>
                <form>
                    <div>
                        <label> title : </label> <br />
                        <input type="text" name="title" />
                    </div>
                    <div>
                        <label> body : </label> <br />
                        <input type="text" name="title" />
                    </div>
                    <br />
                    <button type="submit"> submit</button>
                    <br></br>
                </form>

            </div>
        );
    }
}

export default postform; 