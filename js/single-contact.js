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


// Tiny Mce [Text]
tinymce.init({
    selector: 'textarea#basic-example-text',
    placeholder: 'Type Here',
    menubar: false,
    branding: false,
    height: 300,
    plugins: [
        'advlist autolink lists link image charmap print preview anchor',
        'searchreplace visualblocks code fullscreen colorpicker',
        'media paste imagetools help'
    ],
    toolbar: 'insertfile undo redo | styleselect | bold italic underline strikethrough | forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image |print preview media | help',
    content_style: 'body { font-family:Helvetica,Arial,sans-serif;background:#fff; font-size:14px }'
});
// Tiny Mce [MMS]
tinymce.init({
    selector: 'textarea#basic-example-mms',
    placeholder: 'Type Here',
    menubar: false,
    branding: false,
    height: 300,
    plugins: [
        'advlist autolink lists link image charmap print preview anchor',
        'searchreplace visualblocks code fullscreen colorpicker',
        'media paste imagetools help'
    ],
    toolbar: 'insertfile undo redo | styleselect | bold italic underline strikethrough | forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image |print preview media | help',
    content_style: 'body { font-family:Helvetica,Arial,sans-serif;background:#fff; font-size:14px }'
});
// Tiny Mce [Note]
tinymce.init({
    selector: 'textarea#basic-example-note',
    placeholder: 'Type Here',
    menubar: false,
    branding: false,
    height: 300,
    plugins: [
        'advlist autolink lists link image charmap print preview anchor',
        'searchreplace visualblocks code fullscreen colorpicker',
        'media paste imagetools help'
    ],
    toolbar: 'insertfile undo redo | styleselect | bold italic underline strikethrough | forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image |print preview media | help',
    content_style: 'body { font-family:Helvetica,Arial,sans-serif;background:#fff; font-size:14px }'
});
// Tiny Mce [Email]
tinymce.init({
    selector: 'textarea#basic-example-email',
    placeholder: 'Type Here',
    menubar: false,
    branding: false,
    height: 200,
    plugins: [
        'advlist autolink lists link image charmap print preview anchor',
        'searchreplace visualblocks code fullscreen colorpicker',
        'media paste imagetools help'
    ],
    toolbar: 'insertfile undo redo | styleselect | bold italic underline strikethrough | forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image |print preview media | help',
    content_style: 'body { font-family:Helvetica,Arial,sans-serif;background:#fff; font-size:14px }'
});
// Tiny Mce [Video Email]
tinymce.init({
    selector: 'textarea#basic-example-video-email',
    placeholder: 'Type Here',
    menubar: false,
    branding: false,
    height: 200,
    plugins: [
        'advlist autolink lists link image charmap print preview anchor',
        'searchreplace visualblocks code fullscreen colorpicker',
        'media paste imagetools help'
    ],
    toolbar: 'insertfile undo redo | styleselect | bold italic underline strikethrough | forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image |print preview media | help',
    content_style: 'body { font-family:Helvetica,Arial,sans-serif;background:#fff; font-size:14px }'
});
