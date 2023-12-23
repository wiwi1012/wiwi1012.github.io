// 取得所有的 input 元素
$input = document.querySelectorAll("input");

// 得到 nodeList 一個動態的集合
// 使用 forEach 進行迭代  監聽每個 input 元素
for (let i = 0; i < $input.length; i++) {
  $input[i].addEventListener("input", dochange);
}

function dochange(e) {
  // 當 input 元素的字符長度等於 maxLength 時
  // 對下一個 input 元素進行 focus 的動作
  if (e.target.value.length == e.target.getAttribute("maxLength")) {
    console.log(e);
    e.target.nextElementSibling.focus();
  }
}

function getForm(event) {
  event.preventDefault();
  console.log(event);
}
