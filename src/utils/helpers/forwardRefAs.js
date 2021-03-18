import React from 'react';

// eslint-disable-next-line react/prop-types
export default As => ({ forwardedRef, ...props }) => (
  <As ref={forwardedRef} {...props} />
);
