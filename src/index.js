const onClickAdd = () => {
  //テキストボックスの値を取得し、初期化する。
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createIncompleteList(inputText);
};

//未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

//未完了リストに追加する関数
const createIncompleteList = (text) => {
  //li生成
  const li = document.createElement("li");

  //div生成
  const div = document.createElement("div");
  div.className = "list-row";

  //pタグ生成
  const p = document.createElement("p");
  p.innerText = text;

  //button(完了)タグ生成
  const compliteButton = document.createElement("button");
  compliteButton.innerText = "完了";
  compliteButton.addEventListener("click", () => {
    //押された完了ボタンの親タグを未完了リストから削除
    deleteFromIncompleteList(li);
    //完了リストに追加する要素
    const addTarget = compliteButton.parentNode;

    //TODO内容テキストを取得
    const text = addTarget.firstElementChild.innerText;

    //div以下を初期化
    addTarget.textContent = null;

    //liタグの作成
    const liToComplete = document.createElement("li");
    //pタグを生成
    const p = document.createElement("p");
    p.innerText = text;

    //buttonタグ生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      //押された押すボタンの親タグを完了リストから削除
      // const deleteTarget = backButton.parentNode;
      document.getElementById("complete-list").removeChild(liToComplete);
      // document.getElementById("complete-list").removeChild(deleteTarget);

      //テキスト取得
      const text = backButton.parentNode.firstElementChild.innerText;
      createIncompleteList(text);
    });

    //liの子要素にdivタグを設定
    liToComplete.appendChild(addTarget);
    //divタグの子要素に各要素を設定
    addTarget.appendChild(p);
    addTarget.appendChild(backButton);
    console.log(addTarget);

    //完了リスtに追加
    document.getElementById("complete-list").appendChild(liToComplete);
  });

  //button(削除)タグ生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    //押された削除ボタンの親タグを未完了リストから削除
    deleteFromIncompleteList(li);
  });

  li.appendChild(div);
  //divタグの子要素に各要素を設定
  div.appendChild(p);
  // li.appendChild(p);
  div.appendChild(compliteButton);
  div.appendChild(deleteButton);

  //未完了リストに追加
  document.getElementById("incomplete-list").appendChild(li);
};

document.getElementById("add-btn").addEventListener("click", onClickAdd);
