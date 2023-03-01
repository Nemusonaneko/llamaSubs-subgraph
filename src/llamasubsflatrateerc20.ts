import {
  AddTier,
  AddWhitelist,
  Extend,
  RemoveTier,
  RemoveWhitelist,
  Subscribe,
  Unsubscribe,
} from "../generated/templates/LlamaSubsFlatRateERC20/LlamaSubsFlatRateERC20";
import {
  HistoryEvent,
  Owner,
  Refundable,
  RefundableSub,
  Subber,
  Tier,
} from "../generated/schema";
import { loadSubber, loadToken } from "./utils";
import { BigInt, Bytes } from "@graphprotocol/graph-ts";

export function handleSubscribe(event: Subscribe): void {
  let tier = Tier.load(
    `${event.address.toHexString()}-${event.params.tier.toHexString()}`
  )!;
  const subber = loadSubber(event.params.subscriber);
  const refundableContract = Refundable.load(event.address.toHexString())!;
  const owner = Owner.load(refundableContract.owner)!;
  let refundableSub = new RefundableSub(
    `${event.address.toHexString()}-${event.params.id.toHexString()}`
  );
  refundableSub.tokenId = event.params.id;
  refundableSub.refundableContract = refundableContract.id;
  refundableSub.subber = subber.id;
  refundableSub.expires = event.params.expires;
  refundableSub.tier = tier.id;
  refundableSub.save();

  tier.amountOfSubs = tier.amountOfSubs.plus(new BigInt(1));
  tier.save();

  let history = new HistoryEvent(
    `${event.address.toHexString()}-${event.transaction.hash.toHexString()}-${event.transactionLogIndex.toHexString()}`
  );
  history.txHash = event.transaction.hash;
  history.eventType = "Subscribe";
  history.refundableContract = refundableContract.id;
  history.refundableSub = refundableSub.id;
  history.owner = owner.id;
  history.subber = subber.id;
  history.tier = tier.id;
  history.expires = event.params.expires;
  history.createdTimestamp = event.block.timestamp;
  history.createdBlock = event.block.number;
  history.save();
}

export function handleExtend(event: Extend): void {
  let refundableSub = RefundableSub.load(
    `${event.address.toHexString()}-${event.params.id.toHexString()}`
  )!;
  let tier = Tier.load(
    `${event.address.toHexString()}-${event.params.tier.toHexString()}`
  )!;
  const subber = Subber.load(refundableSub.subber)!;
  const refundableContract = Refundable.load(event.address.toHexString())!;
  const owner = Owner.load(refundableContract.owner)!;
  refundableSub.tokenId = event.params.id;
  refundableSub.expires = event.params.expires;
  refundableSub.save();

  let history = new HistoryEvent(
    `${event.address.toHexString()}-${event.transaction.hash.toHexString()}-${event.transactionLogIndex.toHexString()}`
  );
  history.txHash = event.transaction.hash;
  history.eventType = "Extend";
  history.refundableContract = refundableContract.id;
  history.refundableSub = refundableSub.id;
  history.owner = owner.id;
  history.subber = subber.id;
  history.tier = tier.id;
  history.expires = event.params.expires;
  history.createdTimestamp = event.block.timestamp;
  history.createdBlock = event.block.number;
  history.save();
}

export function handleUnsubscribe(event: Unsubscribe): void {
  let refundableSub = RefundableSub.load(
    `${event.address.toHexString()}-${event.params.id.toHexString()}`
  )!;
  let tier = Tier.load(
    `${event.address.toHexString()}-${event.params.tier.toHexString()}`
  )!;
  const subber = Subber.load(refundableSub.subber)!;
  const refundableContract = Refundable.load(event.address.toHexString())!;
  const owner = Owner.load(refundableContract.owner)!;
  refundableSub.expires = event.params.expires;
  refundableSub.save();

  tier.amountOfSubs = tier.amountOfSubs.minus(new BigInt(1));
  tier.save();

  let history = new HistoryEvent(
    `${event.address.toHexString()}-${event.transaction.hash.toHexString()}-${event.transactionLogIndex.toHexString()}`
  );
  history.txHash = event.transaction.hash;
  history.eventType = "Unsubscribe";
  history.refundableContract = refundableContract.id;
  history.refundableSub = refundableSub.id;
  history.owner = owner.id;
  history.subber = subber.id;
  history.tier = tier.id;
  history.expires = event.params.expires;
  history.createdTimestamp = event.block.timestamp;
  history.createdBlock = event.block.number;
  history.save();
}

