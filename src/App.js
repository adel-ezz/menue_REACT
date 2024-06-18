import logo from "./logo.svg";
import "./App.css";
import { Container } from "react-bootstrap";
import { NavBar } from "./Compontents/NavBar";
import { Header } from "./Compontents/Header";
import { Category } from "./Compontents/Category";
import { ItemList } from "./Compontents/itemList";
import { useState } from "react";
import { items } from "./data";

function App() {
  const [itemData, setIemData] = useState(items);

  const allCateories=["الكل",... new Set(items.map((i)=>i.category))];

  //filter by category
  const filterByCategory = (cat) => {
    const newArr = items.filter((item) => item.category === cat);
    if (cat === "الكل") {
      setIemData(items);
    } else {
      setIemData(newArr);
    }
  };

   //filter by category
  const filterSarch = (word) => {
    if (word !== "") {
      const newArr = items.filter((item) => item.title === word)
      setIemData(newArr)
    }
  }

  return (
    <div className="color-body font">
      <NavBar  filterSarch={filterSarch}/>
      <Container>
        <Header />
        <Category filterByCategory={filterByCategory}  allCateories={allCateories}/>
        <ItemList itemData={itemData} />
      </Container>
    </div>
  );
}

export default App;
