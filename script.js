function checkPalindrome() {
    const numberInput = document.getElementById('numberInput').value;
    const resultElement = document.getElementById('result');

    if (numberInput === '') {
        resultElement.textContent = 'Please enter a number';
        resultElement.style.color = 'red';
        return;
    }

    const reversedNumber = numberInput.split('').reverse().join('');
    if (numberInput === reversedNumber) {
        resultElement.textContent = `${numberInput} is a palindrome!`;
        resultElement.style.color = 'green';
    } else {
        resultElement.textContent = `${numberInput} is not a palindrome.`;
        resultElement.style.color = 'red';
    }
}
