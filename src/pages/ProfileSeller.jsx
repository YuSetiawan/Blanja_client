import React from 'react';
import SellerProfile from '../components/profileSeller/SellerProfile';
import SellerProduct from '../components/profileSeller/SellerProduct';
import SellerOrder from '../components/profileSeller/SellerOrder';
import SidebarSeller from '../components/profileSeller/SidebarSeller';
import NavbarLogin from '../components/navbar/NavbarLogin';

const ProfileSeller = () => {
  return (
    <div>
      {/* Navbar */}
      <header>
        <NavbarLogin />
      </header>
      <main>
        <section className="mt-5">
          <div className="row">
            {/* Nav-content */}
            <SidebarSeller />
            {/* Content */}
            {/* Profile Content */}
            <div className="col-md-9 col-12 pt-5">
              <div className="tab-content" id="nav-tabContent">
                <SellerProfile />
                <SellerProduct />
                <SellerOrder />
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer />
    </div>
  );
};

export default ProfileSeller;
