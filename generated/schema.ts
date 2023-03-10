// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Refundable extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Refundable entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Refundable must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Refundable", id.toString(), this);
    }
  }

  static load(id: string): Refundable | null {
    return changetype<Refundable | null>(store.get("Refundable", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get owner(): string {
    let value = this.get("owner");
    return value!.toString();
  }

  set owner(value: string) {
    this.set("owner", Value.fromString(value));
  }

  get address(): Bytes {
    let value = this.get("address");
    return value!.toBytes();
  }

  set address(value: Bytes) {
    this.set("address", Value.fromBytes(value));
  }

  get periodDuation(): BigInt {
    let value = this.get("periodDuation");
    return value!.toBigInt();
  }

  set periodDuation(value: BigInt) {
    this.set("periodDuation", Value.fromBigInt(value));
  }

  get whitelist(): Array<Bytes> {
    let value = this.get("whitelist");
    return value!.toBytesArray();
  }

  set whitelist(value: Array<Bytes>) {
    this.set("whitelist", Value.fromBytesArray(value));
  }

  get tiers(): Array<string> {
    let value = this.get("tiers");
    return value!.toStringArray();
  }

  set tiers(value: Array<string>) {
    this.set("tiers", Value.fromStringArray(value));
  }

  get history(): Array<string> {
    let value = this.get("history");
    return value!.toStringArray();
  }

  set history(value: Array<string>) {
    this.set("history", Value.fromStringArray(value));
  }
}

export class NonRefundable extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save NonRefundable entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type NonRefundable must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("NonRefundable", id.toString(), this);
    }
  }

  static load(id: string): NonRefundable | null {
    return changetype<NonRefundable | null>(store.get("NonRefundable", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get owner(): string {
    let value = this.get("owner");
    return value!.toString();
  }

  set owner(value: string) {
    this.set("owner", Value.fromString(value));
  }

  get address(): Bytes {
    let value = this.get("address");
    return value!.toBytes();
  }

  set address(value: Bytes) {
    this.set("address", Value.fromBytes(value));
  }

  get whitelist(): Array<Bytes> {
    let value = this.get("whitelist");
    return value!.toBytesArray();
  }

  set whitelist(value: Array<Bytes>) {
    this.set("whitelist", Value.fromBytesArray(value));
  }

  get subs(): Array<string> {
    let value = this.get("subs");
    return value!.toStringArray();
  }

  set subs(value: Array<string>) {
    this.set("subs", Value.fromStringArray(value));
  }

  get history(): Array<string> {
    let value = this.get("history");
    return value!.toStringArray();
  }

  set history(value: Array<string>) {
    this.set("history", Value.fromStringArray(value));
  }
}

export class Token extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Token entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Token must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Token", id.toString(), this);
    }
  }

  static load(id: string): Token | null {
    return changetype<Token | null>(store.get("Token", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get address(): Bytes {
    let value = this.get("address");
    return value!.toBytes();
  }

  set address(value: Bytes) {
    this.set("address", Value.fromBytes(value));
  }

  get symbol(): string {
    let value = this.get("symbol");
    return value!.toString();
  }

  set symbol(value: string) {
    this.set("symbol", Value.fromString(value));
  }

  get name(): string {
    let value = this.get("name");
    return value!.toString();
  }

  set name(value: string) {
    this.set("name", Value.fromString(value));
  }

  get decimals(): i32 {
    let value = this.get("decimals");
    return value!.toI32();
  }

  set decimals(value: i32) {
    this.set("decimals", Value.fromI32(value));
  }
}

export class Tier extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Tier entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Tier must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Tier", id.toString(), this);
    }
  }

  static load(id: string): Tier | null {
    return changetype<Tier | null>(store.get("Tier", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get tierId(): BigInt {
    let value = this.get("tierId");
    return value!.toBigInt();
  }

  set tierId(value: BigInt) {
    this.set("tierId", Value.fromBigInt(value));
  }

  get refundableContract(): string {
    let value = this.get("refundableContract");
    return value!.toString();
  }

  set refundableContract(value: string) {
    this.set("refundableContract", Value.fromString(value));
  }

  get costPerPeriod(): BigInt {
    let value = this.get("costPerPeriod");
    return value!.toBigInt();
  }

  set costPerPeriod(value: BigInt) {
    this.set("costPerPeriod", Value.fromBigInt(value));
  }

  get disabledAt(): BigInt {
    let value = this.get("disabledAt");
    return value!.toBigInt();
  }

  set disabledAt(value: BigInt) {
    this.set("disabledAt", Value.fromBigInt(value));
  }

  get token(): string {
    let value = this.get("token");
    return value!.toString();
  }

  set token(value: string) {
    this.set("token", Value.fromString(value));
  }

  get refundableSubs(): Array<string> {
    let value = this.get("refundableSubs");
    return value!.toStringArray();
  }

  set refundableSubs(value: Array<string>) {
    this.set("refundableSubs", Value.fromStringArray(value));
  }

  get history(): Array<string> {
    let value = this.get("history");
    return value!.toStringArray();
  }

  set history(value: Array<string>) {
    this.set("history", Value.fromStringArray(value));
  }
}

export class Sub extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Sub entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Sub must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Sub", id.toString(), this);
    }
  }

  static load(id: string): Sub | null {
    return changetype<Sub | null>(store.get("Sub", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get subId(): BigInt {
    let value = this.get("subId");
    return value!.toBigInt();
  }

  set subId(value: BigInt) {
    this.set("subId", Value.fromBigInt(value));
  }

  get nonRefundableContract(): string {
    let value = this.get("nonRefundableContract");
    return value!.toString();
  }

  set nonRefundableContract(value: string) {
    this.set("nonRefundableContract", Value.fromString(value));
  }

  get costOfSub(): BigInt {
    let value = this.get("costOfSub");
    return value!.toBigInt();
  }

  set costOfSub(value: BigInt) {
    this.set("costOfSub", Value.fromBigInt(value));
  }

  get duration(): BigInt {
    let value = this.get("duration");
    return value!.toBigInt();
  }

  set duration(value: BigInt) {
    this.set("duration", Value.fromBigInt(value));
  }

  get disabled(): boolean {
    let value = this.get("disabled");
    return value!.toBoolean();
  }

  set disabled(value: boolean) {
    this.set("disabled", Value.fromBoolean(value));
  }

  get token(): string {
    let value = this.get("token");
    return value!.toString();
  }

  set token(value: string) {
    this.set("token", Value.fromString(value));
  }

  get nonRefundableSubs(): Array<string> {
    let value = this.get("nonRefundableSubs");
    return value!.toStringArray();
  }

  set nonRefundableSubs(value: Array<string>) {
    this.set("nonRefundableSubs", Value.fromStringArray(value));
  }

  get history(): Array<string> {
    let value = this.get("history");
    return value!.toStringArray();
  }

  set history(value: Array<string>) {
    this.set("history", Value.fromStringArray(value));
  }
}

export class Owner extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Owner entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Owner must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Owner", id.toString(), this);
    }
  }

  static load(id: string): Owner | null {
    return changetype<Owner | null>(store.get("Owner", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get address(): Bytes {
    let value = this.get("address");
    return value!.toBytes();
  }

  set address(value: Bytes) {
    this.set("address", Value.fromBytes(value));
  }

  get refundables(): Array<string> {
    let value = this.get("refundables");
    return value!.toStringArray();
  }

  set refundables(value: Array<string>) {
    this.set("refundables", Value.fromStringArray(value));
  }

  get nonrefundables(): Array<string> {
    let value = this.get("nonrefundables");
    return value!.toStringArray();
  }

  set nonrefundables(value: Array<string>) {
    this.set("nonrefundables", Value.fromStringArray(value));
  }

  get history(): Array<string> {
    let value = this.get("history");
    return value!.toStringArray();
  }

  set history(value: Array<string>) {
    this.set("history", Value.fromStringArray(value));
  }
}

export class Subber extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Subber entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Subber must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Subber", id.toString(), this);
    }
  }

  static load(id: string): Subber | null {
    return changetype<Subber | null>(store.get("Subber", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get address(): Bytes {
    let value = this.get("address");
    return value!.toBytes();
  }

  set address(value: Bytes) {
    this.set("address", Value.fromBytes(value));
  }

  get nonRefundableSubs(): Array<string> {
    let value = this.get("nonRefundableSubs");
    return value!.toStringArray();
  }

  set nonRefundableSubs(value: Array<string>) {
    this.set("nonRefundableSubs", Value.fromStringArray(value));
  }

  get refundableSubs(): Array<string> {
    let value = this.get("refundableSubs");
    return value!.toStringArray();
  }

  set refundableSubs(value: Array<string>) {
    this.set("refundableSubs", Value.fromStringArray(value));
  }

  get history(): Array<string> {
    let value = this.get("history");
    return value!.toStringArray();
  }

  set history(value: Array<string>) {
    this.set("history", Value.fromStringArray(value));
  }
}

export class NonRefundableSub extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save NonRefundableSub entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type NonRefundableSub must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("NonRefundableSub", id.toString(), this);
    }
  }

  static load(id: string): NonRefundableSub | null {
    return changetype<NonRefundableSub | null>(
      store.get("NonRefundableSub", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get tokenId(): BigInt {
    let value = this.get("tokenId");
    return value!.toBigInt();
  }

  set tokenId(value: BigInt) {
    this.set("tokenId", Value.fromBigInt(value));
  }

  get nonRefundableContract(): string {
    let value = this.get("nonRefundableContract");
    return value!.toString();
  }

  set nonRefundableContract(value: string) {
    this.set("nonRefundableContract", Value.fromString(value));
  }

  get subber(): string {
    let value = this.get("subber");
    return value!.toString();
  }

  set subber(value: string) {
    this.set("subber", Value.fromString(value));
  }

  get expires(): BigInt {
    let value = this.get("expires");
    return value!.toBigInt();
  }

  set expires(value: BigInt) {
    this.set("expires", Value.fromBigInt(value));
  }

  get sub(): string {
    let value = this.get("sub");
    return value!.toString();
  }

  set sub(value: string) {
    this.set("sub", Value.fromString(value));
  }

  get history(): Array<string> {
    let value = this.get("history");
    return value!.toStringArray();
  }

  set history(value: Array<string>) {
    this.set("history", Value.fromStringArray(value));
  }
}

export class RefundableSub extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save RefundableSub entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type RefundableSub must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("RefundableSub", id.toString(), this);
    }
  }

  static load(id: string): RefundableSub | null {
    return changetype<RefundableSub | null>(store.get("RefundableSub", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get tokenId(): BigInt {
    let value = this.get("tokenId");
    return value!.toBigInt();
  }

  set tokenId(value: BigInt) {
    this.set("tokenId", Value.fromBigInt(value));
  }

  get refundableContract(): string {
    let value = this.get("refundableContract");
    return value!.toString();
  }

  set refundableContract(value: string) {
    this.set("refundableContract", Value.fromString(value));
  }

  get subber(): string {
    let value = this.get("subber");
    return value!.toString();
  }

  set subber(value: string) {
    this.set("subber", Value.fromString(value));
  }

  get expires(): BigInt {
    let value = this.get("expires");
    return value!.toBigInt();
  }

  set expires(value: BigInt) {
    this.set("expires", Value.fromBigInt(value));
  }

  get tier(): string {
    let value = this.get("tier");
    return value!.toString();
  }

  set tier(value: string) {
    this.set("tier", Value.fromString(value));
  }

  get history(): Array<string> {
    let value = this.get("history");
    return value!.toStringArray();
  }

  set history(value: Array<string>) {
    this.set("history", Value.fromStringArray(value));
  }
}

export class HistoryEvent extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save HistoryEvent entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type HistoryEvent must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("HistoryEvent", id.toString(), this);
    }
  }

  static load(id: string): HistoryEvent | null {
    return changetype<HistoryEvent | null>(store.get("HistoryEvent", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get txHash(): Bytes {
    let value = this.get("txHash");
    return value!.toBytes();
  }

  set txHash(value: Bytes) {
    this.set("txHash", Value.fromBytes(value));
  }

  get eventType(): string {
    let value = this.get("eventType");
    return value!.toString();
  }

  set eventType(value: string) {
    this.set("eventType", Value.fromString(value));
  }

  get nonRefundableContract(): string | null {
    let value = this.get("nonRefundableContract");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set nonRefundableContract(value: string | null) {
    if (!value) {
      this.unset("nonRefundableContract");
    } else {
      this.set("nonRefundableContract", Value.fromString(<string>value));
    }
  }

  get refundableContract(): string | null {
    let value = this.get("refundableContract");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set refundableContract(value: string | null) {
    if (!value) {
      this.unset("refundableContract");
    } else {
      this.set("refundableContract", Value.fromString(<string>value));
    }
  }

  get nonRefundableSub(): string | null {
    let value = this.get("nonRefundableSub");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set nonRefundableSub(value: string | null) {
    if (!value) {
      this.unset("nonRefundableSub");
    } else {
      this.set("nonRefundableSub", Value.fromString(<string>value));
    }
  }

  get refundableSub(): string | null {
    let value = this.get("refundableSub");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set refundableSub(value: string | null) {
    if (!value) {
      this.unset("refundableSub");
    } else {
      this.set("refundableSub", Value.fromString(<string>value));
    }
  }

  get owner(): string | null {
    let value = this.get("owner");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set owner(value: string | null) {
    if (!value) {
      this.unset("owner");
    } else {
      this.set("owner", Value.fromString(<string>value));
    }
  }

  get subber(): string | null {
    let value = this.get("subber");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set subber(value: string | null) {
    if (!value) {
      this.unset("subber");
    } else {
      this.set("subber", Value.fromString(<string>value));
    }
  }

  get sub(): string | null {
    let value = this.get("sub");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set sub(value: string | null) {
    if (!value) {
      this.unset("sub");
    } else {
      this.set("sub", Value.fromString(<string>value));
    }
  }

  get tier(): string | null {
    let value = this.get("tier");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set tier(value: string | null) {
    if (!value) {
      this.unset("tier");
    } else {
      this.set("tier", Value.fromString(<string>value));
    }
  }

  get expires(): BigInt | null {
    let value = this.get("expires");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set expires(value: BigInt | null) {
    if (!value) {
      this.unset("expires");
    } else {
      this.set("expires", Value.fromBigInt(<BigInt>value));
    }
  }

  get disabledAt(): BigInt | null {
    let value = this.get("disabledAt");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set disabledAt(value: BigInt | null) {
    if (!value) {
      this.unset("disabledAt");
    } else {
      this.set("disabledAt", Value.fromBigInt(<BigInt>value));
    }
  }

  get whitelist(): Bytes | null {
    let value = this.get("whitelist");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set whitelist(value: Bytes | null) {
    if (!value) {
      this.unset("whitelist");
    } else {
      this.set("whitelist", Value.fromBytes(<Bytes>value));
    }
  }

  get createdTimestamp(): BigInt {
    let value = this.get("createdTimestamp");
    return value!.toBigInt();
  }

  set createdTimestamp(value: BigInt) {
    this.set("createdTimestamp", Value.fromBigInt(value));
  }

  get createdBlock(): BigInt {
    let value = this.get("createdBlock");
    return value!.toBigInt();
  }

  set createdBlock(value: BigInt) {
    this.set("createdBlock", Value.fromBigInt(value));
  }
}
