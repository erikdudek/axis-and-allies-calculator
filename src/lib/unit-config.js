import * as valid from "./valid.js";
import {
  Unit,
  InfantryUnit,
  AAUnit,
  AirUnit,
  BombardUnit,
  BattleshipUnit,
  DestroyerUnit,
  SubmarineUnit,
  TransportUnit,
  TwoHPUnit,
} from "./unit.js";

let basicUnit = function (buildState) {
  return new Unit(
    this.attack,
    this.defense,
    this.cost,
    this.domain,
    buildState.isAttacker,
    buildState.modCount
  );
};

let airUnit = function (buildState) {
  return new AirUnit(
    this.attack,
    this.defense,
    this.cost,
    this.domain,
    buildState.isAttacker,
    buildState.modCount
  );
};

export default {
  infantry: {
    name: "Infantry",
    symbol: "I",
    attack: 2,
    defense: 4,
    cost: 6,
    move: 1,
    domain: "land",
    hp: 1,
    factory: function (buildState) {
      return new InfantryUnit(
        this.attack,
        this.defense,
        this.cost,
        this.domain,
        buildState.isAttacker,
        buildState.modCount,
        buildState.numArtyLeft-- > 0
      );
    },
    valid: valid.landUnit,
  },
  Conscript: {
    name: "Conscript",
    symbol: "C",
    attack: 0,
    defense: 0,
    cost: 4,
    move: 0,
    domain: "land",
    hp: 1,
    factory: basicUnit,
    valid: valid.landUnit,
  },
  "Mech.infantry": {
    name: "Mech. Infantry",
    symbol: "MI",
    attack: 2,
    defense: 4,
    cost: 8,
    move: 2,
    domain: "land",
    hp: 1,
    factory: function (buildState) {
      return new InfantryUnit(
        this.attack,
        this.defense,
        this.cost,
        this.domain,
        buildState.numArtyLeft-- > 0
      );
    },
    valid: valid.landUnit,
  },
  artillery: {
    name: "Artillery",
    symbol: "A",
    attack: 4,
    defense: 4,
    cost: 8,
    move: 1,
    domain: "land",
    hp: 1,
    factory: basicUnit,
    valid: valid.landUnit,
  },
  tank: {
    name: "Tank",
    symbol: "T",
    attack: 6,
    defense: 6,
    cost: 12,
    move: 2,
    domain: "land",
    hp: 1,
    factory: basicUnit,
    valid: valid.landUnit,
  },
  tankTwoHP: {
    name: "Tank(2HP)",
    symbol: "T2",
    attack: 6,
    defense: 6,
    cost: 12,
    move: 2,
    domain: "land",
    hp: 2,
    factory: function (buildState) {
      return new TwoHPUnit(
        this.attack,
        this.defense,
        this.cost,
        this.domain,
        buildState.isAttacker,
        buildState.modCount
      );
    },
    valid: valid.landUnit,
  },
  aa: {
    name: "Anti-Aircraft Artillery",
    symbol: "AA",
    attack: 0,
    defense: 0,
    cost: 10,
    move: 1,
    domain: "land",
    hp: 1,
    factory: function (buildState) {
      return new AAUnit(
        this.attack,
        this.defense,
        this.cost,
        this.domain,
        buildState.isAttacker,
        buildState.modCount
      );
    },
    valid: valid.antiair,
  },
  fighter: {
    name: "Fighter",
    symbol: "F",
    attack: 6,
    defense: 8,
    cost: 20,
    move: 4,
    domain: "air",
    hp: 1,
    factory: airUnit,
    valid: valid.always,
  },
  "Tactical bomber": {
    name: "T_Bomber",
    symbol: "TB",
    attack: 6,
    defense: 6,
    cost: 22,
    move: 4,
    domain: "air",
    hp: 1,
    factory: airUnit,
    valid: valid.always,
  },
  "Supported Tactical bomber": {
    name: "Sup_T_Bomber",
    symbol: "TB",
    attack: 7,
    defense: 6,
    cost: 22,
    move: 4,
    domain: "air",
    hp: 1,
    factory: airUnit,
    valid: valid.always,
  },
  "Strategic bomber": {
    name: "S_Bomber",
    symbol: "SB",
    attack: 8,
    defense: 2,
    cost: 24,
    move: 6,
    domain: "air",
    hp: 1,
    factory: airUnit,
    valid: valid.always,
  },
  submarine: {
    name: "Submarine",
    symbol: "SS",
    attack: 4,
    defense: 2,
    cost: 12,
    move: 2,
    domain: "sea",
    hp: 1,
    factory: function (buildState) {
      return new SubmarineUnit(
        this.attack,
        this.defense,
        this.cost,
        this.domain,
        buildState.isAttacker,
        buildState.modCount
      );
    },
    valid: valid.seaUnit,
  },
  transport: {
    name: "Transport",
    symbol: "AP",
    attack: 0,
    defense: 0,
    cost: 14,
    move: 2,
    domain: "sea",
    hp: 1,
    factory: function (buildState) {
      return new TransportUnit(
        this.attack,
        this.defense,
        this.cost,
        this.domain,
        buildState.isAttacker,
        buildState.modCount
      );
    },
    valid: valid.transport,
  },
  destroyer: {
    name: "Destroyer",
    symbol: "DD",
    attack: 4,
    defense: 4,
    cost: 16,
    move: 2,
    domain: "sea",
    hp: 1,
    factory: function (buildState) {
      return new DestroyerUnit(
        this.attack,
        this.defense,
        this.cost,
        this.domain,
        buildState.isAttacker,
        buildState.modCount
      );
    },
    valid: valid.seaUnit,
  },
  "Supported destroyer": {
    name: "Sup_Destroyer",
    symbol: "SDD",
    attack: 5,
    defense: 5,
    cost: 16,
    move: 2,
    domain: "sea",
    hp: 1,
    factory: function (buildState) {
      return new DestroyerUnit(
        this.attack,
        this.defense,
        this.cost,
        this.domain,
        buildState.isAttacker,
        buildState.modCount
      );
    },
    valid: valid.seaUnit,
  },
  cruiser: {
    name: "Cruiser",
    symbol: "CA",
    attack: 6,
    defense: 6,
    cost: 24,
    move: 2,
    domain: "sea",
    hp: 1,
    factory: function (buildState) {
      return new BombardUnit(
        this.attack,
        this.defense,
        this.cost,
        this.domain,
        buildState.isAttacker,
        buildState.modCount
      );
    },
    valid: valid.bombard,
  },
  carrier: {
    name: "Aircraft Carrier",
    symbol: "CV",
    attack: 0,
    defense: 4,
    cost: 32,
    move: 2,
    domain: "sea",
    hp: 2,
    factory: function (buildState) {
      return new TwoHPUnit(
        this.attack,
        this.defense,
        this.cost,
        this.domain,
        buildState.isAttacker,
        buildState.modCount
      );
    },
    valid: valid.seaUnit,
  },
  battleship: {
    name: "Battleship",
    symbol: "BB",
    attack: 8,
    defense: 8,
    cost: 40,
    move: 2,
    domain: "sea",
    hp: 2,
    factory: function (buildState) {
      return new BattleshipUnit(
        this.attack,
        this.defense,
        this.cost,
        this.domain,
        buildState.isAttacker,
        buildState.modCount
      );
    },
    valid: valid.bombard,
  },
};
