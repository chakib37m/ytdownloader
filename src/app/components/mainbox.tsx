export default function MainBox() {
    return (
        <div className="boxcontainer">
            <div className="mainbox">
                <div className="info">
                    <h1 className="title">Youtube Downloader</h1>
                    <p className="description">Download Youtube videos with ease</p>
                </div>
                <div className="inputbar">
                    <input className="link" type="text" placeholder="Enter Youtube URL" />
                    <button className="downloadbtn">Download</button>
                </div>
            </div>
        </div>
    );
}