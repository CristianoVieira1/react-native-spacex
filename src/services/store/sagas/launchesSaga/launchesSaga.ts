import { PayloadAction } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import { call, put, takeLatest } from "redux-saga/effects";
import API from "../../../axios";
import {
  fetchLaunches,
  fetchLaunchesFailure,
  fetchLaunchesSuccess,
} from "../../launches/launchesSlice";
import { ILaunches } from "./launchesTypes";

function* fetchLaunchesSaga({ payload }: PayloadAction<number>) {
  try {
    const page = payload;
    const response: AxiosResponse<ILaunches[]> = yield call(
      API.get,
      `/launches?page=${page}&limit=${20}`,
      { headers: { "Content-Type": "application/json" } }
    );

    yield put(fetchLaunchesSuccess(response.data));
  } catch (e) {
    yield put(fetchLaunchesFailure());
  }
}

export default function* repositoriesSaga() {
  yield takeLatest(fetchLaunches.type, fetchLaunchesSaga);
}
