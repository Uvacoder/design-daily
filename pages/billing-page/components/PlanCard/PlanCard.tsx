import styles from "./PlanCard.module.scss";

const PlanCard = () => {
  return (
    <div className={styles.plancard}>
      <h5>Your plan</h5>
      <h1>Pro Annual</h1>
      <p>Renews on Nov, 2021</p>
      <button>Cancel subscription</button>
    </div>
  );
};

export default PlanCard;
