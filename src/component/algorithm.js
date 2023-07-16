import { bl } from "./work";
let bar=document.getElementsByClassName("bar");
var val=250;


//spped function
export function speed(){
     val=350-document.getElementById("speed").value; 
     waitforme(val);
 }
  async function waitforme(val){
     return new Promise(resolve => {
         setTimeout(() => { resolve(' ') },val);
     })
 }


//swap  function
 function swap(xp, yp)
{
    var temp = bar[xp].style.height;
    bar[xp].style.height= bar[yp].style.height;
    bar[yp].style.height = temp;
}

//bubble sort  function
export async function bubbleSort()
{
    bl(false);
    var i, j,n=bar.length;
    for (i = 0; i < n - 1; i++){
        for (j = 0; j < n - i - 1; j++){
            bar[j].style.background='rgb(217, 99, 247)';
            bar[j+1].style.background='rgb(240, 246, 141)';
            if (parseInt(bar[j].style.height) > parseInt(bar[j+1].style.height)){
               await waitforme(val);
                swap(j,j+1);
            }
            bar[j].style.background='rgb(121, 200, 239)';
            bar[j+1].style.background='rgb(121, 200, 239)';
        }
        bar[bar.length-i-1].style.background="rgb(244, 170, 182)";
    }
    bar[0].style.background="rgb(244, 170, 182)";
    bl(true);
}

//merge sort  function 
export async function mergesort(){
bl(false);
await Sort(bar,0,bar.length-1);
bl(true);
}

async function merge(bar, l, m, r)
{
    var n1 = m - l + 1;
    var n2 = r - m;
    var L = new Array(n1);
    var R = new Array(n2);
 

    for (var i = 0; i < n1; i++) {
       await waitforme(val);
        bar[l+i].style.background="rgb(240, 246, 141)";
        L[i] = bar[l + i].style.height;}
    for (var i = 0; i< n2; i++) {
       await waitforme(val);
        bar[m+1+i].style.background="rgb(121, 221, 176)";
        R[i] = bar[m + 1 + i].style.height;}

    var i=0,j=0, k = l;
 
    while (i < n1 && j < n2) {
       await waitforme(val);
        if((n1+n2)===bar.length)bar[k].style.background="rgb(244, 170, 182)";
            else bar[k].style.background="rgb(217, 99, 247)";
        if (parseInt(L[i])<= parseInt(R[j])) { 
            bar[k] .style.height= L[i];
            i++;
        }
        else {
            bar[k].style.height = R[j];
            j++;
        }
        k++;
    }
    while (i < n1) {
       await waitforme(val);
        if((n1+n2)===bar.length)bar[k].style.background="rgb(244, 170, 182)";
        else bar[k].style.background="rgb(180, 170, 170)";
        bar[k].style.height= L[i];
        i++;
        k++;
    }
    while (j < n2) {
       await waitforme(val);
        if((n1+n2)===bar.length)bar[k].style.background="rgb(244, 170, 182)";
        else bar[k].style.background="rgb(180, 170, 170)";
        bar[k].style.height= R[j];
        j++;
        k++;
    }
}
 async  function Sort(bar,l, r){
    if(l>=r){
        return;
    }
    var m =l+Math.floor((r-l)/2);
    await Sort(bar,l,m);
    await Sort(bar,m+1,r);
    await merge(bar,l,m,r);
}



// selection sort export async function
export async function selectionSort(){
    bl(false);
    var i, j, min_idx,n=bar.length;

    for (i = 0; i < n-1; i++){
        min_idx = i;
        bar[i].style.background="rgb(217, 99, 247)";
        for (j = i + 1; j < n; j++){     
            bar[j].style.background="rgb(240, 246, 141)"; 
            await waitforme(val);
        if (parseInt(bar[j].style.height) < parseInt(bar[min_idx].style.height)){
            
            // await waitforme();
            if(min_idx !=i)
            bar[min_idx].style.background="rgb(121, 200, 239)";
            // bar[i].style.background="rgb(217, 99, 247)";
            min_idx = j;
        }
        else bar[j].style.background="rgb(121, 200, 239)"; 
    }
    await waitforme(val);    
        swap(min_idx, i);
        bar[min_idx].style.background="rgb(121, 200, 239)";
        bar[i].style.background="rgb(244, 170, 182)";
    }
 
    bl(true);
}

//insertionsort  function
export async function insertionSort() { 
    bl(false);
    let i, key, j,n=bar.length; 
    bar[0].style.background="rgb(244, 170, 182)";
    for (i = 1; i < n; i++) { 
        key = parseInt(bar[i].style.height); 
        j = i - 1; 
        bar[i].style.background='rgb(217, 99, 247)';
        await waitforme(val);
        // bar[j+1].style.background='rgb(240, 246, 141)';
        while (j >= 0 && parseInt(bar[j].style.height) > key) { 
            bar[j].style.background='rgb(217, 99, 247)';
            bar[j + 1].style.height = bar[j].style.height; 
            j = j - 1; 
            await waitforme(val);
            for(let k=i;k>=0;k--)bar[k].style.background="rgb(244, 170, 182)";
        } 
        bar[j + 1].style.height= key; 
        bar[i].style.background="rgb(244, 170, 182)";
    } 
    bl(true);
} 


//Quick sort function
async function partition(bar, left, right) {
    // var temp;
     var i=left-1;
   for( let j=left;j<=right-1;j++){
    bar[j].style.background="rgb(240, 246, 141)";
    await waitforme(val);
    if(parseInt(bar[j].style.height)<parseInt( bar[right].style.height)){
        i++;   
        let temp=bar[j].style.height;
   bar[j].style.height=bar[i].style.height;
   bar[i].style.height=temp; 
        bar[i].style.background="rgb(121, 221, 176)";
        if(i!=j) bar[j].style.background="rgb(121, 221, 176)";
        await waitforme(val);
    }
    else{
        bar[j].style.background="rgb(217, 99, 247)";
    }
   }
   i++;
   await waitforme(val);
   let temp=bar[right].style.height;
   bar[right].style.height=bar[i].style.height;
   bar[i].style.height=temp;   
   bar[right].style.background="rgb(217, 99, 247)";
   bar[i].style.background="rgb(244, 170, 182)";
   await waitforme(val);
   for(let k=0;k<bar.length;k++){
    if(bar[k].style.background!="rgb(244, 170, 182)")bar[k].style.background="rgb(121, 200, 239)";
   }
    return i;
}
async function quickSort(bar, low,high) {
  if(low<high){
    let pi=await partition(bar,low,high);
   await quickSort(bar,low,pi-1);
   await quickSort(bar,pi+1,high);
  }
  else{
    if(low>=0 && high>=0 && low<bar.length && high<bar.length ){
        bar[low].style.background="rgb(244, 170, 182)";
        bar[high].style.background="rgb(244, 170, 182)";
    }
  }
    // return bar;
}
export async function quickSorting(){
    bl(false);
    await quickSort(bar,0,bar.length-1);
    bl(true);
    }