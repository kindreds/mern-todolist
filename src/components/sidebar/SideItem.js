import React from 'react';
import Types from 'prop-types';
import { SideIcon, SideLink, Title } from './SideBar.styles';

const SideItem = ({ pathname, Icon, title, path, color }) => {
  const validPath = () => (pathname === path ? 1 : 0);
  return (
    <SideLink activo={validPath()} to={path}>
      <SideIcon color={color}>
        <Icon />
      </SideIcon>
      <Title>{title}</Title>
    </SideLink>
  );
};

SideItem.propTypes = {
  pathname: Types.string.isRequired,
  title: Types.string.isRequired,
  color: Types.string.isRequired,
  path: Types.string.isRequired,
  Icon: Types.func.isRequired,
};

export default SideItem;
