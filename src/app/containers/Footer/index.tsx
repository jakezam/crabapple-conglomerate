/**
 *
 * Footer
 *
 */
import React, { memo } from 'react';

export const Footer = memo(() => {
  return (
    <>
      <div className="footer" style={{ textAlign: 'center', height: 150 }}>
        <div className="ui 3 column grid" style={{}}>
          <div className="column" style={{ width: '33%', textAlign: 'left' }}>
            <h1>inployd</h1>A better way to work
          </div>
          <div
            className="column"
            style={{ width: '33%', textAlign: 'left', padding: 'top' }}
          >
            <div className="ui list">
              <div className="item">
                <a href="www.google.com">Terms and Conditions</a>
              </div>
            </div>
            <div className="ui list">
              <div className="item">
                <a href="www.google.com">Privacy Policy</a>
              </div>
            </div>
          </div>
          <div className="column"></div>
        </div>
      </div>
    </>
  );
});
