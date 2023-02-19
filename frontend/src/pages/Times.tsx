import CreateJogadorModal from "../components/CreateJogadorModal";
import EditTimeModal from "../components/EditTimeModal";
import ErrorHandler from "../components/ErrorHandler";
import Header from "../components/Header";
import List from "../components/List";
import Modal from "../components/Modal";
import ModalButton from "../components/ModalButton";

export default function Times(): JSX.Element {
  return (
    <div>
      <Header />
      <ErrorHandler />
      <div className="d-flex justify-content-center mt-5">
        <List />
        <CreateJogadorModal />
        <EditTimeModal />
      </div>
      <ModalButton />
      <Modal />
    </div>
  )
}