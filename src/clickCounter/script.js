const clickBtn = document.getElementById('click-btn')
const clickValue = document.getElementById('click-value')
const clickReset = document.getElementById('click-reset')
const clickIncrease = document.getElementById('click-increase')
const clickMax = document.getElementById('clickMax')

let clicks = 0
let step = 1
const maxValue = 20

clickBtn.onclick = function() {
	if (clicks < maxValue) {
		clicks = clicks + step
	} else {
		clicks = 'max value reached'
	}

	clickValue.innerHTML = clicks
}

clickIncrease.onclick = function() {
	if (clicks < maxValue) {
		clicks = 2 + clicks
	} else {
		clicks = 'max value reached'
	}
	clickValue.innerHTML = clicks
}

clickMax.onclick = function() {
	if (clicks < maxValue) {
		clicks = 20
	} else {
		clicks = 'max value reached'
	}
	clickValue.innerHTML = clicks
}

clickReset.onclick = function() {
	clicks = 0
	clickValue.innerHTML = clicks
}
