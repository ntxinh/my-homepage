import styles from "../styles/Home.module.css";
import { useState, useEffect } from 'react'
import json from '../json/data.json';
import dataQuotes from '../json/data-quotes.json';

export default function Home() {

  const [links, setLinks] = useState([]);
  const [quote, setQuote] = useState({ text: '' });
  const [tabIndex, setTabIndex] = useState(2);

  useEffect(() => {
    setLinks(json.links);
    setQuote(dataQuotes.quotes[getRandomInt(dataQuotes.quotes.length - 1)] || { text: '' });
  }, []);

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  const switchTab = (event, currentTabIndex) => {
    // console.log(event);
    // console.log(currentTabIndex);
    setTabIndex(currentTabIndex);
  }

  const getClassName = (currentTabIndex) => {
    return `flex justify-center border-t-4 ${tabIndex == currentTabIndex ? 'text-indigo-600 border-indigo-600' : 'border-transparent hover:text-indigo-600 hover:border-indigo-600'} py-4`
  }

  return (
    <div>
      {/* Tabs */}
      {/* https://tailwindtemplates.io/templates */}
      <ul className="grid grid-flow-col text-center text-gray-500">
        <li onClick={(event) => switchTab(event, 1)}>
          <a href="#page1" className={getClassName(1)}>Work</a>
        </li>
        <li onClick={(event) => switchTab(event, 2)}>
          <a href="#page2" className={getClassName(2)}>News</a>
        </li>
        <li onClick={(event) => switchTab(event, 3)}>
          <a href="#page3" className={getClassName(3)}>PriceBoard</a>
        </li>
        <li onClick={(event) => switchTab(event, 4)}>
          <a href="#page4" className={getClassName(4)}>DevOps</a>
        </li>
        <li onClick={(event) => switchTab(event, 5)}>
          <a href="#page5" className={getClassName(5)}>Settings</a>
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

        <div className="grid grid-cols-2 md:grid-cols-6 2xl:grid-cols-8 gap-4">

          {links.filter(x => x.categoryId == tabIndex).map((object, i) =>
            <a
              key={i}
              href={object.url}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
              style={{backgroundColor: object.color || null}}
            >
              {object.name}
            </a>
          )}

        </div>

      </div>
    </div>
  );
}
