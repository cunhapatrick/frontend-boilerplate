import { all, takeLatest } from "redux-saga/effects";

import { Types as ExampleTypes } from "../ducks/examples";
import { ExampleSagaMiddleware } from "./examples";

export default function* rootSaga() {
  yield all([takeLatest(ExampleTypes.ADD_REQUEST, ExampleSagaMiddleware)]);
}
