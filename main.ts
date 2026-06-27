let VALUE = 0
let PASSWORD_INPUT = ""
let PASSWORD = ""
input.onButtonPressed(Button.A, function () {
    VALUE += 1
    basic.showNumber(VALUE)
})
input.onButtonPressed(Button.AB, function () {
    PASSWORD_INPUT = "" + PASSWORD_INPUT + convertToText(VALUE)
    VALUE = 0
})
input.onButtonPressed(Button.B, function () {
    VALUE += -1
    basic.showNumber(VALUE)
})
basic.forever(function () {
    basic.showNumber(0)
    PASSWORD = "1234"
    PASSWORD_INPUT = ""
    VALUE = 0
})
basic.forever(function () {
    if (PASSWORD_INPUT == PASSWORD) {
        basic.showString("C'mon in")
    } else {
        basic.showString("GET OUT!")
    }
})
