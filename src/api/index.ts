import req from "../utils/request";

export const TestApi = () => req({ url: "/api/test", method: "get" });

export const GetDynamicRoutes = () => {
  return req({ url: "/api/routes", method: "get" });
};
