(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{13:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var r=n(3),s=n.n(r),c=n(4),o=n(5),a=n(8),i=n(6),u=n(7),l=n(1),b=n.n(l),d=(n(13),n(0)),p=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];var h=function(t){Object(a.a)(n,t);var e=Object(i.a)(n);function n(){var t;Object(c.a)(this,n);for(var r=arguments.length,s=new Array(r),o=0;o<r;o++)s[o]=arguments[o];return(t=e.call.apply(e,[this].concat(s))).state={isStarted:!1,isReversed:!1,sortType:"none"},t}return Object(o.a)(n,[{key:"render",value:function(){var t=this,e=this.state,n=e.isStarted,r=e.isReversed,s=e.sortType,c=function(t,e,n){var r=Object(u.a)(t);switch(e){case"name":r=r.sort((function(t,e){return t.localeCompare(e)}));break;case"length":r=r.sort((function(t,e){return t.length-e.length}))}return!0===n&&r.reverse(),r}(p,s,r);return Object(d.jsxs)("div",{className:"App",children:[!1===n&&Object(d.jsx)("button",{type:"button",onClick:function(){t.setState({isStarted:!0})},children:"Start"}),n&&Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("button",{type:"button",onClick:function(){return t.setState({sortType:"name"})},children:"Sort alphabetically"}),Object(d.jsx)("button",{type:"button",onClick:function(){return t.setState({sortType:"length"})},children:"Sort by length"}),Object(d.jsx)("button",{type:"button",onClick:function(){return t.setState((function(t){return{isReversed:!t.isReversed}}))},children:"Reverse"}),Object(d.jsx)("button",{type:"button",onClick:function(){return t.setState({sortType:"none",isReversed:!1})},children:"Reset"}),Object(d.jsx)("ul",{className:"Goods",children:c.map((function(t){return Object(d.jsx)("li",{className:"Goods__item",children:t},t)}))})]})]})}}]),n}(b.a.Component);s.a.render(Object(d.jsx)(h,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.9bba5afe.chunk.js.map