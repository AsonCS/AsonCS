function onLoad() {
    document.getElementById('max').value = getSearchParam('max', 25)
    document.getElementById('amount').value = getSearchParam('amount', 15)
    document.getElementById('form').onsubmit = onSubmit
}

function onSubmit(e) {
    e.preventDefault()
    const max = parseInt(e.target.max.value)
    const amount = parseInt(e.target.amount.value)
    const numbers = generateNumbers(max, amount)
    const generateNumbersElement = document.getElementById('generate_numbers')
    generateNumbersElement.innerHTML = numbers
    console.log(generateNumbersElement)
}
