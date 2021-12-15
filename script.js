// bing in all of the panels into JS file
const panels = document.querySelectorAll('.panel')

panels.forEach(panel => {
    //we want an event listener on each panel
    panel.addEventListener('click', () => {
        //need to remove active class on all other ones before we add one to another one
        removeActiveClasses()
        panel.classList.add('active')
    })
})


function removeActiveClasses() {
    //loop through panels and remove active classes
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}