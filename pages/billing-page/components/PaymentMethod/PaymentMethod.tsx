import Image from "next/image";
import TitleSubtitle from "../TitleSubtitle/TitleSubtitle";
import styles from "./PaymentMethod.module.scss";

const PaymentMethod = () => {
  return (
    <div className={styles.payment_method__container}>
      <TitleSubtitle
        title="Payment Method"
        subtitle="Manage billing information and view receips"
      />
      <div className={styles.payment_method__display}>
        <div className={styles.payment_method__imglabel}>
          <Image
            src="/images/billing-page/visa.png"
            alt="visa"
            height={58}
            width={87}
          />
          Visa ending in 2255
        </div>
        <button>Remove</button>
      </div>
    </div>
  );
};

export default PaymentMethod;
