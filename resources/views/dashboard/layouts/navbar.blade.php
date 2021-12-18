<div class="header">
    <div class="header-left">
        <div class="menu-icon dw dw-menu"></div>
        <div class="search-toggle-icon dw dw-search2" data-toggle="header_search"></div>
    </div>
    <div class="header-right">
        <div class="dashboard-setting user-notification">
            <div class="dropdown">
                <a class="dropdown-toggle no-arrow" href="javascript:;" data-toggle="right-sidebar">
                    <i class="dw dw-settings2"></i>
                </a>
            </div>
        </div>
        <div class="user-info-dropdown">
            <div class="dropdown">
                <a class="dropdown-toggle" href="#" role="button" data-toggle="dropdown">
                    <span class="user-icon">
                        <img src="/vendors/images/photo1.jpg" alt="">
                    </span>

                    @if (auth()->user()->level == 'admin')
                    <span class="user-name badge bg-success">Administrator</span>
                    @else
                    <span class="user-name badge bg-success">User</span>
                    @endif

                </a>
                <div class="dropdown-menu dropdown-menu-right dropdown-menu-icon-list">
                    <a class="dropdown-item" href="#"><i class="dw dw-user1"></i> Profile</a>
                    <form action="/logout" method="POST">
                        @csrf
                        <button class="dropdown-item" type="submit"><i class="dw dw-logout"></i> Log Out</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>