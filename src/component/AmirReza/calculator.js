import React from "react";
import "./calculator.css";

function Calculator(props) {

  const[elman,setElman]=React.useState("")
  const[num1,setNum1]=React.useState("")
  const[num2,setNum2]=React.useState("")
  const[show,setShow]=React.useState("")



const Operator=(v1,v2,eleman)=>{
  if(eleman==="+"){
    let sum=0;
     setNum1(sum=v1+v2)
     return 
  }
  else if(eleman==="-"){
    let sum=0;
     setNum1(sum=v1-v2)
     return 
  }
  else if(eleman==="X"){
    let sum=0;
     setNum1(sum=v1*v2)
     return 
  }
  else if(eleman==="/"){
    let sum=0;
     setNum1(sum=v1/v2)
     return 
  }
  else if(eleman==="%"){
    let sum=0;
     setNum1(sum=v1%v2)
     return 
  }
}




console.log(num1)
  // let a=parseInt(num1.setNum2)+parseInt(num1.num2)
    // console.log(parseInt(num1.setNum2)+parseInt(num1.num2))


  return (
    <>
      <section className="flex_main_of_calculator">
        <article className="box_of_calculator">
          <div className="flex_set_center_display" >
            <div className="div_of_display">
            <span className="style_of_result">{num1}</span> 
            <p className="style_of_compile_result">{show}</p>
            </div>
         
          </div>
          <div className="grid_of_btn">
            <button className="grid_item" onClick={()=>{return setNum1(""),setShow("")}}>C</button>
            <button className="grid_item">+/-</button>
            <button className="grid_item" value={"%"}>%</button>
            <button className="grid_item" value={"/"}>/</button>
            <button className="grid_item" value={7} onClick={(x)=>setNum1(num1+ x.target.value)}>7</button>
            <button className="grid_item" value={8} onClick={(x)=>setNum1(num1+ x.target.value)}>8</button>
            <button className="grid_item" value={9}>9</button>
            <button className="grid_item" value={"X"} >X</button>
            <button className="grid_item" value={4}>4</button>
            <button className="grid_item" value={5}>5</button>
            <button className="grid_item" value={6}>6</button>
            <button className="grid_item" value={"-"} >-</button>
            <button className="grid_item" value={1}>1</button>
            <button className="grid_item" value={2}>2</button>
            <button className="grid_item" value={3}>3</button>
            <button className="grid_item" value={"+"} onClick={(x)=>{return setElman(x.target.value), setNum2(num1),setShow(num1) ,setNum1("")}}>+</button>
            <button className="grid_item" value={0}>0</button>
            <button className="grid_item">.</button>
            <button className="grid_item" style={{backgroundColor:"#f33d1d" ,width:"131px"}} onClick={()=>{return Operator(parseInt(num2),parseInt(num1),elman),setShow(`${show}${elman}${num1}`)}}>=</button>
          </div>
        </article>
      </section>
    </>
  );
}

export default Calculator;
