(this.webpackJsonpguessify=this.webpackJsonpguessify||[]).push([[0],[,,,,,,,,,function(e,t,n){},,,,,,,,,,,,,,,,function(e,t,n){},,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(1),s=n(19),c=n.n(s),r=(n(9),n(2)),o=n(10),i=(n(25),n(0)),l=["btn--primary","btn--outline"],d=function(e){var t=e.children,n=e.type,a=e.onClick,s=e.buttonStyle,c=(e.buttonSize,l.includes(s)?s:l[0]);return Object(i.jsx)(o.b,{to:"/game-themes",className:"btn-theme",children:Object(i.jsx)("button",{className:"btn ".concat(c," ").concat(c),onClick:a,type:n,children:t})})},j=(n(35),n(36),function(e){return e.trigger?Object(i.jsx)("div",{className:"settings-container",children:Object(i.jsxs)("div",{className:"settings",children:[Object(i.jsxs)("h2",{children:["Music ",Object(i.jsx)("button",{})]}),Object(i.jsxs)("h2",{children:["Sound ",Object(i.jsx)("button",{})]}),Object(i.jsx)("button",{onClick:function(){return e.setSettingsButton(!1)},children:"Ok"}),e.children]})}):""});var u=function(){var e=Object(a.useState)(!1),t=Object(r.a)(e,2),n=t[0],s=t[1];return Object(i.jsxs)("div",{className:"hero-container",children:[Object(i.jsxs)("h1",{children:[Object(i.jsx)("img",{style:{width:"90px",height:"90px",boxShadow:"5px 5px 5px #20421c"},src:"./images/logo.png",alt:"Guessify"}),"\xa0 Welcome to Guessify!"]}),Object(i.jsx)("p",{children:"Can you guess all the words?"}),Object(i.jsx)("div",{className:"hero-btns",children:Object(i.jsxs)(d,{className:"btns",buttonStyle:"btn--outline",buttonSize:"btn--large",children:["Let's Play! ",Object(i.jsx)("i",{className:"far fa-play-circle"})]})}),Object(i.jsx)("div",{className:"hero-links",children:Object(i.jsx)(o.b,{to:"/player-stats",className:"player-stats",children:Object(i.jsx)("i",{style:{position:"fixed",color:"#fffcf7",marginLeft:"-420px",marginTop:"130px",fontSize:"80px",textShadow:"-3px 3px 3px #787878"},className:"fas fa-poll"})})}),Object(i.jsx)(j,{trigger:n,setSettingsPopup:s})]})};var g=function(){return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)(u,{})})};var m=function(e){return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)(o.b,{className:"cards__item__link",to:e.path,style:{textDecoration:"none"},children:Object(i.jsxs)("li",{className:"cards__item",style:{backgroundImage:"url(".concat(e.src,")"),backgroundSize:"cover",backgroundRepeat:"no-repeat"},children:[Object(i.jsx)("div",{className:"cards__item__info",children:Object(i.jsx)("h5",{className:"cards__item__text",children:e.text})}),Object(i.jsx)("i",{className:"fas fa-chevron-right",style:{color:"#fadea7",fontSize:"30px",textShadow:"2px 2px 2px #8b7f6a"}})]})})})};n(37),n(38);var b=function(){return Object(i.jsx)("div",{children:Object(i.jsx)("a",{href:"/",children:Object(i.jsxs)("h3",{className:"heading",children:[Object(i.jsx)("img",{src:"./images/logo.png",alt:"Guessify"}),"\xa0 Welcome to Guessify!"]})})})};var h=function(){return Object(i.jsxs)("div",{className:"theme-container",children:[Object(i.jsx)(b,{}),Object(i.jsx)("div",{className:"cards__container",children:Object(i.jsxs)("div",{className:"card-items",children:[Object(i.jsx)(m,{src:"./images/wilda.jpg",text:"Jungle Book",path:"/game-wild"}),Object(i.jsx)(m,{src:"./images/farm.jpg",text:"McDonald's Farm",path:"/game-farm"}),Object(i.jsx)(m,{src:"./images/food.png",text:"Food For Thought",path:"/game-food"}),Object(i.jsx)(m,{src:"./images/travel.jpg",text:"Cities of the World",path:"/game-city"}),Object(i.jsx)(m,{src:"./images/scientific.jpg",text:"Backyard Science",path:"/game-science"}),Object(i.jsx)(m,{src:"./images/g.png",text:"General Knowledge",path:"/game-gk"})]})})]})};var f=function(){return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)(h,{})})},O=n(7);n(39);var x=function(e){var t=e.selectedWord,n=e.correctLetters;return e.selectedRiddle,Object(i.jsx)("div",{className:"word",children:t.split("").map((function(e,t){return Object(i.jsx)("span",{className:"letter",children:n.includes(e)?e:""},t)}))})},p=(n(40),function(e){var t=e.wrongLetters;return Object(i.jsx)("div",{className:"wrong-letters-container",children:Object(i.jsxs)("div",{className:"wrong-letters",children:[t.length>0&&Object(i.jsx)("p",{children:"Wrong Guesses: "}),t.map((function(e,t){return Object(i.jsx)("span",{children:e},t)})).reduce((function(e,t){return null===e?[t]:[e,", ",t]}),null),Object(i.jsx)("br",{}),Object(i.jsx)("br",{}),Object(i.jsxs)("p",{className:"guess-left",children:["Number of Guesses Left: ",6-t.length," "]})]})})});function v(e){e(!0),setTimeout((function(){e(!1)}),2e3)}function w(e,t,n){var a="win";return n.split("").forEach((function(t){e.includes(t)||(a="")})),6===t.length&&(a="lose"),a}n(41);var S=function(e){var t=e.correctLetters,n=e.wrongLetters,s=e.selectedWord,c=e.selectedGif,r=e.setPlayable,o=e.playAgain,l="",d="",j=!0;return"win"===w(t,n,s)?(l="It was a correct Guess! \ud83d\ude03 I am a "+s+" !",j=!1):"lose"===w(t,n,s)&&(l="Unfortunately you lost. \ud83d\ude15",d="...the word was: ".concat(s),j=!1),Object(a.useEffect)((function(){r(j)})),Object(i.jsx)("div",{className:"popup-container",style:""!==l?{display:"flex",marginTop:"-20px"}:{},children:Object(i.jsxs)("div",{className:"popup",children:[Object(i.jsx)("h2",{children:l}),Object(i.jsx)("h3",{children:d}),Object(i.jsx)("img",{src:c,alt:s}),Object(i.jsx)("br",{}),Object(i.jsx)("button",{onClick:o,children:"Play Again"})," \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0",Object(i.jsx)("button",{onClick:function(){window.open("/player-stats","_self"),o()},children:"View Stats"})]})})},y=(n(42),function(e){var t=e.showNotification,n=e.bg,a=e.color;return Object(i.jsx)("div",{className:"notification-container ".concat(t?"show":""),style:{backgroundColor:n},children:Object(i.jsx)("p",{style:{color:a},children:"You have already entered this letter"})})});n(43);var N=function(e){var t=e.selectedRiddle;return Object(i.jsx)("div",{className:"riddle-container",children:t.split("\n").map((function(e){return Object(i.jsx)("p",{className:"text-riddle",children:e})}))})},I=(n(44),["centipede","penguin","giraffe","hippopotamus"]),k=["Oh how I love my dancing feet! \n They stay together - oh so neat. \nAnd when I want to walk a line. \nI count them up, ten times or more, \nAnd race on-off, across the floor.","\nMy wings are used as flippers. \nSo in water I can swim. \nSometimes when on land. \nI slide On my belly in the snow.","\nI like to use my long tongue \nTo eat leaves from tops of trees. \nI don\u2019t have to climb up though. \nWith my long neck it\u2019s a breeze.","\nMy name comes from the Greeks and means river horse. \nI\u2019m widely regarded as one of the most dangerous animals in Africa. \nDespite my girth and short legs, \nI can outrun humans."],W=["./images/gifcp.gif","./images/gifpeng.gif","./images/gifgiraffe.gif","./images/gifhippo.gif"],L=Math.floor(Math.random()*I.length),J=I[L],M=k[L],F=W[L];var E=function(){var e=Object(a.useState)(!0),t=Object(r.a)(e,2),n=t[0],s=t[1],c=Object(a.useState)([]),o=Object(r.a)(c,2),l=o[0],d=o[1],j=Object(a.useState)([]),u=Object(r.a)(j,2),g=u[0],m=u[1],h=Object(a.useState)(!1),f=Object(r.a)(h,2),E=f[0],C=f[1];function _(e,t){for(var n in e)if(e[n]===t){e.splice(n,1);break}return e}return Object(a.useEffect)((function(){var e=function(e){var t=e.key,a=e.keyCode;if(n&&a>=65&&a<=90){var s=t.toLowerCase();J.includes(s)?l.includes(s)?v(C):d((function(e){return[].concat(Object(O.a)(e),[s])})):g.includes(s)?v(C):m((function(e){return[].concat(Object(O.a)(e),[s])}))}};return window.addEventListener("keydown",e),function(){return window.removeEventListener("keydown",e)}}),[l,g,n]),Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)("div",{className:"game-container",children:[Object(i.jsx)(b,{}),Object(i.jsxs)("div",{className:"game",children:[Object(i.jsx)("h3",{className:"game-heading",children:"~Jungle Book Edition~"}),Object(i.jsx)(N,{selectedRiddle:M}),Object(i.jsx)(x,{selectedWord:J,correctLetters:l,selectedRiddle:M}),Object(i.jsx)(p,{wrongLetters:g})]})]}),Object(i.jsx)(y,{showNotification:E}),Object(i.jsx)(S,{correctLetters:l,wrongLetters:g,selectedWord:J,selectedGif:F,setPlayable:s,playAgain:function(){var e=w(l,g,J);s(!0),function(e){var t,n;if("win"===e){var a=localStorage.getItem("wins");t=null===a||"null"===a?0:parseInt(a),t++,localStorage.setItem("wins",t)}else if("lose"===e){var s=localStorage.getItem("loss");n=null===s||"null"===s?0:parseInt(s),n++,localStorage.setItem("loss",n)}}(e),function(e,t){var n=[],a=[];"win"===e?(n=(n=localStorage.getItem("correctWords"))?JSON.parse(n):[],a=_(a=(a=localStorage.getItem("wrongWords"))?JSON.parse(a):[],t),localStorage.setItem("wrongWords",JSON.stringify(a)),n.includes(t)||n.push(t),localStorage.setItem("correctWords",JSON.stringify(n))):"lose"===e&&(a=(a=localStorage.getItem("wrongWords"))?JSON.parse(a):[],n=_(n=(n=localStorage.getItem("correctWords"))?JSON.parse(n):[],t),localStorage.setItem("correctWords",JSON.stringify(n)),a.includes(t)||a.push(t),localStorage.setItem("wrongWords",JSON.stringify(a)))}(e,J),d([]),m([]);for(var t=Math.floor(Math.random()*I.length);t===L;)t=Math.floor(Math.random()*I.length);J=I[t],M=k[t],F=W[t]}})]})};var C=function(){return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)(E,{})})},_=(n(45),["horse","donkey","cows","chicken"]),G=["I am a type of animal. \nSome say that I have a long face. \nI\u2019m very good at running fast. \nSo, people ride me in a race.","It's grey, but it's not a wolf, \nLong-eared, but not a rabbit, \nWith hooves, but not a cow. \nWhat is it?","They live in a field. \nMilk is what they make. \nThey help give us leather \n and a juicy steak.","You might be called this animal \nIf someone thinks that you\u2019re afraid. \nThis is something that you might eat \nAs well as its eggs that it laid."],T=["./images/horse.gif","./images/donkey.gif","./images/cow.gif","./images/chicken.gif"],A=Math.floor(Math.random()*_.length),R=_[A],P=G[A],z=T[A];var B=function(){var e=Object(a.useState)(!0),t=Object(r.a)(e,2),n=t[0],s=t[1],c=Object(a.useState)([]),o=Object(r.a)(c,2),l=o[0],d=o[1],j=Object(a.useState)([]),u=Object(r.a)(j,2),g=u[0],m=u[1],h=Object(a.useState)(!1),f=Object(r.a)(h,2),I=f[0],k=f[1];function W(e,t){for(var n in e)if(e[n]===t){e.splice(n,1);break}return e}return Object(a.useEffect)((function(){var e=function(e){var t=e.key,a=e.keyCode;if(n&&a>=65&&a<=90){var s=t.toLowerCase();R.includes(s)?l.includes(s)?v(k):d((function(e){return[].concat(Object(O.a)(e),[s])})):g.includes(s)?v(k):m((function(e){return[].concat(Object(O.a)(e),[s])}))}};return window.addEventListener("keydown",e),function(){return window.removeEventListener("keydown",e)}}),[l,g,n]),Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)("div",{className:"farm-game-container",children:[Object(i.jsx)(b,{}),Object(i.jsxs)("div",{className:"farm-game",children:[Object(i.jsx)("h3",{className:"farm-game-heading",children:"~Old McDonalds' Farm Edition~"}),Object(i.jsx)(N,{selectedRiddle:P}),Object(i.jsx)(x,{selectedWord:R,correctLetters:l,selectedRiddle:P}),Object(i.jsx)(p,{wrongLetters:g})]})]}),Object(i.jsx)(y,{showNotification:I,bg:"rgba(23, 31, 102, 0.801)",color:"aliceblue"}),Object(i.jsx)(S,{correctLetters:l,wrongLetters:g,selectedWord:R,selectedGif:z,setPlayable:s,playAgain:function(){var e=w(l,g,R);s(!0),function(e){var t,n;if("win"===e){var a=localStorage.getItem("wins");t=null===a||"null"===a?0:parseInt(a),t++,localStorage.setItem("wins",t)}else if("lose"===e){var s=localStorage.getItem("loss");n=null===s||"null"===s?0:parseInt(s),n++,localStorage.setItem("loss",n)}}(e),function(e,t){var n=[],a=[];"win"===e?(n=(n=localStorage.getItem("correctWords"))?JSON.parse(n):[],a=W(a=(a=localStorage.getItem("wrongWords"))?JSON.parse(a):[],t),localStorage.setItem("wrongWords",JSON.stringify(a)),n.includes(t)||n.push(t),localStorage.setItem("correctWords",JSON.stringify(n))):"lose"===e&&(a=(a=localStorage.getItem("wrongWords"))?JSON.parse(a):[],n=W(n=(n=localStorage.getItem("correctWords"))?JSON.parse(n):[],t),localStorage.setItem("correctWords",JSON.stringify(n)),a.includes(t)||a.push(t),localStorage.setItem("wrongWords",JSON.stringify(a)))}(e,R),d([]),m([]);for(var t=Math.floor(Math.random()*_.length);t===A;)t=Math.floor(Math.random()*_.length);R=_[t],P=G[t],z=T[t]}})]})};var D=function(){return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)(B,{})})},Y=(n(46),["coconut","potato","broccoli","tomato"]),H=["I\u2019ve a brown shell on the outside \nAnd my shape is an oval \nHowever, I am not an egg \nFrom a palm tree\u2019s where I fall","I can be fried \nBoiled and mashed \nRoasted and baked \nScalloped and hashed","I look like a group of \nlittle trees with stems and green leaves. \nI am very good for you. \nWho am I?","You know me as a vegetable but I am a fruit. \nRed in colour, with seeds inside. \nYou can add me in your salad. \nI am potato\u2019s best friend. \nWho am I?"],K=["./images/coconut.gif","./images/potato.gif","./images/broccoli.gif","./images/tomato.gif"],U=Math.floor(Math.random()*Y.length),V=Y[U],q=H[U],Q=K[U];var X=function(){var e=Object(a.useState)(!0),t=Object(r.a)(e,2),n=t[0],s=t[1],c=Object(a.useState)([]),o=Object(r.a)(c,2),l=o[0],d=o[1],j=Object(a.useState)([]),u=Object(r.a)(j,2),g=u[0],m=u[1],h=Object(a.useState)(!1),f=Object(r.a)(h,2),I=f[0],k=f[1];function W(e,t){for(var n in e)if(e[n]===t){e.splice(n,1);break}return e}return Object(a.useEffect)((function(){var e=function(e){var t=e.key,a=e.keyCode;if(n&&a>=65&&a<=90){var s=t.toLowerCase();V.includes(s)?l.includes(s)?v(k):d((function(e){return[].concat(Object(O.a)(e),[s])})):g.includes(s)?v(k):m((function(e){return[].concat(Object(O.a)(e),[s])}))}};return window.addEventListener("keydown",e),function(){return window.removeEventListener("keydown",e)}}),[l,g,n]),Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)("div",{className:"food-game-container",children:[Object(i.jsx)(b,{}),Object(i.jsxs)("div",{className:"food-game",children:[Object(i.jsx)("h3",{className:"food-game-heading",children:"~Food for Thought Edition~"}),Object(i.jsx)(N,{selectedRiddle:q}),Object(i.jsx)(x,{selectedWord:V,correctLetters:l,selectedRiddle:q}),Object(i.jsx)(p,{wrongLetters:g})]})]}),Object(i.jsx)(y,{showNotification:I,bg:"rgba(158, 12, 60, 0.918)",color:"aliceblue"}),Object(i.jsx)(S,{correctLetters:l,wrongLetters:g,selectedWord:V,selectedGif:Q,setPlayable:s,playAgain:function(){var e=w(l,g,V);s(!0),function(e){var t,n;if("win"===e){var a=localStorage.getItem("wins");t=null===a||"null"===a?0:parseInt(a),t++,localStorage.setItem("wins",t)}else if("lose"===e){var s=localStorage.getItem("loss");n=null===s||"null"===s?0:parseInt(s),n++,localStorage.setItem("loss",n)}}(e),function(e,t){var n=[],a=[];"win"===e?(n=(n=localStorage.getItem("correctWords"))?JSON.parse(n):[],a=W(a=(a=localStorage.getItem("wrongWords"))?JSON.parse(a):[],t),localStorage.setItem("wrongWords",JSON.stringify(a)),n.includes(t)||n.push(t),localStorage.setItem("correctWords",JSON.stringify(n))):"lose"===e&&(a=(a=localStorage.getItem("wrongWords"))?JSON.parse(a):[],n=W(n=(n=localStorage.getItem("correctWords"))?JSON.parse(n):[],t),localStorage.setItem("correctWords",JSON.stringify(n)),a.includes(t)||a.push(t),localStorage.setItem("wrongWords",JSON.stringify(a)))}(e,V),d([]),m([]);for(var t=Math.floor(Math.random()*Y.length);t===U;)t=Math.floor(Math.random()*Y.length);V=Y[t],q=H[t],Q=K[t]}})]})};var Z=function(){return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)(X,{})})},$=(n(47),["application","programming","interface","wizard"]),ee=$[Math.floor(Math.random()*$.length)];var te=function(){var e=Object(a.useState)(!0),t=Object(r.a)(e,2),n=t[0],s=t[1],c=Object(a.useState)([]),o=Object(r.a)(c,2),l=o[0],d=o[1],j=Object(a.useState)([]),u=Object(r.a)(j,2),g=u[0],m=u[1],b=Object(a.useState)(!1),h=Object(r.a)(b,2),f=h[0],w=h[1];return Object(a.useEffect)((function(){var e=function(e){var t=e.key,a=e.keyCode;if(n&&a>=65&&a<=90){var s=t.toLowerCase();ee.includes(s)?l.includes(s)?v(w):d((function(e){return[].concat(Object(O.a)(e),[s])})):g.includes(s)?v(w):m((function(e){return[].concat(Object(O.a)(e),[s])}))}};return window.addEventListener("keydown",e),function(){return window.removeEventListener("keydown",e)}}),[l,g,n]),Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)("div",{className:"game-container",children:[Object(i.jsx)(p,{wrongLetters:g}),Object(i.jsx)(x,{selectedWord:ee,correctLetters:l})]}),Object(i.jsx)(y,{showNotification:f}),Object(i.jsx)(S,{correctLetters:l,wrongLetters:g,selectedWord:ee,setPlayable:s,playAgain:function(){s(!0),d([]),m([]);var e=Math.floor(Math.random()*$.length);ee=$[e]}})]})},ne=n(3);var ae=function(){return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)(j,{})})};n(48);var se=function(){var e=localStorage.getItem("wins")||"0",t=localStorage.getItem("loss")||"0",n=JSON.parse(localStorage.getItem("correctWords")),a=JSON.parse(localStorage.getItem("wrongWords")),s=parseInt(e)+parseInt(t)||"0";return Object(i.jsxs)("div",{className:"stats-container",children:[Object(i.jsx)(b,{}),Object(i.jsxs)("div",{className:"stats",children:[Object(i.jsxs)("h4",{children:["Total Number of Games Played: ",s]}),Object(i.jsxs)("h4",{children:["Total Wins: ",e]}),Object(i.jsxs)("h4",{children:["Total Losses: ",t]}),Object(i.jsxs)("div",{className:"correct",children:[Object(i.jsx)("h3",{children:"Correct Guesses"}),Object(i.jsx)("hr",{}),n.map((function(e){return Object(i.jsx)("p",{className:"correct-words",children:e})}))]}),Object(i.jsxs)("div",{className:"wrong",children:[Object(i.jsx)("h3",{children:"Words yet to master"}),Object(i.jsx)("hr",{}),a.map((function(e){return Object(i.jsx)("p",{className:"wrong-words",children:e})}))]})]})]})};var ce=function(){return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)(se,{})})};var re=function(){return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)(o.a,{children:Object(i.jsxs)(ne.c,{children:[Object(i.jsx)(ne.a,{path:"/",exact:!0,component:g}),Object(i.jsx)(ne.a,{path:"/game-themes",exact:!0,component:f}),Object(i.jsx)(ne.a,{path:"/game-farm",exact:!0,component:D}),Object(i.jsx)(ne.a,{path:"/game-wild",exact:!0,component:C}),Object(i.jsx)(ne.a,{path:"/game-food",exact:!0,component:Z}),Object(i.jsx)(ne.a,{path:"/game-gk",exact:!0,component:te}),Object(i.jsx)(ne.a,{path:"/settings",exact:!0,component:ae}),Object(i.jsx)(ne.a,{path:"/player-stats",exact:!0,component:ce})]})})})};c.a.render(Object(i.jsx)(re,{}),document.getElementById("root"))}],[[49,1,2]]]);
//# sourceMappingURL=main.99190dcd.chunk.js.map