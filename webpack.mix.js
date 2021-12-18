const mix = require("laravel-mix");

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

// mix.js('resources/js/app.js', 'public/js')
//     .postCss('resources/css/app.css', 'public/css', [
//         //
//     ]);

mix.styles(
    [
        "public/assets/vendor/animate.css/animate.min.css",
        "public/assets/vendor/bootstrap/css/bootstrap.min.css",
        "public/assets/vendor/bootstrap-icons/bootstrap-icons.css",
        "public/assets/vendor/boxicons/css/boxicons.min.css",
        "public/assets/vendor/glightbox/css/glightbox.min.css",
        "public/assets/vendor/remixicon/remixicon.css",
        "public/assets/vendor/swiper/swiper-bundle.min.css",
        "public/assets/css/style.css",
    ],
    "public/css/combine.css"
).version();

mix.scripts(
    [
        "public/assets/vendor/bootstrap/js/bootstrap.bundle.min.js",
        "public/assets/vendor/glightbox/js/glightbox.min.js",
        "public/assets/vendor/isotope-layout/isotope.pkgd.min.js",
        "public/assets/vendor/purecounter/purecounter.js",
        "public/assets/vendor/swiper/swiper-bundle.min.js",
        "public/assets/js/main.js",
    ],
    "public/js/combine.js"
).version();
