export type Action =
  | {
      type: "ADD_LIST_USERS";
      payload: { id: number; firstName: string; lastName: string };
    }
  | {
      type: "ADD_LIST_USER_RATING";
      payload: {
        id: number;
        firstName: string;
        lastName: string;
        rating: number;
      };
    };
