const one = document.getElementById("one").onclick = function() {
  const box = document.getElementById("inputBox"); // element, not its .value
  box.value += '1'; // append '1' (or use `box.value = '1'` to replace)
};

const two = document.getElementById("two").onclick = function() {
    const box = document.getElementById("inputBox");
    box.value += '2';
}