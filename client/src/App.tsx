import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/style.css';
import { Wrapper, MainWrapper } from './styles/styled';
import MainNav from './components/nav/MainNav';
import Header from './components/nav/Header';
import Main from './pages/Main';
import Community from './pages/Community';
import ShoppingMall from './pages/ShoppingMall';
import Users from './pages/Users';

function App() {
  return (
    <Router>
      <Wrapper>
        <Header />
        <MainWrapper>
          <MainNav />
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/community' element={<Community />} />
            <Route path='/shoppingmall' element={<ShoppingMall />} />
            <Route path='/users' element={<Users />} />
          </Routes>
        </MainWrapper>
      </Wrapper>
    </Router>
  );
}

export default App;
