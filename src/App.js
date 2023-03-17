import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserListingPage from './pages/UserListingPage/UserListingPage';
import UserDetailsPage from './pages/UserDetailsPage/UserDetailsPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<UserListingPage />} />
          <Route path="/users/:id" component={UserDetailsPage} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
