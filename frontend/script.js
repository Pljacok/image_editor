document.getElementById('upload').addEventListener('change', function(event) {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function(e) {
        const img = new Image();
        img.src = e.target.result;
        img.onload = function() {
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0);
        }
    };
    reader.readAsDataURL(file);
});
