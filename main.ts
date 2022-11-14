function Amber () {
    strip.showColor(neopixel.colors(NeoPixelColors.Black))
    strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Yellow))
    strip.show()
}
function Green () {
    strip.showColor(neopixel.colors(NeoPixelColors.Black))
    strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Green))
    strip.show()
}
function Red () {
    strip.showColor(neopixel.colors(NeoPixelColors.Black))
    strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Red))
    strip.show()
}
function RedAmber () {
    strip.showColor(neopixel.colors(NeoPixelColors.Black))
    strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Red))
    strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Yellow))
    strip.show()
}
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P0, 3, NeoPixelMode.RGB)
strip.clear()
strip.setBrightness(128)
basic.forever(function () {
    Red()
    basic.pause(5000)
    RedAmber()
    basic.pause(2000)
    Green()
    basic.pause(5000)
    Amber()
    basic.pause(2000)
})
