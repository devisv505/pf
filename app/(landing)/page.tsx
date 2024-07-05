"use client";

import React from "react";
import SearchPanel from "@/app/(landing)/_components/search-panel";

const MarketingPage = () => {
    return (
        <div className="min-h-full flex flex-col">
            <div
                className="flex flex-col items-center justify-center md:justify-start text-center gap-y-8 flex-1 pb-10"
            >
                <SearchPanel />
            </div>
        </div>
    );
}

export default MarketingPage;