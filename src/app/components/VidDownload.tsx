import React from "react";
import { useState } from "react";
import Quality from "./Quality";
export default function VidDownload() {
    const videoformats = ["mp4", "webm", "flv", "avi", "mkv", "3gp"];
    const audioformats = ["mp3", "m4a", "wav", "aac", "flac"];
    const [video, setVideo] = useState("");
    return (
        <div className="video">
            <div className="extensions">
            <div className="extension">
                {audioformats.map((format) => (
                    <button key={format} className={video === format ? "pick selected" : "pick"} onClick={() => setVideo(format)}>{format}</button>
                ))}
            </div>
            <div className="extension">
                {videoformats.map((format) => (
                    <button key={format} className={video === format ? "pick selected" : "pick"} onClick={() => setVideo(format)}>{format}</button>
                ))}
            </div>
            </div>
                <div className="quality">
                {videoformats.includes(video) && <Quality />}
            </div>
        </div>
    )
}