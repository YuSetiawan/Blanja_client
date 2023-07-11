import React from 'react';
import bigProfile from '../../assets/img/Big-profile.png';

const CustProfile = () => {
  return (
    <div className="tab-pane fade show active" id="list-home" role="tabpanel" aria-labelledby="list-home-list">
      <div className="container ml-3">
        <div className="card pl-3">
          <div className="card-body">
            <div className="pt-3 border-bottom">
              <h3>My profile</h3>
              <p className="text-secondary">Manage your profile information</p>
            </div>
            {/* Left Profile */}
            <div className="row pt-5">
              <div className="col-md-8 col 12">
                <div className="form-group row">
                  <label htmlFor="inputName" className="col-sm-3 col-form-label text-secondary">
                    Name
                  </label>
                  <div className="col-sm-9">
                    <input type="email" className="form-control" id="inputName" placeholder="Johanes Mikael" />
                  </div>
                </div>
                <div className="form-group row mt-4">
                  <label htmlFor="inputEmail" className="col-sm-3 col-form-label text-secondary">
                    Email
                  </label>
                  <div className="col-sm-9">
                    <input type="email" className="form-control" id="inputEmail" placeholder="johanes@gmail.com" />
                  </div>
                </div>
                <div className="form-group row mt-4">
                  <label htmlFor="inputPhone" className="col-sm-3 col-form-label text-secondary">
                    Phone number
                  </label>
                  <div className="col-sm-9">
                    <input type="email" className="form-control" id="inputPhone" placeholder="08901289012" />
                  </div>
                </div>
                <fieldset className="form-group row mt-4">
                  <legend className="col-form-label col-sm-3 float-sm-left pt-0 text-secondary">Gender</legend>
                  <div className="col-sm-9">
                    <div className="row pl-3">
                      <div className="form-check col-sm-3">
                        <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" defaultValue="option1" defaultChecked="" />
                        <label className="form-check-label text-secondary" htmlFor="gridRadios1">
                          {' '}
                          Male{' '}
                        </label>
                      </div>
                      <div className="form-check col-sm-3">
                        <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" defaultValue="option2" />
                        <label className="form-check-label text-secondary" htmlFor="gridRadios2">
                          {' '}
                          Female{' '}
                        </label>
                      </div>
                    </div>
                  </div>
                </fieldset>
                <div className="form-group row mt-4">
                  <label className="col-sm-3 col-form-label text-secondary">Date of birth</label>
                  <div className="col-sm-9 pl-4 row">
                    <select className="custom-select col-3 ml-1 mr-2">
                      <option selected="">1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                      <option>6</option>
                      <option>7</option>
                      <option>8</option>
                      <option>9</option>
                      <option>10</option>
                      <option>11</option>
                      <option>12</option>
                      <option>13</option>
                      <option>14</option>
                      <option>15</option>
                      <option>16</option>
                      <option>17</option>
                      <option>18</option>
                      <option>19</option>
                      <option>20</option>
                      <option>21</option>
                      <option>22</option>
                      <option>23</option>
                      <option>24</option>
                      <option>25</option>
                      <option>26</option>
                      <option>27</option>
                      <option>28</option>
                      <option>29</option>
                      <option>30</option>
                      <option>31</option>
                    </select>
                    <select className="custom-select col-3 mr-2">
                      <option selected="">January</option>
                      <option value={1}>February</option>
                      <option value={2}>March</option>
                      <option value={3}>April</option>
                      <option value={4}>May</option>
                      <option value={5}>June</option>
                      <option value={6}>July</option>
                      <option value={7}>August</option>
                      <option value={8}>September</option>
                      <option value={9}>October</option>
                      <option value={10}>November</option>
                      <option value={11}>December</option>
                    </select>
                    <select className="custom-select col-3 mr-2">
                      <option selected="">1990</option>
                      <option>1991</option>
                      <option>1992</option>
                      <option>1993</option>
                      <option>1994</option>
                      <option>1995</option>
                      <option>1996</option>
                      <option>1997</option>
                      <option>1998</option>
                      <option>1999</option>
                      <option>2000</option>
                      <option>2001</option>
                      <option>2002</option>
                      <option>2003</option>
                      <option>2004</option>
                      <option>2005</option>
                      <option>2006</option>
                      <option>2007</option>
                    </select>
                  </div>
                </div>
              </div>
              {/* Right Profile */}
              <div className="col-md-3 border-left">
                <img className="pl-5 mb-3" src={bigProfile} alt="" />
                <button type="button" className="btn btn-outline-secondary rounded-pill ml-5" style={{width: 'fit-content'}}>
                  Select image
                </button>
              </div>
              <div className="col-sm-2" />
              <div className="col-sm-2 mt-3">
                <button type="button" className="btn btn-danger rounded-pill w-100" style={{width: 'fit-content'}}>
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustProfile;
