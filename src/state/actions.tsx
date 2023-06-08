import { UserList, UsersListRating } from "./appStateReducer";

export type Action =
  | {
      type: "ADD_LIST_USERS";
      payload: UserList[];
    }
  | {
      type: "ADD_LIST_USER_RATING";
      payload: UsersListRating;
    };

export const addUsersList = (usersList: UserList[]): Action => ({
  type: "ADD_LIST_USERS",
  payload: usersList,
});
