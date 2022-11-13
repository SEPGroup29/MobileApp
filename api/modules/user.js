import { axiosClient, resolver } from "../client";

export default {
  async getUserDetails() {
    return await resolver(
      axiosClient.get("/api/vehicle-owner/get-vehicle-owner-name")
    );
  },
  async login(email, password) {
    return await resolver(
      axiosClient.post("/auth/login-pump-operator", {
        email: email,
        password: password,
      })
    );
  },
};
