function roll() {
  return Math.floor(Math.random() * 12) + 1;
  // Updated *6 to *12
}

export class Unit {
  constructor(attack, defense, cost, domain, hp, isAttacker, modCount) {
    this.attack = attack;
    this.defense = defense;
    this.cost = cost;
    this.domain = domain;
    this.hp = hp;
    this.rolledThisRound = false;
    this.isAttacker = isAttacker;
    this.modCount = modCount;
  }

  get canBeHitByAA() {
    return false;
  }

  get removedLast() {
    return false;
  }

  get detectsSubmarines() {
    return false;
  }

  get isSubmarine() {
    return false;
  }

  rollAttack(modcount) {
    if (this.rolledThisRound) return false;

    console.log("Modifer:", this.modCount);
    console.log("attack:", this.attack);
    this.rolledThisRound = true;
    return roll() <= this.attack + this.modCount;
  }

  rollDefense(modcount) {
    if (this.rolledThisRound) return false;

    //console.log(modcount);

    this.rolledThisRound = true;
    return roll() <= this.defense + this.modCount;
  }

  rollBombard() {
    return false;
  }

  rollAA(maxRolls) {
    return [0, 0];
  }

  takeHit() {
    if (this.hp > 0) {
      this.hp -= 1;
      return true;
    }

    return false;
  }

  reset() {
    this.rolledThisRound = false;
  }

  clone() {
    return new this.__proto__.constructor(
      this.attack,
      this.defense,
      this.cost,
      this.domain,
      this.hp,
      this.isAttacker,
      this.modCount
    );
  }
}

export class InfantryUnit extends Unit {
  constructor(
    attack,
    defense,
    cost,
    domain,
    hp,
    isAttacker,
    modCount,
    hasArty
  ) {
    super(
      hasArty ? attack + 1 : attack,
      defense,
      cost,
      domain,
      hp,
      isAttacker,
      modCount
    );
  }
}

export class AirUnit extends Unit {
  get canBeHitByAA() {
    return true;
  }
}

export class AAUnit extends Unit {
  get removedLast() {
    return true;
  }

  rollAA(airUnitsRemaining) {
    let hits = 0;
    let i = 0;
    for (; i < Math.min(airUnitsRemaining, 3); i++) {
      if (roll() == 1) hits++;
    }

    return [hits, i];
  }
}

export class BombardUnit extends Unit {
  rollBombard() {
    return this.rollAttack();
  }
}
export class TwoHPUnit extends Unit {
  constructor(attack, defense, cost, domain, hp, isAttacker, modCount) {
    super(attack, defense, cost, domain, hp, isAttacker, modCount);
    this.hp = 2;
  }
}

export class BattleshipUnit extends BombardUnit {
  constructor(attack, defense, cost, domain, hp, isAttacker, modCount) {
    super(attack, defense, cost, domain, hp, isAttacker, modCount);
    this.hp = 2;
  }
}

export class DestroyerUnit extends Unit {
  get detectsSubmarines() {
    return true;
  }
}

export class SubmarineUnit extends Unit {
  get isSubmarine() {
    return true;
  }
}

export class TransportUnit extends Unit {
  get removedLast() {
    return true;
  }
}
