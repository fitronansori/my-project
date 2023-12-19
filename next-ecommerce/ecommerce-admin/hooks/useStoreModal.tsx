import { create } from "zustand";

interface useStoreModal {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
};

const useStoreModal = create<useStoreModal>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
}));

export default useStoreModal;