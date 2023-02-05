import {
  DeployFlatRateERC20 as DeployFlatRateERC20Event,
  DeployFlatRateERC20NonRefundable as DeployFlatRateERC20NonRefundableEvent
} from "../generated/LlamaSubsFactory/LlamaSubsFactory"
import {
  DeployFlatRateERC20,
  DeployFlatRateERC20NonRefundable
} from "../generated/schema"

export function handleDeployFlatRateERC20(
  event: DeployFlatRateERC20Event
): void {
  let entity = new DeployFlatRateERC20(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.deployedContract = event.params.deployedContract
  entity.owner = event.params.owner
  entity.currentPeriod = event.params.currentPeriod
  entity.periodDuration = event.params.periodDuration

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleDeployFlatRateERC20NonRefundable(
  event: DeployFlatRateERC20NonRefundableEvent
): void {
  let entity = new DeployFlatRateERC20NonRefundable(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.deployedContract = event.params.deployedContract
  entity.owner = event.params.owner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
