import { promises as fsPromises } from "fs";

const fetchIds = async (req, res) => {
  try {
    // read from the database file
    const raw = await fsPromises.readFile("./model/db.json", "utf8");
    const database = JSON.parse(raw);
    const urls = database.data.map((pack) => [pack.id, ...pack.urls]);

    return res.status(200).json({
      condition: "success",
      data: urls,
      message: "IDs sent",
    });
  } catch (server_error) {
    console.log(server_error);
    return res.status(500).send("Internal server error");
  }
};

export default fetchIds;
