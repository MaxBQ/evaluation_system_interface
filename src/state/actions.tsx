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
    }
  | { type: "CLEAR_USER"; payload: { userId: number } }
  | {
      type: "USER_BAN";
      payload: { text: string; userId: number };
    }
  | { type: "USER_SUCCESS"; payload: { text: string; userId: number } }
  | { type: "MODAL_CLOSE"; payload: string };

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
export const clearUser = (userId: number): Action => ({
  type: "CLEAR_USER",
  payload: { userId },
});
export const userBan = (userId: number): Action => ({
  type: "USER_BAN",
  payload: { text: "modalBan", userId },
});
export const userSuccess = (userId: number): Action => ({
  type: "USER_SUCCESS",
  payload: { text: "modalSuccess", userId },
});
export const modalClose = (): Action => ({
  type: "MODAL_CLOSE",
  payload: "",
});
