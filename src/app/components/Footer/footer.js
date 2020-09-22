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
      <link
        rel="stylesheet"
        type="text/css"
        href="semantic/dist/semantic.min.css"
      />
      <script
        src="https://code.jquery.com/jquery-3.1.1.min.js"
        integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8="
        crossorigin="anonymous"
      ></script>
      <script src="semantic/dist/semantic.min.js"></script>
      <footer style={STYLE.footerBackground}>
        <div class="ui vertical footer segment">Stuff to go in the footer</div>
      </footer>
    </>
  );
}
