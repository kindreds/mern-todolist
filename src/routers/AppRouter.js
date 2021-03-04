import React, { lazy, Suspense, useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
// Components
import Navbar from '../components/navbar';
import Loading from '../components/loading';
import Sidebar from '../components/sidebar';
import FormEvent from '../components/events/FormEvent';
import { AppContainer, AppWrapper } from '../components/app/App.styles';
// Pages
const Home = lazy(() => import('../pages/HomePage'));
const Today = lazy(() => import('../pages/TodayPage'));
const Calendar = lazy(() => import('../pages/CalendarPage'));
const Assigned = lazy(() => import('../pages/AssignedPage'));

const AppRouter = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Suspense fallback={Loading()}>
      <AppContainer>
        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
        <AppWrapper>
          <Navbar setIsOpen={setIsOpen} />
          <Switch>
            <Route exact path="/home" component={Home} />
            <Route exact path="/home/today" component={Today} />
            <Route exact path="/home/calendar" component={Calendar} />
            <Route exact path="/home/assigned" component={Assigned} />

            <Redirect to="/home" />
          </Switch>
          <FormEvent />
        </AppWrapper>
      </AppContainer>
    </Suspense>
  );
};

export default AppRouter;
