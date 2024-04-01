let capital_line = document.querySelectorAll("#capital_line");
let capital_title = document.querySelectorAll("#capital_title");
let capital_text = document.querySelectorAll("#capital_text");
let capital_card = document.querySelectorAll("#capital_card");
capital_card.forEach(function (item, index) {
  item.addEventListener("click", function () {
    capital_line.forEach(function (item, index) {
      item.classList.add("bg-[#DFE0DD]");
      item.classList.remove("bg-[#121212]");
    });
    capital_line[index].classList.remove("bg-[#DFE0DD]");
    capital_line[index].classList.add("bg-[#121212]");
    capital_title.forEach(function (title, index) {
      title.classList.add("text-[#B8B8B6]");
      title.classList.remove("text-[#121212]");
    });
    capital_title[index].classList.remove("text-[#B8B8B6]");
    capital_title[index].classList.add("text-[#121212]");
    capital_text.forEach(function (title, index) {
        title.classList.add("text-[#B8B8B6]");
        title.classList.remove("text-[#121212]");
      });
      capital_text[index].classList.remove("text-[#B8B8B6]");
      capital_text[index].classList.add("text-[#121212]");
  });
});
