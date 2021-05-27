import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import style from '../../../dist/landing_test.module.css';

const PageFour = ({ handleSignUp }) => {
  const [ref, isVisible] = useInView({ threshold: 0.5 });
  const variantText = {
    visible: {
      opacity: 1,
      y: 0,
    },
    hidden: {
      opacity: 0,
      y: 100,
    },
  };
  return (
    <motion.div
      className={style.page_4}
      ref={ref}
      variants={variantText}
      animate={isVisible ? 'visible' : 'hidden'}
      transition={{ duration: 2, type: 'spring', bounce: 0.6 }}>
      <div className={style.sign_up_logo} />
      <button className={style.sign_up_bottom} id="sign_up_bottom" type="submit" onClick={handleSignUp}>SIGN UP</button>
    </motion.div>
  )
}

export default PageFour;