(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"6vys":function(e,t,l){"use strict";l.d(t,"a",(function(){return a}));class a{static focusFirstInputElement(){let e=document.querySelectorAll("input");e.length>0&&e[0].focus()}static focusFirstSelectElement(){let e=document.querySelectorAll("select");e.length>0&&e[0].focus()}}},"8jHM":function(e,t,l){"use strict";var a=l("hosL");t.a=e=>{const t=e=>{let t=e.style.backgroundColor;e.style.backgroundColor="lightgreen",setTimeout((()=>{e.style.backgroundColor=t}),500)},l=e=>{let t=e.style.backgroundColor;e.style.backgroundColor="pink",setTimeout((()=>{e.style.backgroundColor=t}),500)};return Object(a.h)("div",{class:"mb-3 border rounded",style:"width:450px;padding:5px;"},Object(a.h)("div",{class:"input-group mb-3"},Object(a.h)("span",{class:"input-group-text",style:"width:180px;font-size:10pt;"},e.title),Object(a.h)("div",{class:"input-group-text"},Object(a.h)("input",{onChange:t=>{t.preventDefault(),e.store.enabled.value=!e.store.enabled.value,!1===e.store.enabled.value?e.store.amt.value=0:function(e){let t=document.querySelectorAll("input"),l=function(e,t){let l=0;for(let a=0;a<e.length;++a)if(e[a]==t&&a!==e.length-1){l=a+1;break}return l}(t,e.target);setTimeout((()=>{let e=t[l];e.focus(),e.select()}),0)}(t)},class:"form-check-input mt-0",type:"checkbox","aria-label":"Checkbox for following text input",checked:e.store.enabled.value})),Object(a.h)("span",{class:"input-group-text"},"$"),Object(a.h)("input",{onBlur:a=>{const s=a.currentTarget;if(""===s.value)s.value="0",e.store.enabled.value=!1,l(s);else{let a=parseInt(s.value);a>e.min_value?a>e.max_value?(l(s),s.value=e.max_value):(t(s),e.store.amt.value=a):(l(s),e.store.amt.value=0,e.store.enabled.value=!1)}},type:"number",value:e.store.amt.value,"aria-label":"Amount",class:"form-control text-end",disabled:!1===e.store.enabled.value}),Object(a.h)("span",{class:"input-group-text"},".00"),Object(a.h)("div",{class:"input-group"},Object(a.h)("div",{class:"form-floating"},Object(a.h)("select",{class:"form-select",id:"floatingSelect","aria-label":"Filing status",style:"font-size:10pt;width:200px;",value:e.store.frequency.value,onChange:t=>{e.store.frequency.value=parseInt(t.currentTarget.value)}},Object(a.h)("option",{value:"0"},"Monthly"),Object(a.h)("option",{value:"1"},"Quarterly"),Object(a.h)("option",{value:"2"},"Semi-Annually"),Object(a.h)("option",{value:"3"},"Annually")),Object(a.h)("label",{for:"floatingSelect",style:"font-size:9pt;"},"Frequency")),Object(a.h)("div",{class:"form-floating"},Object(a.h)("select",{class:"form-select",id:"floatingSelect","aria-label":"Filing status",style:"font-size:10pt;width:239px;",value:e.store.payment.value,onChange:t=>{e.store.payment.value=parseInt(t.currentTarget.value)}},Object(a.h)("option",{value:"0"},"0% pay with cash/check"),Object(a.h)("option",{value:"1"},"1% back with credit card"),Object(a.h)("option",{value:"2"},"2% back with credit card"),Object(a.h)("option",{value:"3"},"3% back with credit card"),Object(a.h)("option",{value:"4"},"4% back with credit card"),Object(a.h)("option",{value:"5"},"5% back with credit card"),Object(a.h)("option",{value:"6"},"6% back with credit card"),Object(a.h)("option",{value:"7"},"10% back with credit card")),Object(a.h)("label",{for:"floatingSelect",style:"font-size:9pt;"},"Payment method")))),Object(a.h)("label",{style:"font-size:11px;padding-left:4px;"},e.description))}},UrQp:function(e,t,l){"use strict";l.r(t);var a=l("hosL"),s=l("Y3FI"),i=l("obIk"),c=l("QRet"),o=l("6vys"),n=l("8jHM");t.default=()=>(Object(c.d)((()=>{o.a.focusFirstInputElement()}),[]),Object(a.h)("div",{style:"padding:10px;"},Object(a.h)("p",{style:"height:50px;"}),Object(a.h)("div",{class:"container"},Object(a.h)("hr",null),Object(a.h)("h5",null,"LifeStyle"),"Not all the expenses here apply to your situation, only check on those item that is applicable. The expense amount can be estimates. Click next when you are done.",Object(a.h)("p",null),Object(a.h)("div",{class:"row align-items-start"},Object(a.h)("div",{class:"col"},Object(a.h)(n.a,{store:i.a.lifestyle.travel,title:"Travel",min_value:"0",max_value:"500000",description:"Estimated budget for travel including flight/hotel/cruise/packages."})),Object(a.h)("div",{class:"col"},Object(a.h)(n.a,{store:i.a.lifestyle.hobby,title:"Hobby",min_value:"0",max_value:"50000",description:"Hobby related expenses."}))),Object(a.h)("div",{class:"row align-items-start"},Object(a.h)("div",{class:"col"},Object(a.h)(n.a,{store:i.a.lifestyle.hair_stylist,title:"Hair Stylist",min_value:"0",max_value:"20000",description:"Hair stylist / nail work."})),Object(a.h)("div",{class:"col"},Object(a.h)(n.a,{store:i.a.lifestyle.cosmetic_beauty,title:"Cosmetic / Beauty",min_value:"0",max_value:"20000",description:"Expenses on cosmetic and beauty products."}))),Object(a.h)("div",{class:"row align-items-start"},Object(a.h)("div",{class:"col"},Object(a.h)(n.a,{store:i.a.lifestyle.clothing,title:"Clothing",min_value:"0",max_value:"5000",description:"New clothing / shoes / handbag purchases."})),Object(a.h)("div",{class:"col"},Object(a.h)(n.a,{store:i.a.lifestyle.gift,title:"Gifts",min_value:"0",max_value:"20000",description:"Gifts for others during special occassion or holidays."}))),Object(a.h)("div",{class:"row align-items-start"},Object(a.h)("div",{class:"col"},Object(a.h)(n.a,{store:i.a.lifestyle.gym_membership,title:"Membership / Pass",min_value:"0",max_value:"5000",description:"Gym membership, sports fees, yoga classes, ski pass, martial arts etc."})),Object(a.h)("div",{class:"col"},Object(a.h)(n.a,{store:i.a.lifestyle.theater,title:"Theater/ Show/ Live sport",min_value:"0",max_value:"20000",description:"Expenses related to theater / live show / live sports etc."}))),Object(a.h)("div",{class:"row align-items-start"},Object(a.h)("div",{class:"col"},Object(a.h)(n.a,{store:i.a.lifestyle.membership_fees,title:"Annual membership",min_value:"0",max_value:"20000",description:"Annual membership fees such as credit card annual fees."})),Object(a.h)("div",{class:"col"},Object(a.h)(n.a,{store:i.a.lifestyle.other,title:"Other lifestyle",min_value:"0",max_value:"20000",description:"Other expenses related to lifestyle."}))),Object(a.h)("hr",null),Object(a.h)("button",{type:"button",class:"btn btn-lg btn-primary",onClick:()=>Object(s.route)("/transport")},"Back: Transportation")," ",Object(a.h)("button",{type:"button",class:"btn btn-lg btn-primary",onClick:()=>Object(s.route)("/analysis")},"Analysis and Recommendations"),Object(a.h)("hr",null))))}}]);
//# sourceMappingURL=route-lifystyle.chunk.14aae.esm.js.map