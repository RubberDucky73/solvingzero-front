
/** @format */
import { useEffect, useState } from 'react';
import { db } from "../firebase/config";
import { collectionGroup, getDocs, where, query } from "firebase/firestore";
import QuickEnergySearch from "../components/QuickEnergySearch"

export default function BestPlans({ postcode }) {
    const [bestPlansState, setBestPlans] = useState(null);
    const [loading, setLoading] = useState(true);
    console.log("LOADING", loading)
    const renderList = () => {
        if (bestPlansState?.length && !loading) {
            return (
                <>

                    {bestPlansState?.map(ele =>
                        <div key={ele.id}>
                            {ele.data.brandName + " "}
                            <br></br>
                            {ele.data.displayName}
                            {" $" + Math.round(ele.yearlyPrice / 100)}
                            {" Green Rating: " + (Math.round(ele.greenRating * 2) / 2).toFixed(1)}
                            {" " + ele.data.planId}
                        </div>)}
                </>
            )

        } else if (loading) {
            return <> LOADING...</>
        } else {
            return <> Sorry, there are no plans available</>
        }
    }
    useEffect(() => {

        fetchPlans(postcode);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const fetchPlans = async postcode => {
        let best = [];
        setLoading(true)
        const bestplans = query(collectionGroup(db, 'RESIDENTIAL'), where('data.geography.includedPostcodes', 'array-contains', `${postcode}`));

        const querySnapshot = await getDocs(bestplans);
        querySnapshot.forEach((doc) => {
            best.push({ id: doc.id, ...(doc.data()) });
        });
        setBestPlans(best)
        setTimeout(setLoading(false), 5000);

    }
    return (
        <>
            <QuickEnergySearch />
            {renderList()}
        </>
    )

}