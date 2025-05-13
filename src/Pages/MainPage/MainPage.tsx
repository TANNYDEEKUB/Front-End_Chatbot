import React, { useEffect, useState } from 'react';
import ChatBotWindow from '../../Components/ChatBotWindow';
import { Navbar } from '../../Components/NavBar';
import { useNavigate } from 'react-router-dom';
import './MainPage_styles.css';

const MainPage: React.FC = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    // ตรวจสอบ storedtoken ใน localStorage เพื่อดูว่าผู้ใช้ล็อกอินแล้วหรือไม่
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      setIsLoggedIn(true);
      setToken(storedToken);
    }
  }, []);

  const handleStartNow = () => {
    navigate('/home');
  };

  const handleLogin = () => {
    navigate('/login');
  };

  return (
    <>
     <Navbar isAuthenticated={isLoggedIn} onLogout={() => {
      localStorage.removeItem('token');
      setIsLoggedIn(false);
      navigate('/');
    }} />

    <div className="main-page">
      <h1>Get answers to rules and processes within academic position equivalency quickly and easily.</h1>
      <p>Just ask the chatbot and wait for your response.</p>
      
      <div className="button-container">
        <button className="main-button" onClick={handleStartNow}>Start now</button>
        {/* แสดงปุ่มเข้าสู่ระบบเฉพาะเมื่อผู้ใช้ยังไม่ได้ล็อกอิน */}
        {!isLoggedIn && <button className="secondary-button" onClick={handleLogin}>เข้าสู่ระบบ</button>}
      </div>
      
      {/* เรียกใช้ ChatBotWindow เพียงครั้งเดียว */}
      <ChatBotWindow token={token}/>
    </div>
    </>
  );
};

export default MainPage;
