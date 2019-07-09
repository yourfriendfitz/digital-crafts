const inputField = document.getElementById("input-text");

const inputDiv = document.getElementById("user-input");

inputField.addEventListener("keypress", function(e) {
    const key = e.which || e.keyCode;
    if (key === 13) {
      const date = new Date();
      newItem = document.createElement("p");
      newItem.innerHTML = `${
        e.srcElement.value
      } visited on ${date.toLocaleDateString()} at ${date.toLocaleTimeString()}`;
      inputDiv.appendChild(newItem);
    }
  });