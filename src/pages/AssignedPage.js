import React from 'react';
import { useSelector } from 'react-redux';

import Events from '../components/events';

const AssignedPage = () => {
  const { assigned: eventsAssigned } = useSelector((state) => state.events);

  return <Events events={eventsAssigned} assigned />;
};

export default AssignedPage;
