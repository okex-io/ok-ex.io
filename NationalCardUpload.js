import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function NationalCardUpload() {
  const [file, setFile] = useState(null);
  const navigate = useNavigate();

  const handleUpload = (e) => {
    e.preventDefault();
    if (file) {
      setTimeout(() => {
        navigate('/dashboard');
      }, 2000); // شبیه‌سازی تاخیر بررسی کارت ملی
    } else {
      alert('لطفاً تصویر کارت ملی را آپلود کنید');
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>آپلود تصویر کارت ملی</h2>
      <form onSubmit={handleUpload}>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <button type="submit">ارسال</button>
      </form>
    </div>
  );
}
