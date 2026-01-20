const eye = document.getElementById("togglePassword");
const pwd = document.getElementById("password");

eye.addEventListener("click", () => {
  pwd.type = pwd.type === "password" ? "text" : "password";
});
