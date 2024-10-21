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

    // 生成結果字串
    const resultString = inputString + '*'.repeat(inputNumber);
    
    // 將結果顯示在第三個輸入框中
    document.getElementById('outputString').value = resultString;
}
