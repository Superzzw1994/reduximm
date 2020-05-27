import { fromJS } from 'immutable'
const initialState = {
  name: 'zzw',
  age: 25,
  obj: {
    a: 1,
    b: 2,
  },
}

const handlers = (state = fromJS(initialState), action) => {
  if (action.type === 'add') {
    return state.set('age', 26)
  } else {
    return state
  }
}

export default handlers
