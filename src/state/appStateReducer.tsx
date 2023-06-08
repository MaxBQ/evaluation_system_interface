import { Action } from "./actions";

export type UserList = {
  id: string;
  name: string;
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
      draft;
      break;
    }
    case "ADD_LIST_USER_RATING": {
      draft;
      break;
    }
    default: {
      break;
    }
  }
};
