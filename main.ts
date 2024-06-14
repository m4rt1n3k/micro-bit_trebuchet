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
    if (je_napruženo == 0) {
        NAPRUŽIT()
        je_napruženo = 1
        basic.showIcon(IconNames.Yes)
    }
})
function ZAJISTIT () {
    servos.P0.setAngle(0)
    basic.pause(300)
    servos.P0.setAngle(90)
}
function NAPRUŽIT () {
    servos.P1.setAngle(180)
    basic.pause(délka_natažení)
    servos.P1.setAngle(90)
}
input.onButtonPressed(Button.B, function () {
    if (je_napruženo == 1) {
        basic.showIcon(IconNames.Skull)
        ODJISTIT()
        NATÁHNOUT()
        ZAJISTIT()
        je_napruženo = 0
        basic.showIcon(IconNames.Triangle)
    }
})
let je_napruženo = 0
let délka_natažení = 0
basic.showString("Ready")
délka_natažení = 1800
je_napruženo = 0
basic.showIcon(IconNames.Triangle)
