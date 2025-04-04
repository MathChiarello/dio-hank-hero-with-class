class Hero {
  constructor(nameHero, age, typeHero) {
    const validTypes = ["mago", "guerreiro", "monge", "ninja"];

    if (!validTypes.includes(typeHero)) {
      throw new Error(
        "Tipo de heroi inválido, por favor escolha entre: " +
          validTypes.join(", ")
      );
    }

    this.nameHero = nameHero;
    this.age = age;
    this.typeHero = typeHero;
  }

  atack() {
    const typeAtacks = {
      mago: "magia",
      guerreiro: "espada",
      monge: "artes marciais",
      ninja: "shuriken",
    };

    return `o ${this.typeHero} atacou usando ${typeAtacks[this.typeHero]}`;
  }
}

matheus = new Hero("Chiarello", 25, "ninja");
console.log(matheus.atack());
