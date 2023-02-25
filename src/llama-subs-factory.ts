import {
  DeployFlatRateERC20,
  DeployFlatRateERC20NonRefundable,
} from "../generated/LlamaSubsFactory/LlamaSubsFactory";
import {
  NonRefundable,
  Owner,
  Refundable,
} from "../generated/schema";
import {
  LlamaSubsFlatRateERC20,
  LlamaSubsFlatRateERC20NonRefundable,
} from "../generated/templates";

export function handleDeployFlatRateERC20(event: DeployFlatRateERC20): void {
  LlamaSubsFlatRateERC20.create(event.params.deployedContract);
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
  refundable.activeTiers = [];

  // const tiers = event.params.tiers;
  // for (let i = 0; i < tiers.length; i++) {
  //   const token = loadToken(tiers[i].token);
  //   let tier = new Tier(
  //     `${event.params.deployedContract.toHexString()}-${i.toString()}`
  //   );
  //   tier.refundableContract = refundable.id;
  //   tier.costPerPeriod = tiers[i].costPerPeriod;
  //   tier.amountOfSubs = new BigInt(0);
  //   tier.disabledAt = new BigInt(0);
  //   tier.token = token.id;
  //   tier.save();
  // }

  refundable.save();
}

export function handleDeployFlatRateERC20NonRefundable(
  event: DeployFlatRateERC20NonRefundable
): void {
  LlamaSubsFlatRateERC20NonRefundable.create(event.params.deployedContract);
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
  nonrefundable.activeSubs = [];

  // const subs = event.params.subs;
  // for (let i = 0; i < subs.length; i++) {
  //   const token = loadToken(subs[i].token);
  //   let sub = new Sub(
  //     `${event.params.deployedContract.toHexString()}-${i.toString()}`
  //   );
  //   sub.nonRefundableContract = nonrefundable.id;
  //   sub.costOfSub = subs[i].costOfSub;
  //   sub.duration = subs[i].duration;
  //   sub.disabled = false;
  //   sub.token = token.id;
  //   sub.save();
  // }
  nonrefundable.save();
}
