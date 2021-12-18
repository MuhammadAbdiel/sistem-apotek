@include('landing-page.layouts.top')

@include('landing-page.layouts.navbar')

<!-- ======= Hero Section ======= -->
<section id="hero">
    <div class="hero-container">
        <div id="heroCarousel" data-bs-interval="5000" class="carousel slide carousel-fade" data-bs-ride="carousel">

            <ol class="carousel-indicators" id="hero-carousel-indicators"></ol>

            <div class="carousel-inner" role="listbox">

                <!-- Slide 1 -->
                <div class="carousel-item active" style="background-image: url(/assets/img/slide/slide-1.jpg);">
                    <div class="carousel-container">
                        <div class="carousel-content">
                            <h2 class="animate__animated animate__fadeInDown">Selamat Datang di <span>Sistem
                                    Informasi Apotek</span>
                            </h2>
                            <p class="animate__animated animate__fadeInUp">Sistem Informasi yang menyediakan layanan
                                pembelian obat
                                secara online. Obat yang disediakan juga beragam dari berbagai kategori. Jadi,
                                dengan sistem informasi
                                ini masyarakat bisa melakukan pembelian obat tanpa harus datang ke apotek</p>
                        </div>
                    </div>
                </div>

                <!-- Slide 2 -->
                <div class="carousel-item" style="background-image: url(/assets/img/slide/slide-2.jpg);">
                    <div class="carousel-container">
                        <div class="carousel-content">
                            <h2 class="animate__animated animate__fadeInDown">Beragam Obat Dari Berbagai Kategori
                                Tersedia Disini
                            </h2>
                            <p class="animate__animated animate__fadeInUp">Obat yang disediakan juga beragam. Obat
                                dari berbagai
                                apotek diseluruh Indonesia tersedia disini. Jadi, tidak perlu khawatir kehabisan
                                karena stok obatnya
                                pun juga sangat melimpah dan kami akan selalu update terkait obat yang disediakan.
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Slide 3 -->
                <div class="carousel-item" style="background-image: url(/assets/img/slide/slide-3.jpg);">
                    <div class="carousel-container">
                        <div class="carousel-content">
                            <h2 class="animate__animated animate__fadeInDown">Akses Yang Mudah Dan Cepat</h2>
                            <p class="animate__animated animate__adeInUp">Untuk mengaksesnya hanya perlu koneksi
                                internet dan dibuka
                                melalui website. Bisa menggunakan browser apapun. Dan bisa diakses kapanpun dan
                                dimanapun.</p>
                        </div>
                    </div>
                </div>

            </div>

            <a class="carousel-control-prev" href="#heroCarousel" role="button" data-bs-slide="prev">
                <span class="carousel-control-prev-icon ri-arrow-left-line" aria-hidden="true"></span>
            </a>

            <a class="carousel-control-next" href="#heroCarousel" role="button" data-bs-slide="next">
                <span class="carousel-control-next-icon ri-arrow-right-line" aria-hidden="true"></span>
            </a>

        </div>
    </div>
</section>
<!-- End Hero -->

<main id="main">

    @yield('content')

</main>
<!-- End #main -->

@include('landing-page.layouts.footer')

@include('landing-page.layouts.bottom')