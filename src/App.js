import React from 'react'
import withImmutable from './Hoc/withImmutable'
import { connect } from 'react-redux'
class App extends React.Component {
  componentDidMount() {
    const { send } = this.props
    send()
  }
  render() {
    const { age } = this.props
    return <div>react + {age}</div>
  }
}

export default connect(
  (state) => {
    return {
      age: state.getIn(['init', 'age']),
      obj: state.getIn(['init', 'obj']),
    }
  },
  (dispatch) => {
    return {
      dispatch,
      send: () =>
        dispatch({
          type: 'add',
        }),
    }
  }
)(withImmutable(App))
