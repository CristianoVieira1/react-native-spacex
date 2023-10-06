import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ILaunches } from "../sagas/launchesSaga/launchesTypes";

interface ILaunchesState {
  launches: ILaunches[];
  launchesLoading: boolean;
  launchesError: boolean;
  currentPage: number;
  launchesPerPage: number;
  filteredName: string;
}

const initialState: ILaunchesState = {
  launches: [],
  launchesLoading: false,
  launchesError: false,
  currentPage: 1,
  launchesPerPage: 20,
  filteredName: "",
};

const launchesSlice = createSlice({
  name: "launches",
  initialState,
  reducers: {
    fetchLaunches: (state, action: PayloadAction<number>) => {
      state.launchesLoading = true;
      state.launchesError = false;
      state.currentPage = action.payload;
    },
    fetchLaunchesSuccess: (state, action: PayloadAction<ILaunches[]>) => {
      state.launches = action.payload;
      state.launchesLoading = false;
    },
    fetchLaunchesFailure: (state) => {
      state.launchesLoading = false;
      state.launchesError = true;
    },
    filterLaunchesByName: (state, action: PayloadAction<string>) => {
      state.filteredName = action.payload;
    },
  },
});

export const {
  fetchLaunches,
  fetchLaunchesSuccess,
  fetchLaunchesFailure,
  filterLaunchesByName,
} = launchesSlice.actions;
export default launchesSlice.reducer;
