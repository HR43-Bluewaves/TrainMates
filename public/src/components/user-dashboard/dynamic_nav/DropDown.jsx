/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { motion, useCycle } from 'framer-motion';
import Avatar from '@material-ui/core/Avatar';
import DropDownStyle from './dropdown.module.css';

const Path = (props) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="currentColor"
    strokeLinecap="round"
    {...props}
  />
);

const MenuButton = ({ onClick, isOpen }) => (
  <motion.button
    className={DropDownStyle.menu_button}
    onClick={onClick}
    animate={isOpen ? 'open' : 'closed'}
    initial={false}
  >
    <svg
      width="23"
      height="23"
      style={{ margin: '4px 0 0 2px' }}
      viewBox="0 0 23 23"
    >
      <Path
        variants={{
          closed: { d: 'M 2 2.5 L 20 2.5' },
          open: { d: 'M 3 16.5 L 17 2.5' },
        }}
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        variants={{
          closed: { d: 'M 2 16.346 L 20 16.346' },
          open: { d: 'M 3 2.5 L 17 16.346' },
        }}
      />
    </svg>
  </motion.button>
);

const slideVerticalAnimation = {
  open: {
    rotateX: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
      mass: 0.8,
      type: 'spring',
    },
    display: 'block',
  },
  close: {
    rotateX: -15,
    y: -320,
    opacity: 0,
    transition: {
      duration: 0.3,
    },
    transitionEnd: {
      display: 'none',
    },
  },
};

const slideHorizontalAnimation = {
  rihgt: {
    x: 0,
    transition: {
      duration: 0.3,
    },
  },
  left: {
    x: -250,
    transition: {
      duration: 0.3,
    },
  },
};

const DropDown = () => {
  const [isOpen, toggleDropdown] = useCycle(false, true);
  const history = useHistory();
  const user = useSelector((state) => state.userReducer.user);

  const handleUser = () => {
    history.push('/user');
  };

  const handleLogOut = () => {
    history.push('/');
  };

  return (
    <div className={DropDownStyle.wrapper}>
      <MenuButton onClick={toggleDropdown} isOpen={isOpen} />
      <motion.div
        className={DropDownStyle.dropdown_container}
        initial="close"
        animate={isOpen ? 'open' : 'close'}
        variants={slideVerticalAnimation}
      >
        <motion.div
          className={DropDownStyle.dropdown}
          variants={slideHorizontalAnimation}
        >
          <motion.div className={`${DropDownStyle.menu} ${DropDownStyle.menu_sizes}`}>
            <div className={DropDownStyle.title}>
              <Avatar>
                {`${user.first_name.slice(0, 1)}${user.last_name.slice(0, 1)}`}
              </Avatar>
              <h4 className={DropDownStyle.title_text}>
                {user.first_name}
              </h4>
            </div>

            <ul className={DropDownStyle.item_list}>
              <li
                className={DropDownStyle.item}
                onClick={handleUser}
              >
                Profile
              </li>
              <li
                className={DropDownStyle.item}
                onClick={handleLogOut}
              >
                Logout
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default DropDown;
