const i="/_app/immutable/assets/tristan-5682ed44.jpeg",s={identifier:"alexandre",name:{first:"Alexandre",last:"Jouandin"},social:{linkedIn:"alexandrejouandin",github:"Allezxandre",keybase:"allezxandre",iMessage:{username:"first.last"},telegram:"@allezxandre"},title:"CTO",image:{gravatarHash:"daf8a0f2457da63e3c2e15cc2e4319e3"}},r={identifier:"sebastien",name:{first:"S\xE9bastien",last:"Ohleyer"},social:{linkedIn:"sebastien-ohleyer",telegram:"@soehbl"},title:"CEO",image:{gravatarHash:"47918935b83faf2346844e44c9d48e3b"}},n={identifier:"tristan",name:{first:"Tristan",last:"St\xE9rin"},social:{linkedIn:"tristan-st\xE9rin-4b37b9107",github:"tcosmo"},title:"CRO",image:{src:i}},l=[r,s,n],c=new Map(l.map(e=>[e.identifier,e]));function d(e,a=1024,t=!1){return e.image.src!==void 0?t?`https://prgm.dev${e.image.src}`:e.image.src:`https://www.gravatar.com/avatar/${e.image.gravatarHash}?size=${a}`}function m(e){return e.slice(1)}export{l as a,c as f,d as i,m as r};
