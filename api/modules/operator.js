import { axiosClient, resolver } from "../client";

export default {
  async checkVehicleEligibility(voId, pumpOperatorUserId) {
    return await resolver(
      axiosClient.get(
        "api/pump-operator/check-vehicle-eligibility/" +
          voId +
          "/" +
          pumpOperatorUserId
      )
    );
  },
};
