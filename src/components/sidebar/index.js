import React from 'react';
import Types from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { logoutAction } from '../../actions/auth';

import {
  CloseIcon,
  SideWrapper,
  SideContainer,
  SideHeader,
  SideUser,
  ItemWrapper,
  SideUserLogo,
  SideUserTitle,
  SideItems,
  SideHeaderTitle,
  SideHeaderClose,
  BtnLogout,
  SideSearch,
} from './SideBar.styles';
import { Button } from '../buttons/Button.styles';
import { purgeEvents } from '../../actions/events';
import { useLocation } from 'react-router-dom';
import { sidebarData } from './data';
import SideItem from './SideItem';
import { VscSearch } from 'react-icons/vsc';

const Sidebar = ({ mobile = false, isOpen, setIsOpen }) => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const { user } = useSelector((state) => state.auth);

  const close = () => {
    setIsOpen(!isOpen);
  };

  const hLogout = () => {
    dispatch(purgeEvents());
    dispatch(logoutAction());
  };

  return (
    <SideContainer mobile={mobile} isOpen={isOpen}>
      <SideWrapper>
        <SideHeader>
          <SideHeaderTitle>
            <h1>MERN APP</h1>
            <small>TODO LIST</small>
          </SideHeaderTitle>
          <SideHeaderClose>
            <CloseIcon onClick={close} />
          </SideHeaderClose>
        </SideHeader>
        <SideUser>
          <ItemWrapper>
            <SideUserLogo>
              <h1>{user.name[0]}</h1>
            </SideUserLogo>
            <SideUserTitle>
              <p>{user.name}</p>
              <small>{user.email}</small>
            </SideUserTitle>
          </ItemWrapper>
          <SideSearch to="/home">
            <VscSearch />
          </SideSearch>
        </SideUser>
        <SideItems>
          {sidebarData.map((item) => (
            <SideItem key={item.id} {...item} pathname={pathname} />
          ))}
        </SideItems>
        <BtnLogout>
          <Button type="button" onClick={hLogout} big>
            logout
          </Button>
        </BtnLogout>
      </SideWrapper>
    </SideContainer>
  );
};

Sidebar.propTypes = {
  isOpen: Types.bool,
  setIsOpen: Types.func,
  mobile: Types.bool,
};

export default Sidebar;
