import styles from "../styles/Home.module.css";
import { useState, useEffect } from 'react'
import json from '../json/data.json';
import dataQuotes from '../json/data-quotes.json';

export default function Home() {

  const [links, setLinks] = useState([]);
  const [quote, setQuote] = useState({ text: '' });

  useEffect(() => {
    setLinks(json.links);
    setQuote(dataQuotes.quotes[getRandomInt(dataQuotes.quotes.length - 1)] || { text: '' });
  }, []);

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

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

      <div className="p-8">
        {/* <h1 className="text-4xl font-medium text-gray-700 text-center mt-6">
          Full-Funnel Social Analytics
        </h1> */}
        <p className="text-center mt-6 text-4xl font-light text-gray-500">
          {quote.text}
        </p>
      </div>

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
