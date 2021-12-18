<div class="right-sidebar">
    <div class="sidebar-title">
        <h3 class="weight-600 font-16 text-blue">
            Layout Settings
            <span class="btn-block font-weight-400 font-12">User Interface Settings</span>
        </h3>
        <div class="close-sidebar" data-toggle="right-sidebar-close">
            <i class="icon-copy ion-close-round"></i>
        </div>
    </div>
    <div class="right-sidebar-body customscroll">
        <div class="right-sidebar-body-content">
            <h4 class="weight-600 font-18 pb-10">Header Background</h4>
            <div class="sidebar-btn-group pb-30 mb-10">
                <a href="javascript:void(0);" class="btn btn-outline-primary header-white active">White</a>
                <a href="javascript:void(0);" class="btn btn-outline-primary header-dark">Dark</a>
            </div>

            <h4 class="weight-600 font-18 pb-10">Sidebar Background</h4>
            <div class="sidebar-btn-group pb-30 mb-10">
                <a href="javascript:void(0);" class="btn btn-outline-primary sidebar-light ">White</a>
                <a href="javascript:void(0);" class="btn btn-outline-primary sidebar-dark active">Dark</a>
            </div>
        </div>
    </div>
</div>

<div class="left-side-bar">
    <div class="brand-logo">
        <a href="/dashboard">
            <img src="/vendors/images/logo-icon.png" width="30" alt="logo">&nbsp; SimFoTek
        </a>
        <div class="close-sidebar" data-toggle="left-sidebar-close">
            <i class="ion-close-round"></i>
        </div>
    </div>
    <div class="menu-block customscroll">
        <div class="sidebar-menu">
            <ul id="accordion-menu">
                <li>
                    <a href="/dashboard"
                        class="dropdown-toggle no-arrow {{ Request::is('dashboard') ? 'active' : '' }}">
                        <span class="micon dw dw-house-1"></span><span class="mtext">Home</span>
                    </a>
                </li>
                <li>
                    <a href="/dashboard/obat"
                        class="dropdown-toggle no-arrow {{ Request::is('dashboard/obat*') ? 'active' : '' }}">
                        <span class="micon dw dw-library"></span><span class="mtext">Data Obat</span>
                    </a>
                </li>
                <li>
                    <a href="/dashboard/category"
                        class="dropdown-toggle no-arrow {{ Request::is('dashboard/category*') ? 'active' : '' }}">
                        <span class="micon dw dw-apartment"></span><span class="mtext">Data Kategori Obat</span>
                    </a>
                </li>
                <li>
                    <div class="dropdown-divider"></div>
                </li>
                <li>
                    <a href="/" target="_blank" class="dropdown-toggle no-arrow">
                        <span class="micon dw dw-paper-plane1"></span>
                        <span class="mtext">Landing Page
                    </a>
                </li>
            </ul>
        </div>
    </div>
</div>
<div class="mobile-menu-overlay"></div>