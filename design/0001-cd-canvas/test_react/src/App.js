import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './index.css';
import './App.css';
import WorkflowEditor from './WorkflowEditor';
import Login from './components/Login';

function App() {
  return (
    <Router>
      <div className="flex flex-col h-screen font-sans">
        <Routes>
          <Route path="/login" element={
            <main className="flex-grow flex flex-col pa4 bg-white">
              <Login />
            </main>
            } />
          <Route 
            path="/workflow" 
            element={
              <main className="flex-grow flex flex-col">
                <WorkflowEditor />
              </main>
            }
          />
          <Route path="/" element={<Navigate to="/login" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
