import React from 'react';

export default function Dashboard() {
  const pricePerTether = 84125;
  const amount = 3000;
  const total = amount * pricePerTether;

  return (
    <div style={{ padding: 20 }}>
      <h2>پنل کاربری</h2>
      <p>شما فروش <strong>{amount}</strong> تتر را ثبت کردید.</p>
      <p>قیمت هر تتر: {pricePerTether.toLocaleString()} تومان</p>
      <p>مبلغ کل: {total.toLocaleString()} تومان</p>
      <p>مبلغ درخواستی در روز چهارشنبه ۱۱ تیر ماه ۱۴۰۴ به کیف پول داخلی شما واریز می‌شود.</p>
    </div>
  );
}
