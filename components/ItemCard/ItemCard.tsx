import Link from "next/link";

interface ItemCardProps {
  imgLink: string;
  title: string;
  date: string;
  link: string;
}

const ItemCard: React.FC<ItemCardProps> = ({ imgLink, title, date, link }) => {
  return (
    <Link href={link}>
      <div className="grid__item">
        <div className="grid__item__imgcontainer">
          <img src={imgLink} alt="card" />
        </div>
        <div className="grid__item__description">
          <h1>{title}</h1>
          <p>{date}</p>
        </div>
      </div>
    </Link>
  );
};

export default ItemCard;
