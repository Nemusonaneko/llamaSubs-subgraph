import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, BigInt } from "@graphprotocol/graph-ts"
import { DeployFlatRateERC20 } from "../generated/schema"
import { DeployFlatRateERC20 as DeployFlatRateERC20Event } from "../generated/LlamaSubsFactory/LlamaSubsFactory"
import { handleDeployFlatRateERC20 } from "../src/llama-subs-factory"
import { createDeployFlatRateERC20Event } from "./llama-subs-factory-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let deployedContract = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let owner = Address.fromString("0x0000000000000000000000000000000000000001")
    let currentPeriod = BigInt.fromI32(234)
    let periodDuration = BigInt.fromI32(234)
    let newDeployFlatRateERC20Event = createDeployFlatRateERC20Event(
      deployedContract,
      owner,
      currentPeriod,
      periodDuration
    )
    handleDeployFlatRateERC20(newDeployFlatRateERC20Event)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("DeployFlatRateERC20 created and stored", () => {
    assert.entityCount("DeployFlatRateERC20", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "DeployFlatRateERC20",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "deployedContract",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "DeployFlatRateERC20",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "owner",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "DeployFlatRateERC20",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "currentPeriod",
      "234"
    )
    assert.fieldEquals(
      "DeployFlatRateERC20",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "periodDuration",
      "234"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
