(self.webpackChunkpokedex_angular=self.webpackChunkpokedex_angular||[]).push([[10],{5010:(C,d,a)=>{"use strict";a.r(d),a.d(d,{PokemonDetailsModule:()=>ne});var p=a(4553),g=a(4466);const l={id:0,name:"MissingNo.",genus:"Pok\xe9mon ???",sprite:"./assets/images/missingno.png",height:10,weight:15983,types:[{name:"bird"},{name:"normal"}],stats:[{name:"hp",value:33},{name:"attack",value:136},{name:"defense",value:0},{name:"special-attack",value:6},{name:"special-defense",value:6},{name:"speed",value:29}],flavorTexts:[{versionNames:["green"],text:"\u3051\u3064\u3070\u3093"},{versionNames:["red"],text:"???"},{versionNames:["blue"],text:"\u30b3\u30e1\u30f3\u30c8 \u3055\u304f\u305b\u3044\u3061\u3085\u3046"},{versionNames:["yellow"],text:"..."}]};var c=a(7340);const O=(0,c.X$)("fadeIn",[(0,c.eR)(":enter",[(0,c.oB)({opacity:0}),(0,c.jt)(250,(0,c.oB)({opacity:1}))])]);var e=a(8256),M=a(4004),k=a(2340),f=a(3258),v=a.n(f);const h_mapFrom=n=>{const{id:o,name:t,pokemon_v2_pokemonspeciesflavortexts:i,pokemon_v2_pokemonspeciesnames:m,pokemon_v2_pokemons:_}=n;let u=[];return i.forEach(s=>{const r=u.find(te=>te.text===s.flavor_text.replace(/\f/g," "));r?r.versionNames.push(s.pokemon_v2_version.name):u.push({text:s.flavor_text.replace(/\f/g," "),versionNames:[s.pokemon_v2_version.name]})}),{id:o,name:t,genus:m[0].genus,weight:_[0].weight,height:_[0].height,sprite:`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${o.toString().padStart(3,"0")}.png`,flavorTexts:u,types:_[0].pokemon_v2_pokemontypes.map(({pokemon_v2_type:s})=>({name:s.name})),stats:_[0].pokemon_v2_pokemonstats.map(({base_stat:s,pokemon_v2_stat:r})=>({name:r.name,value:s}))}};var x=a(754);let y=(()=>{class n{constructor(t){this.apollo=t}getPokemonSpecieByPokemonId(t){return this.apollo.query({query:v(),variables:{pokemonId:t,languageId:k.N.languageId}}).pipe((0,M.U)(({data:i})=>i.pokemon_v2_pokemonspecies.map(h_mapFrom)[0]))}}return n.\u0275fac=function(t){return new(t||n)(e.LFG(x._M))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var P=a(6895),b=a(9123),S=a(9480);let N=(()=>{class n{transform(t){return t.replace(/-/g," ").replace(/lets/g,"let's")}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275pipe=e.Yjl({name:"pokedexVersionName",type:n,pure:!0}),n})(),Z=(()=>{class n{transform(t){return t/10+"m"}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275pipe=e.Yjl({name:"pokemonHeight",type:n,pure:!0}),n})();var w=a(3497),T=a(3708);let I=(()=>{class n{transform(t){if("en"===k.N.language)switch(t){case"special-attack":return"spcl. atk.";case"special-defense":return"spcl. def.";default:return t}else switch(t){case"hp":return"ps";case"attack":return"ataque";case"defense":return"defensa";case"special-attack":return"at. esp.";case"special-defense":return"def. esp.";case"speed":return"velocidad";default:return"desconocido"}}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275pipe=e.Yjl({name:"pokemonStat",type:n,pure:!0}),n})(),A=(()=>{class n{transform(t){if("en"===k.N.language)return t;switch(t){case"bird":return"p\xe1jaro";case"bug":return"bicho";case"dark":return"siniestro";case"dragon":case"normal":return t;case"electric":return"electrico";case"fairy":return"hada";case"fighting":return"luchador";case"fire":return"fuego";case"flying":return"volador";case"ghost":return"fantasma";case"grass":return"hierba";case"ground":return"tierra";case"ice":return"hielo";case"poison":return"veneno";case"psychic":return"ps\xedquico";case"rock":return"roca";case"steel":return"acero";case"water":return"agua";default:return"desconocido"}}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275pipe=e.Yjl({name:"pokemonType",type:n,pure:!0}),n})(),F=(()=>{class n{transform(t){return t/10+"kg"}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275pipe=e.Yjl({name:"pokemonWeight",type:n,pure:!0}),n})();function Q(n,o){if(1&n&&(e.TgZ(0,"span"),e._uU(1),e.ALo(2,"pokemonNumber"),e.qZA()),2&n){const t=e.oxw();e.Q6J("@fadeIn",void 0),e.xp6(1),e.Oqu(e.lcZ(2,2,t.pokemonSpecie.id))}}function D(n,o){if(1&n&&e._UZ(0,"img",19),2&n){const t=e.oxw();e.Q6J("@fadeIn",void 0)("src",t.pokemonSpecie.sprite,e.LSH)("alt",t.pokemonSpecie.name)}}function q(n,o){1&n&&(e.TgZ(0,"span"),e._uU(1,"<"),e.qZA())}function J(n,o){if(1&n&&(e.TgZ(0,"span"),e._uU(1),e.ALo(2,"pokemonNumber"),e.qZA()),2&n){const t=e.oxw(2);e.Q6J("@fadeIn",void 0),e.xp6(1),e.hij(" ",e.lcZ(2,2,t.pokemonSpecie.id)," ")}}function j(n,o){if(1&n&&(e.TgZ(0,"div",20)(1,"a",21),e.YNc(2,q,2,0,"span",3),e.qZA(),e.TgZ(3,"div",22),e.YNc(4,J,3,4,"span",3),e.qZA(),e.TgZ(5,"a",21),e._uU(6,">"),e.qZA()()),2&n){const t=e.oxw();e.xp6(1),e.Udp("pointer-events",t.pokemonSpecie.id>=1?"auto":"none"),e.Q6J("routerLink","/pokemon/"+(t.pokemonSpecie.id-1)),e.xp6(1),e.Q6J("ngIf",t.pokemonSpecie.id-1>=1),e.xp6(2),e.Q6J("ngIf",!t.busy),e.xp6(1),e.Q6J("routerLink","/pokemon/"+(t.pokemonSpecie.id+1))}}function Y(n,o){if(1&n&&(e.TgZ(0,"span",23),e._uU(1),e.ALo(2,"pokemonName"),e.qZA()),2&n){const t=e.oxw();e.Q6J("@fadeIn",void 0),e.xp6(1),e.Oqu(e.lcZ(2,2,t.pokemonSpecie.name))}}function U(n,o){if(1&n&&(e.ynx(0),e.TgZ(1,"span",24),e._uU(2),e.ALo(3,"pokemonType"),e.qZA(),e.BQk()),2&n){const t=o.$implicit;e.xp6(1),e.Q6J("ngClass",t.name),e.xp6(1),e.Oqu(e.lcZ(3,2,t.name))}}function V(n,o){if(1&n&&(e.TgZ(0,"span"),e.YNc(1,U,4,4,"ng-container",14),e.qZA()),2&n){const t=e.oxw();e.Q6J("@fadeIn",void 0),e.xp6(1),e.Q6J("ngForOf",t.pokemonSpecie.types)}}function L(n,o){if(1&n&&(e.TgZ(0,"td",27),e._uU(1),e.ALo(2,"pokemonHeight"),e.qZA()),2&n){const t=e.oxw(2);e.Q6J("@fadeIn",void 0),e.xp6(1),e.hij(" ",e.lcZ(2,2,t.pokemonSpecie.height)," ")}}function B(n,o){if(1&n&&(e.TgZ(0,"tr")(1,"td",25),e._uU(2,"Height"),e.qZA(),e.YNc(3,L,3,4,"td",26),e.qZA()),2&n){const t=e.oxw();e.xp6(3),e.Q6J("ngIf",!t.busy)}}function $(n,o){if(1&n&&(e.TgZ(0,"td",27),e._uU(1),e.ALo(2,"pokemonWeight"),e.qZA()),2&n){const t=e.oxw(2);e.Q6J("@fadeIn",void 0),e.xp6(1),e.hij(" ",e.lcZ(2,2,t.pokemonSpecie.weight)," ")}}function H(n,o){if(1&n&&(e.TgZ(0,"tr")(1,"td",25),e._uU(2,"Weight"),e.qZA(),e.YNc(3,$,3,4,"td",26),e.qZA()),2&n){const t=e.oxw();e.xp6(3),e.Q6J("ngIf",!t.busy)}}function W(n,o){if(1&n&&(e.TgZ(0,"td",27),e._uU(1),e.qZA()),2&n){const t=e.oxw().$implicit;e.Q6J("@fadeIn",void 0),e.xp6(1),e.hij(" ",t.value," ")}}function z(n,o){if(1&n&&(e.TgZ(0,"tr")(1,"td",25),e._uU(2),e.ALo(3,"pokemonStat"),e.qZA(),e.YNc(4,W,2,2,"td",26),e.qZA()),2&n){const t=o.$implicit,i=e.oxw();e.xp6(2),e.Oqu(e.lcZ(3,2,t.name)),e.xp6(2),e.Q6J("ngIf",!i.busy)}}function G(n,o){1&n&&(e.TgZ(0,"span"),e._uU(1,"Loading... Don't turn off the power"),e.qZA())}function R(n,o){if(1&n&&(e.TgZ(0,"span"),e._uU(1),e.qZA()),2&n){const t=e.oxw();e.Q6J("@fadeIn",void 0),e.xp6(1),e.hij(" ",t.pokemonSpecie.genus," ")}}function X(n,o){if(1&n&&(e.ynx(0),e.TgZ(1,"h3",29),e._uU(2),e.ALo(3,"pokedexVersionName"),e.qZA(),e.BQk()),2&n){const t=o.$implicit;e.xp6(1),e.Q6J("ngClass",t),e.xp6(1),e.hij(" ",e.lcZ(3,2,t)," ")}}function E(n,o){if(1&n&&(e.ynx(0),e.YNc(1,X,4,4,"ng-container",14),e.TgZ(2,"p",28),e._uU(3),e.qZA(),e.BQk()),2&n){const t=o.$implicit;e.xp6(1),e.Q6J("ngForOf",t.versionNames),e.xp6(2),e.hij(" ",t.text," ")}}const K=function(n){return{"--hidden":n}},ee=[{path:"",component:(()=>{class n{constructor(t,i){this.route=t,this.pokemonSpecieService=i,this.pokemon={},this.pokemonSpecie={},this.busy=!0,this.error=!1}ngOnInit(){let t;this.route.params.subscribe(({id:i})=>{t=i?parseInt(i):0,this.pokemon.id=t,this.busy=!0,this.getPokemonSpecie(t)})}getPokemonSpecie(t){this.pokemonSpecieService.getPokemonSpecieByPokemonId(t).subscribe({next:i=>{this.pokemonSpecie=i||l},error:i=>{console.error(i),this.pokemonSpecie=l}}).add(()=>{this.busy=!1})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(p.gz),e.Y36(y))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-pokemon-details"]],decls:35,vars:14,consts:[[1,"pokemon-details"],[1,"breadcrumb"],["routerLink","/"],[4,"ngIf"],[1,"pokemon-details__content"],[1,"artwork"],["size","large"],[1,"artwork__image-placeholder"],["width","250","height","250",3,"src","alt",4,"ngIf"],["class","paginator",4,"ngIf"],[1,"details"],[1,"details__list","--visible"],["class","details__name",4,"ngIf"],[1,"stats"],[4,"ngFor","ngForOf"],[1,"more-details"],[1,"more-details__title"],[1,"more-details__content","--visible",3,"ngClass"],["routerLink","/",1,"button-theme","button-theme--black"],["width","250","height","250",3,"src","alt"],[1,"paginator"],[1,"paginator__button",3,"routerLink"],[1,"paginator__current-number"],[1,"details__name"],[1,"details__type",3,"ngClass"],[1,"stats__name"],["class","stats__value",4,"ngIf"],[1,"stats__value"],[1,"more-details__flavor-text"],[1,"more-details__version-name",3,"ngClass"]],template:function(t,i){1&t&&(e.TgZ(0,"section",0)(1,"div",1)(2,"span")(3,"a",2),e._uU(4,"Home"),e.qZA(),e._uU(5," / "),e.YNc(6,Q,3,4,"span",3),e.qZA()(),e.TgZ(7,"div",4)(8,"div",5)(9,"app-dialog-box",6)(10,"div",7),e.YNc(11,D,1,3,"img",8),e.qZA(),e.YNc(12,j,7,6,"div",9),e.qZA()(),e.TgZ(13,"div",10)(14,"app-dialog-box",6)(15,"ul",11)(16,"li"),e.YNc(17,Y,3,4,"span",12),e._uU(18,"\xa0 "),e.qZA(),e.TgZ(19,"li"),e.YNc(20,V,2,2,"span",3),e._uU(21," \xa0 "),e.qZA()(),e.TgZ(22,"table",13),e.YNc(23,B,4,1,"tr",3),e.YNc(24,H,4,1,"tr",3),e.YNc(25,z,5,4,"tr",14),e.qZA()()(),e.TgZ(26,"div",15)(27,"app-dialog-box",6)(28,"h2",16),e.YNc(29,G,2,0,"span",3),e.YNc(30,R,2,2,"span",3),e.qZA(),e.TgZ(31,"div",17),e.YNc(32,E,4,2,"ng-container",14),e.TgZ(33,"a",18),e._uU(34,"Go Back"),e.qZA()()()()()()),2&t&&(e.xp6(6),e.Q6J("ngIf",!i.busy),e.xp6(5),e.Q6J("ngIf",!i.busy),e.xp6(1),e.Q6J("ngIf",!i.busy),e.xp6(5),e.Q6J("ngIf",!i.busy),e.xp6(3),e.Q6J("ngIf",!i.busy),e.xp6(3),e.Q6J("ngIf",!!i.pokemonSpecie.height),e.xp6(1),e.Q6J("ngIf",!!i.pokemonSpecie.weight),e.xp6(1),e.Q6J("ngForOf",i.pokemonSpecie.stats),e.xp6(4),e.Q6J("ngIf",i.busy),e.xp6(1),e.Q6J("ngIf",!i.busy&&i.pokemonSpecie),e.xp6(1),e.Q6J("ngClass",e.VKq(12,K,i.busy)),e.xp6(1),e.Q6J("ngForOf",i.pokemonSpecie.flavorTexts))},dependencies:[p.yS,P.mk,P.sg,P.O5,b.y,S.Q,N,Z,w.o,T.p,I,A,F],styles:['@import"https://fonts.googleapis.com/css2?family=Roboto&display=swap";@font-face{font-family:pokemon-gb;src:url(pokemon-gb.d3cbb610bbe0be9f.ttf) format("embedded-opentype"),url(pokemon-gb.d3cbb610bbe0be9f.ttf) format("woff2"),url(pokemon-gb.d3cbb610bbe0be9f.ttf) format("woff"),url(pokemon-gb.d3cbb610bbe0be9f.ttf) format("truetype"),url(pokemon-gb.d3cbb610bbe0be9f.ttf) format("svg")}.pokemon-details[_ngcontent-%COMP%]{max-width:700px;margin:0 auto}.pokemon-details[_ngcontent-%COMP%]   .breadcrumb[_ngcontent-%COMP%]{display:flex;align-items:center;height:50px}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]{justify-content:center;padding:0 0 2em;transition:.75s;display:grid;grid-template-rows:repeat(2,auto);grid-template-columns:1fr 1fr;column-gap:1em;row-gap:1em}@media only screen and (min-width: 768px) and (max-width: 991.98px){.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]{grid-template-columns:repeat(2,1fr);padding:2em 1em}}@media only screen and (max-width:767.98px){.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]{grid-template-rows:repeat(3,auto);grid-template-columns:1fr}}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .artwork[_ngcontent-%COMP%]{grid-row-start:1}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .artwork__image-placeholder[_ngcontent-%COMP%]{height:250px;width:250px;margin:0 auto}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .artwork[_ngcontent-%COMP%]   .paginator[_ngcontent-%COMP%]{padding-top:6px;line-height:1.1rem;display:flex;align-items:center;justify-content:space-evenly}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .artwork[_ngcontent-%COMP%]   .paginator__current-number[_ngcontent-%COMP%]{width:56px;height:23px;display:flex;align-items:center;justify-content:center}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .artwork[_ngcontent-%COMP%]   .paginator__button[_ngcontent-%COMP%]{text-decoration:none;color:#000;width:30px;height:30px;text-align:center;line-height:26px;transition:.25s}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .artwork[_ngcontent-%COMP%]   .paginator__button[_ngcontent-%COMP%]:hover{color:#ee1515}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .artwork[_ngcontent-%COMP%]   .paginator__button[_ngcontent-%COMP%]:last-of-type{grid-column-start:3;justify-self:flex-end}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]{grid-row-start:1;grid-row-end:2;font-size:.875rem}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .container-theme[_ngcontent-%COMP%]{flex:1}@media only screen and (max-width:767.98px){.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]{grid-row-start:initial;grid-row-end:initial}}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .details__list[_ngcontent-%COMP%]{list-style:none;padding-left:0;margin:0}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .details__name[_ngcontent-%COMP%], .pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .details__type[_ngcontent-%COMP%]{text-transform:uppercase}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .details__type[_ngcontent-%COMP%] + .details__type[_ngcontent-%COMP%]{padding-left:16px}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .details__type.bug[_ngcontent-%COMP%]{color:#6d7815}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .details__type.dark[_ngcontent-%COMP%]{color:#49392f}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .details__type.dragon[_ngcontent-%COMP%]{color:#4924a1}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .details__type.electric[_ngcontent-%COMP%]{color:#a1871f}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .details__type.fairy[_ngcontent-%COMP%]{color:#9b6470}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .details__type.fighting[_ngcontent-%COMP%]{color:#7d1f1a}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .details__type.fire[_ngcontent-%COMP%]{color:#9c531f}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .details__type.flying[_ngcontent-%COMP%]{color:#6d5e9c}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .details__type.ghost[_ngcontent-%COMP%]{color:#493963}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .details__type.grass[_ngcontent-%COMP%]{color:#4e8234}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .details__type.ground[_ngcontent-%COMP%]{color:#927d44}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .details__type.ice[_ngcontent-%COMP%]{color:#638d8d}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .details__type.normal[_ngcontent-%COMP%]{color:#6d6d4e}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .details__type.poison[_ngcontent-%COMP%]{color:#682a68}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .details__type.psychic[_ngcontent-%COMP%]{color:#a13959}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .details__type.rock[_ngcontent-%COMP%]{color:#786824}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .details__type.steel[_ngcontent-%COMP%]{color:#787887}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .details__type.water[_ngcontent-%COMP%]{color:#445e9c}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .details__type.unknown[_ngcontent-%COMP%], .pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .details__type.bird[_ngcontent-%COMP%]{color:#44685e}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .stats[_ngcontent-%COMP%]{margin-top:8px;width:100%}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .stats__name[_ngcontent-%COMP%]{text-transform:uppercase;white-space:nowrap}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .stats__value[_ngcontent-%COMP%]{text-align:center}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .more-details[_ngcontent-%COMP%]{grid-column-start:1;grid-column-end:3}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .more-details__title[_ngcontent-%COMP%]{margin-top:0}@media only screen and (max-width:767.98px){.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .more-details[_ngcontent-%COMP%]{grid-column-end:2}}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .more-details__version-name[_ngcontent-%COMP%]{text-transform:uppercase;margin-bottom:0}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .more-details__version-name[_ngcontent-%COMP%] + .more-details__version-name[_ngcontent-%COMP%]{margin-top:0}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .more-details__flavor-text[_ngcontent-%COMP%]{margin:0 0 1.5em;font-family:Roboto,sans-serif}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .more-details[_ngcontent-%COMP%]   .red[_ngcontent-%COMP%]{color:#a60b0b}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .more-details[_ngcontent-%COMP%]   .green[_ngcontent-%COMP%]{color:#0b7a0b}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .more-details[_ngcontent-%COMP%]   .blue[_ngcontent-%COMP%]{color:#0b0ba6}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .more-details[_ngcontent-%COMP%]   .yellow[_ngcontent-%COMP%]{color:#a68c21}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .more-details[_ngcontent-%COMP%]   .gold[_ngcontent-%COMP%]{color:#8e6b15}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .more-details[_ngcontent-%COMP%]   .silver[_ngcontent-%COMP%]{color:#7d7d7d}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .more-details[_ngcontent-%COMP%]   .crystal[_ngcontent-%COMP%]{color:#338da6}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .more-details[_ngcontent-%COMP%]   .ruby[_ngcontent-%COMP%]{color:#680000}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .more-details[_ngcontent-%COMP%]   .sapphire[_ngcontent-%COMP%]{color:#000068}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .more-details[_ngcontent-%COMP%]   .emerald[_ngcontent-%COMP%]{color:#006800}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .more-details[_ngcontent-%COMP%]   .firered[_ngcontent-%COMP%]{color:#a64b19}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .more-details[_ngcontent-%COMP%]   .leafgreen[_ngcontent-%COMP%]{color:#009000}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .more-details[_ngcontent-%COMP%]   .diamond[_ngcontent-%COMP%]{color:#6f6fa6}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .more-details[_ngcontent-%COMP%]   .pearl[_ngcontent-%COMP%]{color:#a66f6f}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .more-details[_ngcontent-%COMP%]   .platinum[_ngcontent-%COMP%]{color:#646464}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .more-details[_ngcontent-%COMP%]   .heartgold[_ngcontent-%COMP%]{color:#766700}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .more-details[_ngcontent-%COMP%]   .soulsilver[_ngcontent-%COMP%]{color:#7d7d92}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .more-details[_ngcontent-%COMP%]   .black[_ngcontent-%COMP%]{color:#2c2c2c}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .more-details[_ngcontent-%COMP%]   .white[_ngcontent-%COMP%]{color:#929292}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .more-details[_ngcontent-%COMP%]   .black-2[_ngcontent-%COMP%]{color:#2b3134}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .more-details[_ngcontent-%COMP%]   .white-2[_ngcontent-%COMP%]{color:#948687}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .more-details[_ngcontent-%COMP%]   .x[_ngcontent-%COMP%]{color:#013d6c}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .more-details[_ngcontent-%COMP%]   .y[_ngcontent-%COMP%]{color:#981128}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .more-details[_ngcontent-%COMP%]   .omega-ruby[_ngcontent-%COMP%]{color:#6f1a0c}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .more-details[_ngcontent-%COMP%]   .alpha-sapphire[_ngcontent-%COMP%]{color:#194166}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .more-details[_ngcontent-%COMP%]   .sun[_ngcontent-%COMP%]{color:#9d5e1c}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .more-details[_ngcontent-%COMP%]   .moon[_ngcontent-%COMP%]{color:#376483}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .more-details[_ngcontent-%COMP%]   .ultra-sun[_ngcontent-%COMP%]{color:#983b1c}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .more-details[_ngcontent-%COMP%]   .ultra-moon[_ngcontent-%COMP%]{color:#164776}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .more-details[_ngcontent-%COMP%]   .lets-go-pikachu[_ngcontent-%COMP%]{color:#9f8e19}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .more-details[_ngcontent-%COMP%]   .lets-go-eevee[_ngcontent-%COMP%]{color:#8a5f31}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .more-details[_ngcontent-%COMP%]   .sword[_ngcontent-%COMP%]{color:#006998}.pokemon-details[_ngcontent-%COMP%]   .pokemon-details__content[_ngcontent-%COMP%]   .more-details[_ngcontent-%COMP%]   .shield[_ngcontent-%COMP%]{color:#7c0033}'],data:{animation:[O]}}),n})()}];let ne=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[p.Bz.forChild(ee),g.m]}),n})()},3258:C=>{C.exports={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"GetPokemonSpecie"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"pokemonId"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"Int"}}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"languageId"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"Int"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"pokemon_v2_pokemonspecies"},arguments:[{kind:"Argument",name:{kind:"Name",value:"where"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"id"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"_eq"},value:{kind:"Variable",name:{kind:"Name",value:"pokemonId"}}}]}}]}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"pokemon_v2_pokemonspeciesnames"},arguments:[{kind:"Argument",name:{kind:"Name",value:"where"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"language_id"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"_eq"},value:{kind:"Variable",name:{kind:"Name",value:"languageId"}}}]}}]}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"genus"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"pokemon_v2_pokemonspeciesflavortexts"},arguments:[{kind:"Argument",name:{kind:"Name",value:"where"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"language_id"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"_eq"},value:{kind:"Variable",name:{kind:"Name",value:"languageId"}}}]}}]}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"pokemon_v2_version"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"flavor_text"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"pokemon_v2_pokemons"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"weight"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"height"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"pokemon_v2_pokemonsprites"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"sprites"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"pokemon_v2_pokemontypes"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"pokemon_v2_type"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]}]}}]}},{kind:"Field",name:{kind:"Name",value:"pokemon_v2_pokemonstats"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"pokemon_v2_stat"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"base_stat"},arguments:[],directives:[]}]}}]}}]}}]}}]}}}]);