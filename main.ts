function A () {
    if (je_napruženo == 0) {
        NAPRUŽIT()
        je_napruženo = 1
        basic.showIcon(IconNames.Yes)
    } else {
        music.play(music.builtinPlayableSoundEffect(soundExpression.hello), music.PlaybackMode.UntilDone)
    }
}
function NATÁHNOUT () {
    servos.P1.setAngle(0)
    basic.pause(délka_natažení)
    servos.P1.setAngle(90)
}
function ODJISTIT () {
    servos.P0.setAngle(180)
    basic.pause(300)
    servos.P0.setAngle(90)
}
input.onButtonPressed(Button.A, function () {
    A()
})
function ZAJISTIT () {
    servos.P0.setAngle(0)
    basic.pause(300)
    servos.P0.setAngle(90)
}
function B () {
    if (je_napruženo == 1) {
        basic.showIcon(IconNames.Skull)
        ODJISTIT()
        NATÁHNOUT()
        ZAJISTIT()
        je_napruženo = 0
        basic.showIcon(IconNames.Triangle)
    } else {
        music.play(music.builtinPlayableSoundEffect(soundExpression.hello), music.PlaybackMode.UntilDone)
    }
}
function NAPRUŽIT () {
    servos.P1.setAngle(180)
    basic.pause(délka_natažení)
    servos.P1.setAngle(90)
}
input.onSound(DetectedSound.Loud, function () {
    A()
    B()
})
input.onButtonPressed(Button.B, function () {
    B()
})
let je_napruženo = 0
let délka_natažení = 0
délka_natažení = 1800
je_napruženo = 0
basic.showIcon(IconNames.Triangle)
