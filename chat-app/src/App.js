import logo from "./logo.svg";
import "./App.css";

const App = () => (
  <div id="container">
    <Sidebar />
    <section id="main">
      <MessagesList />
      <AddMessages />
    </section>
  </div>
);

export default App;
