"use client";

import '../../globals.css';

export default function ExperienceGrowthPage() {

    const logos = [
    '/images/logos/ant-design.png',
    '/images/logos/keycloak.png',
    '/images/logos/nextjs.png',
    '/images/logos/ant-charts-design.jpg',
    '/images/logos/ai-foundry.jpg',
    '/images/logos/r-shiny.png',
    '/images/logos/sweetalert.jpg',
    '/images/logos/bootstrap.png',
  ];

    return (
        <div className="">
            <div className="d-flex align-items-center justify-content-center">
                <div className="card px-4 w-75">
                    <div className="card-body">
                        <div className='d-flex align-items-center mb-2'>
                            <i className='bi bi-graph-up-arrow fs-3 me-3'></i>
                            <h2 className="p-0 m-0">Experience & Growth</h2>
                        </div>
                    
                        <h6 className='text-secondary text-lg mb-3'>Any experience and growth I have gained during my probation period.</h6>

                        <div className='mt-4 d-flex justify-content-center no-wrap gap-3 flex-nowrap overflow-auto'>
                            {logos.map((logo, idx) => (
                            <img key={idx} src={logo} alt={`logo-${idx}`} style={{ height: '50px', objectFit: 'contain' }} />
                            ))}
                        </div>

                        <div>
                            
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
