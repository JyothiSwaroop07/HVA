var val=document.getElementById("calc");
function Show(v){
    val.value+=v;
}
function fun(){
         
      val.value="";
      
}

function exe(){
    val.value=eval(val.value);
}
function cancel(){
    val.value=val.value.substr(0,val.value.length-1);
}

function root(){
  val.value = Math.pow(val.value,0.5);
}

function square(){
  val.value = Math.pow(val.value,2);
}