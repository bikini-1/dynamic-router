import req from "../utils/request";

export const GetDynamicRoutes = () => {
  return req({ url: "/api/routes", method: "get" });
};

export const login = (data: any) => {
  return req({ url: "/api/login", method: "post", data });
};
