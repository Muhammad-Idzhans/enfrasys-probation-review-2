"use client";


import { useRouter } from "next/navigation"

import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/reset.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
// import '@sweetalert2/theme-bootstrap-4/bootstrap-4.min.css';


interface HeaderProps {
    menuOpen: boolean;
    setMenuOpen: (open: boolean) => void;
}

export default function header({ menuOpen, setMenuOpen }: HeaderProps) {

    const router = useRouter();


    return (
        <div className="flex-grow-1 border-bottom" style={{ position: 'sticky', top: 0, zIndex: 1000 }}>
            <div className="d-flex align-items-center justify-content-between p-3 bg-white">
                <div className="d-flex align-items-center justify-content-center">
                    
                    <button className={`btn btn-outline-primary text-decoration-none p-1 mx-3 ms-2 menu-button ${menuOpen ? "open" : ""}`} onClick={() => setMenuOpen(!menuOpen)}>
                        <i className={`d-flex bi bi-list fs-4 cursor-pointer`} />
                    </button>

                    <div className="d-flex align-items-center ms-2">
                        <h5 className="medium p-0 m-0 d-none d-sm-block"><strong>Probation Review 2</strong></h5>
                    </div>
                </div>

            </div>
        </div>
    )
}