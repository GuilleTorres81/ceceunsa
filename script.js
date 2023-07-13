let count=1;
let leftPhotoCount=1;
let rightPhotoCount=1;
const $form = document.getElementById('form');

//MEJORAR ESTA PARTE
document.querySelector('#menu-opt1').addEventListener('click',displaySection);
document.querySelector('#menu-opt2').addEventListener('click',displaySection);
document.querySelector('#menu-opt3').addEventListener('click',displaySection);


$form.addEventListener('submit', handleSubmit)


setInterval(function(){
    document.getElementById('radio' + count).checked=true;
    count++;
    if(count>4){
        count=1
    }
},4000)

setInterval(function(){
    document.getElementById('left-photo-radio' + leftPhotoCount).checked=true;
    leftPhotoCount++;
    if(leftPhotoCount>3){
        leftPhotoCount=1;
    }
},2000)

setInterval(function(){
    document.getElementById('right-photo-radio' + rightPhotoCount).checked=true;
    rightPhotoCount++;
    if(rightPhotoCount>3){
        rightPhotoCount=1;
    }
},2000)

function handleSubmit(event){
    event.preventDefault();
    const form = new FormData(this);
    console.log(form.get('email'));
}

function displaySection(){
    
    opt = this.getAttribute('id');
        switch(opt){
        case 'menu-opt1': {
            document.getElementById('inicio').style.display='flex';
            document.getElementById('comision-info').style.display='none';
            document.getElementById('servicios').style.display='none';
        }break;
        case 'menu-opt2': {
            document.getElementById('inicio').style.display='none';
            document.getElementById('comision-info').style.display='flex';
            document.getElementById('servicios').style.display='none';
        }break;
        case 'menu-opt3': {
            document.getElementById('inicio').style.display='none';
            document.getElementById('comision-info').style.display='none';
            document.getElementById('servicios').style.display='flex';
        }break;
        default: {
            document.getElementById('inicio').style.display='flex';
            document.getElementById('comision-info').style.display='none';
            document.getElementById('servicios').style.display='none';
        }break;
    }
}


