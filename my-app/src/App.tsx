import React, { useState } from 'react';
import List from "./components/List";
import './App.css';

interface IState { 
  people: { 
    name: string, 
    age: number, 
    url: string, 
    note?: string
  }[] //means it's an array of objects
}

function App() {
  // number could be a number or string: useState<number | string>(5);
  // const [number, setNumber] = useState<number>(5);
  // const changeNumber = () => { 
  //   setNumber(10);
  // }

  const [people, setPeople] = useState<IState["people"]>([{
    name: "Lebron James", 
    url: "https://s.yimg.com/ny/api/res/1.2/KEsnzFiOEMzQoMSxCe2Q6w--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQyNw--/https://s.yimg.com/os/creatr-uploaded-images/2022-02/336cfd00-9719-11ec-be7a-48ae8ce59656", 
    age: 37, 
    note: "Allergic to staying on the same team"
  }]);
  return (
    <div className="App">
      <h1>People invited to my party</h1>
      <List people={ people } />
    </div>
  );
}

export default App;
