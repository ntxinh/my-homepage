import styles from "../styles/Home.module.css";
import { useState, useEffect } from 'react'
import json from '../json/data.json';

export default function Home() {

  const [links, setLinks] = useState([]);

  useEffect(() => {
    setLinks(json.links)
  }, []);

  return (
    <div>
      {/* Tabs */}
      {/* https://tailwindtemplates.io/templates */}
      <ul className="grid grid-flow-col text-center text-gray-500">
        <li>
          <a href="#page1" className="flex justify-center border-t-4 border-transparent hover:text-indigo-600 hover:border-indigo-600 py-4">Work</a>
        </li>
        <li>
          <a href="#page2" className="flex justify-center border-t-4 text-indigo-600 border-indigo-600 py-4">News</a>
        </li>
        <li>
          <a href="#page3" className="flex justify-center border-t-4 border-transparent hover:text-indigo-600 hover:border-indigo-600 py-4">PriceBoard</a>
        </li>
        <li>
          <a href="#page4" className="flex justify-center border-t-4 border-transparent hover:text-indigo-600 hover:border-indigo-600 py-4">DevOps</a>
        </li>
        <li>
          <a href="#page5" className="flex justify-center border-t-4 border-transparent hover:text-indigo-600 hover:border-indigo-600 py-4">Settings</a>
        </li>
      </ul>

      {/* Content */}
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
    </div>
  );
}
