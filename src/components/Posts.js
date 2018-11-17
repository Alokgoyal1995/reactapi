import React, { Component } from 'react';


class post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }

    }

    componentWillMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => this.setState({ posts: data }));
    }

    render() {

        const postItems = this.state.posts.map(post => (<div key={post.id} >
            <h3>{post.name}</h3>
            <p> {post.username}</p>
            <p>{post.email}</p>
        </div>
        ));

        return (
            <div>
                <h1> posts</h1>
                {postItems}
                {/* <p>joijoijiojojoijojoojoo</p> */}
            </div>
        );
    }
}

export default post; 