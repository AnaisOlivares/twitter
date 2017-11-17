window.addEventListener('load',function() {
  var nameContact = document.getElementById('name');
  var btnSave = document.getElementById('save');
  var containerContact = document.getElementById('container-contact');
  var contadorNumb = document.getElementById('number-cont');


nameContact.addEventListener("keyup", function(){
  var contador = '';
  contador = nameContact.value.length;
    contadorNumb.value = 140 - contador;
})

  btnSave.addEventListener('click', function(event){
    if(nameContact.value){
      event.preventDefault();
    var newContact = document.createElement('li'); //este es el padre

    var newName = document.createElement('span');
    newName.setAttribute('class', 'contact-name');
    newName.textContent = nameContact.value;
    newContact.appendChild(newName);
    nameContact.value = '';
    }


  //malogranding

/*if (text.length.value === 0)
   {
    save.disabled=true;
   }

else{
      save.disabled=false;
      }
}*/

  containerContact.insertBefore(newContact,containerContact.firstElementChild);
});

});
