import styles from "./billing.module.scss";
import Sidebar from "./components/Sidebar/Sidebar";

const Billing = () => {
  return (
    <div className={styles["dashboard"]}>
      <Sidebar />
    </div>
  );
};

export default Billing;
