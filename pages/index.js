import styles from "../styles/Home.module.css";
import { useState, useEffect } from 'react'
import json from '../json/data.json';

export default function Home() {

  const [links, setLinks] = useState([]);

  useEffect(() => {
    setLinks(json.links)
  }, []);

  return (
    <div className={styles.container}>

      <div className="grid grid-cols-6 gap-4">

        {links.map((object, i) =>
          <a
            key={i}
            href={object.url}
            target="_blank"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          >
            {object.name}
          </a>
        )}

      </div>

    </div>
  );
}
