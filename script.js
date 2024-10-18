// script.js

// 當網頁加載完成後執行的函數
document.addEventListener('DOMContentLoaded', (event) => {
    console.log('網頁已加載完成');

    // 修改 HTML 元素的內容
    const heading = document.querySelector('h1');
    heading.textContent = 'Hello, JavaScript!';

    // 顯示一個提示訊息
    alert('JavaScript 已加載並執行');
});
