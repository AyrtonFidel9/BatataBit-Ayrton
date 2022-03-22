const tableChange1 = document.getElementsByClassName("arrow-change");
const tableChange2 = document.getElementsByClassName("arrow-change-back"); // devuelve un array con todas las clases 

tableChange1[0].addEventListener('click', function(){
    document.getElementsByClassName('table-one')[0].style.display = "none";
    document.getElementsByClassName('table-two')[0].style.display = "block";
});

tableChange2[0].addEventListener('click', function(){
    document.getElementsByClassName('table-one')[0].style.display = "block";
    document.getElementsByClassName('table-two')[0].style.display = "none";
});

