import {
  AddTier,
  AddWhitelist,
  Extend,
  RemoveTier,
  RemoveWhitelist,
  Subscribe,
  Unsubscribe,
} from "../generated/templates/LlamaSubsFlatRateERC20/LlamaSubsFlatRateERC20";
import { Refundable, RefundableSub, Tier } from "../generated/schema";
import { loadSubber, loadToken } from "./utils";
import { BigInt, Bytes } from "@graphprotocol/graph-ts";

export function handleSubscribe(event: Subscribe): void {
  let tier = Tier.load(
    `${event.address.toHexString()}-${event.params.tier.toHexString()}`
  )!;
  const subber = loadSubber(event.params.subscriber);
  const refundableContract = Refundable.load(event.address.toHexString())!;
  let refundableSub = new RefundableSub(
    `${event.address.toHexString()}-${event.params.id.toHexString()}`
  );
  refundableSub.refundableContract = refundableContract.id;
  refundableSub.subber = subber.id;
  refundableSub.expires = event.params.expires;
  refundableSub.tier = tier.id;
  refundableSub.save();

  tier.amountOfSubs = tier.amountOfSubs.plus(new BigInt(1));
  tier.save();
}

export function handleExtend(event: Extend): void {
  let refundableSub = RefundableSub.load(
    `${event.address.toHexString()}-${event.params.id.toHexString()}
    }`
  )!;
  refundableSub.expires = event.params.expires;
  refundableSub.save();
}

export function handleUnsubscribe(event: Unsubscribe): void {
  let tier = Tier.load(
    `${event.address.toHexString()}-${event.params.tier.toHexString()}`
  )!;
  let refundableSub = RefundableSub.load(
    `${event.address.toHexString()}-${event.params.id.toHexString()}
        }`
  )!;
  refundableSub.expires = event.params.expires;
  refundableSub.save();

  tier.amountOfSubs = tier.amountOfSubs.minus(new BigInt(1));
  tier.save();
}

export function handleAddTier(event: AddTier): void {
  let refundableContract = Refundable.load(event.address.toHexString())!;
  let tier = new Tier(
    `${event.address.toHexString()}-${event.params.tierNumber.toHexString()}`
  );
  const token = loadToken(event.params.token);
  tier.refundableContract = refundableContract.id;
  tier.costPerPeriod = event.params.costPerPeriod;
  tier.amountOfSubs = new BigInt(0);
  tier.disabledAt = new BigInt(0);
  tier.token = token.id;

  let newActive = refundableContract.activeTiers;
  newActive.push(event.params.tierNumber);
  refundableContract.activeTiers = newActive;

  tier.save();
  refundableContract.save();
}

export function handleRemoveTier(event: RemoveTier): void {
  let refundableContract = Refundable.load(event.address.toHexString())!;
  let tier = Tier.load(
    `${event.address.toHexString()}-${event.params.tierNumber.toHexString()}`
  )!;
  tier.disabledAt = event.params.disabledAt;

  let newActive = refundableContract.activeTiers;
  let index = 0;
  const last = newActive[newActive.length - 1];
  while (newActive[index] !== event.params.tierNumber) {
    index++;
  }
  newActive[index] = last;
  newActive.pop();
  refundableContract.activeTiers = newActive;

  tier.save();
  refundableContract.save();
}

export function handleAddWhitelist(event: AddWhitelist): void {
  let refundableContract = Refundable.load(event.address.toHexString())!;
  const newWhitelist = refundableContract.whitelist;
  newWhitelist.push(event.params.toAdd);
  refundableContract.whitelist = newWhitelist;
  refundableContract.save();
}

export function handleRemoveWhitelist(event: RemoveWhitelist): void {
  let refundableContract = Refundable.load(event.address.toHexString())!;
  const oldWhitelist: Bytes[] = refundableContract.whitelist;
  const newWhitelist: Bytes[] = [];
  let j = 0;
  for (let i = 0; i < oldWhitelist.length; i++) {
    if (oldWhitelist[i].toHexString() === event.params.toRemove.toHexString())
      continue;
    newWhitelist[j] = oldWhitelist[i];
    j++;
  }

  refundableContract.whitelist = newWhitelist;
  refundableContract.save();
}
