//add DOM elements
const input = document.getElementById("form-name-input");
const btn = document.querySelector(".search-btn");
const result = document.querySelector(".result");

//add an event listener
btn.addEventListener("click", async (ev) => {
  ev.preventDefault()
  const providedName  = input.value;

  //handle empty input
  if (providedName === "") {
    result.textContent = `Please provide a name`;
    return
  }

})