export function handleAddTier(event: AddTier): void {
  let refundableContract = Refundable.load(event.address.toHexString())!;
  let tier = new Tier(
    `${event.address.toHexString()}-${event.params.tierNumber.toHexString()}`
  );
  const token = loadToken(event.params.token);
  const owner = Owner.load(refundableContract.owner)!;
  tier.tierId = event.params.tierNumber;
  tier.refundableContract = refundableContract.id;
  tier.costPerPeriod = event.params.costPerPeriod;
  tier.amountOfSubs = new BigInt(0);
  tier.disabledAt = new BigInt(0);
  tier.token = token.id;

  tier.save();
  refundableContract.save();

  let history = new HistoryEvent(
    `${event.address.toHexString()}-${event.transaction.hash.toHexString()}-${event.transactionLogIndex.toHexString()}`
  );
  history.txHash = event.transaction.hash;
  history.eventType = "AddTier";
  history.refundableContract = refundableContract.id;
  history.owner = owner.id;
  history.tier = tier.id;
  history.createdTimestamp = event.block.timestamp;
  history.createdBlock = event.block.number;
  history.save();
}

export function handleRemoveTier(event: RemoveTier): void {
  let refundableContract = Refundable.load(event.address.toHexString())!;
  let tier = Tier.load(
    `${event.address.toHexString()}-${event.params.tierNumber.toHexString()}`
  )!;
  const owner = Owner.load(refundableContract.owner)!;
  tier.disabledAt = event.params.disabledAt;

  tier.save();
  refundableContract.save();

  let history = new HistoryEvent(
    `${event.address.toHexString()}-${event.transaction.hash.toHexString()}-${event.transactionLogIndex.toHexString()}`
  );
  history.txHash = event.transaction.hash;
  history.eventType = "RemoveTier";
  history.refundableContract = refundableContract.id;
  history.owner = owner.id;
  history.tier = tier.id;
  history.disabledAt = event.params.disabledAt;
  history.createdTimestamp = event.block.timestamp;
  history.createdBlock = event.block.number;
  history.save();
}

export function handleAddWhitelist(event: AddWhitelist): void {
  let refundableContract = Refundable.load(event.address.toHexString())!;
  const owner = Owner.load(refundableContract.owner)!;
  const newWhitelist = refundableContract.whitelist;
  newWhitelist.push(event.params.toAdd);
  refundableContract.whitelist = newWhitelist;
  refundableContract.save();

  let history = new HistoryEvent(
    `${event.address.toHexString()}-${event.transaction.hash.toHexString()}-${event.transactionLogIndex.toHexString()}`
  );
  history.txHash = event.transaction.hash;
  history.eventType = "AddWhitelist";
  history.refundableContract = refundableContract.id;
  history.owner = owner.id;
  history.whitelist = event.params.toAdd;
  history.createdTimestamp = event.block.timestamp;
  history.createdBlock = event.block.number;
  history.save();
}

export function handleRemoveWhitelist(event: RemoveWhitelist): void {
  let refundableContract = Refundable.load(event.address.toHexString())!;
  const owner = Owner.load(refundableContract.owner)!;
  const oldWhitelist: Bytes[] = refundableContract.whitelist;
  const newWhitelist: Bytes[] = [];
  for (let i = 0; i < oldWhitelist.length; i++) {
    if (
      oldWhitelist[i].toHexString().toLowerCase() !==
      event.params.toRemove.toHexString().toLowerCase()
    ) {
      newWhitelist.push(oldWhitelist[i]);
    }
  }

  refundableContract.whitelist = newWhitelist;
  refundableContract.save();

  let history = new HistoryEvent(
    `${event.address.toHexString()}-${event.transaction.hash.toHexString()}-${event.transactionLogIndex.toHexString()}`
  );
  history.txHash = event.transaction.hash;
  history.eventType = "RemoveWhitelist";
  history.refundableContract = refundableContract.id;
  history.owner = owner.id;
  history.whitelist = event.params.toRemove;
  history.createdTimestamp = event.block.timestamp;
  history.createdBlock = event.block.number;
  history.save();
}
