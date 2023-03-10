// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  Address,
  DataSourceTemplate,
  DataSourceContext
} from "@graphprotocol/graph-ts";

export class LlamaSubsFlatRateERC20 extends DataSourceTemplate {
  static create(address: Address): void {
    DataSourceTemplate.create("LlamaSubsFlatRateERC20", [address.toHex()]);
  }

  static createWithContext(address: Address, context: DataSourceContext): void {
    DataSourceTemplate.createWithContext(
      "LlamaSubsFlatRateERC20",
      [address.toHex()],
      context
    );
  }
}

export class LlamaSubsFlatRateERC20NonRefundable extends DataSourceTemplate {
  static create(address: Address): void {
    DataSourceTemplate.create("LlamaSubsFlatRateERC20NonRefundable", [
      address.toHex()
    ]);
  }

  static createWithContext(address: Address, context: DataSourceContext): void {
    DataSourceTemplate.createWithContext(
      "LlamaSubsFlatRateERC20NonRefundable",
      [address.toHex()],
      context
    );
  }
}
