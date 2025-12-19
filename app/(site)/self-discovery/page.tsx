"use client";

import '../../globals.css';
import './self-discovery.css';
import { Table } from 'antd';
import 'antd/dist/reset.css';

export default function SelfDiscoveryPage() {

  const dataSource = [
    {
      key: 'ant-design',
      image: <img src="/images/logos/ant-design.png" style={{ height: '50px', objectFit: 'contain' }} />,
      name: 'Ant Design',
      description: 'A React-based UI framework for building consistent, enterprise-grade interfaces with pre-designed components and design guidelines.',
    },
    {
      key: 'keycloak',
      image: <img src="/images/logos/keycloak.png" style={{ height: '50px', objectFit: 'contain' }} />,
      name: 'Keycloak',
      description: 'An open-source identity and access management system that handles authentication, authorization, and single sign-on for modern applications.',
    },
    {
      key: 'nextjs',
      image: <img src="/images/logos/nextjs.png" style={{ height: '50px', objectFit: 'contain' }} />,
      name: 'Next.js',
      description: 'A React framework that provides server-side rendering, static site generation, and other performance optimizations for building modern web applications.',
    },
    {
      key: 'ant-charts-design',
      image: <img src="/images/logos/ant-charts-design.jpg" style={{ height: '50px', objectFit: 'contain' }} />,
      name: 'Ant Charts Design',
      description: 'A data visualization library built on Ant Design, providing interactive charts and graphs that integrate seamlessly with enterprise applications.',
    },
    {
      key: 'ai-foundry',
      image: <img src="/images/logos/ai-foundry.jpg" style={{ height: '50px', objectFit: 'contain' }} />,
      name: 'AI Foundry',
      description: 'A generative AI platform from Azure for building AI-powered applications, including document generation, model deployment, and workflow automation.',
    },
    {
      key: 'r-shiny',
      image: <img src="/images/logos/r-shiny.png" style={{ height: '50px', objectFit: 'contain' }} />,
      name: 'R Shiny',
      description: 'An R package for building interactive web applications with R, allowing users to create dynamic dashboards and visualizations.',
    },
    {
      key: 'sweetalert',
      image: <img src="/images/logos/sweetalert.jpg" style={{ height: '50px', objectFit: 'contain' }} />,
      name: 'SweetAlert',
      description: 'A JavaScript library for creating beautiful, responsive, and customizable alert dialogs in web applications.',
    },
    {
      key: 'bootstrap',
      image: <img src="/images/logos/bootstrap.png" style={{ height: '50px', objectFit: 'contain' }} />,
      name: 'Bootstrap',
      description: 'A popular CSS framework for building responsive and mobile-first websites and web applications.',
    },
  ]

  const columns = [
    {
      key: 'image',
      title: 'Logo',
      dataIndex: 'image',
    },
    {
      key: 'name',
      title: 'Tool Name',
      dataIndex: 'name',
    },
    {
      key: 'description',
      title: 'Description',
      dataIndex: 'description',
    }
  ]

  return (
    <div className="">
        <div className="d-flex align-items-center justify-content-center">
            <div className="card px-4 w-75">
                <div className="card-body">

                  <div className='d-flex align-items-center mb-2'>
                    <i className='bi bi-search fs-3 me-3'></i>
                    <h2 className="p-0 m-0">Self Discovery</h2>
                  </div>

                  <h6 className='text-secondary text-lg mb-3'>Learning and experimenting with Microsoft and open-source tools solutions to broaden my knowledge and enhance my ability to solve future technical problems.</h6>
                  
                  {/* <div className='mt-4 d-flex justify-content-center no-wrap gap-3 flex-nowrap overflow-auto'>
                    {logos.map((logo, idx) => (
                      <img key={idx} src={logo} alt={`logo-${idx}`} style={{ height: '50px', objectFit: 'contain' }} />
                    ))}
                  </div> */}
                  <div className='mb-4'>
                    <Table columns={columns} dataSource={dataSource} />
                  </div>

                  <div>
                    
                  </div>


                </div>
            </div>
        </div>
    </div>
  )
}
