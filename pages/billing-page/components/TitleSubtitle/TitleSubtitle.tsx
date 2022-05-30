import styles from "./TitleSubtitle.module.scss";

interface TitleSubtitleProps {
  title: string;
  subtitle: string;
}

const TitleSubtitle: React.FC<TitleSubtitleProps> = ({ title, subtitle }) => {
  return (
    <div className={styles.title__subtitle__container}>
      <h5>{title}</h5>
      <p>{subtitle}</p>
    </div>
  );
};

export default TitleSubtitle;
