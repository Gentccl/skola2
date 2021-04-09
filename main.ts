let kol = 0
let rad = 0
for (let index = 0; index < 25; index++) {
    for (let index = 0; index < 5; index++) {
        led.toggle(rad, kol)
        basic.pause(200)
        basic.clearScreen()
        rad += 1
    }
    rad = 0
    kol += 1
}
