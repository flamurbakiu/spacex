import React from 'react';
import { useSelector } from 'react-redux';

function AboutCompany() {
  const companyData = useSelector((state) => state.company.companyData);

  console.log(companyData);

  return (
    <div>
      <h1>{companyData.name}</h1>
      <h1>{companyData.ceo}</h1>
      <h1>{companyData.founder}</h1>
      <h1>{companyData.summary}</h1>
    </div>
  );
}

export default AboutCompany;
