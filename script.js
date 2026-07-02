// 1. बटन का रंग बदलने वाला कोड (Color Changing Button)
function changeButtonColor() {
    const btn = document.getElementById('colorBtn');
    // रैंडम रंग जनरेट करने के लिए
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    btn.style.backgroundColor = randomColor;
}

// 2. समय के अनुसार अलर्ट बॉक्स (Greeting Alert Box)
function showGreeting() {
    const hours = new Date().getHours(); // वर्तमान समय के घंटे (0-23)
    let greeting = "";

    if (hours < 12) {
        greeting = "Good Morning! Have a great day ahead.";
    } else if (hours < 17) {
        greeting = "Good Afternoon! Hope your coding is going well.";
    } else {
        greeting = "Good Evening! Welcome back.";
    }

    alert(greeting);
}

// 3. बेसिक कैलकुलेटर (Basic Calculator)
function calculateSum() {
    // इनपुट फील्ड्स से नंबर निकालना
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const resultElement = document.getElementById('calcResult');

    // चेक करना कि यूजर ने सही नंबर डाला है या नहीं
    if (isNaN(num1) || !num2 && num2 !== 0) {
        resultElement.innerText = "Please enter both numbers.";
        resultElement.style.color = "red";
        return;
    }

    // जोड़ना (Addition)
    const sum = num1 + num2;
    resultElement.innerText = "Result: " + sum;
    resultElement.style.color = "#28a745";
}
