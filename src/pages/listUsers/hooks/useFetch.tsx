import { useEffect, useState } from "react";

export interface UsersListData {
  id: number;
  first_name: string;
  last_name: string;
}
export type UseFetchProps = {
  page: number;
  setUsersListNoRating: (
    e: UsersListData[] | ((e: UsersListData[]) => UsersListData[])
  ) => void;
  usersListNoRating: UsersListData[];
};

export const useFetch = ({
  page,
  setUsersListNoRating,
  usersListNoRating,
}: UseFetchProps) => {
  const controller = new AbortController();
  const signal = controller.signal;
  const usersList = window.localStorage.getItem("usersList");
  useEffect(() => {
    if (usersListNoRating.length) {
      window.localStorage.setItem(
        "usersList",
        JSON.stringify(usersListNoRating)
      );
    }
  }, [usersListNoRating]);
  useEffect(() => {
    if (usersList !== null) {
      setUsersListNoRating(JSON.parse(usersList));
    }
  }, []);
  useEffect(() => {
    if (usersList === null || page > 1) {
      const getData = async () => {
        const response = await fetch(
          `https://random-data-api.com/api/users/random_user?size=3&page=${page}`,
          { signal }
        ).then((response) => response.json());
        const dataRes = response.map(
          (res: UsersListData) =>
            (res = {
              id: res.id,
              first_name: res.first_name,
              last_name: res.last_name,
            })
        );
        setUsersListNoRating((prev) => [...prev, ...dataRes]);
      };
      getData();
    }
    return () => {
      controller.abort;
    };
  }, [page]);
};
