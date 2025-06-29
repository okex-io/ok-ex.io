import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import MobileInput from './pages/MobileInput';
import BankVerification from './pages/BankVerification';
import NationalCardUpload from './pages/NationalCardUpload';
import Dashboard from './pages/Dashboard';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MobileInput />} />
      <Route path="/bank-verification" element={<BankVerification />} />
      <Route path="/national-card" element={<NationalCardUpload />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
