export default (state, action) => {
  switch(action.type) {
    case 'DELETE_RECORD':
      return {
        ...state,
        records: state.records.filter(record => record.id !== action.payload)
      }
    case 'ADD_RECORD':
      return {
        ...state,
        records: [action.payload, ...state.records]
      }
    default:
      return state;
  }
}