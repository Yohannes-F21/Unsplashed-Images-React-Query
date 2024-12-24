import Gallery from "./Gallery";
import SearchForm from "./SearchForm";
import ThemeToggle from "./ThemeToggle";

const App = () => {
  return (
    <main className="max-w-screen-xl mx-auto">
      <ThemeToggle />
      <SearchForm />
      {/* <Gallery />  */}
    </main>
  );
};
export default App;
