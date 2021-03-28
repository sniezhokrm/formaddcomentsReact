import React, {Component} from 'react';
import AppHeader from '../app-header/app-header';
import AppSearch from '../app-search/app-search';
import PostStatusFilter from '../post-status-filter/post-status-filter';
import PostList from '../post-list/post-list';
import PostAddForm from '../post-add-form/post-add-form';
// nextId from "react-id-generator";

import './app.css';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data : [
        {label: 'Data from server 1', important: false, like: false, id: '23234'},
        {label: 'Data from server 2', important: false, like: false, id: 'werwer'},
        {label: 'Data from server 3', important: false, like: false, id: 'sdfsdf'}
      ],
      like: '',
      term: '',
      filter: 'all'

    }
    this.deleteItem = this.deleteItem.bind(this);
    this.addItem = this.addItem.bind(this);
    this.onToggleImportant= this.onToggleImportant.bind(this);
    this.onToggleLike= this.onToggleLike.bind(this);
    this.onUpdateSearch = this.onUpdateSearch.bind(this);
    this.filterPosts= this.filterPosts.bind(this);
    this.activeButton= this.activeButton.bind(this);
    this.onToggle= this.onToggle.bind(this);
  }


  deleteItem(id) {
    this.setState(({data}) => {
      const index = data.findIndex(elem => elem.id === id);//визначаємо номер елемента по ід
      const newArr = [...data.slice(0, index), ...data.slice(index + 1)]
      return {
        data: newArr
      }
    })
  };

  addItem(body) {
    const random = new Date().getTime() ;
    const newItem = {
      label: body,
      important: false,
      id: random
    }
    this.setState(({data}) => {
    const newArr = [...data, newItem]
    return {
      data: newArr
      }
    })
  }
onToggle (id, stan) {
  this.setState(({data}) => {
    const index = data.findIndex(elem => elem.id === id);
    let st = {};
    if (stan === 'like') {
      st = {like: !data[index].like};
    } else {
      st = {important: !data[index].important}
    }
    const newItem = {...data[index], ...st};
    const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
    return {
      data: newArr
    }
  })
}
onToggleLike(id) {
    this.onToggle (id, 'like');
}
onToggleImportant(id) {
    this.onToggle (id, 'important');
}

searchPosts(items, term) {
  if (term.length === 0) {
    return items;
  }
  return items.filter(item => {
    return item.label.indexOf(term) > -1
  })
}
onUpdateSearch(term) {
  this.setState({term})
}
filterPosts(items, filter) {
  if (filter === 'like') {
    return items.filter(item => item.like);
  } else {
    return items;
  }
}
activeButton(filter) {
  this.setState({filter})
}
  render() {

const {data, term, filter} = this.state;
const likeNum = data.filter(elem => elem.like).length;
const postsNum = data.length;
const visiblePosts =this.filterPosts(this.searchPosts(data, term), filter);
    return (
      <div className = 'app'>

        <AppHeader postsNum={postsNum} likeNum={likeNum}/>
        <div className = 'search-panel d-flex'>
            <AppSearch
              onUpdateSearch={this.onUpdateSearch}/>
            <PostStatusFilter
              filter={filter}
              activeButton = {this.activeButton}/>
        </div>
        <PostList posts={visiblePosts}
          onDelete = {this.deleteItem}
          onToggleImportant={this.onToggleImportant}
          onToggleLike={this.onToggleLike}
          />
        <PostAddForm
          addForm = {this.addItem}
                     />
      </div>
    )
    };
    }
