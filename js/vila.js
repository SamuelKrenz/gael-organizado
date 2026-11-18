// A campanha usa os motores dos jogos da área de prática.
const villagePlaces = [
  { id:'station', name:'Estação dos Sons', icon:'🚂', color:'#247a63', art:'estacao', x:25, y:69,
    missions:[
      { id:'train', name:'Faça o trem partir', game:'hearletter', deck:['M','F','S','A','L'],
        reward:'O trem chegou! A Oficina de Sílabas abriu.' },
      { id:'signs', name:'Leia as placas da estação', game:'sequence', deck:[2,5,12,15,21],
        reward:'As placas da estação estão prontas.' }
    ] },
  { id:'workshop', name:'Oficina de Sílabas', icon:'🧳', color:'#a45724', art:'oficina', x:53, y:51,
    missions:[
      { id:'luggage', name:'Monte a mala da viagem', game:'syllbuild', deck:['MALA','PIPA','BOLA','BOTA','CAMA'],
        reward:'A mala está no vagão. O Correio da Vila abriu!' },
      { id:'parts', name:'Encontre as peças pelo som', game:'hearsyll', deck:['MA','PA','BO','LA','TO'],
        reward:'As peças da oficina estão organizadas.' }
    ] },
  { id:'post', name:'Correio da Vila', icon:'✉️', color:'#63508d', art:'correio', x:83, y:62,
    missions:[
      { id:'delivery', name:'Entregue as encomendas', game:'delivery', deck:['MALA','BOLA','PIPA','VACA','JANELA'],
        reward:'As encomendas chegaram. O Mercado das Palavras abriu!' },
      { id:'parcel', name:'Prepare as próximas entregas', game:'delivery', deck:['SAPO','BOLO','UVA','CAVALO','LATA'],
        reward:'As próximas encomendas foram entregues.' }
    ] },
  { id:'market', name:'Mercado das Palavras', icon:'🧺', color:'#8d4c53',
    missions:[
      { id:'shopping', name:'Ajude com as compras', game:'shopping', deck:['UVA','BOLO','BANANA','TOMATE','BOTA'],
        reward:'As compras estão na cesta. A Casa das Palavras abriu!' }
    ] },
  { id:'secret', name:'Casa das Palavras', icon:'🔑', color:'#4d6792',
    missions:[
      { id:'secret', name:'Descubra as palavras secretas', game:'hangman', deck:['GATO','LUA','CASA','PÉ','FOCA'],
        reward:'Você completou o quadro de palavras da vila!' }
    ] }
];

const villageGames = [
  { id:'delivery', t:'Entregue as encomendas', e:'✉️' },
  { id:'shopping', t:'Ajude com as compras', e:'🧺' }
];

