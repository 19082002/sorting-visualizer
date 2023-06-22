// import React from 'react';
import React, { useState } from 'react';
import './index.css';
import {generate  } from './work.js';
import {mergesort,bubbleSort,selectionSort,insertionSort,speed, quickSorting} from './algorithm';


function Index(props) {
    // let flag=props.flag;
    const [flag,setFlag]=useState(props.flag);
    function merge(){console.log("f");

    }
    function gen(){
        generate();
        setFlag("true");

    }
function sorting(i){
console.log(typeof(flag));
if(flag=="true"){
    console.log("t");
    setFlag("false");
    if(i===1)bubbleSort();
    else if(i===2) selectionSort();
   else if(i===3)insertionSort();
   else if(i===4)mergesort();
   else if(i===5)quickSorting();
}
}
    return(
        <>
        <div id="heading"><h1>Sorting Visualizer</h1></div>
        <div id="buttons">
        <button className="btn" onClick={()=>{gen()}}>Generate</button>
        <button className="btn" onClick={()=>{sorting(4)}}>Merge Sort</button>
        <button className="btn" onClick={()=>{sorting(5)}}>Quick  Sort</button>
        <button className="btn" onClick={()=>{sorting(1)}}>Bubble Sort</button>
        <button className="btn" onClick={()=>{sorting(2)}}>Selection Sort</button>
        <button className="btn" onClick={()=>{sorting(3)}}>Insertion Sort</button>
        </div>

        <div className='sliders'>
          <label>Size</label>
            <input type="range" min="5" max="100" step="2" id="size" className="slide" onChange={()=>{gen()}}/>
            <br/> <label>Speed</label>
             <input type="range" min="5" max="100" step="2" id="speed" className="slide" onChange={speed}/>
        </div>
        <div id='barboard'>
        <p id="msg">Generate some bars with random heights and select one sorting algorithm, and watch the visualizer do the sorting for you!</p>
</div>
        </>
    )
}

export default Index;