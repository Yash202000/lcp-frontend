import React from 'react';
import { ComplexNavbar } from './StickyNavbar';
import { Link } from 'react-router-dom';


interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex">
      <div className="flex-grow">
        <ComplexNavbar />
        <main className="p-4">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
