import React from 'react';
import PostlistItem from '../post-list-item/post-list-item';
import './post-list.css';



const PostList = ({posts, onDelete, onToggleImportant, onToggleLike}) => {

  const elements = posts.map((item) => {
  const {id, ...itemProps} = item;
    if(typeof(item) === 'object'){
    return (
      <li key = {id} className='list-group-item'>
        <PostlistItem
          {...itemProps}
          label={item.label}
          onToggleImportant={() => onToggleImportant(id)}
          onToggleLike={() => onToggleLike(id)}
          onDelete = {() => onDelete(id)}
          />
      </li>
    )
  }
  }
)
  return (
    <ul className = 'app-list list-group'>
    {elements}
    </ul>
)};
export default PostList;
