
import './App.css';
import Body from './layout/Body/bodyy';
import Header from './layout/Header/header';
import { Route, Routes } from "react-router-dom";
import FormCreateCard from './components/formCreateCard/formCreateCard';
import { observer } from "mobx-react";

import { useCallback, useEffect, useState } from 'react';
import todoStores from './todoStore/todoStore';
import { URL } from './constants';
import ListItemNotifi from './layout/Header/ListItemNotifi/listItemNotifi';


function App() {
  const [dataProducts,setDataProducts] = useState([])

    const fectData = useCallback(async () => {
      await fetch(URL)
          .then((res) => res.json())
          .then(data => setDataProducts(data))

      },[todoStores.render]);
    useEffect(()=>{
        fectData();
    },[fectData])

    useEffect(()=>{
        todoStores.setData(dataProducts)
        todoStores.setCount(dataProducts.length)
    },[dataProducts])

  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/fashion/' element={<Body data={ dataProducts}/>}/>
        <Route path='/fashion/add' element={<FormCreateCard/>}/>
      </Routes>
      
    </div>
  );
}

export default observer(App);
