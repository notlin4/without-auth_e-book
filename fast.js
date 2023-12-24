/*! without-auth_e-book_tutorial_免登入電子書教學 v86 https://gist.github.com/notlin4/a05d7db77cd5606a812f4b9900fef3ee */
if (window.location.href.startsWith("https://webetextbook.knsh.com.tw/")) {
  var executed = false;
  document.querySelectorAll('.downAssetBtn').forEach(function(button) {
    if (!executed && (!document.getElementById('assetsPage') || document.getElementById('assetsPage').style.display === 'none')) {
      alert('請先點選您要使用的電子書再執行指令碼。');
      executed = true;
    } else if (!executed && button.getAttribute('d-title').includes("(網頁版)")) {
      alert('偵測到網頁版內容，目前尚未支援此功能，造成不便之處，敬請見諒。');
      executed = true;
    } else if (!executed) {
      var link = document.createElement('a');
      if (window.location.href.startsWith("https://webetextbook.knsh.com.tw/webcase/index.html")) {
        link.href = 'https://storage1.knsh.com.tw/material/' + button.getAttribute('d-file_name');
        link.textContent = '下載';
      } else if (window.location.href.startsWith("https://webetextbook.knsh.com.tw/2/index.html")) {
        link.href = 'https://webetextbook.knsh.com.tw/Ebookviewer4Teacher/Ebook.html?id=' + (button.getAttribute('d-file_name') ? button.getAttribute('d-file_name').replace('.zip', '') : '');
        link.textContent = '開啟';
      }
      button.innerHTML = '';
      button.appendChild(link);
      localStorage.setItem("loginAccount", "mockAccount");
      localStorage.setItem("uuid", "mockUUID");
}})} else if (window.location.href.startsWith("https://edisc3.hle.com.tw/edisc_v3")) {
  let time = new Date().getTime().toString();
  localStorage.setItem("last_signinX_v2023", time);
  localStorage.setItem("roleX_v2023", "老師");
  localStorage.setItem("emailX_v2023", "test@test.com");
  location.reload();
} else if (window.location.href.includes("oneclass.com.tw")) {
  let mockToken = JSON.stringify({
  "code": "SUCCESS",
  "jwt": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vbXlhY2NvdW50Lm5hbmkuY29vbC8iLCJzdWIiOiJ1c2Vycy9MZW5zODM4MCIsImZyb20iOiJOYW5pIiwidXNlcm5hbWUiOiJMZW5zODM4MCIsImVtYWlsdmFsaWQiOnRydWUsIm1vYmlsZXZhbGlkIjpmYWxzZSwiZW1haWwiOiI1bTF0Z3J4ZkBkdWNrLmNvbSIsInVpZCI6ImNhZWEzY2EwLTZlN2QtMTFlZS05NTlhLTJmNDEzZWZhMjIxZiIsImp0aSI6Ijc0NTRhYmJiLTZiYWUtNGRkOS1iZmJiLWIxZjEyNzE3MjFlYSIsImlhdCI6MTcwMjk4MzkzNywiZXhwIjoxNzA4MTY3OTM3fQ.HvQkN-h8Y0n5yFgQQ3ckuM8X7-rIo5GRMpEn1ElRHU0"});
  let fieldName = "nani_oneclass_login_token";
  var d = new Date();
  d.setTime(d.getTime() + (1 * 24 * 60 * 60 * 1000));
  var expires = "expires=" + d.toUTCString();
  var hostname = window.location.hostname;
  if (hostname.indexOf("oneclass.com.tw") > 0) {
    document.cookie = fieldName + "=" + mockToken + ";" + expires + ";path=/;domain=oneclass.com.tw";
  } else {
    document.cookie = fieldName + "=" + mockToken + ";" + expires + ";path=/";
  }
  localStorage.setItem("nani_tokenInfo", mockToken);
  location.reload();
} else if (window.location.href.startsWith("https://reference.hle.com.tw")) {
  sessionStorage.setItem("userToken", "mockToken");
  sessionStorage.setItem("userRole", "老師");
  location.reload();
} else if (window.location.href.startsWith("https://bookonline.hess.com.tw/bookcase/#/")) {
if (!localStorage.getItem("isLogin")) {
  localStorage.setItem("isLogin", "true");
  localStorage.setItem("uuid", "mock_user");
  location.reload();
}} else if (confirm('網址錯誤，請選擇要開啟的項目：\n\n1. 康軒\n2. 翰林\n3. 南一\n4. 何嘉仁')) {
  var choice = parseInt(prompt('請輸入您的選擇（輸入數字 1、2、3 或 4）：'));
  
  if (choice === 1) {
    if (confirm('網址錯誤，請選擇要開啟的項目：\n\n1. 國小領域\n2. 國小英語\n3. 國中領域\n4. 國中輔材\n5. 網頁媒體盒')) {
      var selectedURL = ['https://webetextbook.knsh.com.tw/2/index.html?code_degree=1', 'https://webetextbook.knsh.com.tw/2/index.html?code_degree=3', 'https://webetextbook.knsh.com.tw/2/index.html?code_degree=2', 'https://digitalmaster.knsh.com.tw/ebook/review/', 'https://digitalmaster.knsh.com.tw/downloader/box-web/index.html'][parseInt(prompt('請輸入您的選擇（輸入數字 1、2、3、4 或 5）：')) - 1];
      selectedURL && window.open(selectedURL, '_blank');
    }
  } else if (choice === 2) {
    if (confirm('網址錯誤，請選擇要開啟的項目：\n\n1. 翰林行動大師\n2. 翰林輔材網')) {
      var selectedURL = ['https://edisc3.hle.com.tw/edisc_v3/ebook_v2023.html', 'https://reference.hle.com.tw'][parseInt(prompt('請輸入您的選擇（輸入數字 1 或 2）：')) - 1];
      selectedURL && window.open(selectedURL, '_blank');
    }
  } else if (choice === 3) {
    if (confirm('網址錯誤，請選擇要開啟的項目：\n\n1. OneBook 電子書\n2. OneBox 網頁版\n3. OnePaper 線上雲端出題')) {
      var selectedURL = ['https://reader.oneclass.com.tw/bookshelf', 'https://onebox2.oneclass.com.tw/', 'https://onepaper.oneclass.com.tw/'][parseInt(prompt('請輸入您的選擇（輸入數字 1、2 或 3）：')) - 1];
      selectedURL && window.open(selectedURL, '_blank');
    }
  } else if (choice === 4) {
    window.open('https://bookonline.hess.com.tw/bookcase/#/', '_blank');
  }
}
