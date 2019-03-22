import { call, put } from "redux-saga/effects";
import api from "../../services/api";

import { Creators as ExampleActions } from "../ducks/examples";

export function* ExampleSagaMiddleware(action) {
  // NOTE get data from request action
  // const { ExampleData } = action.payload;

  try {
    // NOTE do something with payload data from request

    return yield put(ExampleActions.addExampleSuccess("response"));
  } catch (err) {
    yield put(ExampleActions.addExampleFailure("Error on api communication"));
    return false;
  }
}
