/** @format */

import "antd/dist/antd.css";
import React from "react";
import { useRouter } from 'next/router'
import BestPlans from "../components/BestPlans";

export default function ComparePlans() {
    const router = useRouter()
    const { zipcode } = router.query
    console.log(router.query)
    return (
        <>
            <BestPlans postcode={zipcode} />
        </>
    );
}
