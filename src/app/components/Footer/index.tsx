import React, { Component } from 'react';
const STYLE = {
  footerBackground: {
    backgroundColor: 'gray',
    flex: 1,
  },
};
export function Footer() {
  return (
    <>
      <footer style={STYLE.footerBackground}>
        <div className="ui container">Stuff to go in the footer</div>
      </footer>
    </>
  );
}
