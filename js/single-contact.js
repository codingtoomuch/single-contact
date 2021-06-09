$(document).ready(function () {
    $('.modal').modal();
});


// const addCC = document.getElementById('add__cc');

// addCC.addEventListener('click', () => {
//     document.getElementById('cc_select_field').classList.remove('d-none');
//     addCC.style.visibility = 'hidden';
// })

// const closeCC = document.getElementById('close__cc');
// closeCC.addEventListener('click', () => {
//     document.getElementById('cc_select_field').classList.add('d-none');
//     addCC.style.visibility = 'visible';
// })
// const addBCC = document.getElementById('add__bcc');

// addBCC.addEventListener('click', () => {
//     document.getElementById('bcc_select_field').classList.remove('d-none');
//     addBCC.style.visibility = 'hidden';
// })

// const closeBCC = document.getElementById('close__bcc');
// closeBCC.addEventListener('click', () => {
//     document.getElementById('bcc_select_field').classList.add('d-none');
//     addBCC.style.visibility = 'visible';
// })


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