(this["webpackJsonpformacion-online-pokemon-pozatr"]=this["webpackJsonpformacion-online-pokemon-pozatr"]||[]).push([[0],{22:function(e,t,a){e.exports=a.p+"static/media/Pokemon-Logo.34a9197f.png"},25:function(e,t,a){e.exports=a(42)},30:function(e,t,a){},31:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),m=a(15),i=a.n(m),l=(a(30),a(5)),r=a(16),c=a(17),s=a(23),p=a(18),_=a(9),d=a(24),u=a(6),k=a(19),f=function(e){return fetch("https://pokeapi.co/api/v2/pokemon-species/"+e).then((function(e){return e.json()}))};function E(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var h=function(e){return fetch("https://pokeapi.co/api/v2/pokemon/"+e).then((function(e){return e.json()}))},g=function(e){return Promise.all([h(e),f(e)]).then((function(e){return function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?E(a,!0).forEach((function(t){Object(k.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):E(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},e[0],{},e[1])}))},y=(a(31),function(e){var t=e.getPokemon;return o.a.createElement("div",{className:"search"},o.a.createElement("label",{className:"search__label",htmlFor:"name"},"Filtra Pokemons por nombre"),o.a.createElement("input",{className:"search__input",id:"name",type:"text",name:"name",onChange:t}))}),N=(a(32),function(e){var t=e.pokemonTypes;return o.a.createElement("ul",{className:"pokemon-types"},t.map((function(e,t){return o.a.createElement("li",{className:"pokemon-types__type pokemon-types__type--".concat(e.type.name),key:t})})))}),v=(a(33),function(e){var t=e.pokemon,a=e.isLoading;return o.a.createElement("div",{className:"pokemon"},a?o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"pokemon__information__container"},o.a.createElement("p",{className:"pokemon__name"},t.name),o.a.createElement("div",{className:"pokemon__loader"}))):o.a.createElement(o.a.Fragment,null,o.a.createElement(N,{pokemonTypes:t.types,showType:!0}),o.a.createElement("div",{className:"pokemon__information"},o.a.createElement("div",{className:"pokemon__information__container"},o.a.createElement("img",{className:"pokemon__image",src:t.sprites.front_shiny,alt:t.name}),o.a.createElement("p",{className:"pokemon__name"},t.name),t.evolves_from_species?o.a.createElement("p",{className:"pokemon__evolution"},t.evolves_from_species.name):"",o.a.createElement("ul",{className:"pokemon__types"},t.types.map((function(e,t){return o.a.createElement("li",{className:"pokemon__type",key:"type-".concat(t)},e.type.name)})))),o.a.createElement("p",{className:"pokemon__number"},"ID/",t.id))))}),b=(a(34),function(e){var t=e.pokemons,a=e.findPokemon,n=e.isLoading,m=t.filter((function(e){return e.name.toUpperCase().includes(a.toUpperCase())}));return o.a.createElement("ul",{className:"pokemons__list"},m.map((function(e){return o.a.createElement("li",{key:"pokemon-".concat(e.name)},o.a.createElement(l.b,{className:"main__link",to:"/detail/".concat(e.id)},o.a.createElement(v,{pokemon:e,isLoading:n})))})))}),P=(a(40),function(e){var t=e.pokemon;if(Object.keys(t).length){var a=t.name,n=t.sprites,m=t.abilities,i=t.weight,r=t.height,c=t.types,s=t.id,p=t.evolves_from_species,_=t.gender_rate,d=t.egg_groups,u=t.habitat;return o.a.createElement("div",{className:"pokemon-detail"},o.a.createElement(N,{pokemonTypes:c}),o.a.createElement(l.b,{className:"pokemon-detail__link",to:"/"},"Volver"),o.a.createElement("div",{className:"pokemon-detail__card"},o.a.createElement("h2",{className:"pokemon-detail__name pokemon-detail__title pokemon-detail__title--".concat(c[0].type.name)},a),o.a.createElement("div",{className:"pokemon-detail__container"},o.a.createElement("ul",{className:"pokemon-detail__types"},c.map((function(e,t){return o.a.createElement("li",{className:"pokemon-detail__type pokemon-types__type--".concat(e.type.name),key:t},e.type.name)}))),o.a.createElement("img",{className:"pokemon-detail__image",src:n.front_shiny,alt:a}),o.a.createElement("p",{className:"pokemon-detail__number"},"#",s)),o.a.createElement("div",{className:"pokemon-detail__profile"},o.a.createElement("h3",{className:"pokemon-detail__title pokemon-detail__title--".concat(c[0].type.name)},"profile"),o.a.createElement("dl",{className:"pokemon-detail__container pokemon-detail__profile__list"},o.a.createElement("dt",{className:"pokemon-detail__profile__term"},"Weight:"),o.a.createElement("dd",{className:"pokemon-detail__profile__definition"},i),o.a.createElement("dt",{className:"pokemon-detail__profile__term"},"Height:"),o.a.createElement("dd",{className:"pokemon-detail__profile__definition"},r),o.a.createElement("dt",{className:"pokemon-detail__profile__term"},"Egg groups:"),o.a.createElement("dd",{className:"pokemon-detail__profile__definition"},o.a.createElement("ul",{className:"pokemon-detail__definition__list"},d.map((function(e,t){return o.a.createElement("li",{className:"pokemon-detail__definition__element",key:"egg-group-".concat(t)},e.name)})))),o.a.createElement("dt",{className:"pokemon-detail__profile__term"},"Gender rate:"),o.a.createElement("dd",{className:"pokemon-detail__profile__definition"},_),o.a.createElement("dt",{className:"pokemon-detail__profile__term"},"Habitat:"),o.a.createElement("dd",{className:"pokemon-detail__profile__definition"},u.name),o.a.createElement("dt",{className:"pokemon-detail__profile__term"},"Abilities:"),o.a.createElement("dd",{className:"pokemon-detail__profile__definition"},o.a.createElement("ul",{className:"pokemon-detail__definition__list"},m.map((function(e,t){return o.a.createElement("li",{className:"pokemon-detail__definition__element",key:"ability-".concat(t)},e.ability.name)})))))),p?o.a.createElement("div",{className:"pokemon-detail__evolution"},o.a.createElement("h3",{className:"pokemon-detail__title pokemon-detail__title--".concat(c[0].type.name)},"evolution"),o.a.createElement("p",{className:"pokemon-detail__container"},p.name)):""))}return o.a.createElement(o.a.Fragment,null,o.a.createElement(l.b,{className:"detail__link",to:"/"},"Volver"),o.a.createElement("div",null,"Ese personaje no existe"))}),O=a(22),j=a.n(O),w=(a(41),function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(s.a)(this,Object(p.a)(t).call(this,e))).state={pokemons:[],findPokemon:"",isLoading:!0,pokemonDetail:{}},a.getPokemon=a.getPokemon.bind(Object(_.a)(a)),a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidUpdate",value:function(e){this.props.location.pathname!==e.location.pathname&&this.getPageInfo(this.props.location.pathname)}},{key:"componentDidMount",value:function(){this.getPageInfo(this.props.location.pathname)}},{key:"getPageInfo",value:function(e){var t=this;if("/"===e)fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=25").then((function(e){return e.json()})).then((function(e){var t=e.results.map((function(e){var t=e.url.slice(0,-1).lastIndexOf("/"),a=e.url.substring(t+1);return g(a)}));return Promise.all(t)})).then((function(e){t.setState({pokemons:e,isLoading:!1})}));else{var a=e.lastIndexOf("/")+1,n=e.substring(a);g(n).then((function(e){t.setState({pokemonDetail:e})}))}}},{key:"getPokemon",value:function(e){var t=e.currentTarget.value;this.setState({findPokemon:t})}},{key:"render",value:function(){var e=this,t=this.state,a=t.pokemons,n=t.findPokemon,m=t.isLoading,i=t.pokemonDetail,l=this.props.location;return o.a.createElement(o.a.Fragment,null,o.a.createElement("header",{className:"header ".concat("/"!==l.pathname?"header--slim":"")},o.a.createElement("h1",{className:"header__title"},"Lista de Pokemons"),o.a.createElement("img",{className:"header__logo",src:j.a,alt:"logo pokemon"})),o.a.createElement("main",{className:"main"},o.a.createElement(u.c,null,o.a.createElement(u.a,{exact:!0,path:"/",render:function(t){return o.a.createElement("div",null,o.a.createElement(y,{match:t.match,getPokemon:e.getPokemon}),o.a.createElement(b,{match:t.match,pokemons:a,findPokemon:n,isLoading:m}))}}),o.a.createElement(u.a,{path:"/detail/:pokemonId",render:function(e){return o.a.createElement(P,{match:e.match,pokemon:i})}}))))}}]),t}(o.a.Component)),D=Object(u.f)((function(e){return o.a.createElement(w,e)}));i.a.render(o.a.createElement(l.a,null,o.a.createElement(D,null)),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.e693a30b.chunk.js.map