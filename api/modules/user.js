import { axiosClient, resolver } from "../client";

export default {
  async getUserDetails() {
    return await resolver(
      axiosClient.get("/api/vehicle-owner/get-vehicle-owner-name")
    );
  },
  async login(email, password) {
    return await resolver(
      axiosClient.post("/auth/fs-login", { email: email, password: password })
    );
  },
};
