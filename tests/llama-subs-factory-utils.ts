import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  DeployFlatRateERC20,
  DeployFlatRateERC20NonRefundable
} from "../generated/LlamaSubsFactory/LlamaSubsFactory"

export function createDeployFlatRateERC20Event(
  deployedContract: Address,
  owner: Address,
  currentPeriod: BigInt,
  periodDuration: BigInt
): DeployFlatRateERC20 {
  let deployFlatRateErc20Event = changetype<DeployFlatRateERC20>(newMockEvent())

  deployFlatRateErc20Event.parameters = new Array()

  deployFlatRateErc20Event.parameters.push(
    new ethereum.EventParam(
      "deployedContract",
      ethereum.Value.fromAddress(deployedContract)
    )
  )
  deployFlatRateErc20Event.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  deployFlatRateErc20Event.parameters.push(
    new ethereum.EventParam(
      "currentPeriod",
      ethereum.Value.fromUnsignedBigInt(currentPeriod)
    )
  )
  deployFlatRateErc20Event.parameters.push(
    new ethereum.EventParam(
      "periodDuration",
      ethereum.Value.fromUnsignedBigInt(periodDuration)
    )
  )

  return deployFlatRateErc20Event
}

export function createDeployFlatRateERC20NonRefundableEvent(
  deployedContract: Address,
  owner: Address
): DeployFlatRateERC20NonRefundable {
  let deployFlatRateErc20NonRefundableEvent = changetype<
    DeployFlatRateERC20NonRefundable
  >(newMockEvent())

  deployFlatRateErc20NonRefundableEvent.parameters = new Array()

  deployFlatRateErc20NonRefundableEvent.parameters.push(
    new ethereum.EventParam(
      "deployedContract",
      ethereum.Value.fromAddress(deployedContract)
    )
  )
  deployFlatRateErc20NonRefundableEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )

  return deployFlatRateErc20NonRefundableEvent
}
