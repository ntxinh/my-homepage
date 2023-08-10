import styles from "../styles/Home.module.css";
import { useState, useEffect } from 'react'
import Link from 'next/link';

export default function Heroes() {

  useEffect(() => {
  }, []);

  return (
    <div className={styles.container}>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
      </ul>

      <div className="row-auto">

      </div>
    </div>
  );
}
