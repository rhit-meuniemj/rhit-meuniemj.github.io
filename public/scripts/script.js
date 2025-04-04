
//button = document.getElementById('linker')
const buttons = document.querySelectorAll('.linker');

function resetColor(button) {
    button.className = 'linker-blue'; 
}
buttons.forEach(function(button) {
    // Set initial color for each button
    button.className = "linker-blue"

    // Add event listener for mouseover to change color to green
    button.addEventListener('mouseover', function() {
        button.className = 'linker-grey';
    });

    // Add event listener for mouseout to reset color to blue
    button.addEventListener('mouseout', function() {
        resetColor(button)
    });
});

