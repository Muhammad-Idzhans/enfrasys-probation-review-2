"use client";

import '../../globals.css';
import { Menu } from 'antd';
import type { MenuProps } from 'antd';
import { Badge } from 'antd';
import { useState } from 'react';
import Image from 'next/image';

export default function ClientRelatedWorkPage() {

  type MenuItems = Required<MenuProps>['items'][number];

  const items: MenuItems[] = [
    {
      label: 'Task',
      key: 'task',
      icon: <i className="bi bi-clipboard-check"></i>
    },
    {
      label: 'Architecture',
      key: 'architecture',
      icon: <i className="bi bi-diagram-2-fill"></i>
    },
    {
      label: 'Source Document',
      key: 'source-document',
      icon: <i className="bi bi-file-text-fill"></i>
    },
    {
      label: 'Generated Document',
      key: 'generated-document',
      icon: <i className="bi bi-file-check-fill"></i>
    },
  ]

  const [current, setCurrent] = useState('task');

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  return (
    <div className="">
        <div className="d-flex align-items-center justify-content-center">
            <div className="card px-4 w-75">
                <div className="card-body">
                  {/* Title and sub-title */}
                  <div className='mb-4'>
                    <div className='d-flex align-items-center mb-2'>
                      <i className='bi bi-briefcase fs-3 me-3'></i>
                      <h2 className="p-0 m-0">Client Related Work</h2>
                    </div>
                    
                    <h6 className='text-secondary text-lg mb-3'>Any works / projects that is related to clients.</h6>
                  </div>

                  <div>
                    <Menu onClick={onClick} selectedKeys={[current]} mode='horizontal' items={items}/>
                  </div>

                  <div className='mx-3 mb-4'>
                    {current === 'task' && (
                      <div className='mt-4'>
                        <div className='row'>
                          <div className='d-flex justify-content-end mb-3'>
                            <Badge status='processing' count="Still in Proof of Concept"/>
                          </div>

                          <div className='col-4 d-flex align-items-center justify-content-center'>
                            <img src="/images/jpph_logo.png" className='w-50'/>
                          </div>
                          <div className='col-8'>

                            <div className='card mb-4'>
                              <div className='card-header'>
                                <h5 className='p-0 m-0'>Aim of The Project</h5>
                              </div>
                              <div className='card-body'>
                                <p className='p-0 m-0'>To leverage Azure AI Foundry to generate JPPH reports, following their template without making any changes to the template.</p>
                              </div>
                            </div>

                            <div className='card'>
                              <div className='card-header'>
                                <h5 className='p-0 m-0 text-justify'>Background & Solution</h5>
                              </div>
                              <div className='card-body'>
                                <p className='p-0 m-0 text-justify'>
                                  NAPIC, also known as the National Property Information Centre, releases their Laporan Stok Harta Tanah periodically. These reports were previously typed manually every time a new report was created.<br/><br/>

                                  Zainal Asyraf approached me to explore whether we could use Azure AI Foundry to generate these reports while keeping the exact template. Since the AI model alone couldn’t produce a full report with strict formatting, I designed a solution where the AI handles writing, translation, and generating the HTML version of the report. This content is then converted to PDF and finally to Word for any further editing.<br/><br/>

                                  The application is built using Python Flask and deployed on Azure Web App.

                                </p>
                              </div>
                            </div>

                          </div>
                        </div>
                      </div>
                    )}
                    {current === 'architecture' && (
                      <div className='mt-4'>
                        <p>Details about the architecture related to JPPH Report Generator.</p>
                        <img src="/images/jpph-workflow.png" className='w-100 border'/>
                      </div>
                    )}
                    {current === 'source-document' && (
                      <div className='mt-4'>
                        <div className='row w-100' style={{height: '70vh'}}>
                          <iframe className='' src='/media/jpph-source-report.pdf#zoom70' />
                        </div>
                      </div>
                    )}
                    {current === 'generated-document' && (
                      <div className='mt-4'>
                        <div className='row w-100' style={{height: '70vh'}}>
                          <iframe className='' src='/media/jpph-generated-report.pdf#zoom70' />
                        </div>
                      </div>
                    )}
                  </div>
                  
                  

                </div>
            </div>
        </div>
    </div>
  )
}
