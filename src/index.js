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
    //完了リストに追加するリスト
    const addTarget = compliteButton.parentNode;
    console.log(addTarget);
    //押された完了ボタンの親タグを未完了リストから削除
    deleteFromIncompleteList(compliteButton.parentNode);
  });

  //button(削除)タグ生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    //押された削除ボタンの親タグを未完了リストから削除
    deleteFromIncompleteList(deleteButton.parentNode);
  });

  li.appendChild(div);

  //divタグの子要素に各要素を設定
  div.appendChild(p);
  // li.appendChild(p);
  div.appendChild(compliteButton);
  div.appendChild(deleteButton);

  //未完了リストに追加
  document.getElementById("incomplete-list").appendChild(div);

  //未完了リストから指定の要素を削除
  const deleteFromIncompleteList = (target) => {
    document.getElementById("incomplete-list").removeChild(target);
  };
};

document.getElementById("add-btn").addEventListener("click", onClickAdd);
