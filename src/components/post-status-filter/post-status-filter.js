import React, {Component} from 'react';
import './post-status-filter.scss';


export default class PostStatusFilter extends Component {
  constructor(props) {
    super(props)
  this.buttons = [
    {name: 'all', label: 'All'},
    {name: 'like', label: 'Liked'}
  ]
  }

  render() {
    const {filter, activeButton} = this.props
    const buttons = this.buttons.map(({name, label}) => {
      const active = filter === name;
      const clazz = active ? 'btn-info' : 'btn-outline-secondary';
      return (
        <button onClick={() => activeButton(name)} key={name} className={`btn ${clazz}`}>{label}</button>
      )
    })

        return (
    <div className = 'btn-group'>
    {buttons}
    </div>

)
};
}
