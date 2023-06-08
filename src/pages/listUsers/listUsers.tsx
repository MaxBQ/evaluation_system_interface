import { useState } from "react";
import { Button } from "./components/ui/Button";
import { ContainerUsers } from "./components/ui/ContainerUsers";
import { UsersListData, useFetch } from "./hooks";
import { List } from "./components/List";

export const ListUsers = () => {
  const [usersListNoRating, setUsersListNoRating] = useState<UsersListData[]>(
    [] as UsersListData[]
  );
  const [usersListRating, setUsersListRating] = useState<UsersListData[]>(
    [] as UsersListData[]
  );
  const [page, setPage] = useState<number>(1);
  useFetch({ page, usersListNoRating, setUsersListNoRating });

  return (
    <div className="grid w-full gap-2 items-center  content-center">
      <div className="flex items-center justify-start gap-2">
        <Button
          onClick={() => {
            window.location.reload();
            window.localStorage.removeItem("usersList");
          }}
        >
          Refresh
        </Button>
        <Button onClick={() => setPage(page + 1)}>page</Button>
      </div>
      <div className="flex flex-col md:flex-row gap-14 items-center justify-center w-full">
        {usersListNoRating.length ? (
          <ContainerUsers>
            <ul className="grid w-full gap-2 items-center content-center">
              {usersListNoRating.map((user) => (
                <List
                  key={user.id}
                  firstName={user.first_name}
                  lastName={user.last_name}
                />
              ))}
            </ul>
          </ContainerUsers>
        ) : null}

        {usersListRating.length ? (
          <ContainerUsers>
            <ul className="grid w-full gap-2 items-center content-center">
              {usersListNoRating.map((user) => (
                <List
                  key={user.id}
                  firstName={user.first_name}
                  lastName={user.last_name}
                />
              ))}
            </ul>
          </ContainerUsers>
        ) : null}
      </div>
    </div>
  );
};
