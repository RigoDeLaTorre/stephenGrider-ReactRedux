import React, { Component } from 'react'
import { fetchPosts } from '../actions'

class PostsShow extends Component{

  componentDidMount(){
    const {id} = this.props.match.params
    this.props.fetchPosts(id)
  }

  render(){
    // posts[this.props.match.params.id] // post we want to Show

    return(
      <div>Posts Show !</div>
    )

  }
}

function mapStatetoProps({ posts}, ownProps){
  return { posts:posts[ownProps.match.params.id] }
}
export default connect(mapStatetoProps, { fetchPosts })(PostsShow)
