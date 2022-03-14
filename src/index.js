const onClickAdd = () => {
  //テキストボックスの値を取得し、初期化する。
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  //li生成
  const li = document.createElement("li");
  
  //div生成
  const div = document.createElement("div");
  div.className = "list-row";

  //pタグ生成
  const p = document.createElement("p");
  p.innerText = inputText;

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
   const liComplete = document.createElement("li");
    //pタグを生成
    const p = document.createElement("p");
    p.innerText = text;
    //buttonタグ生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";

    //liの子要素にdivタグを設定
    liComplete.appendChild(addTarget);
    //divタグの子要素に各要素を設定
    addTarget.appendChild(p);
    addTarget.appendChild(backButton);
    console.log(addTarget);

    //完了リスtに追加
    document.getElementById("complete-list").appendChild(liComplete);

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

  //未完了リストから指定の要素を削除
  const deleteFromIncompleteList = (target) => {
    document.getElementById("incomplete-list").removeChild(target);
  };
};

document.getElementById("add-btn").addEventListener("click", onClickAdd);
