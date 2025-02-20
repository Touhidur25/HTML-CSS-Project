/*var screen = document.querySelector('#screen');
var btn = document.querySelectorAll('.btn');

for(item of btn){
    item.addEventListener('click',(e)=>{
        btntext = e.taget.innertext;
        screen.value += btntext;
    });
}*/

let result = document.getElementById("screen");

let calculate=(number)=>{
    result.value+=number;
}

let Result=()=>{
    try{
        result.value=eval(result.value)
    }
    catch(err){
        alert('Enter a valid Input');
    }
}

function clr(){
    result.value='';
}

function del(){
    result.value=result.value.slice(0,-1)
}