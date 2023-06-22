const createarray=((sz)=>{
    let array=[];
    deletebar();
    for(let i=0;i<sz;i++){
        array.push(Math.floor(Math.random()*300)+1);
    }
    var barboard=document.getElementById("barboard");
    for(let i=0;i<sz;i++){
        let bar=document.createElement('div');
        bar.style.height = `${array[i]}px`;
        bar.classList.add('bar');
        barboard.appendChild(bar);
    }
});
const deletebar=(()=>{
    document.getElementById("barboard").innerHTML="";
})

export function enable(){
document.getElementById("")
}
export function disable(){

}
let flag=true;
export   function generate(){
    let sz=document.getElementById("size").value;
    console.log(sz);
    if(flag===true)
   createarray(sz);
}
export function bl(i){
    flag=i;
}