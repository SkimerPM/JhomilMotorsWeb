
const togglePassword = document.getElementById("togglePassword");
const passwordInput = document.getElementById("password");
const passwordIcon = document.getElementById("passwordIcon");

togglePassword.addEventListener("click", () => {
    const type =
        passwordInput.getAttribute("type") === "password"
            ? "text"
            : "password";
    passwordInput.setAttribute("type", type);
    passwordIcon.src =
        type === "password"
            ? "../../source/icons/session_form/eye.png"
        : "../../source/icons/session_form/close_eye.png";
    passwordIcon.alt =
        type === "password" ? "Show password" : "Hide password";
});
