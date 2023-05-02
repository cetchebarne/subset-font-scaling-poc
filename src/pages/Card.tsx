import styles from "@/styles/Card.module.scss";
import { FC } from "react";

const Card: FC<{ heading?: "h1" | "h3" | "h4" }> = ({
  heading: Tag = "h1",
}) => {
  return (
    <div className={styles.Card}>
      <Tag>The quick brown fox jumps over the lazy dog</Tag>
      <div className={styles.Card__body}>
        Container queries are a proposed new feature for CSS that would allow
        styles to adapt based on the size of a containing element, rather than
        just the size of the viewport.
      </div>
      <div className={styles.Card__buttons}>
        <button>Buy now</button>
        <button className="secondary">Learn more</button>
      </div>
    </div>
  );
};

export default Card;
