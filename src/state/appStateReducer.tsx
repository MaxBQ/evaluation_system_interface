import { Action } from "./actions";

export type UserList = {
  id: number;
  firstName: string;
  lastName: string;
};
export type UsersListRating = {
  rating: number;
} & UserList;

export type AppState = {
  usersList: UserList[];
  usersListRating: UsersListRating[];
};

export const appStateReducer = (
  draft: AppState,
  action: Action
): AppState | void => {
  switch (action.type) {
    case "ADD_LIST_USERS": {
      draft.usersList.push(...action.payload);
      break;
    }
    case "ADD_LIST_USER_RATING": {
      break;
    }
    default: {
      break;
    }
  }
};
