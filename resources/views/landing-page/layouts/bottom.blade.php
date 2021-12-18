<!-- Vendor JS Files -->
<script src="/assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
<script src="/assets/vendor/glightbox/js/glightbox.min.js"></script>
<script src="/assets/vendor/isotope-layout/isotope.pkgd.min.js"></script>
{{-- <script src="/assets/vendor/php-email-form/validate.js"></script> --}}
<script src="/assets/vendor/purecounter/purecounter.js"></script>
<script src="/assets/vendor/swiper/swiper-bundle.min.js"></script>

<!-- Template Main JS File -->
<script src="/assets/js/main.js"></script>

{{-- <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script> --}}

{{-- Jquery --}}
<script src="/assets/vendor/jquery/jquery-3.6.0.min.js"></script>

{{-- Laravel Mix --}}
{{-- <script src="/js/combine.js?id=a81ffc833f58f90e73db"></script> --}}

<script src="/js/script.js"></script>

<script>
    const scriptURL = 'https://script.google.com/macros/s/AKfycby3Ee6ajSWpDBdD68PnfEjg0WG5HVlXgSXVehAh-FTNuGTGCdhOmGZKXBIA6SQ8IAAvVg/exec'
    const form = document.forms['sistem-apotek-contact-form']
    const kirim = document.querySelector('.kirim');
    const loading = document.querySelector('.btn-loading');
    const pesan = document.querySelector('.pesan');

    form.addEventListener('submit', e => {
        e.preventDefault()

        // Ketika tombol submit diklik
        // Tampilkan tombol loading, hilangkan tombol kirim
        loading.classList.toggle('d-none');
        kirim.classList.toggle('d-none');

        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {

            // Ketika success
            // Tampilkan tombol kirim, hilangkan tombol loading
            loading.classList.toggle('d-none');
            kirim.classList.toggle('d-none');

            // Tampilkan alert
            pesan.classList.toggle('d-none');

            // Reset form
            form.reset();
            console.log('Success!', response)
        })
        .catch(error => console.error('Error!', error.message))
    })
</script>

<script>
    $.ajaxSetup({ headers: { 'csrftoken' : '{{ csrf_token() }}' } });
</script>

</body>

</html>