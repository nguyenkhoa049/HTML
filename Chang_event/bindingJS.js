var nameInput = document.getElementById('nameInput');
var output = document.getElementById('output');
nameInput.addEventListener('keyup', nameout)
function nameout()
{
    return output.textContent = nameInput.value;
}