import { ActionReducerMap } from "@ngrx/store";
import { USERSReducer, UsersState } from "./users.reducer";
import { DepotsReducer, DepotsState } from "./depots.reducer";

interface AppState {
  userState: UsersState;
  depotState: DepotsState;
}

export const reducers: ActionReducerMap<AppState> = {
  userState: USERSReducer,
  depotState: DepotsReducer
};
