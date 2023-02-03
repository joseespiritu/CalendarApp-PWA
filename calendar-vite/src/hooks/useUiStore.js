import { useSelector, useDispatch } from "react-redux";
import { onCloseDateModal, onOpenDateModal } from "../store";

export const useUiStore = () => {
    const dispatch = useDispatch();
    const { isDateModalOpen } = useSelector(state => state.ui);

    const openDateModal = () => {
        dispatch(onOpenDateModal());
    };

    const closeDateModal = () => {
        dispatch(onCloseDateModal());
    };

    //* Tambien se puede implementar
    const toggleDateModal = () => {
        (isDateModalOpen)
            ? closeDateModal()
            : openDateModal();
    };

    return {
        //* Propiedades
        isDateModalOpen,
        //* Metodos
        openDateModal,
        closeDateModal,
    }
};