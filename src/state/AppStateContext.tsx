import { Dispatch, FC, ReactNode, createContext, useContext } from "react";
import { Action } from "./actions";
import { AppState, appStateReducer } from "./appStateReducer";
import { useImmerReducer } from "use-immer";

type AppStateContextProps = {
  //   getBayUsersListRatingId(id: number): [];
  dispatch: Dispatch<Action>;
} & AppState;

type AppChildren = {
  children: ReactNode;
};

const AppStateContext = createContext<AppStateContextProps>(
  {} as AppStateContextProps
);
export const useAppState = () => {
  return useContext(AppStateContext);
};

export const AppStateProvider: FC<AppChildren> = ({ children }) => {
  const LocalStorageList = window.localStorage.getItem("usersList");
  const [state, dispatch] = useImmerReducer(appStateReducer, {
    usersList: [
      ...JSON.parse(LocalStorageList !== null ? LocalStorageList : "[]"),
    ],
    usersListRating: [],
  } as AppState);
  const { usersList, usersListRating } = state;

  return (
    <AppStateContext.Provider value={{ usersList, usersListRating, dispatch }}>
      {children}
    </AppStateContext.Provider>
  );
};
