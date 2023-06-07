import { Button } from "./components/ui/Button";
import { ContainerUsers } from "./components/ui/ContainerUsers";

export const ListUsers = () => {
  return (
    <div className="flex w-full items-center justify-center gap-16 h-full">
      <ContainerUsers className=" truncate">
        <div className="grid">
          <section className="flex text-xl items-center justify-center gap-4">
            <p>First name</p>
            <p>Last name</p>
          </section>
          <hr />
          <ul className="grid gap-4">
            <li className="flex items-center justify-center gap-4">
              <p>First name1</p>
              <p>Last name1</p>
              <span className="grid">
                <Button>+</Button>
                <Button>-</Button>
              </span>
            </li>
            <li className="flex items-center justify-center gap-4">
              <p>First name2</p>
              <p>Last name2</p>
              <span className="grid">
                <Button>+</Button>
                <Button>-</Button>
              </span>
            </li>
            <li className="flex items-center justify-center gap-4">
              <p>First name3</p>
              <p>Last name3</p>
              <span className="grid">
                <Button>+</Button>
                <Button>-</Button>
              </span>
            </li>
            <li className="flex items-center justify-center gap-4">
              <p>First name4</p>
              <p>Last name4</p>
              <span className="grid">
                <Button>+</Button>
                <Button>-</Button>
              </span>
            </li>
            <li className="flex items-center justify-center gap-4">
              <p>First name5</p>
              <p>Last name5</p>
              <span className="grid">
                <Button>+</Button>
                <Button>-</Button>
              </span>
            </li>
          </ul>
        </div>
      </ContainerUsers>
      <ContainerUsers className=" truncate">
        <div className="grid">
          <section className="flex text-xl items-center justify-center gap-4">
            <p>First name</p>
            <p>Last name</p>
          </section>
          <hr />
          <ul className="grid gap-4">
            <li className="flex items-center justify-center gap-4">
              <p>First name1</p>
              <p>Last name1</p>
              <span className="grid">
                <Button>+</Button>
                <Button>-</Button>
              </span>
            </li>
            <li className="flex items-center justify-center gap-4">
              <p>First name2</p>
              <p>Last name2</p>
              <span className="grid">
                <Button>+</Button>
                <Button>-</Button>
              </span>
            </li>
            <li className="flex items-center justify-center gap-4">
              <p>First name3</p>
              <p>Last name3</p>
              <span className="grid">
                <Button>+</Button>
                <Button>-</Button>
              </span>
            </li>
            <li className="flex items-center justify-center gap-4">
              <p>First name4</p>
              <p>Last name4</p>
              <span className="grid">
                <Button>+</Button>
                <Button>-</Button>
              </span>
            </li>
            <li className="flex items-center justify-center gap-4">
              <p>First name5</p>
              <p>Last name5</p>
              <span className="grid">
                <Button>+</Button>
                <Button>-</Button>
              </span>
            </li>
          </ul>
        </div>
      </ContainerUsers>
    </div>
  );
};
