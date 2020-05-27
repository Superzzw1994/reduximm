import React, { Component } from 'react'
import { Iterable } from 'immutable'

const withImmutable = (WrapperComponent) => {
  return class extends Component {
    render() {
      const newProps = Object.entries(this.props).reduce(
        (props, currentProp) => {
          const key = currentProp[0]
          const value = currentProp[1]
          props[key] = Iterable.isIterable(value) ? value.toJS() : value
          return props
        },
        {}
      )
      return <WrapperComponent {...newProps}></WrapperComponent>
    }
  }
}
export default withImmutable
