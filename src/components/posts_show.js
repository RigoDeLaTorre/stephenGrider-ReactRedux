import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchPosts, deletePost } from '../actions'


class PostsShow extends Component{

  componentDidMount(){
    const {id} = this.props.match.params
    this.props.fetchPosts(id)
  }

  onDeleteClick(){
  const {id} = this.props.match.params
    this.props.deletePost(id, ()=>{
      this.props.history.push('/')
    })
  }

  render(){
      const { post } = this.props
    // posts[this.props.match.params.id] // post we want to Show
    if(!post){
      return (<div>Loading..</div>)
    }
    return(

      <div>
        <Link to= "/"> Back To Index</Link>
        <button
          className="btn btn-danger pull-xs-right"
          onClick = {this.onDeleteClick.bind(this)}
        >Delete Post</button>
        <h3>{post.title}</h3>
        <h6>Categores: {post.categories}</h6>
        <p>{post.content}</p>
      </div>
    )

  }
}

function mapStatetoProps({ posts}, ownProps){
  return { post:posts[ownProps.match.params.id] }
}
export default connect(mapStatetoProps, { fetchPosts, deletePost })(PostsShow)
