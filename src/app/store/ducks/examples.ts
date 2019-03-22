// SECTION Types

export const Types = {
  ADD_REQUEST: "example/ADD_REQUEST",
  ADD_SUCCESS: "example/ADD_SUCCESS",
  ADD_FAILURE: "example/ADD_FAILURE"
};

// SECTION Reducers

const INITIAL_STATE = {
  loading: true,
  data: []
};

export default function example(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD_REQUEST:
      return { ...state, loading: true };

    case Types.ADD_SUCCESS:
      return {
        ...state,
        loading: false,
        error: 0,
        data: [...state.data, action.payload.data]
      };

    case Types.ADD_FAILURE:
      return { ...state, loading: false, error: action.payload.error };

    default:
      return state;
  }
}

// SECTION Action Creators

export const Creators = {
  addExampleRequest: exampleData => ({
    type: Types.ADD_REQUEST,
    payload: { exampleData }
  }),
  addExampleSuccess: data => ({
    type: Types.ADD_SUCCESS,
    payload: { data }
  }),
  addExampleFailure: error => ({
    type: Types.ADD_FAILURE,
    payload: { error }
  })
};
