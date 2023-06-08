import { Dispatch, FC, ReactNode, createContext, useContext } from "react";
import { Action } from "./actions";
import { useImmerReducer } from "use-immer";
import { AppState, appStateReducer } from "./appStateReducer";

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
  const [state, dispatch] = useImmerReducer(appStateReducer, {} as AppState);
  const { usersList, usersListRating } = state;

  return (
    <AppStateContext.Provider value={{ usersList, usersListRating, dispatch }}>
      {children}
    </AppStateContext.Provider>
  );
};
