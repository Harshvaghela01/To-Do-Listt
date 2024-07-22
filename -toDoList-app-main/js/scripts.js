function newItem() {
  let inputValue = document.getElementById("input").value;
  let priorityValue = document.getElementById("priority").value;
  let categoryValue = document.getElementById("category").value;

  if (inputValue === "") {
      alert("You must write something!");
      return;
  }

  let li = document.createElement("li");
  li.className = `${priorityValue} ${categoryValue}`;
  li.appendChild(document.createTextNode(inputValue));

  let span = document.createElement("SPAN");
  span.className = "close";
  span.appendChild(document.createTextNode("X"));
  li.appendChild(span);

  span.onclick = function () {
      let div = this.parentElement;
      div.style.display = "none";
  }

  li.ondblclick = function () {
      this.classList.toggle("checked");
  }

  document.getElementById("list").appendChild(li);
  document.getElementById("input").value = "";
  document.getElementById("priority").value = "low";
  document.getElementById("category").value = "work";

  $("#list").sortable();
}

function filterTasks() {
  let filterValue = document.getElementById("filter-category").value;
  let items = document.getElementById("list").getElementsByTagName("li");

  for (let i = 0; i < items.length; i++) {
      if (filterValue === "all") {
          items[i].style.display = "";
      } else {
          if (items[i].classList.contains(filterValue)) {
              items[i].style.display = "";
          } else {
              items[i].style.display = "none";
          }
      }
  }
}
