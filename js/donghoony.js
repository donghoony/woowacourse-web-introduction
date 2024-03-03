document.getElementById("submitBtn").onclick = function() {
    const name = getName();
    
    if (validateEmptyName(name)) {
        alertCheckedCount(name, getCount());
    }
}

function validateEmptyName(name) {
    if (name.trim() == "") {
        alert("이름을 입력해 주세요");
        return false;
    }
    return true;
}

function getName() {
    return document.getElementById("name-field").value;
}

function getCount() {
    return document.querySelectorAll(".vote:checked").length;
}

function alertCheckedCount(name, count) {
    if (count <= 0) {
        alert(name + "님은 저와 맞는 취향이 없는 것 같아요 🙄");
        return;
    }
    alert(name + "님, 저와 " + count + "개의 취향이 같으시네요!");
}

