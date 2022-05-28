import Image from "next/image";
import styles from "./Avatar.module.scss";

interface AvatarProps {
  imgLink: string;
  name: string;
  username: string;
}

const Avatar: React.FC<AvatarProps> = ({ imgLink, name, username }) => {
  return (
    <div className={styles.sidebar__avatar}>
      <Image src={imgLink} alt="avatar" height={"55px"} width={"55px"} />
      <div className={styles.sidebar__avatar__name}>
        <h1>{name}</h1>
        <p>
          <span>@</span>
          {username}
        </p>
      </div>
    </div>
  );
};

export default Avatar;
