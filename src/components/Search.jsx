import React from 'react'
import Navbar from './Navbar'

const Search = () => {
  return (
    <div>
        <Navbar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 xol-lg-12 xol-xl-12 col-xxl-12">
                            <label htmlFor="'" className="form-label">TASK</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 xol-lg-12 xol-xl-12 col-xxl-12">
                            <buton className="btn btn-success">SEARCH</buton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Search