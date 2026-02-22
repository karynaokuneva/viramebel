import styles from "./PlaceholderImage.module.css";

type Props = {
  label?: string;
  height?: number;
};

export function PlaceholderImage({
  label = "Фото проєкту",
  height = 260,
}: Props) {
  return (
    <div className={styles.box} style={{ height }}>
      <div className={styles.inner}>
        <div className={styles.icon} aria-hidden="true">
          ▦
        </div>
        <div className={styles.text}>{label}</div>
      </div>
    </div>
  );
}
