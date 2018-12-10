const clickBtn = document.getElementById('click-btn')
const clickValue = document.getElementById('click-value')
const clickReset = document.getElementById('click-reset')
const stepIncrease = document.getElementById('click-increase')
const clickMax = document.getElementById('clickMax')
const clickLeft = document.getElementById('click-left')
const clickMaxValue = document.getElementById('click-max')
const clickStepValue = document.getElementById('click-step')

const MAX = 20
const INITIAL_STEP = 1
const CLICKS = 0
let clicks = CLICKS
let step = INITIAL_STEP
let maxValue = MAX

clickStepValue.innerHTML = step
clickMaxValue.innerHTML = maxValue
clickLeft.innerHTML = maxValue - clicks

clickBtn.onclick = function() {
	if (clicks + step <= maxValue) {
		clicks = clicks + step
		clickLeft.innerHTML = maxValue - clicks
		clickValue.innerHTML = clicks
	} else {
		clickValue.innerHTML = 'max value reached'
		clickBtn.disabled = true
		clickLeft.innerHTML = maxValue - clicks
	}
}

stepIncrease.onclick = function() {
	step = step + INITIAL_STEP
	clickStepValue.innerHTML = step
	clickLeft.innerHTML = maxValue - clicks
}

clickMax.onclick = function() {
	maxValue = maxValue + INITIAL_STEP
	clickMaxValue.innerHTML = maxValue
	clickLeft.innerHTML = maxValue - clicks
	clickValue.innerHTML = clicks
	clickBtn.disabled = false
}

clickReset.onclick = function() {
	clicks = CLICKS
	maxValue = MAX
	step = INITIAL_STEP
	clickValue.innerHTML = clicks
	clickLeft.innerHTML = maxValue
	clickMaxValue.innerHTML = maxValue
	clickStepValue.innerHTML = step
	clickBtn.disabled = false
}
