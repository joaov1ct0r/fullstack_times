import CreateJogadorModal from "../components/CreateJogadorModal";
import Header from "../components/Header";
import List from "../components/List";
import Modal from "../components/Modal";
import ModalButton from "../components/ModalButton";

export default function Times(): JSX.Element {
  return (
    <div>
      <Header />
      <div className="d-flex justify-content-center mt-5">
        <List />
      </div>
      <ModalButton />
      <Modal />
      <CreateJogadorModal />
    </div>
  )
}