import Link from "next/link";

interface ItemCardProps {
  imgLink: string;
  title: string;
  date: string;
  link: string;
}

const ItemCard: React.FC<ItemCardProps> = ({ imgLink, title, date, link }) => {
  return (
    <div className="grid__item">
      <div className="grid__item__imgcontainer">
        <Link href={link}>
          <img src={imgLink} alt="card" />
        </Link>
      </div>
      <div className="grid__item__description">
        <h1>{title}</h1>
        <p>{date}</p>
      </div>
    </div>
  );
};

export default ItemCard;
