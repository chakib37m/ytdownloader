"use client";
import VidDownload from "./components/VidDownload";
import React, { useState } from 'react';
export default function Home() {
  const [url, setUrl] = useState('');
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(url);
  };

  return (
    <div>
      <form className="urlform" onSubmit={handleSubmit}>
      <div className="link-container">
        <input className="urlinput" type="text" name="url" placeholder="Enter Youtube URL" value={url} onChange={(e) => setUrl(e.target.value)} />
        <button className="downloadbtn" type="submit">Download</button>
      </div>
      </form>

      <VidDownload />
      </div>

      
  );
}
