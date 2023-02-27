import {
  DeployFlatRateERC20,
  DeployFlatRateERC20NonRefundable,
} from "../generated/LlamaSubsFactory/LlamaSubsFactory";
import {
  HistoryEvent,
  NonRefundable,
  Owner,
  Refundable,
} from "../generated/schema";
import {
  LlamaSubsFlatRateERC20,
  LlamaSubsFlatRateERC20NonRefundable,
} from "../generated/templates";
import { loadOwner } from "./utils";

export function handleDeployFlatRateERC20(event: DeployFlatRateERC20): void {
  LlamaSubsFlatRateERC20.create(event.params.deployedContract);
  const owner = loadOwner(event.params.owner);
  let refundable = new Refundable(event.params.deployedContract.toHexString());
  refundable.owner = owner.id;
  refundable.address = event.params.deployedContract;
  refundable.periodDuation = event.params.periodDuration;
  refundable.whitelist = [];

  refundable.save();

  let history = new HistoryEvent(
    `${event.address.toHexString()}-${event.transaction.hash.toHexString()}-${event.transactionLogIndex.toHexString()}`
  );
  history.txHash = event.transaction.hash;
  history.eventType = "DeployFlatRateERC20";
  history.refundableContract = refundable.id;
  history.owner = owner.id;
  history.createdBlock = event.block.number;
  history.createdTimestamp = event.block.timestamp;
  history.save();
}

export function handleDeployFlatRateERC20NonRefundable(
  event: DeployFlatRateERC20NonRefundable
): void {
  LlamaSubsFlatRateERC20NonRefundable.create(event.params.deployedContract);
  const owner = loadOwner(event.params.owner);
  let nonrefundable = new NonRefundable(
    event.params.deployedContract.toHexString()
  );
  nonrefundable.owner = owner.id;
  nonrefundable.address = event.params.deployedContract;
  nonrefundable.whitelist = [];

  nonrefundable.save();

  let history = new HistoryEvent(
    `${event.address.toHexString()}-${event.transaction.hash.toHexString()}-${event.transactionLogIndex.toHexString()}`
  );
  history.txHash = event.transaction.hash;
  history.eventType = "DeployFlatRateERC20";
  history.nonRefundableContract = nonrefundable.id;
  history.owner = owner.id;
  history.createdBlock = event.block.number;
  history.createdTimestamp = event.block.timestamp;
  history.save();
}
