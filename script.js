"use strict";

document.getElementById("addBtn").onclick = function() {
    let error = document.getElementById("error");
    error.innerHTML = "";
    if(document.getElementById("inputTask").value == "") {
        error.textContent ="データがありません";
    } else {
        let taskName = document.getElementById("inputTask").value;
        let x = document.createElement("li");
        x.textContent = taskName;
        x.classList.add("bg-light","mt-2","p-3");
        document.getElementById("taskList").appendChild(x);
        x.insertAdjacentHTML('afterbegin','<button id="delBtn" class="btn btn-sm btn-danger mr-4" onclick="del()">削除</button>');
        document.getElementById('inputTask').value = "";
    }
}

function del() {
    document.getElementById("delBtn").parentNode.remove();
}
