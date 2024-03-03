document.getElementById("submitBtn").onclick = function() {
    alertCheckedCount(getName(), getCount());
}

function getName() {
    return document.getElementById("name-field").value;
}

function getCount() {
    return document.querySelectorAll(".song:checked").length;
}

function alertCheckedCount(name, count) {
    alert(name + "님, 저와 " + count + "개의 취향이 같으시네요!");
}
