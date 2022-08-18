function attachEventsListeners() {

    let dayInput = document.getElementById(`days`)
    let hourInput = document.getElementById(`hours`)
    let minutesInput = document.getElementById(`minutes`)
    let secondsInput = document.getElementById(`seconds`)

    const units = {
        days: 1,
        hours: 24,
        minutes: 1440,
        seconds: 86400
    }

    function converter(value, timeInput) {
        const days = Number(timeInput) / units[value]

        return{
            days : days,
            hours: days * units.hours,
            minutes: days * units.minutes,
            seconds: days * units.seconds          
        }
    }

    let daysBtn = document.getElementById(`daysBtn`).addEventListener(`click`, timeConverter)
    let hoursBtn = document.getElementById(`hoursBtn`).addEventListener(`click`, timeConverter)
    let minutesBtn = document.getElementById(`minutesBtn`).addEventListener(`click`, timeConverter)
    let secondsBtn = document.getElementById(`secondsBtn`).addEventListener(`click`, timeConverter)
    
    function timeConverter(ev) {
        
        let input = ev.target.parentNode.querySelector(`input[type="text"]`)

        let time = converter( input.id, Number(input.value))

            dayInput.value = time.days
            hourInput.value = time.hours
            minutesInput.value =time.minutes
            secondsInput.value = time.seconds


    }
}