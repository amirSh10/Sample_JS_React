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
  else if(eleman==="x"){
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
            {/* return setNum1(`-${num1}`) */}
          </div>
          <div className="grid_of_btn">
            <button className="grid_item" onClick={()=>{return setNum1(""),setShow("")}}>C</button>
            <button className="grid_item" onClick={()=>{
              let a=/-/;
                let search=a.test(num1)
                if(search==false){
                  return setNum1(`-${num1}`)
                }else if(search==true){
                  return setNum1(num1.replace("-",""))
                }

            }}>+/-</button>
            <button className="grid_item" value={"%"} onClick={(x)=>{return setElman(x.target.value), setNum2(num1),setShow(num1) ,setNum1("")}}>%</button>
            <button className="grid_item" value={"/"} onClick={(x)=>{return setElman(x.target.value), setNum2(num1),setShow(num1) ,setNum1("")}}>/</button>
            <button className="grid_item" value={7} onClick={(x)=>setNum1(num1+ x.target.value)}>7</button>
            <button className="grid_item" value={8} onClick={(x)=>setNum1(num1+ x.target.value)}>8</button>
            <button className="grid_item" value={9} onClick={(x)=>setNum1(num1+ x.target.value)}>9</button>
            <button className="grid_item" value={"x"} onClick={(x)=>{return setElman(x.target.value), setNum2(num1),setShow(num1) ,setNum1("")}}>x</button>
            <button className="grid_item" value={4} onClick={(x)=>setNum1(num1+ x.target.value)}>4</button>
            <button className="grid_item" value={5} onClick={(x)=>setNum1(num1+ x.target.value)}>5</button>
            <button className="grid_item" value={6} onClick={(x)=>setNum1(num1+ x.target.value)}>6</button>
            <button className="grid_item" value={"-"} onClick={(x)=>{return setElman(x.target.value), setNum2(num1),setShow(num1) ,setNum1("")}}>-</button>
            <button className="grid_item" value={1} onClick={(x)=>setNum1(num1+ x.target.value)}>1</button>
            <button className="grid_item" value={2} onClick={(x)=>setNum1(num1+ x.target.value)}>2</button>
            <button className="grid_item" value={3} onClick={(x)=>setNum1(num1+ x.target.value)}>3</button>
            <button className="grid_item" value={"+"} onClick={(x)=>{return setElman(x.target.value), setNum2(num1),setShow(num1) ,setNum1("")}}>+</button>
            <button className="grid_item" value={0} onClick={(x)=>setNum1(num1+ x.target.value)}>0</button>
            <button className="grid_item" onClick={()=>{
              let a=/./
              let search=a.test(num1)
              console.log(search)
              if(search==true){
                return setNum1(`${num1}.`)
              }else if(search==true){
                return setNum1(num1.replace(".",""))
              }
            }}>.</button>
            <button className="grid_item" style={{backgroundColor:"#f33d1d" ,width:"131px"}} onClick={()=>{return Operator(parseFloat(num2),parseFloat(num1),elman),setShow(`${show}${elman}${num1}`)}}>=</button>
          </div>
        </article>
      </section>
    </>
  );
}

export default Calculator;
