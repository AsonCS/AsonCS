/**
 * Generate random numbers
 * @param {number} max - Maximum number
 * @param {number} size - Amount of numbers to generate
 * @returns {string} - Comma separated list of numbers
 */
function generateNumbers(max, size) {
    if (size > max) {
        alert('Size cannot be greater than max')
        return ''
    }
    const numbers = []
    while (numbers.length < size) {
        const number = (Math.floor(Math.random() * max) + 1)
            .toString()
            .padStart(max.toString().length, '0')
        if (!numbers.includes(number)) {
            numbers.push(number)
        }
    }
    return numbers.sort().join(', ')
}

/**
 * Get search param
 * 
 * @param {string} key
 * @param {string} defaultValue
 * @returns {string}
 */
function getSearchParam(key, defaultValue = null) {
    const idx = location.search.indexOf(key)
    if (idx === -1) {
        return defaultValue
    }

    const start = location.search.substring(idx + key.length + 1)
    let end = start.indexOf('&')
    if (end === -1) {
        end = start.length
    }

    const param = start.substring(0, end)
    return param ? param : defaultValue
}
