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
    case "RATING_INTERCALATE": {
      const { userId } = action.payload;
      const getBayIndexNoRating = draft.usersList.findIndex(
        (user) => user.id === userId
      );
      const getBayIndexRating = draft.usersListRating.findIndex(
        (user) => user.id === userId
      );
      if (getBayIndexNoRating !== -1) {
        const userNoRatingList = draft.usersList[
          getBayIndexNoRating
        ] as UsersListRating;
        draft.usersList = [
          ...draft.usersList.slice(0, getBayIndexNoRating),
          ...draft.usersList.slice(getBayIndexNoRating + 1),
        ];
        userNoRatingList.rating = -1;
        draft.usersListRating.push(userNoRatingList);
      }
      if (getBayIndexRating !== -1) {
        const userRatingList = draft.usersListRating[getBayIndexRating];
        userRatingList.rating =
          userRatingList.rating > -5 ? userRatingList.rating - 1 : -5;
      }
      break;
    }
    case "RATING_SUBTRACT": {
      const { userId } = action.payload;
      const getBayIndexNoRating = draft.usersList.findIndex(
        (user) => user.id === userId
      );
      const getBayIndexRating = draft.usersListRating.findIndex(
        (user) => user.id === userId
      );
      if (getBayIndexNoRating !== -1) {
        const userNoRatingList = draft.usersList[
          getBayIndexNoRating
        ] as UsersListRating;
        draft.usersList = [
          ...draft.usersList.slice(0, getBayIndexNoRating),
          ...draft.usersList.slice(getBayIndexNoRating + 1),
        ];
        userNoRatingList.rating = 1;
        draft.usersListRating.push(userNoRatingList);
      }
      if (getBayIndexRating !== -1) {
        const userRatingList = draft.usersListRating[getBayIndexRating];
        userRatingList.rating =
          userRatingList.rating < 5 ? userRatingList.rating + 1 : 5;
      }
      break;
    }
    default: {
      break;
    }
  }
};
