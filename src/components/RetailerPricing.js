
/** @format */
import { useEffect, useState } from 'react';
import { db } from "../firebase/config";
import { collection, getDocs } from "firebase/firestore";

export default function RetailerPricing() {
    const [retailers, setRetailers] = useState(null);

    const renderList = () => {
        if (retailers?.length) {
            return <ul>{retailers?.map(ele => <li key={ele.id}> {ele.yearlyPrice}</li>)}</ul>
        }
    }

    // const findAverage = () => {
    //     pricesArray = [];
    //     let pricesArray = retailers?.map(ele => key={ele.id} {ele.yearlyPrice})
    // }

    useEffect(() => {
        const ref = collection(db, "first-filter");
        let results = [];
        getDocs(ref).then((snapshot) => {
            snapshot.docs.forEach((doc) => {
                results.push({ id: doc.id, ...doc.data() });
            });
            setRetailers(results);
        });
    }, []);
    // console.log({ "retailer prices": retailers })
    return renderList()
}