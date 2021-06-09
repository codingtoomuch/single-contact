// collapsible
$(document).ready(function () {
    $('.collapsible').collapsible();
});
// modal
$(document).ready(function () {
    $('.modal').modal();
});

// CC BCC handler
const addCcBccHandler = (type) => {
    const handler = document.getElementById(`add__${type}`)
    const field = document.getElementById(`${type}_select_field`)
    handler.addEventListener('click', () => {
        field.classList.remove('d-none');
        handler.style.visibility = 'hidden';
    })
    const closeBtn = document.getElementById(`close__${type}`)
    closeBtn.addEventListener('click', () => {
        field.classList.add('d-none');
        handler.style.visibility = 'visible';
    })
};
addCcBccHandler('cc');
addCcBccHandler('bcc');