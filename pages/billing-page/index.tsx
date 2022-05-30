import styles from "./index.module.scss";
import Sidebar from "./components/Sidebar/Sidebar";
import TitleSubtitle from "./components/TitleSubtitle/TitleSubtitle";
import PlanCard from "./components/PlanCard/PlanCard";
import Table from "./components/Table/Table";
import PaymentMethod from "./components/PaymentMethod/PaymentMethod";

const Billing = () => {
  return (
    <div className={styles.billing__page}>
      <Sidebar />
      <div className={styles.billing__page__dashboard}>
        <h1>Billing</h1>
        <div className={styles.billing__page__table}>
          <TitleSubtitle
            title={"Order History"}
            subtitle={"Manage billing information and view receips"}
          />
          <Table />
        </div>
        <PlanCard />
        <PaymentMethod />
      </div>
    </div>
  );
};

export default Billing;
