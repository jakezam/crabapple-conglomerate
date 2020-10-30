import React from 'react';

export default As => ({ forwardedRef, ...props }) => (
  <As ref={forwardedRef} {...props} />
);
