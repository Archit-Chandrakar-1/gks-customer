import React from 'react';
import MyBookingCart from '@/components/myBookingCart/myBookingCart';
import Header1 from '@/components/headers/Header1';
import Footer1 from '@/components/footer/Footer1';

const MyBookingCartPage = () => {
  return (
    <>
      <Header1 />
      <MyBookingCart />
      <Footer1 />
    </>
  );
};

export default MyBookingCartPage;