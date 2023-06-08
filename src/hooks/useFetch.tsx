import { useEffect, useState } from "react";
import { useAppState } from "../state/AppStateContext";
import { addUsersList } from "../state/actions";

// export interface UsersListData {
//   id: number;
//   first_name: string;
//   last_name: string;
// }
export type UseFetchProps = {
  page: number;
};

export const useFetch = ({ page }: UseFetchProps) => {
  const { dispatch, usersList } = useAppState();
  const controller = new AbortController();
  const signal = controller.signal;
  const usersListLocal = window.localStorage.getItem("usersList");
  useEffect(() => {
    if (usersList.length) {
      window.localStorage.setItem("usersList", JSON.stringify(usersList));
    }
  }, [usersList.length]);
  useEffect(() => {
    if (usersListLocal === null || page > 1) {
      const getData = async () => {
        const response = await fetch(
          `https://random-data-api.com/api/users/random_user?size=3&page=${page}`,
          { signal }
        ).then((response) => response.json());
        const dataRes = response.map(
          (res: any) =>
            (res = {
              id: res.id,
              firstName: res.first_name,
              lastName: res.last_name,
            })
        );
        dispatch(addUsersList(dataRes));
      };
      getData();
    }
    return () => {
      controller.abort;
    };
  }, [page]);
};
