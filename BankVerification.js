import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function BankVerification() {
  const [card, setCard] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (card.length === 16) {
      navigate('/national-card');
    } else {
      alert('شماره کارت نامعتبر است');
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>تأیید شماره کارت بانکی</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="شماره کارت ۱۶ رقمی"
          value={card}
          onChange={(e) => setCard(e.target.value)}
        />
        <button type="submit">تأیید کارت</button>
      </form>
      {card.length === 16 && (
        <div style={{ marginTop: 20 }}>
          <p>گیلدا مؤتمن زاده</p>
          <p>بانک رفاه</p>
        </div>
      )}
    </div>
  );
}
