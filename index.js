const display=document.getElementById("display")

function displayy(character){
    display.value+=character
}

function calculate(){ //own built in
    try{
        display.value=eval(display.value)
    }
    catch(error){
        display.value="error"
    }
}
function cleardisplay(){
    display.value=" "
}
