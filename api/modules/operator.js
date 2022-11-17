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
  async pumpFuel(vehicleId, pumpOperatorId, fuelQuantity) {
    console.log("vehicleId", vehicleId);
    console.log("pumpOperatorId", pumpOperatorId);
    console.log("fuelQuantity", fuelQuantity);
    return await resolver(
      axiosClient.post("api/pump-operator/pump-fuel", {
        vehicleId: vehicleId,
        pumpOperatorId: pumpOperatorId,
        fuelQuantity: fuelQuantity,
      })
    );
  },
};
