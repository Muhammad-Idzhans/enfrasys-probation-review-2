"use client";

import '../../globals.css';

export default function EvaluationFormPage() {

  return (
    <div className="">
        <div className="d-flex align-items-center justify-content-center">
            <div className="card px-4 w-75">
                <div className="card-body">
                  <div className='d-flex align-items-center mb-2'>
                    <i className='bi bi-file-earmark-text fs-3 me-3'></i>
                    <h2 className="p-0 m-0">Evaluation Form</h2>
                  </div>
                  
                  <h6 className='text-secondary text-lg mb-3'>Enfrasys Probation Employee Evaluation Form</h6>

                  <div className='row w-100' style={{height: '70vh'}}>
                    <iframe className='' src='/media/evaluation-form.pdf#zoom70' />
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}
