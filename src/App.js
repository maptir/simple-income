import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import List from './components/List'

class App extends Component {
  render() {
    return (
      <div className="container text-center mt-4">
        <h1>บันทึกรายรับรายจ่าย</h1>
        <div className="row">
          <div className="col-6">
            <List name="รายจ่าย" bg="#dc3545" color="white"/>
          </div>

          <div className="col-6">
            <List name="รายรับ" bg="#dc3545" color="white"/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
