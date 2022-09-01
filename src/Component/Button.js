import React from "react";

function Button(props) {
  // function for get the time
    function Time() {
    const d = new Date();
    const time = d.toLocaleTimeString();
    console.log(time);
  }

  //function for API fetch
    const renderUsers = async () => {
    const url = `https://jsonplaceholder.typicode.com/${props.value}`;
     Time();
    let data = await fetch(url);

    let parsedData = await data.json();
 Time();
    console.log(parsedData);
    const myJSON = JSON.stringify(parsedData);
    Time();
    localStorage.setItem(props.localName, myJSON);
    Time();
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
