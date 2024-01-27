/*! without-auth_e-book_tutorial_免登入電子書教學 v105 https://gist.github.com/notlin4/a05d7db77cd5606a812f4b9900fef3ee */
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
      localStorage.setItem("loginAccount", "mockAccount");
      localStorage.setItem("uuid", "mockUUID");
}})} else if (window.location.href.startsWith('https://digitalmaster.knsh.com.tw/downloader/box-web/index.html')) {
  alert('請先選擇要使用的年級再執行指令碼。');
} else if (window.location.href.startsWith('https://digitalmaster.knsh.com.tw/ebook/review/')) {
  alert('請先選擇要使用的電子書再執行指令碼。');
} else if (window.location.href.startsWith("https://edisc3.hle.com.tw/edisc_v3")) {
  let time = new Date().getTime().toString();
  localStorage.setItem("last_signinX_v2023", time);
  localStorage.setItem("roleX_v2023", "老師");
  localStorage.setItem("emailX_v2023", "test@test.com");
  localStorage.setItem("tokenX_v2023", "eyJhbGciOiJSUzI1NiIsImtpZCI6Ijg1NzgwNWYxZGQ3ZmE5YTZiNTI3ZjQ0ZWNmZmJkNDhjIiwidHlwIjoiYXQrand0In0.eyJuYmYiOjE3MDUzMzI4MzMsImV4cCI6MTczNzQ3MzYzMywiaXNzIjoiaHR0cHM6Ly9pZC5obGUuY29tLnR3IiwiYXVkIjpbImFwaTEiLCJJZGVudGl0eVNlcnZlckFwaSIsImhhbmxpbi1hcGkiXSwiY2xpZW50X2lkIjoianMiLCJzdWIiOiJlNzQ3MjMwNS0xYWQyLTRjMDYtYjExOC1mZTdkODk3MzNmYjAiLCJhdXRoX3RpbWUiOjE3MDUzMzI4MzMsImlkcCI6ImxvY2FsIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvZW1haWxhZGRyZXNzIjoicmFtYXcxOTM0MEB3aWtmZWUuY29tIiwiQXNwTmV0LklkZW50aXR5LlNlY3VyaXR5U3RhbXAiOiJDR0Q3NElaQUpOMjRHNVRVS09ZU1o3SjNORUNSUjNJMyIsInJvbGUiOiLogIHluKsiLCJlbWFpbCI6InJhbWF3MTkzNDBAd2lrZmVlLmNvbSIsImZhbWlseV9uYW1lIjpbInJhbWF3IiwiZHJhbWEiXSwiZ2l2ZW5fbmFtZSI6WyIxOTM0MCIsIjIwMjQiXSwibmFtZSI6WyJyYW1hdzE5MzQwIiwiZHJhbWEyMDI0Il0sImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJwaG9uZV9udW1iZXIiOiIwOTMzMzEyMDQ5IiwicGhvbmVfbnVtYmVyX3ZlcmlmaWVkIjp0cnVlLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJyYW1hdzE5MzQwIiwidXNlcl9kb21haW4iOiJlZHUiLCJzY2hvb2xTeXN0ZW0iOiLpq5jkuK0iLCJpc2lkZW50aWZpZWQiOnRydWUsImxvY2siOmZhbHNlLCJ2ZXIiOjMsInNjb3BlIjpbIm9wZW5pZCIsInByb2ZpbGUiLCJhcGkxIiwiSWRlbnRpdHlTZXJ2ZXJBcGkiLCJoYW5saW4tYXBpIiwib2ZmbGluZV9hY2Nlc3MiXSwiYW1yIjpbInB3ZCJdfQ.IaTrcejEgQvUO0cOsie3P40svSZXhhpNkvt-uZpdkZctVI4rl_SCYdBzniZjf25QaBRUIo0C9EHbHWOdk7G3hQ-gvwndFiz7ukku3r7pLJ97V_F-pW9WgvIKhqMIDrTPK0SRTYxTozhDTUXdJ20VsFQMOFbm466f2a0i6QJ4PXEjFak-qAZabOvrtG1Nuygc23xsMiDPjKdT9CnAy-biMyb-bN8CiIvCqpbFBkKOVE45ap-1Ke_5e4pHA958vAbC9ti1aqzMCNqMyy3KwGaMitRlRM_kJ9krTB587_5ewd0GFFaiqX2jwaKZBGVJnBosrMU38d6Edue9puwMLm4Tdg");
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
  sessionStorage.setItem("accessToken", "eyJhbGciOiJSUzI1NiIsImtpZCI6Ijg1NzgwNWYxZGQ3ZmE5YTZiNTI3ZjQ0ZWNmZmJkNDhjIiwidHlwIjoiYXQrand0In0.eyJuYmYiOjE3MDQyODQ3MTcsImV4cCI6MTczNjQyNTUxNywiaXNzIjoiaHR0cHM6Ly9pZC5obGUuY29tLnR3IiwiY2xpZW50X2lkIjoianMiLCJzdWIiOiJlNzQ3MjMwNS0xYWQyLTRjMDYtYjExOC1mZTdkODk3MzNmYjAiLCJhdXRoX3RpbWUiOjE3MDQyODQ3MTYsImlkcCI6ImxvY2FsIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvZW1haWxhZGRyZXNzIjoicmFtYXcxOTM0MEB3aWtmZWUuY29tIiwiQXNwTmV0LklkZW50aXR5LlNlY3VyaXR5U3RhbXAiOiJTT0NXSjZZRjRDWEJZSFZYSllZWlRXWlJKQU9KV1pNSSIsInJvbGUiOiLogIHluKsiLCJlbWFpbCI6InJhbWF3MTkzNDBAd2lrZmVlLmNvbSIsImZhbWlseV9uYW1lIjoicmFtYXciLCJnaXZlbl9uYW1lIjoiMTkzNDAiLCJuYW1lIjoicmFtYXcxOTM0MCIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJyYW1hdzE5MzQwIiwidXNlcl9kb21haW4iOiJlZHUiLCJzY2hvb2xTeXN0ZW0iOiLlnIvkuK0iLCJpc2lkZW50aWZpZWQiOnRydWUsImxvY2siOnRydWUsInZlciI6MSwic2NvcGUiOlsib3BlbmlkIl0sImFtciI6WyJwd2QiXX0.wOHPf0_RNIAyPPq5wOhITi3TRddTqfWq-_yHWAPf0jw9EYNWE2LTT7lkTBET-RO6dXSOOR9E7eHeXlaxwPCGKErK0JJYY_WxvgxmuARub2YiAmS2zYsHoIpBcE5yMFkjw2HKKFQ4nMf_pQj8bazx6aYEFGRYL8K1vC8Y2omugd3igVbqF6IE7wjBg35CLiLt20aYpVYaNE8mikoCQjQ3BMIuapuf_h0e61N5ZqdRUNlbJj-kjILJ2UjQ8x_5woE5ZB0kh6CJO-34ygGHcd7G17XUbuJY_Y-vuldpqexlo43SUDVmgkDiF1HkJuoEGQtzbV6auhqSHpRapN6ktJw7kw"); // 設定權杖
  sessionStorage.setItem("userRole", "老師"); // 將身分設定為老師
  location.reload(); // 重新載入網頁
} else if (window.location.href.startsWith("https://bookonline.hess.com.tw/bookcase/#/")) {
if (!localStorage.getItem("isLogin")) {
  localStorage.setItem("isLogin", "true");
  localStorage.setItem("uuid", "mock_user");
  location.reload();
}} else if (window.location.href.startsWith("https://testbank.hle.com.tw")) {
  localStorage.setItem("oidc.user:https://id.hle.com.tw:js", '{"access_token":"eyJhbGciOiJSUzI1NiIsImtpZCI6Ijg1NzgwNWYxZGQ3ZmE5YTZiNTI3ZjQ0ZWNmZmJkNDhjIiwidHlwIjoiYXQrand0In0.eyJuYmYiOjE3MDUzMzI4MzMsImV4cCI6MTczNzQ3MzYzMywiaXNzIjoiaHR0cHM6Ly9pZC5obGUuY29tLnR3IiwiYXVkIjpbImFwaTEiLCJJZGVudGl0eVNlcnZlckFwaSIsImhhbmxpbi1hcGkiXSwiY2xpZW50X2lkIjoianMiLCJzdWIiOiJlNzQ3MjMwNS0xYWQyLTRjMDYtYjExOC1mZTdkODk3MzNmYjAiLCJhdXRoX3RpbWUiOjE3MDUzMzI4MzMsImlkcCI6ImxvY2FsIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvZW1haWxhZGRyZXNzIjoicmFtYXcxOTM0MEB3aWtmZWUuY29tIiwiQXNwTmV0LklkZW50aXR5LlNlY3VyaXR5U3RhbXAiOiJDR0Q3NElaQUpOMjRHNVRVS09ZU1o3SjNORUNSUjNJMyIsInJvbGUiOiLogIHluKsiLCJlbWFpbCI6InJhbWF3MTkzNDBAd2lrZmVlLmNvbSIsImZhbWlseV9uYW1lIjpbInJhbWF3IiwiZHJhbWEiXSwiZ2l2ZW5fbmFtZSI6WyIxOTM0MCIsIjIwMjQiXSwibmFtZSI6WyJyYW1hdzE5MzQwIiwiZHJhbWEyMDI0Il0sImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJwaG9uZV9udW1iZXIiOiIwOTMzMzEyMDQ5IiwicGhvbmVfbnVtYmVyX3ZlcmlmaWVkIjp0cnVlLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJyYW1hdzE5MzQwIiwidXNlcl9kb21haW4iOiJlZHUiLCJzY2hvb2xTeXN0ZW0iOiLpq5jkuK0iLCJpc2lkZW50aWZpZWQiOnRydWUsImxvY2siOmZhbHNlLCJ2ZXIiOjMsInNjb3BlIjpbIm9wZW5pZCIsInByb2ZpbGUiLCJhcGkxIiwiSWRlbnRpdHlTZXJ2ZXJBcGkiLCJoYW5saW4tYXBpIiwib2ZmbGluZV9hY2Nlc3MiXSwiYW1yIjpbInB3ZCJdfQ.IaTrcejEgQvUO0cOsie3P40svSZXhhpNkvt-uZpdkZctVI4rl_SCYdBzniZjf25QaBRUIo0C9EHbHWOdk7G3hQ-gvwndFiz7ukku3r7pLJ97V_F-pW9WgvIKhqMIDrTPK0SRTYxTozhDTUXdJ20VsFQMOFbm466f2a0i6QJ4PXEjFak-qAZabOvrtG1Nuygc23xsMiDPjKdT9CnAy-biMyb-bN8CiIvCqpbFBkKOVE45ap-1Ke_5e4pHA958vAbC9ti1aqzMCNqMyy3KwGaMitRlRM_kJ9krTB587_5ewd0GFFaiqX2jwaKZBGVJnBosrMU38d6Edue9puwMLm4Tdg","id_token":"eyJhbGciOiJSUzI1NiIsImtpZCI6Ijg1NzgwNWYxZGQ3ZmE5YTZiNTI3ZjQ0ZWNmZmJkNDhjIiwidHlwIjoiSldUIn0.eyJuYmYiOjE3MDQyODQ1MzIsImV4cCI6MTcwNjk2MjkzMiwiaXNzIjoiaHR0cHM6Ly9pZC5obGUuY29tLnR3IiwiYXVkIjoianMiLCJpYXQiOjE3MDQyODQ1MzIsImF0X2hhc2giOiJac05IeU54MTlJS1g5Q3JVMlVlb3F3Iiwic19oYXNoIjoiQnc4bUQycXQyS09Lc19zbGRUSmZoUSIsInNpZCI6IktGMW82bXA1d2wzVHlpbm9iWjUzeHciLCJzdWIiOiJlNzQ3MjMwNS0xYWQyLTRjMDYtYjExOC1mZTdkODk3MzNmYjAiLCJhdXRoX3RpbWUiOjE3MDQyODQxMTMsImlkcCI6ImxvY2FsIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvZW1haWxhZGRyZXNzIjoicmFtYXcxOTM0MEB3aWtmZWUuY29tIiwiQXNwTmV0LklkZW50aXR5LlNlY3VyaXR5U3RhbXAiOiJTT0NXSjZZRjRDWEJZSFZYSllZWlRXWlJKQU9KV1pNSSIsInJvbGUiOiLogIHluKsiLCJlbWFpbCI6InJhbWF3MTkzNDBAd2lrZmVlLmNvbSIsImZhbWlseV9uYW1lIjoicmFtYXciLCJnaXZlbl9uYW1lIjoiMTkzNDAiLCJuYW1lIjoicmFtYXcxOTM0MCIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJyYW1hdzE5MzQwIiwidXNlcl9kb21haW4iOiJlZHUiLCJzY2hvb2xTeXN0ZW0iOiLlnIvkuK0iLCJpc2lkZW50aWZpZWQiOnRydWUsImxvY2siOnRydWUsInZlciI6MSwiYW1yIjpbInB3ZCJdfQ.fZoM2vdoz_l88dbNGaciNKvTWg81Bfu_Magpn7yEyTqYSKzBdiXbBS7dA5aoXflmI1WcKBfspDK5lQSZXtkvLVUyw5ZXNdu4x3mhJ2_LFsGSIqR2KG1mhcwvOkbrs7srAR1fKRtELuKMDrOGwv401QxrZYgSVOtcr3Ael0IkZ3RZ9woCslN4vHOOtjZ_7bnz5Khgb94tdJK7Yu7EkESOhZiNJRdn_3VqG3CYqwtgJzVxuXhKjrZhK8xDEYfhhcjpkBP2Mlv7VB7a-ISzysHlaxHFfP3ie91D6wiOn-JPqxHtfAQbjFXmJN9xJyJnu5By1awl7iN3Yf3f7nv8huOiBw"}');
  location.reload();
} else if (window.location.href.startsWith("https://www.hle.com.tw")) {
  localStorage.setItem("role", "老師");
  localStorage.setItem("token", "eyJhbGciOiJSUzI1NiIsImtpZCI6Ijg1NzgwNWYxZGQ3ZmE5YTZiNTI3ZjQ0ZWNmZmJkNDhjIiwidHlwIjoiYXQrand0In0.eyJuYmYiOjE3MDQyODUzNDMsImV4cCI6MTczNjQyNjE0MywiaXNzIjoiaHR0cHM6Ly9pZC5obGUuY29tLnR3IiwiYXVkIjpbImFwaTEiLCJJZGVudGl0eVNlcnZlckFwaSIsImhhbmxpbi1hcGkiXSwiY2xpZW50X2lkIjoianMiLCJzdWIiOiJlNzQ3MjMwNS0xYWQyLTRjMDYtYjExOC1mZTdkODk3MzNmYjAiLCJhdXRoX3RpbWUiOjE3MDQyODQ3MTYsImlkcCI6ImxvY2FsIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvZW1haWxhZGRyZXNzIjoicmFtYXcxOTM0MEB3aWtmZWUuY29tIiwiQXNwTmV0LklkZW50aXR5LlNlY3VyaXR5U3RhbXAiOiJTT0NXSjZZRjRDWEJZSFZYSllZWlRXWlJKQU9KV1pNSSIsInJvbGUiOiLogIHluKsiLCJlbWFpbCI6InJhbWF3MTkzNDBAd2lrZmVlLmNvbSIsImZhbWlseV9uYW1lIjoicmFtYXciLCJnaXZlbl9uYW1lIjoiMTkzNDAiLCJuYW1lIjoicmFtYXcxOTM0MCIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJyYW1hdzE5MzQwIiwidXNlcl9kb21haW4iOiJlZHUiLCJzY2hvb2xTeXN0ZW0iOiLlnIvkuK0iLCJpc2lkZW50aWZpZWQiOnRydWUsImxvY2siOnRydWUsInZlciI6MSwic2NvcGUiOlsib3BlbmlkIiwicHJvZmlsZSIsImFwaTEiLCJJZGVudGl0eVNlcnZlckFwaSIsImhhbmxpbi1hcGkiXSwiYW1yIjpbInB3ZCJdfQ.u_BmgteapQJp2JXixdy2GFjKIREMBZqXWgu6uAsqk-HsAV_Hl8hW5OSH0lGZ9Gp4csGJcMN-JYip-8T0ZQG22QhXgsHc3wjCd-LJ7Z00w8DNmiwww2uo1FpvAMdMVKTNSsDO2I9gCZAd0BOPYpCNFXzY6TTwH6V2hKW6XJ2RvO2uq-UmESe-lpXVFaRJ5zohoP2bnn29HSJIwDh-wyroBVIz_2uEorj2Zi8PPcBb4AIe4Co8X3F1sQYNMzNnxjlKLpfuQpBxt3bzIPAd9XFP6h_21pzVfB4bd6JSQNX3KJ8y0t0KWzWyIBhKf7UuB69q7RXzpg2BXVr7mxWzhdlpxw"); // 設定身分驗證用的權杖
  location.reload();
} else if (confirm('網址錯誤，請選擇要開啟的項目：\n\n1. 康軒\n2. 翰林\n3. 南一\n4. 何嘉仁')) {
  var choice = parseInt(prompt('請輸入你的選擇（輸入數字 1、2、3 或 4）：'));
  
  if (choice === 1) {
    if (confirm('請選擇要開啟的項目：\n\n1. 國小領域\n2. 國小英語\n3. 國中領域\n4. 國中輔材\n5. 網頁媒體盒')) {
      var selectedURL = ['https://webetextbook.knsh.com.tw/2/index.html?code_degree=1', 'https://webetextbook.knsh.com.tw/2/index.html?code_degree=3', 'https://webetextbook.knsh.com.tw/2/index.html?code_degree=2', 'https://digitalmaster.knsh.com.tw/ebook/review/', 'https://digitalmaster.knsh.com.tw/downloader/box-web/index.html'][parseInt(prompt('請輸入你的選擇（輸入數字 1、2、3、4 或 5）：')) - 1];
      selectedURL && window.open(selectedURL, '_blank');
    }
  } else if (choice === 2) {
    if (confirm('請選擇要開啟的項目：\n\n1. 翰林行動大師\n2. 翰林輔材網\n3. 翰林教學資源')) {
      var selectedURL = ['https://edisc3.hle.com.tw/edisc_v3/ebook_v2023.html', 'https://reference.hle.com.tw', 'https://www.hle.com.tw'][parseInt(prompt('請輸入你的選擇（輸入數字 1 或 2）：')) - 1];
      selectedURL && window.open(selectedURL, '_blank');
    }
  } else if (choice === 3) {
    if (confirm('請選擇要開啟的項目：\n\n1. OneBook 電子書\n2. OneBox 網頁版\n3. OnePaper 線上雲端出題')) {
      var selectedURL = ['https://reader.oneclass.com.tw/bookshelf', 'https://onebox2.oneclass.com.tw', 'https://onepaper.oneclass.com.tw'][parseInt(prompt('請輸入你的選擇（輸入數字 1、2 或 3）：')) - 1];
      selectedURL && window.open(selectedURL, '_blank');
    }
  } else if (choice === 4) {
    window.open('https://bookonline.hess.com.tw/bookcase/#/', '_blank');
  }
}
