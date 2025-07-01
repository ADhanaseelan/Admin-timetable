import React, { useState } from 'react';
import { FiMenu, FiChevronDown, FiChevronUp } from 'react-icons/fi';
import '../styles/Sidebar.css';
import logo from '../assets/nandha logo (1).svg';

interface SidebarProps {
  setActivePage: (page: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ setActivePage }) => {
  const [open, setOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const toggleMenu = (menuName: string) => {
    setActiveMenu((prev) => (prev === menuName ? null : menuName));
  };

  const handleMenuClick = (page: string) => {
    setActivePage(page);
    setOpen(false);
    setActiveMenu(null);
  };

  return (
    <>
      <button
        className="sidebar-toggle"
        onClick={() => setOpen((prev) => !prev)}
        aria-label="Toggle sidebar"
      >
        <FiMenu size={28} color="#003366" />
      </button>
      <div className={`sidebar${open ? ' open' : ''}`}>
        <div className="sidebar-logo-wrapper">
          <img src={logo} alt="Nandha Logo" className="sidebar-logo" />
        </div>
        <div className="sidebar-menu">
          {/* Department Menu */}
          <div
            className={`menu-item${activeMenu === 'department' ? ' active' : ''}`}
            onClick={() => toggleMenu('department')}
          >
            <span>DEPARTMENT</span>
            {activeMenu === 'department' ? <FiChevronUp /> : <FiChevronDown />}
          </div>
          {activeMenu === 'department' && (
            <div className="submenu">
              <div className="submenu-item" onClick={() => handleMenuClick('Department')}>CREATE-DEPARTMENT</div>
            </div>
          )}

          {/* Subject Menu */}
          {/* <div
            className={`menu-item${activeMenu === 'subject' ? ' active' : ''}`}
            onClick={() => toggleMenu('subject')}
          >
            <span>SUBJECT</span>
            {activeMenu === 'subject' ? <FiChevronUp /> : <FiChevronDown />}
          </div>
          {activeMenu === 'subject' && (
            <div className="submenu">
              <div className="submenu-item" onClick={() => handleMenuClick('subject')}>ADD SUBJECT</div>
              <div className="submenu-item" onClick={() => handleMenuClick('viewSubject')}>VIEW SUBJECT</div>
            </div>
          )} */}

          {/* Static Menu Items */}
          {/* <div className="menu-item" onClick={() => handleMenuClick('Table')}>TIMETABLE</div> */}
          <div className="menu-item" onClick={() => handleMenuClick('viewTable')}>VIEW TABLE</div>

          {/* Request Menu */}
          {/* <div
            className={`menu-item${activeMenu === 'request' ? ' active' : ''}`}
            onClick={() => toggleMenu('request')}
          >
            <span>REQUEST</span>
            {activeMenu === 'request' ? <FiChevronUp /> : <FiChevronDown />}
          </div>
          {activeMenu === 'request' && (
            <div className="submenu">
              <div className="submenu-item" onClick={() => handleMenuClick('send')}>SEND</div>
              <div className="submenu-item" onClick={() => handleMenuClick('received')}>RECEIVED</div>
            </div>
          )} */}
        </div>
      </div>
    </>
  );
};

export default Sidebar;