let task = [];

const handleModal = () => {
  let edit = document.getElementById("modal")
  edit.classList.toggle("hide");
};

const renderTask = () => {
  let table = `<div class="row">
    <div class="cColumn">Count</div>
    <div class="sColumn">Select</div>
    <div class="tColumn">My Tasks</div>
    <div class="aColumn">Action</div>
    </div>`;
  if (task.length == 0) {
    table = `
    <div class="notFound">
              <img src="undraw_void_-3-ggu.svg" style="width: 20%;" alt="">
              <span style="font-size: larger; text-align: center; margin-top: 40px;">No task found🙁</span>
            </div>
    `;
  } else {
    task.forEach((e, i) => {
      table += `
      <div class="row">
      <div class="cColumn">${i + 1}</div>
      <div class="sColumn">
      <input type="checkbox" id="checkBox"  class="inputCheckBox" />
      </div>
      <div class="tColumn">
      <div class="p">
      ${e}
      </div>
      </div>
      <div class="aColumn">
      <button class="btnDanger" id="delete" onclick="handleDelete(${i})">
      <i class="fa-solid fa-trash-can"></i>
      </button>
      <button class="btnInfo" id="edit" onclick="handleModal()">
      <i class="fa-solid fa-pencil"></i>
      </button>
      </div>
      </div>
      </div>
      `;
    });
  }
  document.getElementById("table").innerHTML = table;
};

document.getElementById("add").addEventListener("click", (e) => {
  let value = document.getElementById("input").value;
  task.push(value);
  renderTask();
  document.getElementById("input").value = "";
});

const handleDelete = (id) => {
  task.splice(id, 1);
  renderTask();
};

document.getElementById("theme-checkbox").onclick = (e) => {
  let root = document.documentElement;
  if (e.target.checked) {
    root.style.setProperty("--black", "#ffffff");
    root.style.setProperty("--font", "#dcdcdc");
    root.style.setProperty("--bgSecendory", "#1f2537");
    root.style.setProperty("--bgSecendoryHover", "#4b5273");
    root.style.setProperty("--lightBg", "#8185b8");
    root.style.setProperty("--lightBgDark", "#9b9caf");
    root.style.setProperty("--btnDanger", "#ff1307");
    root.style.setProperty("--btnDangerLight", "#ff726b");
    root.style.setProperty("--white", "black");
    root.style.setProperty("--default", "white");
    root.style.setProperty("--modalLight" , "#ffffffae")
  } else {
    root.style.setProperty("--black", "#000000");
    root.style.setProperty("--font", "#1f2537");
    root.style.setProperty("--bgSecendory", "#4b5273");
    root.style.setProperty("--bgSecendoryHover", "#fbfbfbf6");
    root.style.setProperty("--lightBg", "#8185b876");
    root.style.setProperty("--lightBgDark", "#9b9cafbc");
    root.style.setProperty("--btnDanger", "#ff1307d2");
    root.style.setProperty("--btnDangerLight", "#ff726b");
    root.style.setProperty("--white", "white");
    root.style.setProperty("--default", "white");
  }
};

// let checked = document.getElementById("checkBox").onclick = () =>{
//   let element  =  document.getElementById("icon")
//   element.classList.toggle("");
// }
