import {
  AddSub,
  AddWhitelist,
  Claim,
  Extend,
  RemoveSub,
  RemoveWhitelist,
  Subscribe,
} from "../generated/templates/LlamaSubsFlatRateERC20NonRefundable/LlamaSubsFlatRateERC20NonRefundable";
import {
  HistoryEvent,
  NonRefundable,
  NonRefundableSub,
  Owner,
  Sub,
  Subber,
} from "../generated/schema";
import { loadSubber, loadToken } from "./utils";
import { Bytes } from "@graphprotocol/graph-ts";

export function handleSubscribe(event: Subscribe): void {
  const sub = Sub.load(
    `${event.address.toHexString()}-${event.params.sub.toHexString()}`
  )!;
  const nonrefundableContract = NonRefundable.load(
    event.address.toHexString()
  )!;
  const owner = Owner.load(nonrefundableContract.owner)!;
  const subber = loadSubber(event.params.subscriber);
  let nonrefundableSub = new NonRefundableSub(
    `${event.address.toHexString()}-${event.params.id.toHexString()}`
  );
  nonrefundableSub.tokenId = event.params.id;
  nonrefundableSub.nonRefundableContract = nonrefundableContract.id;
  nonrefundableSub.subber = subber.id;
  nonrefundableSub.expires = event.params.expires;
  nonrefundableSub.sub = sub.id;
  nonrefundableSub.save();

  let history = new HistoryEvent(
    `${event.address.toHexString()}-${event.transaction.hash.toHexString()}-${event.transactionLogIndex.toHexString()}`
  );
  history.txHash = event.transaction.hash;
  history.eventType = "Subscribe";
  history.nonRefundableContract = nonrefundableContract.id;
  history.owner = owner.id;
  history.subber = subber.id;
  history.sub = nonrefundableSub.id;
  history.expires = event.params.expires;
  history.createdTimestamp = event.block.timestamp;
  history.createdBlock = event.block.number;
  history.save();
}

export function handleExtend(event: Extend): void {
  let nonrefundableSub = NonRefundableSub.load(
    `${event.address.toHexString()}-${event.params.id.toHexString()}`
  )!;
  const nonrefundableContract = NonRefundable.load(
    event.address.toHexString()
  )!;
  const owner = Owner.load(nonrefundableContract.owner)!;
  const subber = Subber.load(nonrefundableSub.subber)!;
  nonrefundableSub.tokenId = event.params.id;
  nonrefundableSub.expires = event.params.expires;
  nonrefundableSub.save();

  let history = new HistoryEvent(
    `${event.address.toHexString()}-${event.transaction.hash.toHexString()}-${event.transactionLogIndex.toHexString()}`
  );
  history.txHash = event.transaction.hash;
  history.eventType = "Extend";
  history.nonRefundableContract = nonrefundableContract.id;
  history.owner = owner.id;
  history.subber = subber.id;
  history.sub = nonrefundableSub.id;
  history.expires = event.params.expires;
  history.createdTimestamp = event.block.timestamp;
  history.createdBlock = event.block.number;
  history.save();
}

export function handleAddSub(event: AddSub): void {
  let nonrefundableContract = NonRefundable.load(event.address.toHexString())!;
  const token = loadToken(event.params.token);
  let sub = new Sub(
    `${event.address.toHexString()}-${event.params.subNumber.toHexString()}`
  );
  const owner = Owner.load(nonrefundableContract.owner)!;
  sub.subId = event.params.subNumber;
  sub.nonRefundableContract = nonrefundableContract.id;
  sub.costOfSub = event.params.costOfSub;
  sub.duration = event.params.duration;
  sub.disabled = false;
  sub.token = token.id;

  sub.save();
  nonrefundableContract.save();

  let history = new HistoryEvent(
    `${event.address.toHexString()}-${event.transaction.hash.toHexString()}-${event.transactionLogIndex.toHexString()}`
  );
  history.txHash = event.transaction.hash;
  history.eventType = "AddSub";
  history.nonRefundableContract = nonrefundableContract.id;
  history.owner = owner.id;
  history.sub = sub.id;
  history.createdTimestamp = event.block.timestamp;
  history.createdBlock = event.block.number;
  history.save();
}

export function handleRemoveSub(event: RemoveSub): void {
  let nonrefundableContract = NonRefundable.load(event.address.toHexString())!;
  let sub = Sub.load(
    `${event.address.toHexString()}-${event.params.subNumber.toHexString()}`
  )!;
  sub.disabled = true;
  const owner = Owner.load(nonrefundableContract.owner)!;

  sub.save();
  nonrefundableContract.save();

  let history = new HistoryEvent(
    `${event.address.toHexString()}-${event.transaction.hash.toHexString()}-${event.transactionLogIndex.toHexString()}`
  );
  history.txHash = event.transaction.hash;
  history.eventType = "RemoveSub";
  history.nonRefundableContract = nonrefundableContract.id;
  history.owner = owner.id;
  history.sub = sub.id;
  history.createdTimestamp = event.block.timestamp;
  history.createdBlock = event.block.number;
  history.save();
}

export function handleAddWhitelist(event: AddWhitelist): void {
  let refundableContract = NonRefundable.load(event.address.toHexString())!;
  const newWhitelist = refundableContract.whitelist;
  const owner = Owner.load(refundableContract.owner)!;
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
  let refundableContract = NonRefundable.load(event.address.toHexString())!;
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
  const owner = Owner.load(refundableContract.owner)!;
  history.txHash = event.transaction.hash;
  history.eventType = "RemoveWhitelist";
  history.refundableContract = refundableContract.id;
  history.owner = owner.id;
  history.whitelist = event.params.toRemove;
  history.createdTimestamp = event.block.timestamp;
  history.createdBlock = event.block.number;
  history.save();
}

export function handleClaim(event: Claim): void {
  let nonrefundableContract = NonRefundable.load(event.address.toHexString())!;
  const owner = Owner.load(nonrefundableContract.owner)!;
  let history = new HistoryEvent(
    `${event.address.toHexString()}-${event.transaction.hash.toHexString()}-${event.transactionLogIndex.toHexString()}`
  );
  const token = loadToken(event.params.token);
  history.txHash = event.transaction.hash;
  history.eventType = "Claim";
  history.nonRefundableContract = nonrefundableContract.id;
  history.owner = owner.id;
  history.token = token.id;
  history.createdTimestamp = event.block.timestamp;
  history.createdBlock = event.block.number;
  history.save();
}
