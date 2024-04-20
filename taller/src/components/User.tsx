import { useState } from "react";

interface props {
    name:string;
    phone?:number;
    gender?:string; //? quiere ddecir que es opcional puede o no contener esa propiedad
}

function User({phone, name}:props) {
    const [nameIn, setNameIn] = useState<string>(name);


    
  return (
    <>
        Hola {nameIn} mi numero es {phone}
        <br /><br />
        <input name="nameIn" placeholder="Your Name" ></input>
        <br /><br />
        <button onClick={(e) => {setNameIn("nuevoname")}}>change name state</button>
        <button onClick={(e) => {name = "nuevo"}}>change name</button>
    </>
  );
}

export default User;
