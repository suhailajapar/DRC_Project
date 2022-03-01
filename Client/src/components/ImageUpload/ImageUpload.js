import React, { useState, useEffect, useContext } from "react";
import "./ImageUpload.css";
import { SiteDataContext } from "../../SiteData";

const ImageUpload = () => {
  const [file, setFile] = useState();
  const [fileName, setFileName] = useState("");
  const { user_data } = useContext(SiteDataContext);

  const saveFile = (e) => {
    setFile(e.target.files[0]);
    setFileName(e.target.files[0].name);
  };

  const uploadFile = (e) => {
    const uploadData = {
      ...user_data,
      file: file,
      fileName: fileName,
    };
    try {
      const req = new Request("http://localhost:3001/api/upload", {
        method: "POST",
        headers: new Headers({ "Content-Type": "application/json" }),
        body: JSON.stringify(uploadData),
      });
      fetch(req).then((res) => {
        res.json().then((data) => {
          console.log(data);
        });
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="App">
      <input type="file" onChange={saveFile} />
      <button onClick={uploadFile}>Upload</button>
    </div>
  );
};

export default ImageUpload;
