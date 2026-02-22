import Link from "next/link";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import styles from "./ProjectCard.module.css";

type Props = {
  href: string;
  label: string;
  title?: string;
};

export function ProjectCard({ href, label, title }: Props) {
  return (
    <Link href={href} className={styles.card}>
      <PlaceholderImage label={label} height={220} />
      {title ? <div className={styles.title}>{title}</div> : null}
    </Link>
  );
}
