basic.showIcon(IconNames.Happy)
basic.forever(function () {
    led.plotBarGraph(
    input.soundLevel(),
    170
    )
})
