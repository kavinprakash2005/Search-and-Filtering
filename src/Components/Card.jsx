
import { IoBagHandle } from "react-icons/io5";

function Card({ img, title, star, reviews, price,Storage }) {
  return (
    <section className="card">
      <img
        src={img}
        alt={title}
        className="card-img"
      />
      <div className="card-details">
        <h3 className="card-title">
          {title}
        </h3>
        <h2 className="storage-section">{Storage}</h2>
        <section className="card-reviews">
          {star}  {star}  {star}  {star}
          <span className="total-reviews">
            {reviews}

          </span>
        </section>
        <section className="card-price">
          <div className="price">
            {price}
          </div>
          <div className="bag">
            <IoBagHandle className="bag-icon" />
          </div>
        </section>
      </div>
    </section>
  )
}
export default Card;
