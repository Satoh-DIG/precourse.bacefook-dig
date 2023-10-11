// windowのイベントとしてクリックを作ると、ウィンドウ内のランダムな場所でのクリックで反応してしまう
// window.addEventListener("click",function bClick() {alert("メッセージ");})

// load　ページの読み込みが完了した時のイベント発生
window.addEventListener("load", () => {
  // This is a check to see if there's a username stored
  let username = localStorage.getItem("username");
  // １回目だけの理由がわからん　２度目にはダイヤログなし
  if (!username) {
    // Prompt for one if a username isn't found
    username = window.prompt("What is your name?");
    localStorage.setItem("username", username);
  }

  const containerEl = document.querySelector("#newsfeed");


  // ------------------------------------------------------------
  // HTMLFormElement オブジェクトを作成する
  // ------------------------------------------------------------
  let form = document.createElement("form");
  // BODY のノードリストに登録する
  document.body.appendChild(form);
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

  // ボタン作成
  // ボタン要素を作成
  let btn = document.createElement("button");
  // ボタンのテキストを設定
  btn.innerHTML = "コメント追加";
  btn.id = "btnId";
  // ボタンを追加 （コメント欄のフォームに追加する）
  form.appendChild(btn);
  


  // 書き込むためのループ？
  // This makes things appear
  for (let index = bacefook.newsfeed.length - 1; index >= 0; index--) {
    const post = bacefook.newsfeed[index];

    const friendEl = document.createElement("div");
    friendEl.className = "friend";
    friendEl.innerText = post.friend;

    const postEl = document.createElement("div");
    postEl.innerText = post.text;
    postEl.append(friendEl);

    const momentTime = moment().format("MMMM Do YYYY, h:mm:ss a");
    containerEl.append(momentTime);

    containerEl.append(postEl);
    containerEl.append(bacefook.newsfeed[index].image)
    console.log(bacefook.newsfeed[index]) 
  }
  let currentCountFeed = bacefook.newsfeed.length;
    // ボタンクリックアクション
    function bClick(event){

      //let currentInfo = document.getElementsByClassName("current-info");
      //console.log(currentInfo.value);
      //currentInfo.remove();

      for (let index = bacefook.newsfeed.length - 1; index >= currentCountFeed; index--) {
        const post = bacefook.newsfeed[index];
    
        const friendEl = document.createElement("div");
        friendEl.className = "friend";
        friendEl.innerText = post.friend;
    
        const postEl = document.createElement("div");
        postEl.innerText = post.text;
        postEl.prepend(friendEl);

        const momentTime=moment().format('MMMM Do YYYY, h:mm:ss a');
        containerEl.prepend(momentTime);
        
        containerEl.prepend(postEl);   
      
         
        // containerEl.prepend(basefook.newsfeed.image)
      }
      //alert(input.value);
      // console.log(input.value);
      event.preventDefault();
    }
      

  const Button = document.getElementById('btnId');
  Button.addEventListener('click', bClick);



});




