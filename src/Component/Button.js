import React,{useState} from "react";

function Button(props) {
  const [data,setData] = useState({
    start:"",
    end:"",
    startSave:"",
    endSave:""
  })
  //function for API fetch
    const renderUsers = async () => {
    const url = `https://jsonplaceholder.typicode.com/${props.value}`;
    let startTime =  new Date().toLocaleTimeString();
    let data = await fetch(url);

    let parsedData = await data.json();
    let endTime =  new Date().toLocaleTimeString();
    console.log(parsedData);
    const myJSON = JSON.stringify(parsedData);
    let startSaveTime =  new Date().toLocaleTimeString();
    localStorage.setItem(props.localName, myJSON);
    let endSaveTime =  new Date().toLocaleTimeString();
    setData({
      start:startTime,
      end:endTime,
      startSave:startSaveTime,
      endSave:endSaveTime
    })
  };
  return (
    <button
      type="button"
      className="btn btn-primary m-1 btn-sm"
      onClick={renderUsers}
    >
      {props.name}
      
    </button>
  );
}

export default Button;
