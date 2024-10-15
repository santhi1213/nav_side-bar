import React, { useState } from "react";

function App() {

  const [active, setActive] = useState('Home');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenTab = () => {
    setIsModalOpen(true);
  };

  const handleCloseTab = () => {
    setIsModalOpen(false);
  };

  function handleActive(item) {
    setActive(item);
  }

  return (
    <>
      <div style={{ display: 'flex' }}>
        <aside style={{ background: 'black', color: 'white', padding: '1rem', height: '100vh', width: '15%' }}>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '50px', listStyleType: 'none' }}>
            <li style={{ cursor: 'pointer' }} onClick={() => handleActive('Home')}>Home</li>
            <li style={{ cursor: 'pointer' }} onClick={() => handleActive('Profile')}>Profile</li>
            <li style={{ cursor: 'pointer' }} onClick={() => handleActive('Settings')}>Settings</li>
            <li style={{ cursor: 'pointer' }} onClick={() => handleActive('Dashboard')}>Dashboard</li>
          </ul>
        </aside>

        
        <main style={{ width: '80vw', padding: '1rem' }}>
          <nav style={{ background: 'gray', padding: '1rem', display: 'flex', justifyContent: 'space-between' }}>
            <h2>{active} Page</h2>
            {active === 'Home' && (
              <ul style={{ display: 'flex', listStyleType: 'none', gap: '30px' }}>
                <li style={{ cursor: 'pointer' }}>Home Details</li>
                <li style={{ cursor: 'pointer' }}>Home Overview</li>
              </ul>
            )}
            {active === 'Profile' && (
              <ul style={{ display: 'flex', listStyleType: 'none', gap: '30px' }}>
                <li style={{ cursor: 'pointer' }}>Profile Details</li>
                <li style={{ cursor: 'pointer' }}>Profile Overview</li>
              </ul>
            )}
            {active === 'Settings' && (
              <ul style={{ display: 'flex', listStyleType: 'none', gap: '30px' }}>
                <li style={{ cursor: 'pointer' }}>Settings Details</li>
                <li style={{ cursor: 'pointer' }}>Settings Overview</li>
              </ul>
            )}
            {active === 'Dashboard' && (
              <ul style={{ display: 'flex', listStyleType: 'none', gap: '30px' }}>
                <li style={{ cursor: 'pointer' }}>Dashboard Details</li>
                <li style={{ cursor: 'pointer' }}>Dashboard Overview</li>
              </ul>
            )}
          </nav>

         
          {isModalOpen && (
            <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', position: 'fixed', top: '0', left: '0', width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <div style={{ background: 'white', padding: '20px', borderRadius: '8px', width: '300px', textAlign: 'center' }}>
                <input type="text" placeholder="Input field 1" style={{ margin: '10px 0' }} />
                <input type="text" placeholder="Input field 2" style={{ margin: '10px 0' }} />
                <input type="text" placeholder="Input field 3" style={{ margin: '10px 0' }} />
                <button onClick={handleCloseTab}>Close</button>
              </div>
            </div>
          )}
        </main>
      </div>

     
      <div style={{ position: 'fixed', bottom: '20px', right: '20px' }}>
        <button onClick={handleOpenTab}>Open</button>
      </div>
    </>
  );
}

export default App;
