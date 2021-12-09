import React from "react";
import PageTitle from "../../shared/page-title";
import SectionIntro from "./section-intro";


const Dashboard = () => {
    return (
        <>
            <PageTitle title="داشبورد"/>
            <div className="mt-4">
                <h1>داشبورد</h1>
                <SectionIntro/>
            </div>
        </>
    )
}


export default Dashboard
