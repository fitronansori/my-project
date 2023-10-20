"use client";

import { useCallback, useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import Button from "../Button";

type ModalProps = {
  isOpen?: boolean;
  onClose: () => void;
  onSubmit: () => void;
  title?: string;
  body?: React.ReactElement;
  footer?: React.ReactElement;
  actionLabel: string;
  disabled?: boolean;
  secondaryAction?: () => void;
  secondaryActionLabel?: string;
};

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  title,
  body,
  footer,
  actionLabel,
  disabled,
  secondaryAction,
  secondaryActionLabel,
}) => {
  // Initialize the state for the modal
  const [showModal, setShowModal] = useState(isOpen);

  // When the isOpen prop changes, update the state
  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  // Handle the close button click
  const handleClose = useCallback(() => {
    // If the button is disabled, do nothing
    if (disabled) {
      return;
    }

    // Hide the modal
    setShowModal(false);

    // Wait for the modal to hide before calling the onClose function
    setTimeout(() => {
      onClose();
    }, 300);
  }, [disabled, onClose]);

  // Handle the submit button click
  const handleSubmit = useCallback(() => {
    // If the button is disabled, do nothing
    if (disabled) {
      return;
    }

    // Call the onSubmit function
    onSubmit();
  }, [disabled, onSubmit]);

  // Handle the secondary action button click
  const handleSecondaryAction = useCallback(() => {
    // If the button is disabled, do nothing
    if (disabled || !secondaryAction) {
      return;
    }

    // Call the secondary action function
    secondaryAction();
  }, [disabled, secondaryAction]);

  // If the modal is not open, do not render anything
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed flex items-center justify-center overflow-x-hidden overflow-y-auto inset-0 z-50 outline-none focus:outline-none bg-neutral-800/75">
      <div className="relative w-full mx-auto h-full md:w-4/6 lg:w-3/6 xl:w-2/5 my-6  lg:h-auto md:h-auto">
        <div
          className={`translate duration-300 h-full
        ${showModal ? "translate-y-0" : "translate-y-full"}
        ${showModal ? "opacity-100" : "opacity-0"}`}
        >
          <div className="relative flex flex-col translate h-full lg:h-auto md:h-auto border-0 rounded-lg shadow-lg w-full bg-white outline-none focus:outline-none">
            {/* Header */}
            <div className="relative flex items-center justify-center p-6 rounded-t">
              <button
                onClick={handleClose}
                className="absolute left-9 p-1 border-0 transition hover:opacity-70"
              >
                <IoMdClose size={18} />
              </button>
              <h3 className="text-lg font-semibold">
                {title || "Modal Title"}
              </h3>
            </div>
            {/* Body */}
            <div className="relative flex-auto p-6">{body}</div>
            {/* Footer */}
            <div className="w-full flex flex-row items-center gap-4">
              {secondaryAction && secondaryActionLabel && (
                <Button
                  outline
                  disabled={disabled}
                  label={secondaryActionLabel}
                  onClick={handleSecondaryAction}
                />
              )}
              <Button
                disabled={disabled}
                label={actionLabel}
                onClick={handleSubmit}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
