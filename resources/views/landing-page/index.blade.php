@extends('landing-page.layouts.main')

@section('content')
<!-- ======= Services Section ======= -->
<section id="services" class="services section-bg">
    <div class="container">

        <div class="section-title">
            <span>Products</span>
            <h2>Products</h2>
            <p>Obat yang tersedia disini</p>
        </div>

        {{-- <div class="row mb-3" data-aos="fade-up" data-aos-delay="100">
            <div class="col-lg-12 d-flex justify-content-center">
                <input class="form-control" id="search" placeholder="Type to search...">
            </div>
        </div> --}}

        <div class="row mb-3" data-aos="fade-up" data-aos-delay="100">
            <div class="col-lg-12 d-flex justify-content-center">
                <form action="/" method="get">
                    <div class="input-group mb-3">
                        <input type="text" class="form-control" name="search" placeholder="Type to search..."
                            value="{{ request('search') }}">
                        <button class="btn btn-info text-white" type="submit">Search</button>
                    </div>
                </form>
            </div>
        </div>

        <div class="row" data-aos="fade-up" data-aos-delay="100">
            <div class="col-lg-12 d-flex justify-content-center">
                <ul id="services-flters">
                    <li data-filter="*" class="filter-active">All</li>

                    @forelse ($categories as $category)
                    <li data-filter=".filter-{{ $category->kode_kategori }}">{{ $category->nama_kategori }}
                    </li>
                    @empty
                    <div class="alert alert-danger" role="alert">
                        Tidak ada data
                    </div>
                    @endforelse

                </ul>
            </div>
        </div>

        @if (session()->has('error'))
        <div class="alert alert-danger" role="alert">
            {{ session('error') }}
        </div>
        @endif

        @if (session()->has('success'))
        <div class="alert alert-success" role="alert">
            {{ session('success') }}
        </div>
        @endif

        <div class="row services-container gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center"
            id="result">

            @forelse ($obats as $obat)
            <div class="col mb-5 services-item filter-{{ $obat->category->kode_kategori }}">
                <div class="shadow p-3 mb-5 bg-body rounded">
                    <!-- Product image-->

                    @if ($obat->gambar)
                    <img class="card-img-top" src="{{ asset('storage/' . $obat->gambar) }}" alt="image">
                    @else
                    <img class="card-img-top" src="/assets/img/product/kosong.png" alt="image">
                    @endif

                    <!-- Product details-->
                    <div class="card-body p-4">
                        <div class="text-center">
                            <!-- Product name-->
                            <h5 class="fw-bolder">{{ $obat->nama_obat }}</h5>
                            <!-- Product price-->
                            Rp. {{ number_format($obat->harga) }}
                        </div>
                    </div>
                    <!-- Product actions-->
                    <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                        <div class="text-center"><a class="btn btn-outline-info mt-auto"
                                href="/order/{{ $obat->kode_obat }}"><i class="bi-cart-fill me-1"></i> Order</a></div>
                    </div>
                </div>
            </div>

            @empty
            <div class="alert alert-danger" role="alert">
                Tidak ada data
            </div>
            @endforelse

        </div>

        <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-start">
            <div class="col d-flex justify-content-start">

                {{ $obats->links() }}

            </div>
        </div>

    </div>
</section>
<!-- End Services Section -->

<!-- ======= Testimonials Section ======= -->
<section id="testimonials" class="testimonials">
    <div class="container position-relative">

        <div class="testimonials-slider swiper" data-aos="fade-up" data-aos-delay="100">
            <div class="swiper-wrapper">

                <div class="swiper-slide">
                    <div class="testimonial-item">
                        <img src="assets/img/testimonials/testimonials-1.jpg" class="testimonial-img" alt="">
                        <h3>Steve Jobs</h3>
                        <h4>Founder Apple</h4>
                        <p>
                            <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                            Saat kamu masuk ke ruang operasi, kamu baru sadar bahwa kesehatan itu betapa
                            berharganya.
                            <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                        </p>
                    </div>
                </div><!-- End testimonial item -->

                <div class="swiper-slide">
                    <div class="testimonial-item">
                        <img src="assets/img/testimonials/testimonials-2.jpg" class="testimonial-img" alt="">
                        <h3>Denis Waitley</h3>
                        <h4>Motivator</h4>
                        <p>
                            <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                            Waktu dan kesehatan adalah dua aset berharga yang tidak dikenali dan hargai sampai
                            keduanya hilang.
                            <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                        </p>
                    </div>
                </div><!-- End testimonial item -->

                <div class="swiper-slide">
                    <div class="testimonial-item">
                        <img src="assets/img/testimonials/testimonials-3.jpg" class="testimonial-img" alt="">
                        <h3>Anne Wilson Schaef</h3>
                        <h4>Pengarang</h4>
                        <p>
                            <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                            Kesehatan yang baik bukanlah sesuatu yang dapat kita beli. Namun, sesuatu yang dapat
                            menjadi tabungan
                            yang sangat berharga.
                            <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                        </p>
                    </div>
                </div>

            </div>
            <div class="swiper-pagination"></div>
        </div>

    </div>
</section>
<!-- End Testimonials Section -->

<!-- ======= Contact Section ======= -->
<section id="contact" class="contact">
    <div class="container">
        <div class="section-title">
            <span>Contact</span>
            <h2>Contact</h2>
            <p>Jika ada pertanyaan atau saran, silahkan kirim pesan dibawah</p>
        </div>
    </div>

    <div class="container">
        <div class="alert alert-success alert-dismissible fade show pesan d-none" role="alert">
            <strong>Successfully!</strong> Message has been sent
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>

        <form action="" name="sistem-apotek-contact-form" role="form" class="php-email-form">
            <div class="row">
                <div class="col-md-6 form-group">
                    <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" required>
                </div>
                <div class="col-md-6 form-group mt-3 mt-md-0">
                    <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" required>
                </div>
            </div>
            <div class="form-group mt-3">
                <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" required>
            </div>
            <div class="form-group mt-3">
                <textarea class="form-control" name="message" rows="5" placeholder="Message" required></textarea>
            </div>
            <div class="my-3">
                <div class="loading">Loading</div>
                <div class="error-message"></div>
                <div class="sent-message">Your message has been sent. Thank you!</div>
            </div>
            <div class="text-center">
                <button class="kirim" type="submit">Send Message</button>

                <button class="btn btn-primary btn-loading px-4 py-2 d-none" type="button" disabled>
                    <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                    Loading...
                </button>
            </div>
        </form>

    </div>
</section>
<!-- End Contact Section -->
@endsection