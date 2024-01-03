/*! without-auth_e-book_tutorial_免登入電子書教學 v93 https://gist.github.com/notlin4/a05d7db77cd5606a812f4b9900fef3ee */
if (window.location.href.startsWith("https://webetextbook.knsh.com.tw/")) {
  var executed = false;
  document.querySelectorAll('.downAssetBtn').forEach(function(button) {
    if (!executed && (!document.getElementById('assetsPage') || document.getElementById('assetsPage').style.display === 'none')) {
      alert('請先點選你要使用的電子書再執行指令碼。');
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
      localStorage.setItem("loginAccount", "mockAccount"); // 設定假的帳號
      localStorage.setItem("uuid", "mockUUID"); // 設定假 UUID
}})} else if (window.location.href.startsWith('https://digitalmaster.knsh.com.tw/downloader/box-web/index.html')) {
  alert('請先選擇要使用的年級再執行指令碼。');
} else if (window.location.href.startsWith('https://digitalmaster.knsh.com.tw/ebook/review/')) {
  alert('請先選擇要使用的電子書再執行指令碼。');
} else if (window.location.href.startsWith("https://edisc3.hle.com.tw/edisc_v3")) {
  let time = new Date().getTime().toString();
  localStorage.setItem("last_signinX_v2023", time); // 將帳號登入日期設為目前時間，避免被判定為過期
  localStorage.setItem("roleX_v2023", "老師"); // 將身分設定為老師
  localStorage.setItem("emailX_v2023", "test@test.com"); // 由於翰林電子書會驗證是否有設定電子郵件，如有設定才能使用
  localStorage.setItem("tokenX_v2023", "eyJhbGciOiJSUzI1NiIsImtpZCI6Ijg1NzgwNWYxZGQ3ZmE5YTZiNTI3ZjQ0ZWNmZmJkNDhjIiwidHlwIjoiYXQrand0In0.eyJuYmYiOjE3MDQyODQ3MTcsImV4cCI6MTczNjQyNTUxNywiaXNzIjoiaHR0cHM6Ly9pZC5obGUuY29tLnR3IiwiYXVkIjpbImFwaTEiLCJJZGVudGl0eVNlcnZlckFwaSIsImhhbmxpbi1hcGkiXSwiY2xpZW50X2lkIjoianMiLCJzdWIiOiJlNzQ3MjMwNS0xYWQyLTRjMDYtYjExOC1mZTdkODk3MzNmYjAiLCJhdXRoX3RpbWUiOjE3MDQyODQ3MTYsImlkcCI6ImxvY2FsIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvZW1haWxhZGRyZXNzIjoicmFtYXcxOTM0MEB3aWtmZWUuY29tIiwiQXNwTmV0LklkZW50aXR5LlNlY3VyaXR5U3RhbXAiOiJTT0NXSjZZRjRDWEJZSFZYSllZWlRXWlJKQU9KV1pNSSIsInJvbGUiOiLogIHluKsiLCJlbWFpbCI6InJhbWF3MTkzNDBAd2lrZmVlLmNvbSIsImZhbWlseV9uYW1lIjoicmFtYXciLCJnaXZlbl9uYW1lIjoiMTkzNDAiLCJuYW1lIjoicmFtYXcxOTM0MCIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJyYW1hdzE5MzQwIiwidXNlcl9kb21haW4iOiJlZHUiLCJzY2hvb2xTeXN0ZW0iOiLlnIvkuK0iLCJpc2lkZW50aWZpZWQiOnRydWUsImxvY2siOnRydWUsInZlciI6MSwic2NvcGUiOlsib3BlbmlkIiwicHJvZmlsZSIsImFwaTEiLCJJZGVudGl0eVNlcnZlckFwaSIsImhhbmxpbi1hcGkiLCJvZmZsaW5lX2FjY2VzcyJdLCJhbXIiOlsicHdkIl19.G0eZ26dgIGmgozOX4VQdt0LLwehNrS9Xn-3L8BvPqzKO-bQpRQXcydS0xl9OFNQRLt-ThRCeqC5hEpHcznIn9714Zhyy1pGMX49TAX-yO7J28bI96fKIVYBQqN0r4Fc_IZgG2G5uWrqiikzYdIuxJnckncWEv8xbXYBYaVcdHRk783bKmLxKZmspMVazlwoNz9oOW65q_6JS2aYDmiHvBVrKRTP81gYW1U42INmBk_WFhwOiTlygIJvOSlM6qDp7Wq8j3VZgmQice-RQsmGMjgN9MS6IqVqc9nvW7CNzlC4rvc9DAgn5tjU6qd3N354ot6U6SyPMDrLx0v4YXrVlsQ"); // 設定身分驗證用的權杖
  location.reload(); // 重新載入網頁
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
}} else if (window.location.href.startsWith("https://testbank.hle.com.tw")) {
  localStorage.setItem("oidc.user:https://id.hle.com.tw:js", '{"access_token":"eyJhbGciOiJSUzI1NiIsImtpZCI6Ijg1NzgwNWYxZGQ3ZmE5YTZiNTI3ZjQ0ZWNmZmJkNDhjIiwidHlwIjoiYXQrand0In0.eyJuYmYiOjE2OTk2Mzg1MzEsImV4cCI6MTczMTc3OTMzMSwiaXNzIjoiaHR0cHM6Ly9pZC5obGUuY29tLnR3IiwiY2xpZW50X2lkIjoianMiLCJzdWIiOiIyNzVkNGYwOS05ZWQwLTQyNzctYjA2Ni04ZTY5ZDNlMzdkZjgiLCJhdXRoX3RpbWUiOjE2OTk2Mzg1MzEsImlkcCI6ImxvY2FsIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvZW1haWxhZGRyZXNzIjoiaml2YXZpcDk3MUBzdWJkaXRvLmNvbSIsIkFzcE5ldC5JZGVudGl0eS5TZWN1cml0eVN0YW1wIjoiR1JHNjQ1WFRTRE5HRjY0TU9CWUI0U0hOWk9QUjNRQ1QiLCJyb2xlIjoi6ICB5birIiwiZW1haWwiOiJqaXZhdmlwOTcxQHN1YmRpdG8uY29tIiwiZmFtaWx5X25hbWUiOiJIYW4iLCJnaXZlbl9uYW1lIjoibGluIiwibmFtZSI6IkhhbmxpbiIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJwaG9uZV9udW1iZXIiOiIwOTI1MzYzOTE5IiwicGhvbmVfbnVtYmVyX3ZlcmlmaWVkIjp0cnVlLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJIYW5saW4iLCJ1c2VyX2RvbWFpbiI6ImVkdSIsInNjaG9vbFN5c3RlbSI6IuWci-S4rSIsImxvY2siOmZhbHNlLCJzY29wZSI6WyJvcGVuaWQiLCJwcm9maWxlIl0sImFtciI6WyJwd2QiXX0.28TlFohyg_THqjrgvbnRMQMRmr1p--mUHzOlL7TAgcaSnfZXSszGqNCtf_1M1WJodFKrnAp4B2jLsqrDqs-bc4j_3r4hvGVMDe6SN_WYEggI3XI7hJqpjXhpe7xqQcbCElZT5vcV9W1Fj9uZ12dArv2OpjCT6vo8h48BUX3XSMBJgSWH-sT0_8Z3UrDM9i_Bx58XzijwOmM8grBaHZ1PV3gd0kokSG022w6ElOmbeMQT-PoeskOlR-JhbVCAppanHMv5z-7ydoItw9B0Hp3qVhwvlcPO57fOjnYPPsQCxrGl-fmhMmh5mXuoEhZEL4mKqJVykOH7MhQ8bMD-QWVOoA","id_token":"eyJhbGciOiJSUzI1NiIsImtpZCI6Ijg1NzgwNWYxZGQ3ZmE5YTZiNTI3ZjQ0ZWNmZmJkNDhjIiwidHlwIjoiSldUIn0.eyJuYmYiOjE3MDA2NDM0MTgsImV4cCI6MTcwMzMyMTgxOCwiaXNzIjoiaHR0cHM6Ly9pZC5obGUuY29tLnR3IiwiYXVkIjoianMiLCJpYXQiOjE3MDA2NDM0MTgsImF0X2hhc2giOiJ6a0c4TVhRX1ZPaXVwRHBlYTBqTC1nIiwic19oYXNoIjoiNG1SdS1RWjJpbGhjRWJkR2dLRVc0QSIsInNpZCI6IllRS1hmVFhRWldVa3NBaGppNHBDZmciLCJzdWIiOiIyNzVkNGYwOS05ZWQwLTQyNzctYjA2Ni04ZTY5ZDNlMzdkZjgiLCJhdXRoX3RpbWUiOjE3MDA2NDM0MTcsImlkcCI6ImxvY2FsIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvZW1haWxhZGRyZXNzIjoiaml2YXZpcDk3MUBzdWJkaXRvLmNvbSIsIkFzcE5ldC5JZGVudGl0eS5TZWN1cml0eVN0YW1wIjoiR1JHNjQ1WFRTRE5HRjY0TU9CWUI0U0hOWk9QUjNRQ1QiLCJyb2xlIjoi6ICB5birIiwiZW1haWwiOiJqaXZhdmlwOTcxQHN1YmRpdG8uY29tIiwiZmFtaWx5X25hbWUiOiJQYXVsIiwiZ2l2ZW5fbmFtZSI6ImxpbiIsIm5hbWUiOiJQYXVsbGluIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInBob25lX251bWJlciI6IjA5MjUzNjM5MTkiLCJwaG9uZV9udW1iZXJfdmVyaWZpZWQiOnRydWUsInByZWZlcnJlZF91c2VybmFtZSI6IlBhdWxsaW4iLCJ1c2VyX2RvbWFpbiI6ImVkdSIsInNjaG9vbFN5c3RlbSI6IuWci-S4rSIsImxvY2siOmZhbHNlLCJhbXIiOlsicHdkIl19.4uN4xbt7ti4fyzbn4UlJHzGSMjFnLm-t4EVFhrRdSdZ_5p3fyp3qB9pZHwGN6-Fz7xF232oVKdsI9O5C6xByL6cic9c4mT_W7OxRUZwFgWSG1Pfb0sYaVOCGW_htzJiAOgNedDglNqfUwv_Ou6TAb5d-LbCgcJuKHfpxJQCZwh-munhEMgjaStn1OBg8p86kNhCF-KyDZxTKmueB-hK4MDBsOUzA9IyCI4Vb4SYN-MuBH_7rBsUbWCG9-6xSPJ13XF7MukuiFg0F6OHqZom-ecVwDuK167e_qukV1ZonokcSbj5N74p9__P1OvJPw-TzT04eOCivCGTbpJUiy7zQyw"}');
  location.reload(); // 重新載入網頁
} else if (window.confirm("網站錯誤，按一下「確定」來開啟網站。")) {
  window.open('https://testbank.hle.com.tw', '_blank');
} else if (confirm('網址錯誤，請選擇要開啟的項目：\n\n1. 康軒\n2. 翰林\n3. 南一\n4. 何嘉仁')) {
  var choice = parseInt(prompt('請輸入您的選擇（輸入數字 1、2、3 或 4）：'));
  
  if (choice === 1) {
    if (confirm('請選擇要開啟的項目：\n\n1. 國小領域\n2. 國小英語\n3. 國中領域\n4. 國中輔材\n5. 網頁媒體盒')) {
      var selectedURL = ['https://webetextbook.knsh.com.tw/2/index.html?code_degree=1', 'https://webetextbook.knsh.com.tw/2/index.html?code_degree=3', 'https://webetextbook.knsh.com.tw/2/index.html?code_degree=2', 'https://digitalmaster.knsh.com.tw/ebook/review/', 'https://digitalmaster.knsh.com.tw/downloader/box-web/index.html'][parseInt(prompt('請輸入您的選擇（輸入數字 1、2、3、4 或 5）：')) - 1];
      selectedURL && window.open(selectedURL, '_blank');
    }
  } else if (choice === 2) {
    if (confirm('請選擇要開啟的項目：\n\n1. 翰林行動大師\n2. 翰林輔材網')) {
      var selectedURL = ['https://edisc3.hle.com.tw/edisc_v3/ebook_v2023.html', 'https://reference.hle.com.tw'][parseInt(prompt('請輸入您的選擇（輸入數字 1 或 2）：')) - 1];
      selectedURL && window.open(selectedURL, '_blank');
    }
  } else if (choice === 3) {
    if (confirm('請選擇要開啟的項目：\n\n1. OneBook 電子書\n2. OneBox 網頁版\n3. OnePaper 線上雲端出題')) {
      var selectedURL = ['https://reader.oneclass.com.tw/bookshelf', 'https://onebox2.oneclass.com.tw/', 'https://onepaper.oneclass.com.tw/'][parseInt(prompt('請輸入您的選擇（輸入數字 1、2 或 3）：')) - 1];
      selectedURL && window.open(selectedURL, '_blank');
    }
  } else if (choice === 4) {
    window.open('https://bookonline.hess.com.tw/bookcase/#/', '_blank');
  }
}
