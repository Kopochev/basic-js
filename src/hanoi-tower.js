module.exports = function calculateHanoi( disksNumber, turnsSpeed ) {
    let turnsSpeedPerSecond = turnsSpeed / 3600;
    let turns = 2 ** disksNumber - 1;
    let seconds = turns / turnsSpeedPerSecond;
    return {turns: turns,
            seconds: seconds};
}