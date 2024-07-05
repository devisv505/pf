import React from "react";
import Image from "next/image";

const MarketingPage = () => {
    return (
        <div className="min-h-full flex flex-col">
            <div
                className="flex flex-col items-center justify-center md:justify-start text-center gap-y-8 flex-1 pb-10"
            >
                <div className="relative w-full h-[100vh] group">
                    <Image
                        src="https://showbird.com/images/homepageslider/showbird-home-def-40c-noborder.jpg"
                        fill
                        alt="Cover"
                        className="object-cover"
                    />
                </div>
            </div>
        </div>
    );
}

export default MarketingPage;