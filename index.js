
const lamp = document.getElementById('lamp')
const turnOn = document.getElementById('turnOn')
const turnOff = document.getElementById('turnOff')




function lampIsBroken(){

    return lamp.src.indexOf ('quebrada') > -1
}

function lampOn(){
    if(!lampIsBroken()){
    lamp.src = 'ligada.jpg'
    }
}


function lampOff(){
    if(!lampIsBroken()){
    lamp.src = 'desligada.jpg'
    }
}

function lampBreak(){
    if(!lampIsBroken()){
    lamp.src = 'quebrada.jpg'
    }
}



lamp.addEventListener('mouseover' ,lampOn)
lamp.addEventListener('mouseleave' ,lampOff)
lamp.addEventListener('dblclick' ,lampBreak)

turnOff.addEventListener('click',lampOff)
turnOn.addEventListener('click', lampOn)