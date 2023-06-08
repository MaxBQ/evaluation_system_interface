import { useState } from "react";
import { Button } from "./components/ui/Button";
import { ContainerUsers } from "./components/ui/ContainerUsers";
import { useFetch } from "../../hooks";
import { List } from "./components/List";
import { useAppState } from "../../state/AppStateContext";

export const ListUsers = () => {
  const { usersList, usersListRating } = useAppState();

  const [page, setPage] = useState<number>(1);
  useFetch({ page });

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
        {usersList?.length ? (
          <ContainerUsers>
            {usersList.map((user) => (
              <List
                key={user.id}
                userId={user.id}
                firstName={user.firstName}
                lastName={user.lastName}
              />
            ))}
          </ContainerUsers>
        ) : null}

        {usersListRating?.length ? (
          <ContainerUsers>
            {usersListRating.map((user) => (
              <List
                key={user.id}
                userId={user.id}
                firstName={user.firstName}
                lastName={user.lastName}
                rating={user.rating}
              />
            ))}
          </ContainerUsers>
        ) : null}
      </div>
    </div>
  );
};
