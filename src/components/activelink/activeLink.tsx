'use client'
import { FC } from "react";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import styles from "./activeLink.module.css";

interface ActiveLinkProps {
  href: string;
  text: string;
}

export const ActiveLink: FC<ActiveLinkProps> = ({ href, text }) => {
  const path = usePathname();
  const isActive = path === href;

  return (
    <Link href={href} className={`${isActive ? styles.active : ""} ${isActive ? styles.disabled : ""}`} aria-disabled={isActive}>{text}</Link>
  );
};