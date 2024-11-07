import { promises as fsPromises } from "fs";
import { v4 as uuid } from "uuid";
import { z } from "zod";

const uploadFiles = async (req, res) => {
  try {
    if (req.failed_upload) {
      res.status(400).send("Upload failed");
    }

    console.log(req.files);
    const endpoints = req.files.map((file) => file.objName);
    const uploadData = {
      id: uuid(),
      urls: endpoints,
    };

    const raw = await fsPromises.readFile("./model/db.json", "utf-8");
    const database = JSON.parse(raw);
    database.data.push(uploadData);
    await fsPromises.writeFile("./model/db.json", JSON.stringify(database));

    res.status(200).json({
      condition: "success",
      data: uploadData,
      message: "Successfully uploaded",
    });
  } catch (server_error) {
    console.log(server_error);
    res.status(500).send("Internal server error");
  }
};

export default uploadFiles;
