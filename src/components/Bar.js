import React from 'react';
import { motion } from 'framer-motion';

const Bar = ({ value, index, highlighted }) => {
  return (
    <motion.div
      className="bar"
      style={{
        height: `${value}%`,
        backgroundColor: highlighted ? 'red' : 'blue',
      }}
      layout
    />
  );
};

export default Bar;
