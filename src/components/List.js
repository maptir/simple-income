import React from 'react'
import Item from './Item.js'

class List extends React.Component {
  constructor () {
      super()
      this.state = {
        list: []
      }
  }

  addItem = () => {
    const name = prompt('Enter item name: ')
    const price = prompt('Enter item price: ')
    this.setState({
      list: [...this.state.list, { name, price }]
    })
  }

  removeItem = (index) => {
    this.setState({
      list: this.state.list.filter((item, i) => i !== index)
    })
  }

  render() {
    return (
      <div>
        <h2 className='text-center'>{ this.props.name }</h2>
        { this.state.list.map((item, i) =>
          <Item
            key={i}
            name={item.name}
            price={item.price}
            bg={this.props.bg}
            color={this.props.color}
            onRemove={() => this.removeItem(i)}
          />
        )}
        <button onClick={this.addItem} className='btn btn-primary mt-2' onClick={this.addItem}>+ Add</button>
        <h1>Total: {this.state.list.reduce((accum, curr) => { return accum + curr.price; }, 0)}</h1>
      </div>
    )
  }
}

export default List
