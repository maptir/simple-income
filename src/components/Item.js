import React from 'react'

class Item extends React.Component {
  render() {
    const customStyle = {
      backgroundColor: this.props.bg || 'whitesmoke',
      color: this.props.color || 'black',
      borderRadius: '8px'
    }

    return (
        <div className="row" style={{marginTop:"5px"}}>
          <div className="col-9" style={customStyle}>
            <h5 style={{marginTop:"7px"}}>{this.props.name} {this.props.price}</h5>
          </div>

          <div className="col-3">
            <button onClick={this.props.onRemove} className="btn btn-outline-danger btn-block">X</button>
          </div>
        </div>
    )
  }
}

export default Item
