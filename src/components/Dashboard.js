import React, { useState } from 'react';
import Widget from './Widget';
import BarGraphWidget from './BarGraphWidget';
import AddWidgetModal from './AddWidgetModal';

const Dashboard = () => {
  // State variables
  const [showModal, setShowModal] = useState(false);
  const [selectedWidgets, setSelectedWidgets] = useState(['Cloud Accounts', 'Cloud Account Risk Assessment']);

  const widgets = [
    {
      title: 'Cloud Accounts',
      type: 'doughnut',
      data: {
        labels: ['Connected', 'Not Connected'],
        datasets: [
          {
            data: [2, 2],
            backgroundColor: ['#36A2EB', '#8ab1c2'],
            hoverBackgroundColor: ['#36A2EB', '#8ab1c2'],
          },
        ],
      },
    },
    {
      title: 'Cloud Account Risk Assessment',
      type: 'doughnut',
      data: {
        labels: ['Failed', 'Warning', 'Not available', 'Passed'],
        datasets: [
          {
            data: [1989, 681, 36, 7253],
            backgroundColor: ['#FF0000', '#FFCE56', '#E7E9ED', '#2f7819'],
            hoverBackgroundColor: ['#FF0000', '#FFCE56', '#E7E9ED', '#2f7819'],
          },
        ],
      },
    },
  ];

  const registryScanData = [
    { label: 'Critical', count: 9, percentage: 9 },
    { label: 'High', count: 150, percentage: 40 },
    { label: 'Medium', count: 100, percentage: 30 },
    { label: 'Low', count: 91, percentage: 21 },
  ];

  const imageSecurityData = [
    { label: 'Critical', count: 2, percentage: 50 },
    { label: 'High', count: 2, percentage: 50 },
  ];

  const handleAddWidgetClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="dashboard-container">
      <div className="top-bar">
        <div className="dashboard-title">
          <span className='home'>Home<span className='beside-one'> &gt;</span></span>DashboardV2
        </div>
        <div className="search-bell-container">
          <input type="text" placeholder="Search anything" className="search-bar" />
          <span className="bell-icon">🔔</span>
        </div>
      </div>
    
      
    

      <div className="cnapp-bar">
        <h2 className="cnapp-title">CNAPP Dashboard</h2>
        <button className="add-widget-btn3" onClick={handleAddWidgetClick}>
          Add Widget<span className='beside-btn'>+</span>
        </button>
        {/* Toolbar */}
        <div className="toolbar-container">
          
          
          {/* Dropdown Menu */}
          <div className="dropdown-container">
          <button className="toolbar-button">
            <span className="icon">🔄</span> {/* Replace with actual refresh icon */}
          </button>
          
          {/* Menu Button */}
          <button className="toolbar-button2">
            <span className="icon">⋮</span> {/* Replace with actual menu icon */}
          </button>
            <button className="dropdown-button">
              <span className="dropdown-icon">🕒</span> {/* Replace with actual clock icon */}
              Last 2 days
            </button>
          </div>
        </div>
      </div>

      <div className='cspm-bar'>
        <h2 className='cspm-dashboard'>CSPM Executive Dashboard</h2>
        <div className="dashboard">
          {widgets.map((widget, index) => (
            <Widget key={index} title={widget.title} data={widget.data} type={widget.type} className='widget-class'/>
          ))}
        
          <div className="blank-widget2">
            <button className="add-widget-btn" onClick={handleAddWidgetClick}>
              <span className='beside-btn'>+</span>Add Widget
            </button>
          </div>
        </div>  
      </div>

      

      <div className='cwpp-bar'>
        <h4 className='cwpp-dashboard'>CWPP Dashboard</h4>
        <div className="dashboard">
          <div className="widget blank-widget">
            <div className="widget-title">Top 5 Namespaces Specific Alters</div>
            <h6 className="add-widget-btn2">No Graph data available!</h6>
          </div>
          <div className="widget blank-widget">
            <div className="widget-title">Workload Alters</div>
            <h6 className="add-widget-btn2">No Graph data available!</h6>
          </div>
          <div className="widget blank-widget">
            <button className="add-widget-btn" onClick={handleAddWidgetClick}>
              <span className='beside-btn'>+</span>Add Widget
            </button>
          </div>
        </div>
      </div>

      

      <div className='cwpp-bar'>
        <h4 className='cwpp-dashboard'>Registry Scan</h4>
          <div className="registry-scan-container">
            <BarGraphWidget 
              title="Image Risk Assessment" 
              totalLabel="Total Vulnerabilities" 
              totalCount={1470} 
              data={registryScanData} 
            />
            <BarGraphWidget 
              title="Image Security Issues" 
              totalLabel="Total Images" 
              totalCount={2} 
              data={imageSecurityData} 
            />
            <div className="widget blank-widget">
              <button className="add-widget-btn" onClick={handleAddWidgetClick}>
                <span className='beside-btn'>+</span>Add Widget
              </button>
            </div>
          </div>
      </div>

      

      
      <AddWidgetModal
        show={showModal}
        onClose={handleCloseModal}
        selectedWidgets={selectedWidgets}
        setSelectedWidgets={setSelectedWidgets}
      />
    </div>
  );
};

export default Dashboard;
