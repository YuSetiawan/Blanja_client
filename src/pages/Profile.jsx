import React from 'react';
import Navbar from '../components/navbar/Navbar';
import Sidebar from '../components/profile/Sidebar';
import CustProfile from '../components/profile/CustProfile';
import CustAddres from '../components/profile/CustAddres';
import CustOrder from '../components/profile/CustOrder';

const Profile = () => {
  return (
    <div>
      <>
        {/* Navbar */}
        <header>
          <Navbar />
        </header>
        <main>
          <section className="mt-5">
            <div className="row">
              {/* Nav-content */}
              <Sidebar />
              {/* Content */}
              {/* Profile Content */}
              <div className="col-md-9 col-12 pt-5">
                <div className="tab-content" id="nav-tabContent">
                  <CustProfile />
                  {/* Address Content */}
                  <CustAddres />
                  {/* Order Content */}
                  <CustOrder />
                </div>
              </div>
            </div>
          </section>
        </main>
        <footer />
      </>
    </div>
  );
};

export default Profile;
