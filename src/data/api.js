import fs from "fs";
import path from "path";

const file = (name) => path.join(process.cwd(), "src/data", name);

export const getCourses = async () => {
  const catalogRaw = await fs.promises.readFile(file("courses.json"));

  return await JSON.parse(catalogRaw.toString());
};

export const getPaths = async () => {
  const catalogRaw = await fs.promises.readFile(file("paths.json"));

  return await JSON.parse(catalogRaw.toString());
};
