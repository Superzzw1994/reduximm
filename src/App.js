import React from 'react';
import withImmutable from './Hoc/withImmutable';
import { connect } from 'react-redux';
@connect(
  (state) => {
    return {
      age: state.getIn(['init', 'age']),
      obj: state.getIn(['init', 'obj']),
    };
  },
  (dispatch) => {
    return {
      dispatch,
      send: () =>
        dispatch({
          type: 'add',
        }),
    };
  }
)
class App extends React.Component {
  componentDidMount() {
    const { send } = this.props;
    send();
  }
  render() {
    const { age } = this.props;
    return (
      <div>
        <p> react + {age} </p>
        <style jsx>{`
          div {
            p {
              color: red;
              &:hover {
                color: green;
              }
            }
          }
        `}</style>
      </div>
    );
  }
}

export default withImmutable(App);
