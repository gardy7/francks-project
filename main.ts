basic.forever(function () {
    basic.showNumber(548085)
    basic.showIcon(IconNames.Cow)
    basic.showString("" + (Math.ceil(input.lightLevel())))
    basic.showLeds(`
        # . . . .
        . # . . .
        . . # . .
        . . . # .
        . . . . #
        `)
})
