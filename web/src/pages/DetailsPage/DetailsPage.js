import { useStyletron } from 'baseui';
import React from 'react';
import CustomerDetails from './CustomerDetails';
import RestaurantDetails from './RestaurantDetails';
import withAuth from '../AuthPage/withAuth';
import getLoginDetails from '../../utils/getLoginDetails';

const DetailsPage = ({ update }) => {
  const [css, theme] = useStyletron();
  const container = css({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    margin: '50px',
    width: '80vw',
  });

  const loginDetails = getLoginDetails();

  return (
    <div className={container}>
      <a href={update ? (loginDetails.role == 'customer' ? '/restaurants' : '/dashboard') : '#'}>
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1052 170" height="48" width="200">
            <path
              d="M787.3 105.2c0-21-16.8-37.5-38-37.5-20.9 0-38 16.5-38 37.5s17.1 37.5 38 37.5c21.2 0 38-16.5 38-37.5m31-61.4v122.9h-31.6v-11.1c-11 9.1-24.9 14.2-40 14.2-37.4 0-66.6-28.7-66.6-64.6 0-35.8 29.3-64.6 66.6-64.6 15.1 0 29 5.1 40 14.2v-11h31.6zm105 95h-23.8c-7.2 0-11.9-3.1-11.9-9.7V71.6h35.6V43.8h-35.6v-35h-31.9v35h-24v27.9h24V137c0 16.5 11.9 29.6 33.3 29.6h34.2v-27.8zm72 31c36.5 0 57.1-17.1 57.1-40.7 0-16.8-12.2-29.3-37.7-34.7l-27-5.4c-15.6-2.8-20.6-5.7-20.6-11.4 0-7.4 7.5-11.9 21.4-11.9 15.1 0 26.1 4 29.3 17.6h31.6c-1.7-25.6-20.6-42.7-58.8-42.7-33 0-56.2 13.4-56.2 39.3 0 17.9 12.8 29.6 40.3 35.3l30.1 6.8c11.9 2.3 15.1 5.4 15.1 10.2 0 7.7-9 12.5-23.5 12.5-18.2 0-28.7-4-32.7-17.6h-31.9c4.7 25.6 24.1 42.7 63.5 42.7M552.6.2h119.1v28.4h-86.9v40.7h84.6v27.6h-84.6v41.2h86.9v28.4H552.6V.2z"
              fill="#06c167"
            />
            <path
              d="M496 66.7V44.4h-8.5c-13.5 0-23.5 6.2-29.5 15.9v-15h-24.2v121.1h24.4V97.6c0-18.8 11.6-30.9 27.6-30.9H496zm-175.6 28c4.4-18.5 19.6-30.9 37.7-30.9s33.4 12.3 37.5 30.9h-75.2zM358.6 43c-36 0-63.4 28.7-63.4 62.9 0 36.1 28.5 63.2 65.6 63.2 22.5 0 40.9-9.7 53.2-25.9l-17.7-12.8c-9.2 12.1-21.3 17.8-35.6 17.8-20.8 0-37.5-14.7-40.9-34.4h100.4V106c.1-36.2-26-63-61.6-63M219 148.2c-23.7 0-42.6-18.8-42.6-42 0-23.5 19.1-42 42.6-42 23.2 0 42.3 18.5 42.3 42 .1 23.2-19 42-42.3 42m-66.5 18.3h24.2v-15.2c11.1 11.2 26.9 18 44 18 36.3 0 64.8-28.3 64.8-63.2 0-35.1-28.5-63.4-64.8-63.4-17.2 0-32.7 6.9-43.8 18V.2h-24.4v166.3zM66.6 147c23.5 0 41.6-17.8 41.6-44.2V.2h25.4v166.2h-25.2V151c-11.4 11.6-27.1 18.3-44.8 18.3-36.3 0-64.1-25.9-64.1-65.1V.2H25v102.6c0 26.9 17.9 44.2 41.6 44.2"
              fill="#142328"
            />
          </svg>
        </div>
      </a>
      {loginDetails.role === 'customer' ? (
        <CustomerDetails loginDetails={loginDetails} update={update} />
      ) : (
        <RestaurantDetails loginDetails={loginDetails} update={update} />
      )}
    </div>
  );
};

export default withAuth(DetailsPage, 'any');