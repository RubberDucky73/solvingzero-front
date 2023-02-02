// This function was merged into QuickEnergySearch.js and is currently not being used 

/** @format */
import { useEffect, useState } from 'react';
import { db } from "../firebase/config";
import { collection, getDocs } from "firebase/firestore";

export default function RetailList() {
  const [retailers, setRetailers] = useState(null);

  const renderList = () => {
    if (retailers?.length) {
      return <ul>{retailers?.map(ele => <li key={ele.id}> {ele.id}</li>)}</ul>
    }
  }

  useEffect(() => {
    const ref = collection(db, "first-filters");
    let results = [];
    getDocs(ref).then((snapshot) => {
      snapshot.docs.forEach((doc) => {
        results.push({ id: doc.id });
      });
      setRetailers(results);
    });
  }, []);
  // console.log({ "retailer names": retailers })
  return renderList()
}



