import React from "react";
import "./calculator.css";

function Calculator() {
    const[e,setValue]=React.useState("")
    // const[e,setE]=React.useState(0)
    // console.log(e)
    console.log(e)


  return (
    <>
      <section className="flex_main_of_calculator">
        <article className="box_of_calculator">
          <div className="flex_set_center_display">
            <div className="div_of_display"><h2>{e}</h2></div>
          </div>
          <div className="grid_of_btn">
            <button className="grid_item">C</button>
            <button className="grid_item">+/-</button>
            <button className="grid_item">%</button>
            <button className="grid_item">/</button>
            <button className="grid_item" value={1} onClick={(x)=>setValue(x.target.value)}>7</button>
            <button className="grid_item" value={2} onClick={(x)=>setValue(x.target.value)}>8</button>
            <button className="grid_item">9</button>
            <button className="grid_item">X</button>
            <button className="grid_item">4</button>
            <button className="grid_item">5</button>
            <button className="grid_item">6</button>
            <button className="grid_item">-</button>
            <button className="grid_item">1</button>
            <button className="grid_item">2</button>
            <button className="grid_item">3</button>
            <button className="grid_item">+</button>
            <button className="grid_item">0</button>
            <button className="grid_item">.</button>
            <button className="grid_item" style={{backgroundColor:"#f33d1d" ,width:"131px"}}>=</button>
          </div>
        </article>
      </section>
    </>
  );
}

export default Calculator;
