<!-- ======= Top Bar ======= -->
<section id="topbar" class="fixed-top d-flex align-items-center">
    <div class="container d-flex justify-content-center justify-content-md-between">
        <div class="contact-info d-flex align-items-center">
            <i class="bi bi-envelope d-flex align-items-center"><a
                    href="mailto:contact@example.com">sistemapotek@example.com</a></i>
            <i class="bi bi-phone d-flex align-items-center ms-4"><span>+62 821 5589 7655</span></i>
        </div>
        <div class="social-links d-none d-md-flex">
            <a href="#" class="twitter"><i class="bi bi-twitter"></i></a>
            <a href="#" class="facebook"><i class="bi bi-facebook"></i></a>
            <a href="#" class="instagram"><i class="bi bi-instagram"></i></a>
            <a href="#" class="linkedin"><i class="bi bi-linkedin"></i></i></a>
        </div>
    </div>
</section>

<header id="header" class="fixed-top d-flex align-items-center">
    <div class="container d-flex align-items-center justify-content-between">

        <div class="logo">
            <img src="/vendors/images/logo-icon.png" width="30" alt="logo">&nbsp; <h1 class="d-inline-block">SimFoTek
            </h1>
        </div>

        <nav id="navbar" class="navbar">
            <ul>
                <li><a class="nav-link scrollto" href="{{ Request::is('/') ? '#hero' : '/' }}">Home</a></li>
                <li><a class="nav-link scrollto" href="{{ Request::is('/') ? '#services' : '/' }}">Products</a></li>
                <li><a class="nav-link scrollto" href="{{ Request::is('/') ? '#contact' : '/' }}">Contact</a></li>

                @auth
                <li class="dropdown">
                    <a href="#">
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                class="bi bi-person-circle" viewBox="0 0 16 16">
                                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                                <path fill-rule="evenodd"
                                    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                            </svg>
                        </span>
                    </a>
                    <ul>
                        <li><a href="/profile">Profile</a></li>
                        <li><a href="/history">History</a></li>

                        @can('admin')
                        <li><a href="/dashboard">Dashboard</a></li>
                        @endcan

                        <li>
                            <form action="/logout" method="POST">
                                @csrf
                                <button class="border-0 bg-white"
                                    style="width: 100%; color: #444444; text-align: left; padding-left: 20px; font-size: 10pt;"
                                    type="submit">Logout</button>
                            </form>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="/cart" class="nav-link scrollto {{ Request::is('cart') ? 'active' : '' }}">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                            class="bi bi-cart-fill" viewBox="0 0 16 16">
                            <path
                                d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                        </svg>

                        @php
                        $mainOrder = \App\Models\Order::where('user_id', auth()->user()->id)->where('status',
                        0)->first();

                        if (!empty($mainOrder)){
                        $notification = \App\Models\DetailOrder::where('order_id', $mainOrder->id)->count();
                        }
                        @endphp

                        @if (!empty($mainOrder))
                        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">

                            {{ $notification }}

                            <span class="visually-hidden">unread messages</span>
                        </span>
                        @endif

                    </a>
                </li>
                @else
                <li><a class="nav-link scrollto" href="/login">Login</a></li>
                @endauth

            </ul>
            <i class="bi bi-list mobile-nav-toggle"></i>
        </nav>

    </div>
</header>