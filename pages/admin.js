import styles from "../styles/Home.module.css";
import Link from 'next/link';
import json from '../json/data.json';

export default function Home() {

  return (
    <div className={styles.container}>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/heroes">Heroes</Link>
        </li>
      </ul>
      <div className="row-auto">

        {/* 2 buttons below for migration data */}

        <button
          onClick={() => {
            console.log(json)
          }}
        >
          Log
        </button>

      </div>
    </div>
  );
}
