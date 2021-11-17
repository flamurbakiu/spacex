import React from 'react';
import { useSelector } from 'react-redux';
import { Fragment } from 'react';
import classes from './AboutCompany.module.css';

import elon from '../assets/elon.png';

function AboutCompany() {
  const companyData = useSelector((state) => state.company.companyData);

  return (
    <Fragment>
      <div className={classes.details}>
        <div className={classes.left}>
          <h2>Name: {companyData.name}</h2>
          <h2>CEO: {companyData.ceo}</h2>
          <p>{companyData.summary}</p>
        </div>
        <div className={classes.right}>
          <img src={elon} alt='Elon' className={classes.image} />
        </div>
      </div>
    </Fragment>
  );
}

export default AboutCompany;
