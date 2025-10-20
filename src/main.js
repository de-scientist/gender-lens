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

  //fetch data from the api
  try {
    //disable the button while fetching 
    btn.disabled= true;
    btn.textContent = "Searching..."

    //fetch data from the api
    const response = await fetch(`https://api.genderize.io?name=${providedName}`)
    const data = await response.json();
    const {gender, probability} = data;

    //handle no data found
    if (data.gender === null) {
      result.textContent = `No data found for the name <strong>${providedName}</strong>`;
      return;

    } else {
      //display the result
      result.innerHTML = `<strong>${providedName}</strong> is most likely a <strong>${gender}</strong> with a probability of <strong>${probability * 100}</strong>% certainty.`;
    }

  } catch (error) {
    //display error message
      result.textContent = `An error occurred. Please try again later.`;
      console.error("Error fetching data:", error);
  } finally {
      //
  }
})

