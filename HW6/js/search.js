const searchtask = document.getElementById("find");

function filterList() {
  const list = document.querySelectorAll("li");
  const searchText = searchtask.value.toLowerCase();

  list.forEach((item) => {
    const searchedtext = item.innerText.toLowerCase();

    if (searchedtext.includes(searchText)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}

searchtask.addEventListener("input", filterList);
