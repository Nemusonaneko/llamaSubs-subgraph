import {
  AddSub,
  AddWhitelist,
  Extend,
  RemoveSub,
  RemoveWhitelist,
  Subscribe,
} from "../generated/templates/LlamaSubsFlatRateERC20NonRefundable/LlamaSubsFlatRateERC20NonRefundable";
import { NonRefundable, NonRefundableSub, Sub } from "../generated/schema";
import { loadSubber, loadToken } from "./utils";
import { Bytes } from "@graphprotocol/graph-ts";

export function handleSubscribe(event: Subscribe): void {
  const sub = Sub.load(
    `${event.address.toHexString()}-${event.params.sub.toHexString()}`
  )!;
  const subber = loadSubber(event.params.subscriber);
  const nonrefundableContract = NonRefundable.load(
    event.address.toHexString()
  )!;
  let nonrefundableSub = new NonRefundableSub(
    `${event.address.toHexString()}-${event.params.id.toHexString()}`
  );
  nonrefundableSub.nonRefundableContract = nonrefundableContract.id;
  nonrefundableSub.subber = subber.id;
  nonrefundableSub.expires = event.params.expires;
  nonrefundableSub.sub = sub.id;
  nonrefundableSub.save();
}

export function handleExtend(event: Extend): void {
  let nonrefundableSub = NonRefundableSub.load(
    `${event.address.toHexString()}-${event.params.id.toHexString()}`
  )!;
  nonrefundableSub.expires = event.params.expires;
  nonrefundableSub.save();
}

export function handleAddSub(event: AddSub): void {
  let nonrefundableContract = NonRefundable.load(event.address.toHexString())!;
  const token = loadToken(event.params.token);
  let sub = new Sub(
    `${event.address.toHexString()}-${event.params.subNumber.toHexString()}`
  );
  sub.subId = event.params.subNumber;
  sub.nonRefundableContract = nonrefundableContract.id;
  sub.costOfSub = event.params.costOfSub;
  sub.duration = event.params.duration;
  sub.disabled = false;
  sub.token = token.id;

  sub.save();
  nonrefundableContract.save();
}

export function handleRemoveSub(event: RemoveSub): void {
  let nonrefundableContract = NonRefundable.load(event.address.toHexString())!;
  let sub = Sub.load(
    `${event.address.toHexString()}-${event.params.subNumber.toHexString()}`
  )!;
  sub.disabled = true;

  sub.save();
  nonrefundableContract.save();
}

export function handleAddWhitelist(event: AddWhitelist): void {
  let refundableContract = NonRefundable.load(event.address.toHexString())!;
  const newWhitelist = refundableContract.whitelist;
  newWhitelist.push(event.params.toAdd);
  refundableContract.whitelist = newWhitelist;
  refundableContract.save();
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
}
