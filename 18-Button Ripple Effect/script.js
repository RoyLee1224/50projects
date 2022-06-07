const button = document.querySelectorAll(".ripple")
const rick = document.getElementById("rick")

button.forEach(button => {
    button.addEventListener("click", function(e){
        const x = e.clientX
        const y = e.clientY

        const buttonTop = e.target.offsetTop
        const buttonLeft = e.target.offsetLeft

        const xInside = x - buttonLeft
        const yInside = y - buttonTop

        console.log(xInside,yInside)
        const circle = document.createElement('span')
        circle.classList.add('circle')
        circle.style.top = yInside + "px"
        circle.style.left = xInside + "px"

        this.appendChild(circle)

        setTimeout(() => circle.remove(), 500)

        if(xInside > 130 && yInside >45 ){
            rick.play()
            setTimeout(() => rickstop(), 10*1000)
        }
    })
})

function rickstop(){
    rick.pause();
    rick.currentTime = 0;
}