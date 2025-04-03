import css from "./Item.module.css";

const Item = ({ foodItems, bought, onBuyButton }) => {
  return (
    <li className={`list-group-item mt-2 ${bought && "active"}`}>
      <span className={css.xSpan}>{foodItems}</span>
      <button
        className={`btn btn-success ${css.xButton}`}
        onClick={onBuyButton}
      >
        Buy
      </button>
    </li>
  );
};

export default Item;
