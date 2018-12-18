function parseTime(time) {
  // string '02:45'
  // ['02', '45']                         // string
  // ['02', '45'].map(Number) = [2, 45]   // integer

  const timeSplit = time.split(':').map(Number)
  const hours = timeSplit[0] > 12 ? timeSplit[0] - 12 : timeSplit[0]
  const minutes = timeSplit[1] === 0 ? 60 : timeSplit[1]
  const ampm = timeSplit[0] <= 12 ? 'am' : 'pm'
  return { hours, minutes, ampm }
}

function timeToText({ hours, minutes, ampm }) {
  const hoursArr   = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve']
  const minutesArr = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty', 'twenty one', 'twenty two', 'twenty three', 'twenty four', 'twenty five', 'twenty six ', 'twenty seven', 'twenty eight', 'twenty nine', 'thirty', 'thirty one', 'thirty two', 'thirty three', 'thirty four', 'thirty five', 'thirty six', 'thirty seven', 'thirty eight', 'thirty nine', 'forty', 'forty one', 'forty two', 'forty three', 'forty four', 'forty five', 'forty six ', 'forty seven', 'forty eight', 'forty nine', 'fifty', 'fifty one', 'fifty two', 'fifty three', 'fifty four', 'fifty five', 'fifty six ', 'fifty seven', 'fifty eight', 'fifty nine', '']

  const displayHours = hoursArr[hours - 1]
  const displayMinutes = minutesArr[minutes - 1]
  const displayAdjoiningWord = minutes < 10 ? 'oh' : ''

  return `It's ${displayHours} ${displayAdjoiningWord} ${displayMinutes} ${ampm}`
}

function renderTime() {
  const date = new Date()
  const hour = date.getHours()
  const min = date.getMinutes()
  const dateString = `${hour}:${min}`
  const textTime = timeToText(parseTime(dateString))
  
  document.querySelector("#root").innerHTML = textTime

  // Even shorter
  // document.querySelector("#root").innerHTML = timeToText(parseTime(`${date.getHours()}:${date.getMinutes()}`))
}

setInterval(function () {
  renderTime()
},1000);

renderTime()
