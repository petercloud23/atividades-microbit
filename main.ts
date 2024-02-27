input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showIcon(IconNames.Happy)
    music.play(music.builtinPlayableSoundEffect(soundExpression.giggle), music.PlaybackMode.UntilDone)
})
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Sad)
    music.play(music.builtinPlayableSoundEffect(soundExpression.sad), music.PlaybackMode.UntilDone)
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.Scissors)
    basic.showIcon(IconNames.Square)
    basic.showIcon(IconNames.Target)
    basic.showIcon(IconNames.Sword)
})
input.onButtonPressed(Button.B, function () {
    basic.showString("Comida")
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    basic.showLeds(`
        . . . # #
        . . # # #
        . # # # #
        # # # # #
        # # # # #
        `)
    basic.showLeds(`
        . . . . .
        . . . . #
        . . . # #
        . . # # #
        . # # # #
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . #
        . . . # #
        . . # # #
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
basic.showIcon(IconNames.Asleep)
