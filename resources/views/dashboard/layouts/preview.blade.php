<script>
    function previewImage(){
        const gambar = document.getElementById('gambar');
        const img = document.querySelector('.img-preview');
        
        img.style.display = 'block';
        
        const oFReader = new FileReader();
        oFReader.readAsDataURL(gambar.files[0]);
        
        oFReader.onload = function (oFREvent) {
            img.src = oFREvent.target.result;
        }
    }
</script>