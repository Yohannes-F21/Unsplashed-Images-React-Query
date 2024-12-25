import Gallery from "./Gallery";
// import { ToastContainer } from "react-toastify";
import SearchForm from "./SearchForm";
import ThemeToggle from "./ThemeToggle";

const App = () => {
  return (
    <>
      {/* <ToastContainer position="top-right" /> */}
      <main className="max-w-screen-xl mx-auto my-4">
        <ThemeToggle />
        <SearchForm />
        <Gallery />
      </main>
    </>
  );
};
export default App;
