import { css } from 'lit-element';

export default css`
:host {
  display: inline-block;
  box-sizing: border-box; }

:host([hidden]), [hidden] {
  display: none !important; }

*, *:before, *:after {
  box-sizing: inherit;
  font-family: inherit; }

paper-card {
  --paper-card-background-color: green;
  --paper-card-header-image: {
    width: 100px;
    height: 100px;
  }; }
`;
