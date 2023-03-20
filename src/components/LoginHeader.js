import React from "react";

export default function LoginHeader({
    heading
}) {
    return (
        <div className="mb-10">
            <div className="flex justify-center">
                <img
                    alt=""
                    className="h-64 w-64"
                    src="/img/pngeredux.png" />
            </div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                {heading}
            </h2>
        </div>
    )
}