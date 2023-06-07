import { useState } from "react";
import { Button } from "./components/ui/Button";
import { ContainerUsers } from "./components/ui/ContainerUsers";
import { UsersListData, useFetch } from "./hooks";

export const ListUsers = () => {
  const [usersListNoRating, setUsersListNoRating] = useState<UsersListData[]>(
    [] as UsersListData[]
  );
  const [page, setPage] = useState<number>(1);
  useFetch({ page, usersListNoRating, setUsersListNoRating });

  return (
    <div className="flex w-full items-center justify-center gap-16 h-full">
      <Button
        onClick={() => {
          window.location.reload();
          window.localStorage.removeItem("usersList");
        }}
      >
        Refresh
      </Button>
      <Button onClick={() => setPage(page + 1)}>page</Button>
      <ContainerUsers className=" truncate">
        {usersListNoRating.length ? (
          <ul>
            {usersListNoRating.map((user) => (
              <li key={user.id} className="flex ">
                <p>{user.first_name}</p>
                <p>{user.last_name}</p>
              </li>
            ))}
          </ul>
        ) : null}
      </ContainerUsers>
    </div>
  );
};
