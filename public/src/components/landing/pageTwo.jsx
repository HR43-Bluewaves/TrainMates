import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import style from '../../../dist/landing_test.module.css';

const PageTwo = () => {
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
      className={style.page_2}
    >
      <div className="container">
        <div className="row">
          <motion.div
            className={`col ${style.story_left}`}
            ref={ref}
            variants={variantText}
            animate={isVisible ? 'visible' : 'hidden'}
            transition={{ duration: 2, type: 'spring', bounce: 0.3 }}
          >
            <h1>OUR</h1>
            <h1>STORY</h1>
          </motion.div>
          <div className={`col ${style.story_right}`}>
            <p>
              Lorem ipsum dolor sit amet,
              consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat. Duis aute irure dolor in reprehenderit
              in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
              laborum.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
export default PageTwo;
