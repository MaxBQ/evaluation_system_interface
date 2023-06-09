import { useState } from "react";
import { Button } from "./components/ui/Button";
import { ContainerUsers } from "./components/ui/ContainerUsers";
import { useFetch } from "../../hooks";
import { List } from "./components/List";
import { useAppState } from "../../state/AppStateContext";
import { IoMdRefresh } from "react-icons/io";
import { MdOutlineNavigateNext } from "react-icons/md";
import { MyModal } from "./components/Modal";
import { modalClose } from "../../state/actions";
export const ListUsers = () => {
  const { usersList, usersListRating, modal, dispatch } = useAppState();

  const [page, setPage] = useState<number>(1);
  useFetch({ page });
  const onClickRefresh = () => {
    console.log("refresh");
    window.location.reload();
    window.localStorage.removeItem("usersList");
    window.localStorage.removeItem("usersListRating");
  };
  const onClickNextPage = () => {
    console.log("next page");
    setPage(page + 1);
  };
  return (
    <div className="grid w-full gap-2 items-center  content-center">
      {modal.text === "modalBan" ? (
        <MyModal
          show={Boolean(modal)}
          title="Ban the user?"
          closeModal={() => dispatch(modalClose())}
        />
      ) : null}
      {modal.text === "modalSuccess" ? (
        <MyModal
          show={Boolean(modal.text)}
          title="Congratulate the user?"
          closeModal={() => dispatch(modalClose())}
        />
      ) : null}
      <div className="flex items-center justify-start gap-2">
        <Button onClick={onClickRefresh}>
          <IoMdRefresh />
        </Button>
        <Button onClick={onClickNextPage}>
          <MdOutlineNavigateNext />
        </Button>
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
