import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function MobileInput() {
  const [phone, setPhone] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (phone.length === 11) {
      navigate('/bank-verification');
    } else {
      alert('شماره موبایل نامعتبر است');
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>ورود شماره موبایل</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="tel"
          placeholder="مثلاً 09123456789"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <button type="submit">ادامه</button>
      </form>
    </div>
  );
}
