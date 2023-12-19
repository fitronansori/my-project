"use client";

import useStoreModal from "@/hooks/useStoreModal";
import Modal from "../ui/modal";

const StoreModal = () => {
  const storeModal = useStoreModal();

  return (
    <Modal
      title="Create a Store"
      description="Add a new store to manage products and categories."
      isOpen={storeModal.isOpen}
      onClose={storeModal.onClose}
    >
      children
    </Modal>
  );
};
export default StoreModal;
