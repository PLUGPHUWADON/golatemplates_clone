import { useState } from 'react';
import "./App.css";
import Header from './component/header.jsx';
import Contenttitle from './component/contenttitle.jsx';
import Maincontent from './component/maincontent.jsx';
import Contentfeature from "./component/contentfeature.jsx";


function App() {
  return (
    <>
      <Header/>
      <Contenttitle/>
      <Maincontent/>
      <Contentfeature/>
    </>
  );
}

export default App
