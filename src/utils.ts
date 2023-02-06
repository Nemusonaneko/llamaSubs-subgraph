import { Bytes, Address } from "@graphprotocol/graph-ts";
import { Subber, Token } from "../generated/schema";

import { ERC20 } from "../generated/templates/LlamaSubsFlatRateERC20/ERC20";
export function loadToken(token: Bytes): Token {
  const toStringToken = token.toHexString();
  let t = Token.load(toStringToken);
  if (!t) {
    t = new Token(toStringToken);
    t.address = token;
    const erc20 = ERC20.bind(Address.fromBytes(token));
    const symbolCall = erc20.try_symbol();
    const nameCall = erc20.try_name();
    const decimalCall = erc20.try_decimals();
    if (!symbolCall.reverted) {
      t.symbol = symbolCall.value;
    }
    if (!nameCall.reverted) {
      t.name = nameCall.value;
    }
    if (!decimalCall.reverted) {
      t.decimals = decimalCall.value;
    }
    t.save();
  }
  return t;
}

export function loadSubber(suber: Bytes): Subber {
    let subber = Subber.load(suber.toHexString());
    if (!subber) {
        subber = new Subber(suber.toHexString());
        subber.address = suber;
        subber.save();
    }
    return subber;
}
