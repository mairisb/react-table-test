export type Styles = {
  'child-component': string;
  'child-component__element': string;
  'child-component--modifier': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
