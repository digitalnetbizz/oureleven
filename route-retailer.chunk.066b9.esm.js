(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"6vys":function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));class l{static focusFirstInputElement(){let e=document.querySelectorAll("input");e.length>0&&e[0].focus()}static focusFirstSelectElement(){let e=document.querySelectorAll("select");e.length>0&&e[0].focus()}}},"8jHM":function(e,t,a){"use strict";var l=a("hosL");t.a=e=>{const t=e=>{let t=e.style.backgroundColor;e.style.backgroundColor="lightgreen",setTimeout((()=>{e.style.backgroundColor=t}),500)},a=e=>{let t=e.style.backgroundColor;e.style.backgroundColor="pink",setTimeout((()=>{e.style.backgroundColor=t}),500)};return Object(l.h)("div",{class:"mb-3 border rounded",style:"width:450px;padding:5px;"},Object(l.h)("div",{class:"input-group mb-3"},Object(l.h)("span",{class:"input-group-text",style:"width:180px;font-size:10pt;"},e.title),Object(l.h)("div",{class:"input-group-text"},Object(l.h)("input",{onChange:t=>{t.preventDefault(),e.store.enabled.value=!e.store.enabled.value,!1===e.store.enabled.value?e.store.amt.value=0:function(e){let t=document.querySelectorAll("input"),a=function(e,t){let a=0;for(let l=0;l<e.length;++l)if(e[l]==t&&l!==e.length-1){a=l+1;break}return a}(t,e.target);setTimeout((()=>{let e=t[a];e.focus(),e.select()}),0)}(t)},class:"form-check-input mt-0",type:"checkbox","aria-label":"Checkbox for following text input",checked:e.store.enabled.value})),Object(l.h)("span",{class:"input-group-text"},"$"),Object(l.h)("input",{onBlur:l=>{const o=l.currentTarget;if(""===o.value)o.value="0",e.store.enabled.value=!1,a(o);else{let l=parseInt(o.value);l>e.min_value?l>e.max_value?(a(o),o.value=e.max_value):(t(o),e.store.amt.value=l):(a(o),e.store.amt.value=0,e.store.enabled.value=!1)}},type:"number",value:e.store.amt.value,"aria-label":"Amount",class:"form-control text-end",disabled:!1===e.store.enabled.value}),Object(l.h)("span",{class:"input-group-text"},".00"),Object(l.h)("div",{class:"input-group"},Object(l.h)("div",{class:"form-floating"},Object(l.h)("select",{class:"form-select",id:"floatingSelect","aria-label":"Filing status",style:"font-size:10pt;width:200px;",value:e.store.frequency.value,onChange:t=>{e.store.frequency.value=parseInt(t.currentTarget.value)}},Object(l.h)("option",{value:"0"},"Monthly"),Object(l.h)("option",{value:"1"},"Quarterly"),Object(l.h)("option",{value:"2"},"Semi-Annually"),Object(l.h)("option",{value:"3"},"Annually")),Object(l.h)("label",{for:"floatingSelect",style:"font-size:9pt;"},"Frequency")),Object(l.h)("div",{class:"form-floating"},Object(l.h)("select",{class:"form-select",id:"floatingSelect","aria-label":"Filing status",style:"font-size:10pt;width:239px;",value:e.store.payment.value,onChange:t=>{e.store.payment.value=parseInt(t.currentTarget.value)}},Object(l.h)("option",{value:"0"},"0% pay with cash/check"),Object(l.h)("option",{value:"1"},"1% back with credit card"),Object(l.h)("option",{value:"2"},"2% back with credit card"),Object(l.h)("option",{value:"3"},"3% back with credit card"),Object(l.h)("option",{value:"4"},"4% back with credit card"),Object(l.h)("option",{value:"5"},"5% back with credit card"),Object(l.h)("option",{value:"6"},"6% back with credit card"),Object(l.h)("option",{value:"7"},"10% back with credit card")),Object(l.h)("label",{for:"floatingSelect",style:"font-size:9pt;"},"Payment method")))),Object(l.h)("label",{style:"font-size:11px;padding-left:4px;"},e.description))}},nQ09:function(e,t,a){"use strict";a.r(t);var l=a("hosL"),o=a("Y3FI"),s=a("obIk"),c=a("QRet"),r=a("6vys"),i=a("8jHM");t.default=()=>(Object(c.d)((()=>{r.a.focusFirstInputElement()}),[]),Object(l.h)("div",{style:"padding:10px;"},Object(l.h)("p",{style:"height:50px;"}),Object(l.h)("div",{class:"container"},Object(l.h)("hr",null),Object(l.h)("h5",null,"Expense by Retailers"),"Some people prefer not to split everything into detailed categories. Instead most people are buying from big retailers in the country like Amazon, Costco, Walmart, Sam's club, Target etc. If this the way you want to group by, you can enter by retailer. If you prefer to itemize everything by fine category, you can skip to the next section.",Object(l.h)("p",null),"You should not double expense on item enter here. For eg. if you are buying some groceries from Costco, you should enter just the groceries expense that not from Costco in the other section. Or if you are buying all gifts from Amazon, then don't enter anything in other gifts section.",Object(l.h)("div",{class:"row align-items-start"},Object(l.h)("div",{class:"col"},Object(l.h)(i.a,{store:s.a.retailer.amazon,title:"Amazon / Wholefoods",min_value:"0",max_value:"100000",description:"All Amazon purchases."})),Object(l.h)("div",{class:"col"},Object(l.h)(i.a,{store:s.a.retailer.costco,title:"Costco",min_value:"0",max_value:"50000",description:"All Costco purchases."}))),Object(l.h)("div",{class:"row align-items-start"},Object(l.h)("div",{class:"col"},Object(l.h)(i.a,{store:s.a.retailer.walmart,title:"Walmart",min_value:"0",max_value:"20000",description:"All Walmart purchases."})),Object(l.h)("div",{class:"col"},Object(l.h)(i.a,{store:s.a.retailer.sams_club,title:"Sam's Club",min_value:"0",max_value:"20000",description:"All Sam's club purchases."}))),Object(l.h)("div",{class:"row align-items-start"},Object(l.h)("div",{class:"col"},Object(l.h)(i.a,{store:s.a.retailer.target,title:"Target",min_value:"0",max_value:"5000",description:"All Target purchases."})),Object(l.h)("div",{class:"col"},Object(l.h)(i.a,{store:s.a.retailer.homedepot_lowes,title:"Home Improvements",min_value:"0",max_value:"20000",description:"Home Depot, Lowe's or other home improvements store."}))),Object(l.h)("div",{class:"row align-items-start"},Object(l.h)("div",{class:"col"},Object(l.h)(i.a,{store:s.a.retailer.pharmacies,title:"Pharmacies",min_value:"0",max_value:"5000",description:"All pharmacies purchases such as CVS, Walgreen, RiteAid etc."})),Object(l.h)("div",{class:"col"},Object(l.h)(i.a,{store:s.a.retailer.other,title:"Other Retailers",min_value:"0",max_value:"20000",description:"Other retailers not listed above."}))),Object(l.h)("hr",null),Object(l.h)("button",{type:"button",class:"btn btn-lg btn-primary",onClick:()=>Object(o.route)("/expense/health")},"Back: Health/Child")," ",Object(l.h)("button",{type:"button",class:"btn btn-lg btn-primary",onClick:()=>Object(o.route)("/expense/food")},"Next: Food / Child"),Object(l.h)("hr",null))))}}]);
//# sourceMappingURL=route-retailer.chunk.066b9.esm.js.map