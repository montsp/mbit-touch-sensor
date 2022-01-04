basic.forever(function () {
    if (mbit_Input.TouchPad(DigitalPin.P0, mbit_Input.enTouch.Touch)) {
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # . .
            . . . . .
            . . # . .
            `)
    } else {
        basic.clearScreen()
    }
})
