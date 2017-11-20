window.addEventListener('load',function() {
  var nameContact = document.getElementById('name');
  var btnSave = document.getElementById('save');
  var containerContact = document.getElementById('container-contact');
  var contadorNumb = document.getElementById('number-cont');
  var max = 140;

//   nameContact.addEventListener("keyup", function(){
//   var contador = '';
//   contador = nameContact.value.length;
//   contadorNumb.value = max - contador;

// })


  btnSave.addEventListener('click', function(event){
    if(nameContact.value){
      event.preventDefault();
          btnSave.style.background = '#DDDFE0';

    var newContact = document.createElement('li'); //este es el padre
    containerContact.insertBefore(newContact,containerContact.firstElementChild);


    var newName = document.createElement('span');
    newName.setAttribute('class', 'contact-name');
    newName.textContent = nameContact.value;
    newContact.appendChild(newName);
    nameContact.value = ''; 
    contadorNumb.value = max;
    };

});
nameContact.addEventListener("keyup", function(){
  var contador = '';
  contador = nameContact.value.length;
  contadorNumb.value = max - contador;
  if (contador>=140) {
    btnSave.disabled = true;
    contadorNumb.style.color = 'red' 
    btnSave.style.background = '#DDDFE0';

  }else if (contador>=130){
    btnSave.disabled = false;
    contadorNumb.style.color = 'pink';
    btnSave.style.background = '#6AD2F3';
    
  }else if (contador<130 && contador>120){
    btnSave.disabled = false;
    contadorNumb.style.color = 'yellow';
  
  }else{
    btnSave.disabled=false;
    contadorNumb.style.color = 'black';
    btnSave.style.background =  '#6AD2F3';
  }

});

});
