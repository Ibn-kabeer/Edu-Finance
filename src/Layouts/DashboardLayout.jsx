
import Sidepage from '../Components/Sidepage';
import { Outlet } from 'react-router-dom';

const DashboardLayout = () => {
  return (
    
    <div className="flex h-screen">
      <Sidepage />
      <div className="flex-grow overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;