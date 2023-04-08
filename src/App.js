import logo from "./logo.svg";
import react, { useState } from "react";
import "./App.css";
import Welcome from "./components/Welcome";
import Clock from "./components/Clock";
import LoginControl from "./components/LoginControl";
import Blog from "./components/Blog";
import Form from "./components/Form";
import Search from "./components/Search";
import List from "./components/List";
import WelcomeDialog from "./components/WelcomeDialog";

function App() {
  const [flag, setFlag] = react.useState(true);
  const [searchTerm, setSearchTerm] = useState();
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const userInfo = {
    firstname: "Aryan",
    lastname: " Goud",
  };

  const posts = [
    { id: 1, title: "Hello World", content: "Welcome to learning react" },
    {
      id: 2,
      title: "Installation",
      content: "You can install react from npm.",
    },
    {
      id: 3,
      title: "Run App",
      content: "You can run react app with npm Start.",
    },
    {
      id: 4,
      title: "Define States",
      content: "You can run react app with npm Start.",
    },
    {
      id: 5,
      title: "React Hooks",
      content: "You can run react app with npm Start.",
    },
    {
      id: 6,
      title: "Build Components",
      content: "You can run react app with npm Start.",
    },
    {
      id: 7,
      title: "Forms Handle",
      content: "You can run react app with npm Start.",
    },
  ];

  const filterList = posts.filter((item) => {
    return item.title.toLowerCase().includes(searchTerm);
  });
  // const toggle = () => {
  //   console.log("Toggle Clicked");
  //   setFlag(!flag);
  // };

  // const element = <h1>Hello, World and welcome to react</h1>;
  return (
    <>
      {/* <button onClick={toggle}>Toggle Clock Component</button>
      {flag ? <Clock /> : "No Clock component"} */}

      {/* <Welcome user="Prathamesh" />
      <Welcome user="Aryan" />
      <Welcome user="Abhishek" /> */}
      {/* <LoginControl /> */}
      {/* <Blog posts={posts} /> */}
      {/* <Form /> */}
      {/* <Search searchTerm={searchTerm} handleSearch={handleSearch} />
      <List list={filterList} /> */}
      <WelcomeDialog />
    </>
  );
}

export default App;
