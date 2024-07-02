import React, { Component } from 'react';

import './Footer.scss';

export default function Footer(props) {
  return (
    <footer>
      <p>
        Based on the <a href="https://docs.google.com/document/d/1kT3cORO7thcsnxQetEajmcVn-p-W9KUesxJzx_ZVN9g/edit">
        Free for All v0.2.0</a> ruleset.
      </p>
      <p>
        Created by <a href="https://sinclairtarget.com">Sinclair Target</a>.
		Modified by <a href="https://erikdudek.com">Erik Dudek</a>
      </p>
      <a href="https://github.com/sinclairtarget/axis-and-allies-calculator">
        <img src="/images/github.svg" />
      </a>
    </footer>
  );
}
