// declare constant variables
const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d'); 
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const mouse = {
    x: innerWidth / 2,
    y: innerHeight / 2
}
const gravity = 0.006
const friction = 1

addEventListener('resize', () => {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    init()
})

class Spinner {
    constructor(x, y, radius, color, velocity) {
        this.x = x
        this.y = y
        this.radius = radius
        this.color = color
        this.velocity = velocity
        this.alpha = 1 // alpha = opacidad
    }

    draw() {
        c.save()
        c.globalAlpha = this.alpha
        c.beginPath()
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
        c.fillStyle = this.color
        c.fill()
        c.closePath()
        c.restore()
    }
    update() {
        this.draw()
        this.velocity.x *= friction
        this.velocity.x *= friction
        this.velocity.y += gravity
        this.x += this.velocity.x
        this.y += this.velocity.y
    }
}

let spinners

function init() {
    spinners = []
}

function animate() {
    requestAnimationFrame(animate)
    c.fillStyle = 'rgba(0, 0, 0, .15)'
    c.fillRect(0, 0, canvas.width, canvas.height)
    spinners.forEach((spinner) => {
        if (spinner.alpha > 0) {
            spinner.update()
        } else {
            spinner.splice(i, 1)
        }
    })
}

init()
animate()
addEventListener('click', (event) => {
    mouse.x = event.clientX
    mouse.y = event.clientY
    const particleCount = 400
    const angleIncrement = (Math.PI * 2) / particleCount
        // particulas
    for (let i = 0; i < particleCount; i++) {
        spinners.push(
            new Spinner(
                mouse.x, mouse.y, 5, `hsl(${Math.random() * 360}, 50%, 50%)`, {
                    x: Math.cos(angleIncrement * i) * (Math.random() * 10),
                    y: Math.sin(angleIncrement * i) * (Math.random() * 10)
                }
            ))
    }
    console.log(spinners)
})
