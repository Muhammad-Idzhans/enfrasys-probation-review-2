"use client";

import '../../globals.css';

export default function IntroductionPage() {

  return (
    <div className="">
        <div className="d-flex align-items-center justify-content-center">
            <div className="card px-4 w-75">
                <div className="card-body">
                  <h2 className="">Introduction</h2>
                  <h6 className='text-secondary text-lg mb-5'>Introduction of myself for today's probation review</h6>

                  <div className='row w-100 g-3 align-items-stretch'>
                    
                    {/* Name */}
                    <div className='col'>
                      <div className='card'>
                        <div className='card-header'>
                          <div className='d-flex justify-content-center mb-3'>
                            <i className='bi bi-person fs-2 text-primary'></i>
                          </div>  
                          <div className='d-flex justify-content-center mb-2'>
                            <h5 className='p-0 m-0'>Muhammad Idzhans Khairi</h5>
                          </div>
                          <div className='d-flex justify-content-center'>
                            <label className='p-0 m-0 text-secondary'>Solution Engineer</label>
                          </div>  
                        </div>
                      </div>
                    </div>
                    
                    {/* Start Date */}
                    <div className='col'>
                      <div className='card'>
                        <div className='card-header'>
                          <div className='d-flex justify-content-center mb-3'>
                            <i className='bi bi-calendar fs-2 text-primary'></i>
                          </div>  
                          <div className='d-flex justify-content-center mb-2'>
                            <h5 className='p-0 m-0'>Start Date</h5>
                          </div>
                          <div className='d-flex justify-content-center'>
                            <label className='p-0 m-0 text-secondary'>4th August 2025</label>
                          </div>   
                        </div>
                      </div>
                    </div>
                    
                    {/* Department */}
                    <div className='col'>
                      <div className='card'>
                        <div className='card-header'>
                          <div className='d-flex justify-content-center mb-3'>
                            <i className='bi bi-suitcase-lg fs-2 text-primary'></i>
                          </div>  
                          <div className='d-flex justify-content-center mb-2'>
                            <h5 className='p-0 m-0'>Department</h5>
                          </div>
                          <div className='d-flex justify-content-center'>
                            <label className='p-0 m-0 text-secondary'>ISD (Data & AI)</label>
                          </div>  
                        </div>
                      </div>
                    </div>
                    
                  </div>

                  <div className='mt-5'>
                    <h5>Training and Certification</h5>
                  </div>




                </div>
            </div>
        </div>
    </div>
  )
}
