import { Dialog, Transition } from "@headlessui/react";
import { FC, Fragment, useState } from "react";
import { Button } from "../ui/Button";
import { useAppState } from "../../../../state/AppStateContext";
import { clearUser } from "../../../../state/actions";
export type ModalProps = {
  title: string;
  closeModal: () => void;
  show: boolean;
};
export const MyModal: FC<ModalProps> = ({ title, closeModal, show }) => {
  const { dispatch, modal } = useAppState();
  const onClickYes = () => {
    console.log(`${title} Yes`);
    dispatch(clearUser(modal.userId!));
    closeModal();
  };
  const onClickNo = () => {
    console.log(`${title} No`);
    closeModal();
  };
  return (
    <>
      <Transition appear show={show} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    {title}
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      If you click yes, the user will return to the left list.
                      If you click no, the user will remain in the right list.
                    </p>
                  </div>

                  <div className="mt-4 flex items-center gap-4 justify-between">
                    <Button className="w-full" onClick={onClickNo}>
                      No
                    </Button>
                    <Button className="w-full" onClick={onClickYes}>
                      Yes
                    </Button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};
