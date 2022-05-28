import Image from "next/image";
import Link from "next/link";
import styles from "./SidebarLinks.module.scss";

const SidebarLinks = () => {
  return (
    <div className={styles.container}>
      <ul className={styles.sidebar__list}>
        <li className={styles.sidebar__list__link}>
          <Image
            height={32}
            width={32}
            src="/images/general.svg"
            alt="general"
          />
          <Link href="#">General</Link>
        </li>
        <li className={styles.sidebar__list__link}>
          <Image
            height={32}
            width={32}
            src="/images/password.svg"
            alt="password"
          />
          <Link href="#">Password</Link>
        </li>
        <li className={styles.sidebar__list__link}>
          <Image
            height={32}
            width={32}
            src="/images/invitations.svg"
            alt="invitations"
          />
          <Link href="#">Invitations</Link>
        </li>
        <li className={styles.sidebar__list__link}>
          <Image
            height={32}
            width={32}
            src="/images/billing.svg"
            alt="billing"
          />
          <Link href="#">Billing</Link>
        </li>
        <li className={styles.sidebar__list__link}>
          <Image height={32} width={32} src="/images/apps.svg" alt="apps" />
          <Link href="#">Apps</Link>
        </li>
      </ul>

      <button className={styles.sidebar__logout}>
        <Image height={32} width={32} src="/images/logout.svg" alt="apps" />
        <Link href="#">Log out</Link>
      </button>
    </div>
  );
};

export default SidebarLinks;
