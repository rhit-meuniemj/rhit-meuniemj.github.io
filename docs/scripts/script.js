
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

function scrollToSection1() {
    document.getElementById('Education').scrollIntoView();
}
function scrollToSection2() {
    document.getElementById('Experience').scrollIntoView();
}
function scrollToSection3() {
    document.getElementById('skills').scrollIntoView();
}
function scrollToSection4() {
    document.getElementById('honors').scrollIntoView();
}

