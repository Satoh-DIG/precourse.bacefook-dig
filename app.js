// friendColors 配列をグローバルスコープで定義
const friendColors = ["red", "blue", "green", "pink", "yellow", "purple"];

// load　ページの読み込みが完了した時のイベント発生
window.addEventListener("load", () => {
  // This is a check to see if there's a username stored
  let username = localStorage.getItem("username");
  if (!username) {
    // Prompt for one if a username isn't found
    username = window.prompt("What is your name?");
    localStorage.setItem("username", username);
  }

  const containerEl = document.querySelector("#newsfeed");

  // ------------------------------------------------------------
  // HTMLFormElement オブジェクトを作成する
  // ------------------------------------------------------------
  // formタグを準備する
  let form = document.createElement("form");
  // h1タグのノードを取得する
  let h1Tag = document.getElementsByTagName("h1");
  // formタグをh1タグの後に挿入する
  h1Tag[0].after(form);

  // document.body.appendChild(form);
  // ------------------------------------------------------------
  // HTMLInputElement オブジェクトを作成する
  // ------------------------------------------------------------
  let input = document.createElement("input");
  // inputのidに名前をつける
  input.id = "userInput";
  // フォームのノードリストに登録する
  form.appendChild(input);

  // 変数userTextに、userInput内のinnerText内のテキストを格納する
  let userText = document.getElementById("userInput").value;
  console.log(userText);
  // ボタン作成
  // ボタン要素を作成
  let btn = document.createElement("button");
  // ボタンのテキストを設定
  btn.innerHTML = "コメント追加";
  btn.id = "btnId";
  // ボタンを追加 （コメント欄のフォームに追加する）
  form.appendChild(btn);
  //**********************************************
  //初期ループ
  //**********************************************
  // newsfeedを書き込むためのループ
  // This makes things appear
  for (let index = bacefook.newsfeed.length - 1; index >= 0; index--) {
    const post = bacefook.newsfeed[index];

    const friendEl = document.createElement("div");
    friendEl.className = "friend";
    friendEl.innerText = post.friend;

    const postEl = document.createElement("div");
    postEl.className = "current-info";
    postEl.innerText = post.text;
    postEl.append(friendEl);

    // 友達ごとに色を設定
    console.log(bacefook.friendNames.indexOf())
    console.log(friendColors[index])
    if (friendColors[index]) {
      friendEl.style.border = `3px solid ${friendColors[index]}`;
    } else {
      friendEl.style.border = "3px solid #ccc"; // デフォルトの色
    }

    const momentTime = moment(bacefook.newsfeed[index].timestamp).format(
      "MMMM Do YYYY, h:mm:ss a"
    );
    postEl.append(momentTime);
    // console.log(bacefook.newsfeed[index].timestamp)

    postEl.append(bacefook.newsfeed[index].image);
    // console.log(bacefook.newsfeed[index]);
    // 改行を追加
    const brElement = document.createElement("br");
    postEl.append(brElement);

    containerEl.append(postEl);
  }
  //**********************************************
  //ボタンループ
  //**********************************************
  // let currentCountFeed = bacefook.newsfeed.length;
  // ボタンクリックアクション
  function bClick(event) {
    let currentInfo = document.getElementsByClassName("current-info");

    for (let j = currentInfo.length - 1; j >= 0; j--) {
      // consol.log(currentInfo.value);
      currentInfo[j].remove();
    }
    console.log(bacefook.newsfeed.length);
    for (let index = bacefook.newsfeed.length - 1; index >= 0; index--) {
      console.log("BTN");
      const post = bacefook.newsfeed[index];

      const friendEl = document.createElement("div");
      friendEl.className = "friend";
      friendEl.innerText = post.friend;

      const postEl = document.createElement("div");
      postEl.className = "current-info";
      postEl.innerText = post.text;
      postEl.append(friendEl);

      // 友達ごとに色を設定
      // console.log(friendColors[index])
      if (friendColors[index]) {
        friendEl.style.border = `3px solid ${friendColors[index]}`;
      } else {
        friendEl.style.border = "3px solid #ccc"; // デフォルトの色
      }

      const momentTime = moment(bacefook.newsfeed[index].timestamp).format(
        "MMMM Do YYYY, h:mm:ss a"
      );
      postEl.append(momentTime);

      postEl.append(bacefook.newsfeed[index].image);

      const brElement = document.createElement("br");
      postEl.append(brElement);

      containerEl.append(postEl);
    }
    //alert(input.value);
    // console.log(input.value);
    event.preventDefault();
  }

  const Button = document.getElementById("btnId");
  Button.addEventListener("click", bClick);
});
