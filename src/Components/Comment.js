import React, { Component } from 'react';
import axios from 'axios';
import '../App.css';

class Comment extends Component {
        state={
            comment: [ ]
        }
        componentDidMount(){
            console.log(this.props);
            let id = this.props.match.params.comment_id;
            axios.get('https://jsonplaceholder.typicode.com/comments/' + id).then(res =>{
             this.setState({
                 comment: res.data
             })
//                console.log(this.state);
            })
        }

    render() {
        const comment = this.state.comment ? (
            <div className='comment card'>
                <div className='center card-title'>{this.state.comment.name} </div>

                <ul className='center'>
                    <li>{this.state.comment.id}</li>
                    <li>{this.state.comment.email}</li>
                    <li>{this.state.comment.body}</li>
                    {this.state.comment.id }
                </ul>

            </div>
        ) : ( <p> Loading comments.........</p> )

        return(
            <div className='container'>
                {comment}
            </div>
        )
    }
}
export default Comment;
