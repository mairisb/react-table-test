import styles from "./child.module.scss";

export const Child: React.FC = () => {
  return (
    <div className={styles.childComponent}>
      <p>Child Component</p>
      <p className="test-class">example text</p>
    </div>
  );
};
