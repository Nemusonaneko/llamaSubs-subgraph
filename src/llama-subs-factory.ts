import {
  DeployFlatRateERC20,
  DeployFlatRateERC20NonRefundable,
} from "../generated/LlamaSubsFactory/LlamaSubsFactory";
import { NonRefundable, Owner, Refundable } from "../generated/schema";

export function handleDeployFlatRateERC20(event: DeployFlatRateERC20): void {
  let owner = Owner.load(event.params.owner.toHexString());
  if (!owner) {
    owner = new Owner(event.params.owner.toHexString());
    owner.save();
  }
  let refundable = new Refundable(event.params.deployedContract.toHexString());
  refundable.owner = owner.id;
  refundable.periodDuation = event.params.periodDuration;
  refundable.whitelist = [];
  refundable.save();
}

export function handleDeployFlatRateERC20NonRefundable(
  event: DeployFlatRateERC20NonRefundable
): void {
  let owner = Owner.load(event.params.owner.toHexString());
  if (!owner) {
    owner = new Owner(event.params.owner.toHexString());
    owner.save();
  }
  let nonrefundable = new NonRefundable(
    event.params.deployedContract.toHexString()
  );
  nonrefundable.owner = owner.id;
  nonrefundable.whitelist = [];
  nonrefundable.save();
}
