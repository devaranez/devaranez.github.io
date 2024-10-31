// script.js

function modifyString() {
    // 獲取輸入框中的值
    const inputString = document.getElementById('inputString').value;
    const inputNumber = parseInt(document.getElementById('inputNumber').value, 10);
    
    // 檢查輸入是否有效
    if (isNaN(inputNumber) || inputNumber < 0) {
        alert('請輸入有效的數字');
        return;
    }

    // 定義用來插入的字母陣列
    const letters = ['z', 'Z'];
    
    // 將隨機字母插入字串
    let resultString = inputString;
    for (let i = 0; i < inputNumber; i++) {
        const randomIndex = Math.floor(Math.random() * (resultString.length + 2));
        const randomLetter = letters[Math.floor(Math.random() * letters.length)];

        if (inputNumber==1)
            resultString = resultString + randomLetter
        else
            resultString = resultString.slice(0, randomIndex) + randomLetter + resultString.slice(randomIndex);
    }
    
    // 將結果顯示在第三個輸入框中
    document.getElementById('outputString').value = resultString;
}

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("inputString").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      document.querySelector("button").click();
    }
  });

  document.getElementById("inputNumber").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      document.querySelector("button").click();
    }
  });
});
