import Axios from "axios";

export const getProjects = async () => {
  const request = await Axios.get("./json/projects.json");
  const response = await request.data;
  
  return response;
};
