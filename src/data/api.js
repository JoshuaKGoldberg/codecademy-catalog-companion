export const getCourses = async () => {
  const catalogRaw = await import("~/data/courses.json");

  return await JSON.parse(JSON.stringify(catalogRaw.default));
};

export const getPaths = async () => {
  const pathsRaw = await import("~/data/paths.json");

  return await JSON.parse(JSON.stringify(pathsRaw.default));
};
