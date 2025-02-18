
const passwordField = document.getElementById('password'); 
const icon = document.getElementById('toggle-password');    

icon.addEventListener('click', function() {
  if (passwordField.type === 'password') {
    passwordField.type = 'text';
    icon.innerHTML = '<img src="./image/input/Vector2.png" alt="closed eye icon">';
  } else {
    passwordField.type = 'password';
    icon.innerHTML = '<img src="./image/input/Vector.png" alt="open eye icon">';
  }
});