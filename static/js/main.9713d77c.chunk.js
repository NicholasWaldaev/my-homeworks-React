(this["webpackJsonpsimple-react-homeworks"]=this["webpackJsonpsimple-react-homeworks"]||[]).push([[0],[,function(e,a,t){e.exports={wrapper:"Affairs_wrapper__2x4IL",header:"Affairs_header__uIjEr",delete:"Affairs_delete__3Te_S",button:"Affairs_button__Cunxp",filter:"Affairs_filter__2I98i",name:"Affairs_name__1rFp4",priority:"Affairs_priority__a0DQG"}},,function(e,a,t){e.exports={wrapper:"Message_wrapper__1derL",wrapperMessage:"Message_wrapperMessage__xFHtI",blockImg:"Message_blockImg__mRi-Q",triangle:"Message_triangle__10Tsc",messageImg:"Message_messageImg__2eKEQ",message:"Message_message__2xSAK",text:"Message_text__MD3Sm",time:"Message_time__2vOaJ"}},function(e,a,t){e.exports={wrapper:"Greeting_wrapper__VV_va",block:"Greeting_block__gR-CX",input:"Greeting_input__1HLtA",button:"Greeting_button__2O1o0",totalUsers:"Greeting_totalUsers__1B0yC",errorText:"Greeting_errorText__2UB0M"}},,,,function(e,a,t){e.exports={superInput:"SuperInputText_superInput__1VYz2",errorInput:"SuperInputText_errorInput__8opFi",error:"SuperInputText_error__xHBeO"}},function(e,a,t){e.exports={blue:"HW4_blue__36Yqy",column:"HW4_column__3UreC",testSpanError:"HW4_testSpanError__dr3ue"}},function(e,a,t){e.exports={default:"SuperButton_default__14vd6",red:"SuperButton_red__133iA"}},function(e,a,t){e.exports={checkbox:"SuperCheckbox_checkbox__3KWAm",spanClassName:"SuperCheckbox_spanClassName__1KkPO"}},,,function(e,a,t){e.exports={App:"App_App__BzxH6"}},,function(e,a,t){e.exports=t(22)},,,,,function(e,a,t){},function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),l=t(13),c=t.n(l),s=(t(21),t(14)),o=t.n(s),i=t(3),m=t.n(i);var u=function(e){return n.a.createElement("div",{className:m.a.wrapperMessage},n.a.createElement("div",{className:m.a.blockImg},n.a.createElement("img",{className:m.a.messageImg,src:e.avatar})),n.a.createElement("div",{className:m.a.triangle}),n.a.createElement("div",{className:m.a.message},n.a.createElement("h4",null,e.name),n.a.createElement("span",{className:m.a.text},e.message),n.a.createElement("span",{className:m.a.time},e.time)))},p="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",_="Some Name",d="some text",f="22:00";var E=function(){return n.a.createElement("div",null,n.a.createElement("hr",null),n.a.createElement("h3",null,"homeworks 1"),n.a.createElement("div",{className:m.a.wrapper},n.a.createElement(u,{avatar:p,name:_,message:d,time:f})),n.a.createElement("hr",null),n.a.createElement("hr",null))},h=t(2),g=t(1),b=t.n(g);var v=function(e){return n.a.createElement("div",{className:b.a.header},n.a.createElement("div",{className:b.a.name},e.affair.name),n.a.createElement("div",{className:b.a.priority},e.affair.priority),n.a.createElement("button",{className:b.a.delete,onClick:function(){e.deleteAffairCallback(e.affair._id)}},"x"))};var k=function(e){var a=e.data.map((function(a){return n.a.createElement(v,{key:a._id,affair:a,deleteAffairCallback:e.deleteAffairCallback})}));return n.a.createElement("div",null,a,n.a.createElement("div",{className:b.a.button},n.a.createElement("button",{className:b.a.filter,onClick:function(){e.setFilter("all")}},"All"),n.a.createElement("button",{className:b.a.filter,onClick:function(){e.setFilter("high")}},"High"),n.a.createElement("button",{className:b.a.filter,onClick:function(){e.setFilter("middle")}},"Middle"),n.a.createElement("button",{className:b.a.filter,onClick:function(){e.setFilter("low")}},"Low")))},N=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var C=function(){var e=Object(r.useState)(N),a=Object(h.a)(e,2),t=a[0],l=a[1],c=Object(r.useState)("all"),s=Object(h.a)(c,2),o=s[0],i=s[1],m=function(e,a){return"all"===a?e:"high"===a?e.filter((function(e){return"high"===e.priority})):"low"===a?e.filter((function(e){return"low"===e.priority})):"middle"===a?e.filter((function(e){return"middle"===e.priority})):e}(t,o);return n.a.createElement("div",null,n.a.createElement("hr",null),n.a.createElement("h3",null,"homeworks 2"),n.a.createElement("div",{className:b.a.wrapper},n.a.createElement(k,{data:m,setFilter:i,deleteAffairCallback:function(e){return l(function(e,a){return e.filter((function(e){return e._id!=a}))}(t,e))},filter:o})),n.a.createElement("hr",null),n.a.createElement("hr",null))},x=t(15),w=t(4),y=t.n(w),O=function(e){var a=e.name,t=e.setNameCallback,r=e.addUser,l=e.error,c=e.totalUsers,s={boxShadow:l?"inset 0 0 20px red":""};return n.a.createElement("div",{className:y.a.wrapper},n.a.createElement("div",{className:y.a.block},n.a.createElement("input",{value:a,className:y.a.input,placeholder:"Name",style:s,onChange:t,onKeyPress:function(e){"Enter"===e.key&&r()}}),n.a.createElement("div",{className:y.a.errorText},l)),n.a.createElement("div",{className:y.a.totalUsers},c),n.a.createElement("button",{className:y.a.button,onClick:r},"add"))},S=function(e){var a=e.users,t=e.addUserCallback,l=Object(r.useState)(""),c=Object(h.a)(l,2),s=c[0],o=c[1],i=Object(r.useState)(""),m=Object(h.a)(i,2),u=m[0],p=m[1],_=a.length;return n.a.createElement(O,{name:s,setNameCallback:function(e){o(e.currentTarget.value.trim()),p("")},addUser:function(){t(s),""!==s?alert("Hello  "+s):p("Title is required!"),o("")},error:u,totalUsers:_})},j=t(24);var A=function(){var e=Object(r.useState)([]),a=Object(h.a)(e,2),t=a[0],l=a[1];return n.a.createElement("div",null,n.a.createElement("hr",null),n.a.createElement("h3",null,"homeworks 3"),n.a.createElement(S,{users:t,addUserCallback:function(e){if(""!==e){var a=[{_id:Object(j.a)(),name:e}].concat(Object(x.a)(t));l(a)}}}),n.a.createElement("hr",null),n.a.createElement("hr",null))},I=t(5),T=t(8),M=t.n(T),U=function(e){e.type;var a=e.onChange,t=e.onChangeText,r=e.onKeyPress,l=e.onEnter,c=e.error,s=e.className,o=e.spanClassName,i=Object(I.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),m="".concat(M.a.error," ").concat(o||""),u="".concat(M.a.errorInput," ").concat(s||"");return n.a.createElement(n.a.Fragment,null,n.a.createElement("input",Object.assign({type:"text",onChange:function(e){a&&a(e),t&&t(e.currentTarget.value)},onKeyPress:function(e){r&&r(e),l&&"Enter"===e.key&&l()},className:u},i)),c&&n.a.createElement("span",{className:m},c))},F=t(9),H=t.n(F),B=t(10),G=t.n(B),K=function(e){var a=e.red,t=e.className,r=Object(I.a)(e,["red","className"]),l="".concat(a?G.a.red:G.a.default," ").concat(t);return n.a.createElement("button",Object.assign({className:l},r))},W=t(11),P=t.n(W),J=function(e){e.type;var a=e.onChange,t=e.onChangeChecked,r=e.className,l=(e.spanClassName,e.children),c=Object(I.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),s="".concat(P.a.checkbox," ").concat(r||"");return n.a.createElement("label",null,n.a.createElement("input",Object.assign({type:"checkbox",onChange:function(e){a&&a(e),t&&t(e.currentTarget.checked)},className:s},c)),l&&n.a.createElement("span",{className:P.a.spanClassName},l))};var L=function(){var e=Object(r.useState)(""),a=Object(h.a)(e,2),t=a[0],l=a[1],c=t?"":"error",s=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(t)},o=Object(r.useState)(!1),i=Object(h.a)(o,2),m=i[0],u=i[1];return n.a.createElement("div",null,n.a.createElement("hr",null),"homeworks 4",n.a.createElement("div",{className:H.a.column},n.a.createElement(U,{value:t,onChangeText:l,onEnter:s,error:c}),n.a.createElement(U,{className:H.a.blue}),n.a.createElement(K,null,"default"),n.a.createElement(K,{red:!0,onClick:s},"delete "),n.a.createElement(K,{disabled:!0},"disabled"),n.a.createElement(J,{checked:m,onChangeChecked:u},"some text "),n.a.createElement(J,{checked:m,onChange:function(e){return u(e.currentTarget.checked)}})),n.a.createElement("hr",null),n.a.createElement("hr",null))};var q=function(){return n.a.createElement("div",{className:o.a.App},n.a.createElement("h2",null,"react homeworks:"),n.a.createElement(E,null),n.a.createElement(C,null),n.a.createElement(A,null),n.a.createElement(L,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(q,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[16,1,2]]]);
//# sourceMappingURL=main.9713d77c.chunk.js.map