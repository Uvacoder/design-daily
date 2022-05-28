import Avatar from "../Avatar/Avatar";
import SidebarLinks from "../SidebarLinks/SidebarLinks";
import styles from "./Sidebar.module.scss";
const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <Avatar
        imgLink="https://picsum.photos/200"
        name="Ildiko Gaspar"
        username="igaspar"
      />
      <SidebarLinks />
    </div>
  );
};

export default Sidebar;
