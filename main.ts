let Total_spots_left = 0
let Total_spaces_available = 0
let Spaces_left = 0
input.onButtonPressed(Button.A, function () {
    Total_spots_left = 1
    Total_spaces_available = 20
    Spaces_left = Total_spaces_available - Total_spots_left
    basic.showNumber(Spaces_left)
    basic.showString("Spots left!")
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("all spots free!")
    basic.showIcon(IconNames.Happy)
})
input.onButtonPressed(Button.B, function () {
    basic.showString("No spots left!")
    basic.showLeds(`
        . # . # .
        . # . # .
        . . . . .
        . # # # .
        . # . # .
        `)
})
