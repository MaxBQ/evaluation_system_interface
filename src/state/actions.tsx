import { UserList, UsersListRating } from "./appStateReducer";

export type Action =
  | {
      type: "ADD_LIST_USERS";
      payload: UserList[];
    }
  | {
      type: "ADD_LIST_USER_RATING";
      payload: UsersListRating;
    }
  | {
      type: "RATING_INTERCALATE";
      payload: { userId: number };
    }
  | {
      type: "RATING_SUBTRACT";
      payload: { userId: number };
    };

export const addUsersList = (usersList: UserList[]): Action => ({
  type: "ADD_LIST_USERS",
  payload: usersList,
});

export const intercalateRating = (userId: number): Action => ({
  type: "RATING_INTERCALATE",
  payload: { userId },
});
export const subtractRating = (userId: number): Action => ({
  type: "RATING_SUBTRACT",
  payload: { userId },
});
