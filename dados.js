// Gerado por OS/6_Combate/gerar.py a partir de OS/7_Base. Não editar à mão.
window.BANCO = {
 "armas": [
  {
   "id": "p45",
   "nome": ".45",
   "sub": "pistola",
   "tipo": "pistola",
   "base": 15,
   "dano": "1D10+2",
   "defeito": 100,
   "frequente": true,
   "fonte": "LG 402"
  },
  {
   "id": "p38",
   "nome": ".38",
   "sub": "pistola",
   "tipo": "pistola",
   "base": 15,
   "dano": "1D10",
   "defeito": 99,
   "frequente": true,
   "fonte": "LG 402"
  },
  {
   "id": "p32",
   "nome": ".32",
   "sub": "pistola",
   "tipo": "pistola",
   "base": 15,
   "dano": "1D8",
   "defeito": 99,
   "frequente": true,
   "fonte": "LG 402"
  },
  {
   "id": "tho",
   "nome": "Thompson",
   "sub": "submetralhadora",
   "tipo": "auto",
   "base": 20,
   "dano": "1D10+2",
   "defeito": 96,
   "frequente": true,
   "fonte": "LG 404"
  },
  {
   "id": "e12",
   "nome": "Calibre 12",
   "sub": "espingarda",
   "tipo": "espingarda",
   "faixas": [
    10,
    20,
    50
   ],
   "danos": [
    "4D6",
    "2D6",
    "1D6"
   ],
   "defeito": 100,
   "longa": true,
   "frequente": true,
   "fonte": "LG 403"
  },
  {
   "id": "p22",
   "nome": ".22 curta",
   "sub": "pistola",
   "tipo": "pistola",
   "base": 10,
   "dano": "1D6",
   "defeito": 100,
   "frequente": false,
   "fonte": "LG 402"
  },
  {
   "id": "ser",
   "nome": "Calibre 12 serrada",
   "sub": "espingarda",
   "tipo": "espingarda",
   "faixas": [
    5,
    10
   ],
   "danos": [
    "4D6",
    "1D6"
   ],
   "defeito": 100,
   "frequente": false,
   "fonte": "LG 403"
  },
  {
   "id": "rif",
   "nome": "Rifle .30-06",
   "sub": "rifle",
   "tipo": "rifle",
   "base": 110,
   "dano": "2D6+4",
   "defeito": 100,
   "longa": true,
   "frequente": false,
   "fonte": "LG 403"
  },
  {
   "id": "r303",
   "nome": "Rifle .303",
   "sub": "rifle (Lee-Enfield)",
   "tipo": "rifle",
   "base": 110,
   "dano": "2D6+4",
   "defeito": 100,
   "longa": true,
   "frequente": false,
   "fonte": "LG 403"
  }
 ],
 "personagens": [
  {
   "id": "ahmet-saad",
   "nome": "Ahmet Saad",
   "grupo": "pj",
   "des": null,
   "corpo": null,
   "dano_extra": null,
   "pericias": {},
   "armas": [],
   "talentos": [],
   "lutar": null,
   "esquivar": null,
   "fonte": "OS/2_Personagens/pjs.md",
   "jogador": "Rodrigo"
  },
  {
   "id": "associado-da-mafia",
   "nome": "Associado da Máfia",
   "grupo": "lacaio",
   "des": 45,
   "corpo": 0,
   "dano_extra": "0",
   "pericias": {
    "pistola": 30
   },
   "armas": [
    "p32"
   ],
   "talentos": [],
   "lutar": 35,
   "esquivar": 25,
   "fonte": "Serpente p. 75",
   "grupos": [
    "Máfia"
   ],
   "pv": 10
  },
  {
   "id": "canning",
   "nome": "Canning",
   "grupo": "pnj",
   "des": 75,
   "corpo": 3,
   "dano_extra": "2D6",
   "pericias": {},
   "armas": [],
   "talentos": [],
   "lutar": 100,
   "esquivar": 100,
   "fonte": "Serpente p. 241 e 242",
   "grupos": [
    "Caduceus",
    "Cena: Fuga do Edifício Meadham"
   ],
   "pv": 18,
   "nota": "Armadura 5."
  },
  {
   "id": "capataz",
   "nome": "Capataz",
   "grupo": "pnj",
   "des": 40,
   "corpo": 4,
   "dano_extra": "3D6",
   "pericias": {},
   "armas": [],
   "talentos": [],
   "lutar": 40,
   "esquivar": 20,
   "fonte": "Serpente p. 151",
   "grupos": [
    "Monstros"
   ],
   "pv": 26,
   "nota": "Armadura 4."
  },
  {
   "id": "capitao-lancaster",
   "nome": "Capitão Lancaster",
   "grupo": "pnj",
   "des": 60,
   "corpo": 1,
   "dano_extra": "1D4",
   "pericias": {
    "pistola": 70,
    "rifle": 70
   },
   "armas": [
    "r303",
    "p45"
   ],
   "talentos": [],
   "lutar": 65,
   "esquivar": 50,
   "fonte": "fichas do Arthur",
   "grupos": [
    "Caduceus"
   ],
   "pv": 15
  },
  {
   "id": "chris-odonnel",
   "nome": "Chris O'Donnel",
   "grupo": "pj",
   "des": null,
   "corpo": 2,
   "dano_extra": null,
   "pericias": {},
   "armas": [
    "p38"
   ],
   "talentos": [],
   "lutar": null,
   "esquivar": null,
   "fonte": "OS/2_Personagens/pjs.md",
   "jogador": "Bruno",
   "nota": "Golpes Fortes."
  },
  {
   "id": "cultista",
   "nome": "Cultista",
   "grupo": "lacaio",
   "des": 55,
   "corpo": 0,
   "dano_extra": "0",
   "pericias": {
    "pistola": 45,
    "espingarda": 45
   },
   "armas": [
    "p38",
    "p22",
    "e12"
   ],
   "talentos": [],
   "lutar": 55,
   "esquivar": 35,
   "fonte": "molde Comum em campanha/regras/lacaios.md",
   "pv": 12
  },
  {
   "id": "cao-serpente",
   "nome": "Cão-Serpente",
   "grupo": "pnj",
   "des": 80,
   "corpo": 2,
   "dano_extra": "1D6",
   "pericias": {},
   "armas": [],
   "talentos": [],
   "lutar": 50,
   "esquivar": 40,
   "fonte": "PDF de mesa do Arthur (Itens e monstros)",
   "grupos": [
    "Monstros"
   ],
   "pv": 15,
   "nota": "Armadura 2."
  },
  {
   "id": "dolores-parville",
   "nome": "Dolores Parville",
   "grupo": "pnj",
   "des": 75,
   "corpo": 0,
   "dano_extra": "0",
   "pericias": {
    "pistola": 40
   },
   "armas": [
    "p22"
   ],
   "talentos": [],
   "lutar": 25,
   "esquivar": 40,
   "fonte": "Serpente p. 74",
   "grupos": [
    "Caduceus"
   ],
   "pv": 12
  },
  {
   "id": "victor-goncalves",
   "nome": "Dr. Victor Gonçalves",
   "grupo": "pnj",
   "des": 65,
   "corpo": 0,
   "dano_extra": "0",
   "pericias": {
    "pistola": 50
   },
   "armas": [
    "p38"
   ],
   "talentos": [],
   "lutar": 35,
   "esquivar": 45,
   "fonte": "Serpente p. 242 e 243",
   "grupos": [
    "Caduceus"
   ],
   "pv": 15
  },
  {
   "id": "filemone-casale",
   "nome": "Filemone Casale",
   "grupo": "pnj",
   "des": 60,
   "corpo": 2,
   "dano_extra": "1D6",
   "pericias": {
    "espingarda": 50
   },
   "armas": [
    "e12"
   ],
   "talentos": [],
   "lutar": 80,
   "esquivar": 30,
   "fonte": "Serpente p. 75",
   "grupos": [
    "Máfia",
    "Cena: Fuga do Edifício Meadham"
   ],
   "pv": 15
  },
  {
   "id": "frank-caroll",
   "nome": "Frank Caroll",
   "grupo": "pnj",
   "des": 70,
   "corpo": 1,
   "dano_extra": "1D4",
   "pericias": {
    "pistola": 70,
    "auto": 50
   },
   "armas": [
    "p32",
    "tho"
   ],
   "talentos": [],
   "lutar": 60,
   "esquivar": 50,
   "fonte": "Serpente p. 74",
   "grupos": [
    "Máfia"
   ],
   "pv": 14
  },
  {
   "id": "frank-de-luca",
   "nome": "Frank De Luca",
   "grupo": "pnj",
   "des": 70,
   "corpo": 1,
   "dano_extra": "1D4",
   "pericias": {
    "pistola": 55
   },
   "armas": [
    "p38"
   ],
   "talentos": [],
   "lutar": 75,
   "esquivar": 50,
   "fonte": "Serpente p. 243 e 244",
   "grupos": [
    "Caduceus",
    "Serpentoides"
   ],
   "pv": 13,
   "nota": "Armadura 1."
  },
  {
   "id": "frei-raul",
   "nome": "Frei Raul",
   "grupo": "pj",
   "des": null,
   "corpo": null,
   "dano_extra": null,
   "pericias": {},
   "armas": [],
   "talentos": [],
   "lutar": null,
   "esquivar": null,
   "fonte": "memória do Arthur (conferir o 80 de Arremessar na ficha)",
   "telecinese": 80,
   "arremessar": 80,
   "jogador": "Tadeu",
   "nota": "Voluntarioso."
  },
  {
   "id": "giovanni-bonventre",
   "nome": "Giovanni Bonventre",
   "grupo": "pnj",
   "des": 65,
   "corpo": 1,
   "dano_extra": "1D4",
   "pericias": {
    "pistola": 50,
    "auto": 40
   },
   "armas": [
    "p38",
    "tho"
   ],
   "talentos": [],
   "lutar": 70,
   "esquivar": 60,
   "fonte": "Serpente p. 75",
   "grupos": [
    "Máfia"
   ],
   "pv": 13
  },
  {
   "id": "giuseppe-bonanno",
   "nome": "Giuseppe Bonanno",
   "grupo": "pnj",
   "des": 60,
   "corpo": 1,
   "dano_extra": "1D4",
   "pericias": {
    "pistola": 65,
    "auto": 65
   },
   "armas": [
    "p38",
    "tho"
   ],
   "talentos": [],
   "lutar": 80,
   "esquivar": 50,
   "fonte": "Serpente p. 74",
   "grupos": [
    "Máfia"
   ],
   "pv": 12
  },
  {
   "id": "hector-castro",
   "nome": "Héctor Castro",
   "grupo": "pnj",
   "des": null,
   "corpo": null,
   "dano_extra": null,
   "pericias": {},
   "armas": [],
   "talentos": [],
   "lutar": null,
   "esquivar": null,
   "fonte": "OS/2_Personagens/npcs.md",
   "grupos": [
    "Cena: Fuga do Edifício Meadham"
   ]
  },
  {
   "id": "javier-zapata",
   "nome": "Javier Zapata",
   "grupo": "pj",
   "des": null,
   "corpo": null,
   "dano_extra": null,
   "pericias": {},
   "armas": [],
   "talentos": [],
   "lutar": null,
   "esquivar": null,
   "fonte": "OS/2_Personagens/pjs.md",
   "jogador": "Lucas",
   "nota": "Sombra: dois ataques surpresa se não for visto."
  },
  {
   "id": "lacaio-medio",
   "nome": "Lacaio médio",
   "grupo": "lacaio",
   "des": 45,
   "corpo": 0,
   "dano_extra": "0",
   "pericias": {
    "pistola": 40,
    "auto": 30,
    "espingarda": 40
   },
   "armas": [
    "p32",
    "tho",
    "e12"
   ],
   "talentos": [],
   "lutar": 35,
   "esquivar": 25,
   "fonte": "Pulp p. 64",
   "pv": 10
  },
  {
   "id": "phillip-conners",
   "nome": "Phillip Conners",
   "grupo": "pnj",
   "des": 60,
   "corpo": 1,
   "dano_extra": "1D4",
   "pericias": {},
   "armas": [],
   "talentos": [],
   "lutar": 25,
   "esquivar": 30,
   "fonte": "Serpente p. 74",
   "grupos": [
    "Caduceus"
   ],
   "pv": 13
  },
  {
   "id": "phillipe-rappa",
   "nome": "Phillipe Rappa",
   "grupo": "pnj",
   "des": 55,
   "corpo": 0,
   "dano_extra": "0",
   "pericias": {
    "pistola": 55,
    "auto": 40
   },
   "armas": [
    "p38",
    "tho"
   ],
   "talentos": [],
   "lutar": 40,
   "esquivar": 45,
   "fonte": "Serpente p. 74",
   "grupos": [
    "Máfia"
   ],
   "pv": 13
  },
  {
   "id": "policial",
   "nome": "Policial",
   "grupo": "lacaio",
   "des": 55,
   "corpo": 0,
   "dano_extra": "0",
   "pericias": {
    "pistola": 45
   },
   "armas": [
    "p38"
   ],
   "talentos": [],
   "lutar": 55,
   "esquivar": 35,
   "fonte": "molde Comum em campanha/regras/lacaios.md",
   "pv": 12
  },
  {
   "id": "fuga-do-edificio-meadham-policial-atirador-2",
   "nome": "Policial · Atirador ×2",
   "grupo": "cena",
   "des": 60,
   "corpo": 0,
   "dano_extra": "0",
   "pericias": {
    "pistola": 60
   },
   "armas": [
    "p38"
   ],
   "talentos": [],
   "lutar": 45,
   "esquivar": 40,
   "fonte": "molde Comum em campanha/regras/lacaios.md",
   "grupos": [
    "Cena: Fuga do Edifício Meadham"
   ],
   "pv": 11,
   "nota": "Molde Atirador."
  },
  {
   "id": "richard-hawkes",
   "nome": "Richard Hawkes",
   "grupo": "pj",
   "des": null,
   "corpo": null,
   "dano_extra": null,
   "pericias": {
    "pistola": 97
   },
   "armas": [
    "p45",
    "p45"
   ],
   "talentos": [
    "rapido"
   ],
   "lutar": null,
   "esquivar": null,
   "fonte": "OS/2_Personagens/PJs/Richard-Hawkes/lidando-com-hawkes.md",
   "tiros": 3,
   "duas_armas": true,
   "jogador": "Matheus"
  },
  {
   "id": "sashannal",
   "nome": "Sashannal",
   "grupo": "pnj",
   "des": 75,
   "corpo": 2,
   "dano_extra": "1D6",
   "pericias": {},
   "armas": [],
   "talentos": [],
   "lutar": 80,
   "esquivar": 60,
   "fonte": "Serpente p. 244 e 245",
   "grupos": [
    "Noite Interior",
    "Serpentoides"
   ],
   "pv": 17,
   "nota": "Armadura 1."
  },
  {
   "id": "seguranca-da-caduceus",
   "nome": "Segurança da Caduceus",
   "grupo": "lacaio",
   "des": 55,
   "corpo": 0,
   "dano_extra": "0",
   "pericias": {
    "pistola": 45,
    "auto": 45
   },
   "armas": [
    "p38",
    "tho"
   ],
   "talentos": [],
   "lutar": 55,
   "esquivar": 35,
   "fonte": "molde Comum em campanha/regras/lacaios.md",
   "grupos": [
    "Caduceus"
   ],
   "pv": 12
  },
  {
   "id": "fuga-do-edificio-meadham-seguranca-da-caduceus-atirador-3",
   "nome": "Segurança da Caduceus · Atirador ×3",
   "grupo": "cena",
   "des": 60,
   "corpo": 0,
   "dano_extra": "0",
   "pericias": {
    "pistola": 60,
    "auto": 60
   },
   "armas": [
    "p38",
    "tho"
   ],
   "talentos": [],
   "lutar": 45,
   "esquivar": 40,
   "fonte": "molde Comum em campanha/regras/lacaios.md",
   "grupos": [
    "Cena: Fuga do Edifício Meadham"
   ],
   "pv": 11,
   "nota": "Molde Atirador."
  },
  {
   "id": "serpentoide",
   "nome": "Serpentoide",
   "grupo": "lacaio",
   "des": 55,
   "corpo": 0,
   "dano_extra": "0",
   "pericias": {
    "pistola": 45
   },
   "armas": [],
   "talentos": [],
   "lutar": 55,
   "esquivar": 35,
   "fonte": "molde Comum em campanha/regras/lacaios.md",
   "pv": 12,
   "nota": "Armadura 1."
  },
  {
   "id": "fuga-do-edificio-meadham-serpentoide-capitao-5",
   "nome": "Serpentoide · Capitão ×5",
   "grupo": "cena",
   "des": 60,
   "corpo": 1,
   "dano_extra": "1D4",
   "pericias": {
    "pistola": 70
   },
   "armas": [],
   "talentos": [],
   "lutar": 65,
   "esquivar": 50,
   "fonte": "molde Comum em campanha/regras/lacaios.md",
   "grupos": [
    "Cena: Fuga do Edifício Meadham"
   ],
   "pv": 15,
   "nota": "Molde Capitão. Armadura 1."
  },
  {
   "id": "soldado",
   "nome": "Soldado",
   "grupo": "lacaio",
   "des": 55,
   "corpo": 0,
   "dano_extra": "0",
   "pericias": {
    "rifle": 45
   },
   "armas": [
    "r303"
   ],
   "talentos": [],
   "lutar": 55,
   "esquivar": 35,
   "fonte": "molde Comum em campanha/regras/lacaios.md",
   "pv": 12
  },
  {
   "id": "soldado-da-mafia",
   "nome": "Soldado da Máfia",
   "grupo": "lacaio",
   "des": 55,
   "corpo": 0,
   "dano_extra": "0",
   "pericias": {
    "pistola": 45,
    "auto": 45
   },
   "armas": [
    "tho",
    "p38"
   ],
   "talentos": [],
   "lutar": 55,
   "esquivar": 35,
   "fonte": "molde Comum em campanha/regras/lacaios.md",
   "grupos": [
    "Máfia"
   ],
   "pv": 12
  },
  {
   "id": "fuga-do-edificio-meadham-soldado-da-mafia-atirador-2",
   "nome": "Soldado da Máfia · Atirador ×2",
   "grupo": "cena",
   "des": 60,
   "corpo": 0,
   "dano_extra": "0",
   "pericias": {
    "pistola": 60,
    "auto": 60
   },
   "armas": [
    "tho",
    "p38"
   ],
   "talentos": [],
   "lutar": 45,
   "esquivar": 40,
   "fonte": "molde Comum em campanha/regras/lacaios.md",
   "grupos": [
    "Cena: Fuga do Edifício Meadham"
   ],
   "pv": 11,
   "nota": "Molde Atirador."
  },
  {
   "id": "venere-ardito",
   "nome": "Venere Ardito",
   "grupo": "pnj",
   "des": 90,
   "corpo": 0,
   "dano_extra": "0",
   "pericias": {
    "pistola": 35
   },
   "armas": [
    "p32"
   ],
   "talentos": [],
   "lutar": 25,
   "esquivar": 90,
   "fonte": "Serpente p. 75",
   "grupos": [
    "Máfia"
   ],
   "pv": 9
  },
  {
   "id": "vincent-moretti",
   "nome": "Vincent Moretti",
   "grupo": "pj",
   "des": null,
   "corpo": null,
   "dano_extra": null,
   "pericias": {},
   "armas": [],
   "talentos": [],
   "lutar": null,
   "esquivar": null,
   "fonte": "OS/2_Personagens/pjs.md",
   "jogador": "Luiz"
  }
 ]
};
