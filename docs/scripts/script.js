
//button = document.getElementById('linker')
const buttons = document.querySelectorAll('.linker');

function resetColor(button) {
    button.className = 'linker-blue'; 
}
buttons.forEach(function(button) {

    button.className = "linker-blue"

    button.addEventListener('mouseover', function() {
        button.className = 'linker-grey';
    });

    button.addEventListener('mouseout', function() {
        resetColor(button)
    });
});

