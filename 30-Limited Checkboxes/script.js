const toggles = document.querySelectorAll('.toggle')
const rich = document.querySelector('#rich')
const handsome = document.querySelector('#handsome')
const faithful = document.querySelector('#faithful')

toggles.forEach(toggle => toggle.addEventListener('change', (e) => doTheTrick(e.target)))

function doTheTrick(theClickedOne) {
    if(rich.checked && handsome.checked && faithful.checked) {
        if(rich === theClickedOne) {
            faithful.checked = false
        }

        if(handsome === theClickedOne) {
            rich.checked = false
        }

        if(faithful === theClickedOne) {
            handsome.checked = false
        }
    }
}