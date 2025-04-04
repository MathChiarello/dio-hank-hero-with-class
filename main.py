class Hero:
    def __init__(self, nameHero: str, ageHero: int, typeHero: str):
        validTypes = ["Mago", "Guerreiro", "Monge", "Ninja"]
        if typeHero not in validTypes:
            raise ValueError(
              f"Tipo inválido: {typeHero}. Tipos válidos: {validTypes}"
            )

        self.nameHero = nameHero
        self.ageHero = ageHero
        self.typeHero = typeHero

    def attack(self):
        typeAttacks = {
          "Mago": "Magia",
          "Guerreiro": "Espada",
          "Monge": "Artes Marciais",
          "Ninja": "Shuriken"
        }

        return f"{self.typeHero} ataca usando {typeAttacks[self.typeHero]}!"
