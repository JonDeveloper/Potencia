function chamar(){
  op1 = document.getElementById('pgnum1').value;
  op2 = document.getElementById('pgnum2').value;
  calc(op1,op2);
}

function calc(numdown,numsup){
  var cod = numdown;
  var coo = numsup--;
  for(i = 0; i < numsup;i++){
    cod = cod * numdown;
  }
  return cod;
  numdown = 0;
  numsup = 0;
}