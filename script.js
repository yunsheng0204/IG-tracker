function submitIG() {
  const igUsername = document.getElementById("igInput").value.trim();

  if (igUsername === "") {
    alert("請輸入 IG 帳號");
    return;
  }

  // 👉 在這裡可以改成送到後端或紀錄
  console.log("IG Username:", igUsername);

  // ✅ 轉向你指定的頁面
  window.location.href = "https://yunsheng0204.github.io/my-web/index.html";
}
