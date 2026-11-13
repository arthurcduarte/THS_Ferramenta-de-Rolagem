// Gerado por OS/6_Combate/gerar.py. Não editar à mão.
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
  }
 ],
 "personagens": [
  {
   "id": "ahmet",
   "nome": "Ahmet Saad",
   "grupo": "pj",
   "jogador": "Rodrigo",
   "des": null,
   "corpo": null,
   "dano_extra": null,
   "pericias": {},
   "armas": [],
   "talentos": [],
   "lutar": null,
   "esquivar": null,
   "fonte": "OS/2_Personagens/pjs.md"
  },
  {
   "id": "odonnel",
   "nome": "Chris O'Donnel",
   "grupo": "pj",
   "jogador": "Bruno",
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
   "nota": "Golpes Fortes: 10 de Sorte para +1 dado de dano no corpo a corpo.",
   "fonte": "OS/2_Personagens/pjs.md"
  },
  {
   "id": "raul",
   "nome": "Frei Raul",
   "grupo": "pj",
   "jogador": "Tadeu",
   "telecinese": 80,
   "arremessar": 80,
   "des": null,
   "corpo": null,
   "dano_extra": null,
   "pericias": {},
   "armas": [],
   "talentos": [],
   "lutar": null,
   "esquivar": null,
   "nota": "Telecinese 80. Voluntarioso.",
   "fonte": "OS/2_Personagens/pjs.md"
  },
  {
   "id": "zapata",
   "nome": "Javier Zapata",
   "grupo": "pj",
   "jogador": "Lucas",
   "des": null,
   "corpo": null,
   "dano_extra": null,
   "pericias": {},
   "armas": [],
   "talentos": [],
   "lutar": null,
   "esquivar": null,
   "nota": "Sombra: dois ataques surpresa se não for visto.",
   "fonte": "OS/2_Personagens/pjs.md"
  },
  {
   "id": "hawkes",
   "nome": "Richard Hawkes",
   "grupo": "pj",
   "jogador": "Matheus",
   "des": null,
   "corpo": null,
   "dano_extra": null,
   "pericias": {
    "pistola": 97
   },
   "armas": [
    "p45"
   ],
   "duas_armas": true,
   "tiros": 3,
   "talentos": [
    "rapido"
   ],
   "lutar": null,
   "esquivar": null,
   "fonte": "OS/2_Personagens/PJs/Richard-Hawkes/lidando-com-hawkes.md"
  },
  {
   "id": "moretti",
   "nome": "Vincent Moretti",
   "grupo": "pj",
   "jogador": "Luiz",
   "des": null,
   "corpo": null,
   "dano_extra": null,
   "pericias": {},
   "armas": [],
   "talentos": [],
   "lutar": null,
   "esquivar": null,
   "fonte": "OS/2_Personagens/pjs.md"
  },
  {
   "id": "lacaio-medio",
   "nome": "Lacaio médio",
   "grupo": "lacaio",
   "des": 45,
   "corpo": 0,
   "dano_extra": "0",
   "pv": 10,
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
   "fonte": "Pulp 64"
  },
  {
   "id": "seguranca-caduceus",
   "nome": "Segurança da Caduceus",
   "grupo": "lacaio",
   "des": 45,
   "corpo": 0,
   "dano_extra": "0",
   "pv": 10,
   "pericias": {
    "pistola": 30
   },
   "armas": [
    "p32"
   ],
   "talentos": [],
   "lutar": 35,
   "esquivar": 25,
   "fonte": "Serpente 74",
   "grupos": [
    "Caduceus"
   ]
  },
  {
   "id": "associado-mafia",
   "nome": "Associado da Máfia",
   "grupo": "lacaio",
   "des": 45,
   "corpo": 0,
   "dano_extra": "0",
   "pv": 10,
   "pericias": {
    "pistola": 30
   },
   "armas": [
    "p32"
   ],
   "talentos": [],
   "lutar": 35,
   "esquivar": 25,
   "fonte": "Serpente 74",
   "grupos": [
    "Máfia"
   ]
  },
  {
   "id": "soldado-mafia",
   "nome": "Soldado da Máfia",
   "grupo": "lacaio",
   "des": 45,
   "corpo": 0,
   "dano_extra": "0",
   "pv": 10,
   "pericias": {
    "auto": 30
   },
   "armas": [
    "tho"
   ],
   "talentos": [],
   "lutar": 35,
   "esquivar": 25,
   "fonte": "Serpente 74",
   "grupos": [
    "Máfia"
   ]
  },
  {
   "id": "bonanno",
   "nome": "Giuseppe Bonanno",
   "grupo": "pnj",
   "des": 60,
   "corpo": 1,
   "dano_extra": "1D4",
   "pv": 12,
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
   "fonte": "Serpente 74",
   "grupos": [
    "Máfia"
   ]
  },
  {
   "id": "rappa",
   "nome": "Phillipe Rappa",
   "grupo": "pnj",
   "des": 55,
   "corpo": 0,
   "dano_extra": "0",
   "pv": 13,
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
   "fonte": "Serpente 74",
   "grupos": [
    "Máfia"
   ]
  },
  {
   "id": "frank-caroll",
   "nome": "Frank Caroll",
   "grupo": "pnj",
   "des": 70,
   "corpo": 1,
   "dano_extra": "1D4",
   "pv": 14,
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
   "fonte": "Serpente 74",
   "grupos": [
    "Máfia"
   ]
  }
 ]
};
