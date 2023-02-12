import Header from "../components/Header";
import List from "../components/List";

export default function Home(): JSX.Element {
  return (
    <div>
      <Header />
      <div className="d-flex justify-content-center mt-5">
        <List />
      </div>
    </div>
  )
}