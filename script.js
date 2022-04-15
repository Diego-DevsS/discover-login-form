let box = document.querySelectorAll(".board");
let eyeimg = document.querySelector("img.eye");

// Change input indicative image
box.forEach(elementBox => {
  const img = elementBox.querySelector("img");
  const input = elementBox.querySelector("input");

  input.addEventListener('focus', () => {
    img.src = img.src.replace('.svg', '-focus.svg')
  });

  input.addEventListener('focusout', () => {
    img.src = img.src.replace('-focus.svg', '.svg')
  });
})

// Show password
function changeViewsPass() {
  const inputPass = document.querySelector("input#pass");

  if (inputPass.type == "password")
    inputPass.type = "text";
  else
    inputPass.type = "password";
}

eyeimg.addEventListener('click', () => changeViewsPass());