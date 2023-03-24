import logo from "./logo.svg";
import NavBar from "./component/Navbar";
import Header from "./component/Header";
import "./App.css";
import { Container } from "react-bootstrap";
import Category from "./component/Category";
import Itemlist from "./component/Itemlist";

import { items } from "./data";
import { useState } from "react";

function App() {
  const [ItemData, setItemData] = useState(items);

  const allCategory = ["All", ...new Set(items.map((i) => i.category))];
  console.log(allCategory);
  const filterbyCategory = (cat) => {
    if (cat == "All") {
      setItemData(items);
    } else {
      const newArr = items.filter((item) => item.category === cat);
      setItemData(newArr);
    }
  };

  const filterbySearch = (word) => {
    if (word !== "") {
      const newArr = items.filter((item) => item.title === word);
      setItemData(newArr);
    }
  };

  return (
    <div className="App">
      <NavBar filterbySearch={filterbySearch}></NavBar>
      <Container>
        <Header></Header>
        <Category
          filterbyCategory={filterbyCategory}
          allCategory={allCategory}
        />
        <Itemlist ItemData={ItemData}></Itemlist>
      </Container>
    </div>
  );
}

export default App;
