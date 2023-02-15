import {
  DeployFlatRateERC20,
  DeployFlatRateERC20NonRefundable,
} from "../generated/LlamaSubsFactory/LlamaSubsFactory";
import { NonRefundable, Owner, Refundable } from "../generated/schema";
import {
  LlamaSubsFlatRateERC20,
  LlamaSubsFlatRateERC20NonRefundable,
} from "../generated/templates";

export function handleDeployFlatRateERC20(event: DeployFlatRateERC20): void {
  let owner = Owner.load(event.params.owner.toHexString());
  if (!owner) {
    owner = new Owner(event.params.owner.toHexString());
    owner.address = event.params.owner;
    owner.save();
  }
  let refundable = new Refundable(event.params.deployedContract.toHexString());
  refundable.owner = owner.id;
  refundable.address = event.params.deployedContract;
  refundable.periodDuation = event.params.periodDuration;
  refundable.whitelist = [];
  refundable.save();
  LlamaSubsFlatRateERC20.create(event.params.deployedContract);
}

export function handleDeployFlatRateERC20NonRefundable(
  event: DeployFlatRateERC20NonRefundable
): void {
  let owner = Owner.load(event.params.owner.toHexString());
  if (!owner) {
    owner = new Owner(event.params.owner.toHexString());
    owner.address = event.params.owner;
    owner.save();
  }
  let nonrefundable = new NonRefundable(
    event.params.deployedContract.toHexString()
  );
  nonrefundable.owner = owner.id;
  nonrefundable.address = event.params.deployedContract;
  nonrefundable.whitelist = [];
  nonrefundable.save();
  LlamaSubsFlatRateERC20NonRefundable.create(event.params.deployedContract);
}
