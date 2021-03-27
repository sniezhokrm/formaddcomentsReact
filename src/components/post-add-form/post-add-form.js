import React, {Component} from 'react';
import './post-add-form.css'

export default class PostAddForm extends Component {
  constructor(props) {
    super (props);
    this.state = {
      text: ''
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(e) {
    this.setState({
      text: e.target.value
    })
  }
  onSubmit(e) {
    e.preventDefault();
    this.props.addForm(this.state.text);
    this.state.text = ''
  }
    render() {
  return (
    <form onSubmit={this.onSubmit}
       className = 'bottom-panel d-flex'>
      <input value={this.state.text} onChange={this.onChange} className='form-control new-post-label' type='text' placeholder='What do you thinking?'>
      </input>
      <button   type='submit' className='btn btn-outline-secondary'>Add note</button>
    </form>
)
  }
};
