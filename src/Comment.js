import React , { Component } from 'react'

class Comment extends Component {
  render () {
    return (
      <div className='comment'>
        {this.props.comment.username}: {this.props.comment.content}
      </div>
    )
  }
}

export default Comment
