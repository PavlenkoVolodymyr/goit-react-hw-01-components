(this["webpackJsonpgoit-react-hw-01-components"]=this["webpackJsonpgoit-react-hw-01-components"]||[]).push([[0],[,function(e,a,t){e.exports={profile:"Profile_profile__15I9R",description:"Profile_description__3vdv1",avatar:"Profile_avatar__38hEz",stats:"Profile_stats__yN4tO",name:"Profile_name__1eSmV",tag:"Profile_tag__2y31z",location:"Profile_location__1BlGH",item:"Profile_item__2Hp5g"}},function(e,a,t){e.exports={table:"Transaction-history_table__1t1h3",line:"Transaction-history_line__5xVwX",thead:"Transaction-history_thead__1i17G",row:"Transaction-history_row__23k14"}},function(e,a,t){e.exports={statistics:"Statistics_statistics__2zqQp",title:"Statistics_title__17_M7",list:"Statistics_list__3lk2d",item:"Statistics_item__2OFvC"}},function(e){e.exports=JSON.parse('{"username":"Jacques Gluke","tag":"jgluke","location":"Ocho Rios, Jamaica","avatar":"https://cdn-icons-png.flaticon.com/512/2922/2922506.png","stats":{"followers":5603,"views":4827,"likes":1308}}')},function(e,a,t){e.exports={item:"FriendListItem_item__1rBPK",avatar:"FriendListItem_avatar__f209R",status:"FriendListItem_status__3SEfo",text:"FriendListItem_text__3IMcg",statusOn:"FriendListItem_statusOn__2PKiL FriendListItem_status__3SEfo",statusOff:"FriendListItem_statusOff__3YYBK FriendListItem_status__3SEfo"}},,,,function(e){e.exports=JSON.parse('[{"avatar":"https://cdn-icons-png.flaticon.com/512/1998/1998592.png","name":"Mango","isOnline":true,"id":1812},{"avatar":"https://cdn-icons-png.flaticon.com/512/616/616438.png","name":"Kiwi","isOnline":false,"id":1137},{"avatar":"https://cdn-icons-png.flaticon.com/512/1623/1623681.png","name":"Ajax","isOnline":true,"id":1213},{"avatar":"https://cdn-icons-png.flaticon.com/512/2977/2977285.png","name":"Jay","isOnline":true,"id":1714},{"avatar":"https://cdn-icons-png.flaticon.com/512/1998/1998749.png","name":"Poly","isOnline":false,"id":1284}]')},function(e){e.exports=JSON.parse('[{"id":"id-1","label":".docx","percentage":22},{"id":"id-2","label":".pdf","percentage":4},{"id":"id-3","label":".mp3","percentage":17},{"id":"id-4","label":".psd","percentage":47},{"id":"id-5","label":".pdf","percentage":10}]')},function(e){e.exports=JSON.parse('[{"id":"1e0700a2-5183-4291-85cc-2065a036a683","type":"invoice","amount":"964.82","currency":"LRD"},{"id":"a30f821b-4d25-4ff0-abdd-e340b3f0dd2b","type":"payment","amount":"686.50","currency":"WST"},{"id":"44dca67a-8e5a-4798-bf8e-b15efd4e1abd","type":"invoice","amount":"828.62","currency":"UGX"},{"id":"ea8ed3dc-2b68-4a53-905a-53ecb0adef33","type":"withdrawal","amount":"527.80","currency":"ALL"},{"id":"ea76146a-0b00-4b80-bc02-a8c822176712","type":"withdrawal","amount":"371.43","currency":"MUR"},{"id":"63ca02f9-d637-46b5-9237-f3b24425e029","type":"payment","amount":"862.44","currency":"AUD"},{"id":"ed0263e8-59a5-4bf1-87e0-2bb88e53dc34","type":"withdrawal","amount":"907.00","currency":"GEL"},{"id":"6013bad0-750c-4691-8bc2-d8f2b43969c4","type":"withdrawal","amount":"352.52","currency":"UGX"},{"id":"252c7be4-8b06-4fa7-8d42-61fb835b70d5","type":"payment","amount":"388.98","currency":"TOP"},{"id":"4eaab41b-b967-40ac-82ed-85fc66f646f1","type":"deposit","amount":"103.10","currency":"BWP"},{"id":"9648a350-8469-42d5-8bf3-18090de5fe67","type":"withdrawal","amount":"322.32","currency":"MRO"},{"id":"9c5c25fb-1a95-4b2f-8d1f-4c4426d677cc","type":"invoice","amount":"14.79","currency":"PYG"},{"id":"43ef232c-80e9-4d6f-b48a-b22405620de3","type":"payment","amount":"904.86","currency":"CHF"},{"id":"5161682e-e620-4019-ab0a-24ceb10fbd20","type":"withdrawal","amount":"307.08","currency":"NOK"},{"id":"7b119d71-42e6-4c42-a141-6818b07bb9ff","type":"invoice","amount":"275.07","currency":"AWG"},{"id":"a4f65722-65c4-4c28-b1f4-b8ed988bb205","type":"deposit","amount":"213.10","currency":"STD"},{"id":"c6e5784b-0ca3-48d6-86e5-b5128af5a523","type":"invoice","amount":"116.11","currency":"CUP CUC"},{"id":"c9ebed6a-3a02-4b49-ac0d-0534b51f2bfd","type":"invoice","amount":"878.67","currency":"HKD"},{"id":"a4a98b0e-b22c-438b-9f83-de2df52110c8","type":"invoice","amount":"725.03","currency":"UYU UYI"},{"id":"b39bfa7a-0166-4c47-94d6-87d20590f746","type":"payment","amount":"405.45","currency":"MDL"}]')},function(e,a,t){e.exports={list:"FriendList_list__2Srsy"}},,,,,function(e,a,t){},,,function(e,a,t){"use strict";t.r(a);var s=t(6),c=t.n(s),n=t(8),i=t.n(n),r=(t(17),t(9)),l=t(4),d=t(10),o=t(11),b=t(12),m=t.n(b),p=t(5),u=t.n(p),j=t(0);var f=function(e){var a=e.avatar,t=e.name,s=e.isOnline,c=void 0!==s&&s;return Object(j.jsxs)("li",{className:u.a.item,children:[Object(j.jsx)("span",{className:c?u.a.statusOn:u.a.statusOff}),Object(j.jsx)("img",{className:u.a.avatar,src:a,alt:"User avatar",width:"48"}),Object(j.jsx)("p",{className:u.a.name,children:t})]})};var _=function(e){var a=e.friendlist,t=void 0===a?[]:a;return Object(j.jsx)("ul",{className:m.a.list,children:t.map((function(e){return Object(j.jsx)(f,{avatar:e.avatar,name:e.name,isOnline:e.isOnline},e.id)}))})},h=t(1),O=t.n(h);var x=function(e){var a=e.username,t=e.tag,s=e.location,c=e.avatar,n=e.stats,i=void 0===n?{}:n;return console.log(O.a),Object(j.jsxs)("div",{className:O.a.profile,children:[Object(j.jsxs)("div",{className:O.a.description,children:[Object(j.jsx)("img",{src:c,alt:"User avatar",className:O.a.avatar}),Object(j.jsx)("p",{className:O.a.name,children:a}),Object(j.jsxs)("p",{className:O.a.tag,children:["@",t]}),Object(j.jsx)("p",{className:O.a.location,children:s})]}),Object(j.jsxs)("ul",{className:O.a.stats,children:[Object(j.jsxs)("li",{className:O.a.item,children:[Object(j.jsx)("span",{className:O.a.label,children:"Followers"}),Object(j.jsx)("span",{className:O.a.quantity,children:i.followers})]}),Object(j.jsxs)("li",{className:O.a.item,children:[Object(j.jsx)("span",{className:O.a.label,children:"Views"}),Object(j.jsx)("span",{className:O.a.quantity,children:i.views})]}),Object(j.jsxs)("li",{className:O.a.item,children:[Object(j.jsx)("span",{className:O.a.label,children:"Likes"}),Object(j.jsx)("span",{className:O.a.quantity,children:i.likes})]})]})]})},y=t(3),v=t.n(y);var N=function(e){var a=e.title,t=void 0===a?"":a,s=e.stats;return Object(j.jsxs)("section",{className:v.a.statistics,children:[t&&Object(j.jsx)("h2",{className:v.a.title,children:t}),Object(j.jsx)("ul",{className:v.a.list,children:s.map((function(e){return Object(j.jsxs)("li",{className:v.a.item,style:{backgroundColor:"#".concat(Math.random().toString(16).slice(2,8))},children:[Object(j.jsx)("span",{className:v.a.label,children:e.label}),Object(j.jsxs)("span",{className:v.a.percentage,children:[e.percentage,"%"]})]},e.id)}))})]})},g=t(2),w=t.n(g);var S=function(e){var a=e.transactions;return Object(j.jsxs)("table",{className:w.a.table,children:[Object(j.jsx)("thead",{className:w.a.thead,children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{className:w.a.line,children:"Type"}),Object(j.jsx)("th",{className:w.a.line,children:"Amount"}),Object(j.jsx)("th",{className:w.a.line,children:"Currency"})]})}),Object(j.jsx)("tbody",{children:a.map((function(e){return Object(j.jsxs)("tr",{className:w.a.row,children:[Object(j.jsx)("td",{className:w.a.line,children:e.type}),Object(j.jsx)("td",{className:w.a.line,children:e.amount}),Object(j.jsx)("td",{className:w.a.line,children:e.currency})]},e.id)}))})]})};var L=function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{children:Object(j.jsx)(x,{username:l.username,tag:l.tag,location:l.location,avatar:l.avatar,stats:l.stats})}),Object(j.jsxs)("div",{children:[Object(j.jsx)(N,{title:"Upload stats",stats:d}),";"]}),Object(j.jsx)("div",{children:Object(j.jsx)(_,{friendlist:r})}),Object(j.jsx)("div",{children:Object(j.jsx)(S,{transactions:o})})]})};t(19);i.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(L,{})}),document.getElementById("root"))}],[[20,1,2]]]);
//# sourceMappingURL=main.5e585fd9.chunk.js.map