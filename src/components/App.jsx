import React, {useState} from "react";

function App() {

  const [fullName,setFullName]= useState({
    fName:"",
    lName:""
  })
  
  function updateFullName(event){
    const {value,name} = event.target
  

    // console.log(value)
    console.log(value)
    console.log(name)

    setFullName((prevValue)=>{
      if (name === "fName"){
        return {
          fName: value,
          lName: prevValue.lName
        }

      }
      else if (name === "lName") {
         
        return {
          fName : prevValue.fName,
          lName : value
        }

      }
    })

  }




  return (
    <div className="container">
      <h1>Hello {fullName.fName} {fullName.lName
      } </h1>
      <form >
        <input value={fullName.fName}  onChange={updateFullName} name="fName" placeholder="First Name" />
        <input  value={fullName.lName} onChange={updateFullName} name="lName" placeholder="Last Name" />
        <button >Submit</button>
      </form>
    </div>
  );
}

export default App;
