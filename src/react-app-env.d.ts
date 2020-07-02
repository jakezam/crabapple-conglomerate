/// <reference types="react-scripts" />

// To solve the issue: https://github.com/DefinitelyTyped/DefinitelyTyped/issues/31245
/// <reference types="styled-components/cssprop" />

declare module '*.scss' {
  export const content: { [className: string]: string };
  export default content;
}