import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Monthly.css';
import Bank from './Banks'; 


export default function DonateMonthly() {



  return (
   <>
   <div className="container mt-5">
          <h1>Selecteer uw bank</h1>
          <Bank/>
   </div>
   </>
  );
}