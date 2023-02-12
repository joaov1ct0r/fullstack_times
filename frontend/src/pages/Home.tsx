import Header from "../components/Header";
import List from "../components/List";
import Modal from "../components/Modal";
import ModalButton from "../components/ModalButton";

export default function Home(): JSX.Element {
  return (
    <div>
      <Header />
      <div className="d-flex justify-content-center mt-5">
        <List />
      </div>
      <ModalButton />
      <Modal />
    </div>
  )
}