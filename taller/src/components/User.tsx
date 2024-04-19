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
        <input name="nameIn" placeholder="Your Name" ></input>
        <button onClick={(e) => {setNameIn("nuevoname")}}>change name</button>
    </>
  );
}

export default User;
