import React from "react";
import { useState } from "react";
export default function Quality() {
    const resolutions = ["2160p", "1080p", "720p", "480p", "360p", "240p"];
    const [quality, setQuality] = useState("");
    if (quality === "1080p") {
        console.log("1080p");
    }
    return (
        <div className="quality">
            {resolutions.map((res) => (
                <button key={res} className={quality === res ? "pick selected" : "pick"} onClick={() => setQuality(res)}>{res}</button>
            ))}
        </div>
    )
}
