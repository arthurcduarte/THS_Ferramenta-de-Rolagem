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
   "municao": 7,
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
   "id": "richard-hawkes",
   "nome": "Richard Hawkes",
   "grupo": "pj",
   "des": 95,
   "corpo": 1,
   "dano_extra": "1D4",
   "pericias": {
    "pistola": 97,
    "espingarda": 40,
    "rifle": 40
   },
   "armas": [
    "p45",
    "p45"
   ],
   "talentos": [
    "rapido"
   ],
   "lutar": 95,
   "esquivar": 80,
   "fonte": "ficha.yaml do PJ",
   "pv": 30,
   "arremessar": 40,
   "tiros": 3,
   "duas_armas": true,
   "jogador": "Matheus",
   "nota": "Calejado. Armadura 1."
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
