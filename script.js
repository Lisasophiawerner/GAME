
let dx = 0

function handleKeyDown (ev) {

    console.log(ev)
    if(ev.key == "ArrowRight") {
        dx = 10
    }
    else if (ev.key == "ArrowLeft") {
        dx= -10
    }
}

function handleKeyUp (ev) {

    console.log(ev)
    if(ev.key == "ArrowRight") {
        dx = 0
    }
    else if ( ev.key == "ArrowLeft"){}

    else if ( ev.key == "ArrowDown"){ 

}   else if ( ev.key == "ArrowUp"){
}
}

function updatePlayerPosition (){

const player = document.querySelector ("#player")
let posX = player.getAttribute("cx")

posX = parseInt(posX) 
posX = posX + dx
player.setAttribute("cx", posX)


}


function gameLoop () {

    updatePlayerPosition()
    window.requestAnimationFrame (gameLoop)
}




function main() {
window.onkeydown = handleKeyDown
window.onkeyup = handleKeyUp
console.log("start game...")
gameLoop()

}

main( )