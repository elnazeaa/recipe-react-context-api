(this["webpackJsonprecipe-app"]=this["webpackJsonprecipe-app"]||[]).push([[0],{42:function(e,n,t){},43:function(e,n,t){"use strict";t.r(n);var r,a,c,i,s,o,l,d,j=t(2),u=t.n(j),m=t(23),p=t.n(m),h=t(8),b=t(4),f=t(6),x=t(11),g=t(7),O=t(24),A=t(1),E=g.a.nav(r||(r=Object(f.a)(["\n  background: #cccbd1 !important;\n\n  .nav-header {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: 1rem;\n  }\n\n  .nav-toggle {\n    font-size: 1.5rem;\n    color: #565656;\n    background: transparent;\n    border-color: transparent;\n    transition: all 0.3s linear;\n    cursor: pointer;\n    margin-top: 4px;\n    color: #565656;\n  }\n\n  .nav-toggle:hover {\n    color: #565656;\n  }\n\n  .logo {\n    height: 40px;\n  }\n\n  .links a {\n    color: #565656;\n    font-size: 1rem;\n    text-transform: capitalize;\n    letter-spacing: 1px;\n    display: block;\n    padding: 0.5rem 1rem;\n    transition: all 0.3s linear;\n  }\n\n  .links a:hover {\n    background: #e65500;\n    color: #e65500;\n    padding-left: 1.5rem;\n  }\n\n  .links-container {\n    height: 0;\n    overflow: hidden;\n    transition: all 0.3s linear;\n    text-align: center;\n    color: #565656;\n  }\n\n  .show-container {\n    height: 10rem;\n  }\n\n  @media screen and (min-width: 800px) {\n    .nav-center {\n      display: flex;\n      align-items: center;\n      justify-content: space-around;\n      ","\n      padding: 1rem;\n      box-shadow: 21px 0px 6px #a7a7a7;\n      margin: 0 auto;\n    }\n    .nav-header {\n      padding: 0;\n    }\n    .nav-toggle {\n      display: none;\n    }\n    .links-container {\n      height: auto !important;\n    }\n    .links {\n      display: flex;\n    }\n    .links a {\n      padding: 0;\n      margin: 0 0.5rem;\n    }\n    .links a:hover {\n      padding: 0;\n      background: transparent;\n    }\n  }\n"])),""),v=function(e){var n=Object(j.useState)(!1),t=Object(x.a)(n,2),r=t[0],a=t[1],c=Object(j.useRef)(),i=Object(j.useState)(0),s=Object(x.a)(i,2),o=s[0],l=s[1];return Object(A.jsx)(E,{children:Object(A.jsxs)("div",{className:"nav-center",children:[Object(A.jsxs)("div",{className:"nav-header",children:[Object(A.jsx)("img",{src:"data:image/png;base64,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",className:"logo",alt:"logo"}),Object(A.jsx)("button",{className:"nav-toggle",onClick:function(){a(!r);var e=c.current.getBoundingClientRect().height;l(e)},children:Object(A.jsx)(O.a,{})})]}),Object(A.jsx)("div",{className:"links-container",style:{height:"".concat(r?o+"px":"0px")},children:Object(A.jsxs)("ul",{className:"links",ref:c,children:[Object(A.jsx)("li",{children:Object(A.jsx)(h.b,{to:"/recipe-react-context-api",children:"home"})}),Object(A.jsx)("li",{children:Object(A.jsx)(h.b,{to:"/categories",children:"categories"})}),Object(A.jsx)("li",{children:Object(A.jsx)(h.b,{to:"/random",children:"random"})})]})})]})})},I=t(29),w=t(3),C=t(9),y=t.n(C),N=t(14),k=function(e,n){return"GET_INPUT_VAL_FOOD"===n.type?Object(w.a)(Object(w.a)({},e),{},{mealName:n.payload}):"GET_MEAL_NAME_AFTER_SUBMIT"===n.type?Object(w.a)(Object(w.a)({},e),{},{mealAfterSubmit:n.payload,mealName:""}):"LOADER"===n.type?Object(w.a)(Object(w.a)({},e),{},{loading:!0}):"GET_MEALS"===n.type?Object(w.a)(Object(w.a)({},e),{},{allMeals:n.payload.meals,loading:!1}):"EMPTY"===n.type?Object(w.a)(Object(w.a)({},e),{},{allMeals:[]}):e},F=Object(j.createContext)(),W=function(e){var n=Object(j.useReducer)(k,{allMeals:[],searchQuery:"",categories:[],mealName:"",mealAfterSubmit:"",loading:!1}),t=Object(x.a)(n,2),r=t[0],a=t[1];Object(j.useEffect)((function(){c()}),[r.mealAfterSubmit]);var c=function(){var e=Object(N.a)(y.a.mark((function e(){var n,t,c;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat("https://www.themealdb.com/api/json/v1/1/search.php?s=").concat(r.mealAfterSubmit),e.prev=1,a({type:"LOADER"}),e.next=5,fetch(n);case 5:return t=e.sent,e.next=8,t.json();case 8:c=e.sent,a({type:"GET_MEALS",payload:c}),e.next=14;break;case 12:e.prev=12,e.t0=e.catch(1);case 14:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(){return e.apply(this,arguments)}}();return Object(A.jsx)(F.Provider,{value:Object(w.a)(Object(w.a)({},r),{},{handleInputQueryOnChange:function(e){a({type:"GET_INPUT_VAL_FOOD",payload:e})},getInputValAfterSubmit:function(e){a({type:"GET_MEAL_NAME_AFTER_SUBMIT",payload:e})}}),children:e.children})},T=g.a.div(a||(a=Object(f.a)(['\n  .formContainer {\n    position: relative;\n    display: flex;\n    justify-content: center;\n    align-items: flex-end;\n    margin: 1rem auto;\n    width: 16rem;\n  }\n  .formContainer input {\n    width: 15rem;\n    padding: 10px 5px;\n    border: none;\n    border-bottom: 3px solid #565656;\n    font-size: 20px;\n    outline: none;\n    color: #565656;\n    transition: all 1s ease-in-out;\n    background: whitesmoke;\n  }\n  .formContainer .line {\n    content: "";\n    position: absolute;\n    width: 0;\n    background-color: #e65500;\n    height: 3px;\n    left: 0;\n    transition: all 1s ease-in-out;\n  }\n  input:focus + .line {\n    width: 100%;\n  }\n  .formContainer button {\n    font-size: 1.8rem;\n    background: transparent;\n    border: none;\n    outline: none;\n    text-align: center;\n    position: absolute;\n    right: 10px;\n    color: #565656;\n    cursor: pointer;\n  }\n']))),M=function(e){var n=Object(j.useContext)(F),t=n.handleInputQueryOnChange,r=n.mealName,a=n.getInputValAfterSubmit,c=Object(j.useState)(""),i=Object(x.a)(c,2),s=i[0],o=i[1];return Object(A.jsx)(T,{className:"formContainer",children:Object(A.jsx)("form",{onSubmit:function(e){e.preventDefault(),a(s)},children:Object(A.jsxs)("div",{className:"formContainer",children:[Object(A.jsx)("input",{type:"text",className:"inputSearch",placeholder:"Search Meals....",onChange:function(e){var n=e.target.value;t(n),o(n)},value:r}),Object(A.jsx)("div",{className:"line"}),Object(A.jsx)("button",{children:Object(A.jsx)(I.a,{})})]})})})},S=g.a.div(c||(c=Object(f.a)(["\n  padding: 5rem 0;\n  width: 90vw;\n  margin: 0 auto;\n  max-width: var(--max-width);\n\n  .loading {\n    width: 6rem;\n    height: 6rem;\n    margin: 0 auto;\n    margin-top: 10rem;\n    border-radius: 50%;\n    border: 4px solid #ccc;\n    border-top-color: var(--clr-primary-5);\n    animation: spinner 0.6s linear infinite;\n  }\n"]))),L=function(e){return Object(A.jsx)(S,{className:"section section-center",children:Object(A.jsx)("div",{className:"loading"})})},V=function(e,n){return"GET_ID"===n.type?Object(w.a)(Object(w.a)({},e),{},{mealId:n.payload}):"LOADING"===n.payload?Object(w.a)(Object(w.a)({},e),{},{loading:!0}):"GET_FOOD_RES"===n.type?Object(w.a)(Object(w.a)({},e),{},{foodRes:n.payload,loading:!1}):e},R=Object(j.createContext)(),U=function(e){var n=Object(j.useReducer)(V,{mealId:"",foodRes:[],loading:!1}),t=Object(x.a)(n,2),r=t[0],a=t[1],c=function(){var e=Object(N.a)(y.a.mark((function e(){var n,t;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a({type:"LOADING"}),e.next=3,fetch("".concat("https://www.themealdb.com/api/json/v1/1/lookup.php?i=").concat(+r.mealId));case 3:return n=e.sent,e.next=6,n.json();case 6:t=e.sent,a({type:"GET_FOOD_RES",payload:t.meals});case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(j.useEffect)((function(){c()}),[r.mealId]);return Object(A.jsx)(R.Provider,{value:Object(w.a)(Object(w.a)({},r),{},{handleId:function(e){a({type:"GET_ID",payload:e})},handleFilterId:function(e){console.log(e)}}),children:e.children})},G=g.a.div(i||(i=Object(f.a)(["\n  position: relative;\n  width: 20.57rem;\n  height: auto;\n  background: #fff;\n  padding: 0.5rem;\n  margin: 1rem;\n  border-radius: 4px;\n\n  .imgCont {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n\n  .imgCont img {\n    width: 20rem;\n    height: auto;\n    border-radius: 2px;\n  }\n\n  .content {\n    margin: 1rem 0;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    height: 12rem;\n  }\n\n  .title {\n    font-size: 1.3rem;\n    color: #e65500;\n    margin-bottom: 5px;\n  }\n\n  .detail {\n    width: 6rem;\n    padding: 0.5rem 0.7rem 0.5rem 0.7rem;\n    font-size: 1rem;\n    margin: 1rem 0 0 0;\n    background: #e65500;\n    border: none;\n    border-radius: 2px;\n    cursor: pointer;\n    text-align: center;\n  }\n  .detail:focus {\n    color: #565656;\n  }\n"]))),K=function(e){var n=e.meal;return Object(A.jsxs)(G,{className:"container",children:[Object(A.jsx)("div",{className:"imgCont",children:Object(A.jsx)("img",{src:n.strMealThumb,alt:n.strMeal})}),Object(A.jsxs)("div",{className:"content",children:[Object(A.jsx)("p",{className:"title",children:n.strMeal}),Object(A.jsxs)("p",{className:"recepi",children:[n.strInstructions.slice(0,200)," ..."]}),Object(A.jsx)(h.b,{className:"detail",to:"/detail/".concat(n.idMeal),children:"Detail"})]})]})},Y=function(e){var n=Object(j.useContext)(F),t=n.allMeals,r=n.loading,a=n.mealAfterSubmit;return r?Object(A.jsx)(L,{}):null===t?(console.log(t),Object(A.jsx)("div",{style:{marginTop:"2rem"},children:Object(A.jsxs)("h4",{style:{fontSize:"1.2rem",fontWeight:"400",textAlign:"center",letterSpacing:"0.5px"},children:["There is no result for"," ",Object(A.jsx)("span",{style:{color:"#e65500",borderBottom:"1px solid #e65500"},children:'"'.concat(a,'"')}),", Search another term."]})})):Object(A.jsx)("div",{className:"allMeals",style:{display:"flex",gap:"0px",flexWrap:"wrap",margin:"0 auto",justifyContent:"center",alignItems:"center"},children:t.map((function(e){return Object(A.jsx)(K,{meal:e},e.idMeal)}))})},Q=g.a.div(s||(s=Object(f.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin: 1rem 0;\n  .img img {\n    width: 16vw;\n    border-radius: 3px;\n  }\n  .content {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n    width: 80vw;\n    margin: 2rem 0 0 0;\n  }\n  .instruction {\n    text-align: center;\n    font-size: 1.2rem;\n  }\n  .home {\n    display: block;\n    background: #e65500;\n    padding: 1rem;\n    border-radius: 2px;\n    margin: 1rem 0 0 0;\n    font-size: 1.2rem;\n    color: #fff;\n  }\n  h2,\n  h3 {\n    margin: 3px;\n  }\n  @media (max-width: 1400px) {\n    .img img {\n      width: 30vw;\n    }\n  }\n"]))),B=function(e){for(var n=e.foods,t=n.strArea,r=n.strCategory,a=n.strMeal,c=n.strMealThumb,i=n.strInstructions,s=[],o=0;o<=20;o++)s.push(n["strIngredient".concat(o)]+"  -  "+n["strMeasure".concat(o)]);var l=s.filter((function(e){return"undefined-undefined"!==e&&"-"!==e&&"undefined  -  undefined"!==e&&"  -  "!==e&&"  -   "!==e&&"null  -  null"!==e&&e}));return Object(A.jsxs)(Q,{className:"container",children:[Object(A.jsx)("div",{className:"img",children:Object(A.jsx)("img",{src:c,alt:a})}),Object(A.jsxs)("div",{className:"content",children:[Object(A.jsxs)("h2",{className:"title",children:["Name : ",a]}),Object(A.jsxs)("h3",{className:"category",children:["Category : ",r]}),Object(A.jsxs)("h3",{className:"area",children:["Area: ",t]}),Object(A.jsx)("p",{className:"instruction",children:i}),Object(A.jsx)("h3",{className:"ingre",children:"Ingredient"}),Object(A.jsx)("ul",{children:l.map((function(e,n){return Object(A.jsx)("li",{children:e},n)}))}),Object(A.jsx)(h.b,{className:"home",to:"/recipe-react-context-api",children:"back home...."})]})]})},J=function(e){var n=Object(j.useContext)(R),t=n.foodRes,r=n.handleId,a=Object(b.f)().id;if(Object(j.useEffect)((function(){r(a)}),[a]),null===t||void 0===t[0])return Object(A.jsx)(L,{});var c=t[0];return Object(A.jsx)(B,{foods:c})},H=function(e){return Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)(M,{}),Object(A.jsx)(Y,{})]})},P=function(e,n){return"LOADING"===n.type?Object(w.a)(Object(w.a)({},e),{},{loading:!0}):"GET_CATS"===n.type?Object(w.a)(Object(w.a)({},e),{},{category:n.payload,loading:!1}):"FILTER_MEAL_BYNAME"===n.type?Object(w.a)(Object(w.a)({},e),{},{filterResult:n.payload}):e},z=Object(j.createContext)(),D=function(e){var n=Object(j.useReducer)(P,{category:[],loading:!1,filterResult:[]}),t=Object(x.a)(n,2),r=t[0],a=t[1],c=function(){var e=Object(N.a)(y.a.mark((function e(){var n,t;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a({type:"LOADING"}),e.next=4,fetch("https://www.themealdb.com/api/json/v1/1/categories.php");case 4:return n=e.sent,e.next=7,n.json();case 7:t=e.sent,a({type:"GET_CATS",payload:t.categories}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}();Object(j.useEffect)((function(){c()}),[]);var i=function(){var e=Object(N.a)(y.a.mark((function e(n){var t,r;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=".concat(n));case 2:return t=e.sent,e.next=5,t.json();case 5:r=e.sent,a({type:"FILTER_MEAL_BYNAME",payload:r.meals});case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return Object(A.jsx)(z.Provider,{value:Object(w.a)(Object(w.a)({},r),{},{handleCategory:function(e){i(e)}}),children:e.children})},X=g.a.div(o||(o=Object(f.a)(["\n  position: relative;\n  width: 20.57rem;\n  height: auto;\n  background: #fff;\n  padding: 0.5rem;\n  margin: 1rem;\n  border-radius: 4px;\n  transition: 1s ease-in-out;\n\n  :hover {\n    border-top: 1px solid #e65500;\n    margin-top: 1px;\n  }\n\n  .imgCont {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n\n  .imgCont img {\n    width: 20rem;\n    height: auto;\n    border-radius: 2px;\n  }\n\n  .content {\n    margin: 1rem 0;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    height: 12rem;\n  }\n\n  .title {\n    font-size: 1.3rem;\n    color: #e65500;\n    margin-bottom: 5px;\n  }\n\n  .detail {\n    width: 6rem;\n    padding: 0.5rem 0.7rem 0.5rem 0.7rem;\n    font-size: 1rem;\n    margin: 1rem 0 0 0;\n    background: #e65500;\n    border: none;\n    border-radius: 2px;\n    cursor: pointer;\n    text-align: center;\n  }\n  .detail:focus {\n    color: #565656;\n  }\n"]))),Z=function(e){var n=e.foodCategory,t=n.strCategory,r=n.strCategoryThumb,a=n.strCategoryDescription,c=Object(j.useContext)(z).handleCategory;return Object(A.jsxs)(X,{className:"container",children:[Object(A.jsx)("div",{className:"imgCont",children:Object(A.jsx)("img",{src:r,alt:t})}),Object(A.jsxs)("div",{className:"content",children:[Object(A.jsx)("p",{className:"title",children:t}),Object(A.jsxs)("p",{className:"recepi",children:[a.slice(0,200)," ..."]}),Object(A.jsx)(h.b,{className:"detail",to:"/category/".concat(t),onClick:function(){c(t)},children:"Detail"})]})]})},q=function(e){var n=Object(j.useContext)(z),t=n.category;return n.loading?Object(A.jsx)(L,{}):Object(A.jsx)("div",{className:"allMeals",style:{display:"flex",gap:"0px",flexWrap:"wrap",margin:"0 auto",justifyContent:"center",alignItems:"center"},children:t.map((function(e){return Object(A.jsx)(Z,{foodCategory:e},e.idCategory)}))})},_=function(e){return Object(A.jsx)(A.Fragment,{children:Object(A.jsx)(q,{})})},$=g.a.div(l||(l=Object(f.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  button {\n    margin: 10px 0 0 0;\n    background: #cccbd1;\n    border: 1px solid #7c7c7c;\n    padding: 10px 15px;\n    font-size: 16px;\n    color: #060606;\n  }\n"]))),ee=function(e){var n=Object(j.useState)(""),t=Object(x.a)(n,2),r=t[0],a=t[1],c=function(){var e=Object(N.a)(y.a.mark((function e(){var n,t;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.themealdb.com/api/json/v1/1/random.php");case 2:return n=e.sent,e.next=5,n.json();case 5:t=e.sent,a(t.meals[0]);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(j.useEffect)((function(){c()}),[]),"undefined"!==r&&""!==r&&r?Object(A.jsxs)($,{children:[Object(A.jsx)("button",{onClick:c,children:"Click for Random Meal...."}),Object(A.jsx)(B,{foods:r}),";"]}):Object(A.jsx)(L,{})},ne=function(e){return Object(A.jsx)(A.Fragment,{children:Object(A.jsx)(ee,{})})},te=function(e){return Object(j.useContext)(R).loading?Object(A.jsx)(L,{}):Object(A.jsx)(A.Fragment,{children:Object(A.jsx)(J,{})})},re=g.a.div(d||(d=Object(f.a)(["\n  position: relative;\n  width: 20.57rem;\n  height: auto;\n  background: #fff;\n  padding: 0.5rem;\n  margin: 1rem;\n  border-radius: 4px;\n  transition: 1s ease-in-out;\n\n  :hover {\n    border-top: 1px solid #e65500;\n    margin-top: 1px;\n  }\n\n  .imgCont {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n\n  .imgCont img {\n    width: 20rem;\n    height: auto;\n    border-radius: 2px;\n  }\n\n  .content {\n    margin: 1rem 0;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    height: 3rem;\n  }\n\n  .title {\n    font-size: 1.3rem;\n    color: #e65500;\n    margin-bottom: 5px;\n  }\n\n  .detail {\n    width: 6rem;\n    padding: 0.5rem 0.7rem 0.5rem 0.7rem;\n    font-size: 1rem;\n    margin: 1rem 0 0 0;\n    background: #e65500;\n    border: none;\n    border-radius: 2px;\n    cursor: pointer;\n    text-align: center;\n  }\n  .detail:focus {\n    color: #565656;\n  }\n"]))),ae=function(e){var n=e.filterByName,t=n.strMeal,r=n.strMealThumb,a=n.idMeal,c=Object(j.useContext)(R).handleFilterId;return Object(A.jsxs)(re,{className:"container",children:[Object(A.jsx)("div",{className:"imgCont",children:Object(A.jsx)("img",{src:r,alt:r})}),Object(A.jsxs)("div",{className:"content",children:[Object(A.jsx)("p",{className:"title",children:t}),Object(A.jsx)(h.b,{className:"detail",to:"/detail/".concat(a),onClick:function(){c(a)},children:"Detail"})]})]})},ce=function(e){var n=Object(j.useContext)(z).filterResult;return Object(A.jsx)("div",{className:"allMeals",style:{display:"flex",gap:"0px",flexWrap:"wrap",margin:"0 auto",justifyContent:"center",alignItems:"center"},children:n.map((function(e){return Object(A.jsx)(ae,{filterByName:e},e.idMeal)}))})},ie=function(e){return Object(A.jsx)(A.Fragment,{children:Object(A.jsx)(ce,{})})},se=(t(42),function(e){return Object(A.jsxs)(h.a,{children:[Object(A.jsx)(v,{}),Object(A.jsxs)(b.c,{children:[Object(A.jsx)(b.a,{exact:!0,path:"/recipe-react-context-api",children:Object(A.jsx)(H,{})}),Object(A.jsx)(b.a,{exact:!0,path:"/categories",children:Object(A.jsx)(_,{})}),Object(A.jsx)(b.a,{exact:!0,path:"/random",children:Object(A.jsx)(ne,{})}),Object(A.jsx)(b.a,{exact:!0,path:"/detail/:id",children:Object(A.jsx)(te,{})}),Object(A.jsx)(b.a,{exact:!0,path:"/category/:name",children:Object(A.jsx)(ie,{})})]})]})});p.a.render(Object(A.jsx)(u.a.StrictMode,{children:Object(A.jsx)(W,{children:Object(A.jsx)(U,{children:Object(A.jsx)(D,{children:Object(A.jsx)(se,{})})})})}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.9e207a64.chunk.js.map