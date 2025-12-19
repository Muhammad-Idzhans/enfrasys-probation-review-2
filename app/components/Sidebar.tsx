"use client";

import { useState } from 'react';
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { LaptopOutlined, NotificationOutlined, UserOutlined, DashboardOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';

import "./components.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/reset.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
// import '@sweetalert2/theme-bootstrap-4/bootstrap-4.min.css';

import Swal from 'sweetalert2';
import Image from 'next/image'
import Link from "next/link"
import React from "react";

const { Sider } = Layout;

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

interface SidebarProps {
  isOpen: boolean;
  onMenuClick?: () => void;
}

export default function Sidebar({ isOpen, onMenuClick }: SidebarProps) {
  const pathname = usePathname();

  // Handle menu item click - close sidebar on mobile
  const handleMenuClick = () => {
    if (typeof window !== 'undefined' && window.innerWidth <= 768 && onMenuClick) {
      onMenuClick();
    }
  };

  // Get the active menu key based on current pathname
  const getActiveKey = (): string[] => {
    // Map pathnames to menu keys
    const pathToKey: Record<string, string> = {
      '/introduction': 'introduction',
      '/evaluation-form': 'evaluation-form',
      '/client-related-work': 'client-related-work',
      '/self-discovery': 'self-discovery',
      '/work-challenges': 'work-challenges',
      '/experience-growth': 'experience-growth',
      '/what-next': 'what-next'
    };

    const key = pathToKey[pathname];
    return key ? [key] : ['dashboard'];
  };

  // Define the sidebar accessibility 
  const sidebarItems: MenuProps['items'] = [];

  sidebarItems.push({
    key: 'introduction',
    icon: <i className='bi bi-person'></i>,
    label: <Link href="/introduction" className="text-decoration-none">Introduction</Link>
  });
  sidebarItems.push({
    key: 'evaluation-form',
    icon: <i className='bi bi-file-earmark-text'></i>,
    label: <Link href="/evaluation-form" className="text-decoration-none">Evaluation Form</Link>
  });
  sidebarItems.push({
    key: 'client-related-work',
    icon: <i className='bi bi-briefcase-fill'></i>,
    label: <Link href="/client-related-work" className="text-decoration-none">Client Work</Link>
  });
  sidebarItems.push({
    key: 'self-discovery',
    icon: <i className='bi bi-search'></i>,
    label: <Link href="/self-discovery" className="text-decoration-none">Self Discovery</Link>
  });
  sidebarItems.push({
    key: 'work-challenges',
    icon: <i className='bi bi-exclamation-triangle-fill'></i>,
    label: <Link href="/work-challenges" className="text-decoration-none">Work Challenges</Link>
  });
  sidebarItems.push({
    key: 'experience-growth',
    icon: <i className='bi bi-graph-up-arrow'></i>,
    label: <Link href="/experience-growth" className="text-decoration-none">Experience & Growth</Link>
  });
  sidebarItems.push({
    key: 'what-next',
    icon: <i className='bi bi-rocket-takeoff-fill'></i>,
    label: <Link href="/what-next" className="text-decoration-none">What's Next</Link>
  });

  
  return (

    <div className={`${geistSans.variable} ${geistMono.variable} antialiased content-wrapper` }>
      <Sider trigger={null} collapsible width={290} className='' collapsed={!isOpen} collapsedWidth={0}
      style={{
          position: 'absolute',
          top: '0px',
          left: 0,
          bottom: 0,
          zIndex: 1040,
          transform: isOpen ? 'translateX(0)' : 'translateX(-100%)',
          pointerEvents: isOpen ? 'auto' : 'none',
        }}
      >
        <Menu
            mode="inline"
            selectedKeys={getActiveKey()}
            style={{ borderInlineEnd: 0 }}
            className='h-100 px-2'
            theme="dark"
            items={sidebarItems}
            onClick={handleMenuClick}
          />
      </Sider>
    </div>
  );
}

