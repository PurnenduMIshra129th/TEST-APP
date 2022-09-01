import React from "react";
import Button from "./Button";
import SmallPart from "./SmallPart";

function Section() {
  return (
    <>
        
      <div
        className="container text-center  min-vw-100 "
        style={{ height: "300px", marginTop: "74px",}}
      >
        <div className="row   min-vw-100  h-40 w-100 ">
          <SmallPart />
          <SmallPart />
        
        </div>
        <div className="row  min-vw-100 h-40 w-100">
          <SmallPart />
          <SmallPart />
        </div>
        <div className="row h-25 ">
          <div className="col">
            <Button name="Store Comment" value="comments" localName="comments"/>
          </div>
          <div className="col">
            <Button name="Store Photos" value="photos" localName="photos" />
          </div>
        </div>
        <div className="row h-25">
          <div className="col">
            <Button name="Store Todo" value="todos" localName="todos"/>
          </div>
          <div className="col">
            <Button name="Store Post" value="posts" localName="posts"/>
          </div>
        </div>
      </div>
    </>
  );
}
export default Section;
