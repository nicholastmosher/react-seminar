import React from 'react';
import { connect } from 'react-redux';
import { sayHello } from '../actions/AppActions';

const AppContainer = (props) => (
  <div className="container-fluid">
    <div className="row">
      <h1>Hello, {props.name}!</h1>
    </div>
    <div className="row">
      <button className="btn" onClick={() => props.greet('Jack')}>Jack</button>
      <button className="btn" onClick={() => props.greet('Linda')}>Linda</button>
    </div>
  </div>
);

const mapStateToProps = (state) => ({
  name: state.AppReducer.get('name'),
});

const mapDispatchToProps = (dispatch) => ({
  greet: (name) => dispatch(sayHello(name)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
