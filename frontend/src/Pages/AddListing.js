import React, { useState } from 'react'

const AddListing = () => {
  const [form, setForm] = useState({
                            title: '',
                            location: '',
                            lat: '',
                            long: '',
                            type: '',
                            desc: '',
                            numGuests: '',
                            rate: '',
                            rating: '',
                            photos: '',
                            hostName: '',
                            about: '',
                            hostPhoto: '',
                            superHost: false
                          });
  
  const handleChange = (e) => {
    setForm({...form, [e.target.id]: e.target.value})
  }

  const handleSubmit = () => {
    console.log(form)
  }

  return (
    <div className="abnb-list-container abnb-list-main-cont">
      <h1 className="listing-title" style={{fontSize:'20pt'}}>Add your listing</h1>
      <div className="abnb-form mt-5">
        <div className="form-block">
          <div className="d-flex input-surround">
            <div className="form-title">Title</div>
            <div className="form-input">
              <input type="text" onChange={handleChange} value={form.title} id="title" placeholder="Oceanfront Laguna property ..." />
            </div>
          </div>
        </div>
        <div className="form-block">
          <div className="d-flex input-surround">
            <div className="form-title">Location</div>
            <div className="form-input">
              <input type="text" onChange={handleChange} value={form.location} id="location" placeholder="Laguna Beach, California, United States" />
            </div>
          </div>
        </div>
        <div className="form-block">
          <div className="d-flex input-surround">
            <div className="form-title">Latitude</div>
            <div className="form-input">
              <input type="text" onChange={handleChange} value={form.lat} id="lat" />
            </div>
          </div>
        </div>
        <div className="form-block">
          <div className="d-flex input-surround">
            <div className="form-title">Longitude</div>
            <div className="form-input">
              <input type="text" onChange={handleChange} value={form.long} id="long" />
            </div>
          </div>
        </div>
        <div className="form-block">
          <div className="d-flex input-surround">
            <div className="form-title">Listing type</div>
            <div className="form-input">
              <input type="text" onChange={handleChange} value={form.type} id="type" placeholder="Entire home ..." />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="form-block w-100">
          <div className="d-flex input-surround">
            <div className="form-title">Description</div>
            <div className="form-input"><textarea onChange={handleChange} value={form.desc} id="desc" className="abnb-desc" /></div>
          </div>
        </div>
      </div>
      <div className="abnb-form">
        <div className="form-block">
          <div className="d-flex input-surround">
            <div className="form-title">Number of guests</div>
            <div className="form-input">
              <input type="text" onChange={handleChange} value={form.numGuests} id="numGuests" placeholder="" />
            </div>
          </div>
        </div>
        <div className="form-block">
          <div className="d-flex input-surround">
            <div className="form-title">Nightly rate</div>
            <div className="form-input">
              <input type="text" onChange={handleChange} value={form.rate} id="rate" placeholder="" />
            </div>
          </div>
        </div>
        <div className="form-block">
          <div className="d-flex input-surround">
            <div className="form-title"><i className="fa fa-star"></i> &nbsp; Rating</div>
            <div className="form-input">
              <input type="text" onChange={handleChange} value={form.rating} id="rating" placeholder="" />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="form-block w-100">
          <div className="d-flex input-surround">
            <div className="form-title">Photos</div>
            <div className="form-input"><textarea onChange={handleChange} value={form.photos} id="photos" className="abnb-desc" /></div>
          </div>
        </div>
      </div>
      <div className="abnb-form">
        <div className="form-block">
          <div className="d-flex input-surround">
            <div className="form-title">Host name</div>
            <div className="form-input">
              <input type="text" onChange={handleChange} value={form.hostName} id="hostName" placeholder="" />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="form-block w-100">
          <div className="d-flex input-surround">
            <div className="form-title">About</div>
            <div className="form-input"><textarea onChange={handleChange} value={form.about} id="about" className="abnb-desc" /></div>
          </div>
        </div>
      </div>
      <div className="abnb-form">
        <div className="form-block">
          <div className="d-flex input-surround">
            <div className="form-title">Photo</div>
            <div className="form-input">
              <input type="text" onChange={handleChange} value={form.hostPhoto} id="hostPhoto" placeholder="" />
            </div>
          </div>
        </div>
        <div className="form-block">
          <div className="d-flex input-surround">
            <div className="form-title">Super host:</div>
            <div className="form-input">
              <select onChange={handleChange} value={form.superHost} id="superHost">
                <option value={true}>Yes</option>
                <option value={false}>No</option>
              </select>
            </div>
          </div>
        </div>
        <div className="w-100 pr-5 text-right">
          <button type="submit" className="abnb-reserve-btn" style={{width:'fit-content'}} onClick={handleSubmit}>Submit your listing</button>
        </div>
     </div>
    </div>
  )
}

export default AddListing
