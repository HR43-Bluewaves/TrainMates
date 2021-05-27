import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import style from '../../../dist/landing_test.module.css';

const PageThree = () => {
  const [ref, isVisible] = useInView({ threshold: 0 });
  const variantText = {
    visible: {
      opacity: 1,
      y: -100,
    },
    hidden: {
      opacity: 0,
      y: 100,
    },
  };
  return (
    <motion.div
      className={style.page_3}
    >
      <div className="container-fluid">
        <div className="row">
          <div className={`col-4 ${style.action_shot_title}`}>
            <div className={style.action_shot_tile_wrapper}>
              <h1>ACTION</h1>
              <h1>SHOTS</h1>
            </div>
          </div>
          <motion.div
            className={`col-8 row ${style.action_shot_pics}`}
          >
            <span className="col item_1" />
            <motion.span
              className={`col ${style.item_2}`}
              ref={ref}
              variants={variantText}
              animate={isVisible ? 'visible' : 'hidden'}
              transition={{ duration: 2, type: 'spring', bounce: 0.3 }}
            />
            <span className={`col ${style.item_3}`} />
            <motion.span
              className={`col ${style.item_4}`}
              ref={ref}
              variants={variantText}
              animate={isVisible ? 'visible' : 'hidden'}
              transition={{ duration: 2, type: 'spring', bounce: 0.6 }}
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default PageThree;
