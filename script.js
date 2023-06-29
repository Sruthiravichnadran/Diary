
"Use strictly"

const titleInput = document.getElementById("title-input");
const entryInput = document.getElementById("entry-input");
const addBtn = document.getElementById("add-btn");
const entryList = document.getElementById("entry-list");


function addEntry() {
  const titleText = titleInput.value.trim();
  const entryText = entryInput.value.trim();
  const currentDate = new Date().toDateString();
  
  if (titleText !== "" && entryText !== "") {
    const li = document.createElement("li");
    const title = document.createElement("p");
    const entry = document.createElement("p");
    const date = document.createElement("p");
    
    title.className = "entry-title";
    title.textContent = titleText;
    entry.textContent = entryText;
    date.textContent = currentDate;
    
    li.appendChild(title);
    li.appendChild(entry);
    li.appendChild(date);
    
    entryList.appendChild(li);
    
    titleInput.value = "";
    entryInput.value = "";
  }
}


addBtn.addEventListener("click", addEntry);
