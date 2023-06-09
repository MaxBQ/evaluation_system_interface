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
  const usersListLocal = window.localStorage.getItem("usersList");
  const usersRatingListLocal = window.localStorage.getItem("usersListRating");
  const [state, dispatch] = useImmerReducer(appStateReducer, {
    usersList: [...JSON.parse(usersListLocal !== null ? usersListLocal : "[]")],
    usersListRating: [
      ...JSON.parse(
        usersRatingListLocal !== null ? usersRatingListLocal : "[]"
      ),
    ],
    modal: { text: "" },
  } as AppState);
  const { usersList, usersListRating, modal } = state;

  return (
    <AppStateContext.Provider
      value={{ usersList, usersListRating, dispatch, modal }}
    >
      {children}
    </AppStateContext.Provider>
  );
};
