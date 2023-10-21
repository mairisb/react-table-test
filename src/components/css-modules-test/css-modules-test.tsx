import styles from "./css-modules-test.module.scss";

export const CssModulesTest: React.FC = () => {
  return (
    <div
      className={`${styles["child-component"]} ${styles["child-component--modifier"]}`}
    >
      <p>Child component</p>
      <p className={styles["child-component__element"]}>
        Element of Child component
      </p>
      <p className="test-class">Global style inside Child component</p>
    </div>
  );
};
