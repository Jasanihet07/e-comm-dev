"use client";
import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment, useCallback, useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";

type Props = {
  children: React.ReactNode;
};

const Modal = ({ children }: Props) => {
  const router = useRouter();

  const onDismiss = useCallback(() => {
    router.back();
  }, [router]);

  return (
    <Dialog as="div" open className="relative z-10" onClose={onDismiss}>
      <div className="fixed inset-0 hidden bg-gray-500 bg-opacity-75 transition-opacity md:block" />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4">
          <Dialog.Panel className="flex w-full transform text-left text-base transition md:my-8 md:max-w-2xl md:px-4 lg:max-w-4xl">
            <div className="relative flex w-full items-center overflow-hidden bg-white px-4 pb-8 pt-14 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
              <button
                type="button"
                className="absolute right-4 top-4 text-gray-400 hover:text-gray-500 sm:right-6 sm:top-8 md:right-6 md:top-6 lg:right-8 lg:top-8"
                onClick={onDismiss}
              >
                <span className="sr-only">Close</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>

              <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
                {children}
              </div>
            </div>
          </Dialog.Panel>
        </div>
      </div>
    </Dialog>
  );
};

export default Modal;
