(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"6vys":function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));class l{static focusFirstInputElement(){let e=document.querySelectorAll("input");e.length>0&&e[0].focus()}static focusFirstSelectElement(){let e=document.querySelectorAll("select");e.length>0&&e[0].focus()}}},"8jHM":function(e,t,a){"use strict";var l=a("hosL");t.a=e=>{const t=e=>{let t=e.style.backgroundColor;e.style.backgroundColor="lightgreen",setTimeout((()=>{e.style.backgroundColor=t}),500)},a=e=>{let t=e.style.backgroundColor;e.style.backgroundColor="pink",setTimeout((()=>{e.style.backgroundColor=t}),500)};return Object(l.h)("div",{class:"mb-3 border rounded",style:"width:450px;padding:5px;"},Object(l.h)("div",{class:"input-group mb-3"},Object(l.h)("span",{class:"input-group-text",style:"width:180px;font-size:10pt;"},e.title),Object(l.h)("div",{class:"input-group-text"},Object(l.h)("input",{onChange:t=>{t.preventDefault(),e.store.enabled.value=!e.store.enabled.value,!1===e.store.enabled.value?e.store.amt.value=0:function(e){let t=document.querySelectorAll("input"),a=function(e,t){let a=0;for(let l=0;l<e.length;++l)if(e[l]==t&&l!==e.length-1){a=l+1;break}return a}(t,e.target);setTimeout((()=>{let e=t[a];e.focus(),e.select()}),0)}(t)},class:"form-check-input mt-0",type:"checkbox","aria-label":"Checkbox for following text input",checked:e.store.enabled.value})),Object(l.h)("span",{class:"input-group-text"},"$"),Object(l.h)("input",{onBlur:l=>{const c=l.currentTarget;if(""===c.value)c.value="0",e.store.enabled.value=!1,a(c);else{let l=parseInt(c.value);l>e.min_value?l>e.max_value?(a(c),c.value=e.max_value):(t(c),e.store.amt.value=l):(a(c),e.store.amt.value=0,e.store.enabled.value=!1)}},type:"number",value:e.store.amt.value,"aria-label":"Amount",class:"form-control text-end",disabled:!1===e.store.enabled.value}),Object(l.h)("span",{class:"input-group-text"},".00"),Object(l.h)("div",{class:"input-group"},Object(l.h)("div",{class:"form-floating"},Object(l.h)("select",{class:"form-select",id:"floatingSelect","aria-label":"Filing status",style:"font-size:10pt;width:200px;",value:e.store.frequency.value,onChange:t=>{e.store.frequency.value=parseInt(t.currentTarget.value)}},Object(l.h)("option",{value:"0"},"Monthly"),Object(l.h)("option",{value:"1"},"Quarterly"),Object(l.h)("option",{value:"2"},"Semi-Annually"),Object(l.h)("option",{value:"3"},"Annually")),Object(l.h)("label",{for:"floatingSelect",style:"font-size:9pt;"},"Frequency")),Object(l.h)("div",{class:"form-floating"},Object(l.h)("select",{class:"form-select",id:"floatingSelect","aria-label":"Filing status",style:"font-size:10pt;width:239px;",value:e.store.payment.value,onChange:t=>{e.store.payment.value=parseInt(t.currentTarget.value)}},Object(l.h)("option",{value:"0"},"0% pay with cash/check"),Object(l.h)("option",{value:"1"},"1% back with credit card"),Object(l.h)("option",{value:"2"},"2% back with credit card"),Object(l.h)("option",{value:"3"},"3% back with credit card"),Object(l.h)("option",{value:"4"},"4% back with credit card"),Object(l.h)("option",{value:"5"},"5% back with credit card"),Object(l.h)("option",{value:"6"},"6% back with credit card"),Object(l.h)("option",{value:"7"},"10% back with credit card")),Object(l.h)("label",{for:"floatingSelect",style:"font-size:9pt;"},"Payment method")))),Object(l.h)("label",{style:"font-size:11px;padding-left:4px;"},e.description))}},B6I2:function(e,t,a){"use strict";a.r(t);var l=a("hosL"),c=a("Y3FI"),i=a("obIk"),o=a("QRet"),s=a("6vys"),n=a("8jHM");t.default=()=>(Object(o.d)((()=>{s.a.focusFirstInputElement()}),[]),Object(l.h)("div",{style:"padding:10px;"},Object(l.h)("p",{style:"height:50px;"}),Object(l.h)("div",{class:"container"},Object(l.h)("hr",null),Object(l.h)("h5",null,"Vehicle related"),"Not all the expenses here apply to your situation, only check on those item that is applicable. The expense amount can be estimates. Click next when you are done.",Object(l.h)("p",null),Object(l.h)("div",{class:"row align-items-start"},Object(l.h)("div",{class:"col"},Object(l.h)(n.a,{store:i.a.vehicle.car_payment,title:"Vehicle payment",min_value:"0",max_value:"10000",description:"Installment on your vehicle"})),Object(l.h)("div",{class:"col"},Object(l.h)(n.a,{store:i.a.vehicle.gasoline,title:"Gasoline/petro",min_value:"0",max_value:"10000",description:"Gasoline at the pump."}))),Object(l.h)("div",{class:"row align-items-start"},Object(l.h)("div",{class:"col"},Object(l.h)(n.a,{store:i.a.vehicle.car_tab,title:"Car registration/tab",min_value:"0",max_value:"20000",description:"Car registration. Normally a yearly fee."})),Object(l.h)("div",{class:"col"},Object(l.h)(n.a,{store:i.a.vehicle.car_maintenance,title:"Car maintenance",min_value:"0",max_value:"20000",description:"Cost of bringing your vehicle for maintenance or services."}))),Object(l.h)("div",{class:"row align-items-start"},Object(l.h)("div",{class:"col"},Object(l.h)(n.a,{store:i.a.vehicle.parking,title:"Parking",min_value:"0",max_value:"5000",description:"Cost of parking."})),Object(l.h)("div",{class:"col"},Object(l.h)(n.a,{store:i.a.vehicle.toll,title:"Toll charges",min_value:"0",max_value:"20000",description:"Toll charges."}))),Object(l.h)("div",{class:"row align-items-start"},Object(l.h)("div",{class:"col"},Object(l.h)(n.a,{store:i.a.vehicle.insurance,title:"Insurance",min_value:"0",max_value:"5000",description:"Cost of insurance for your vehicle."})),Object(l.h)("div",{class:"col"},Object(l.h)(n.a,{store:i.a.vehicle.other,title:"Other cost",min_value:"0",max_value:"20000",description:"Other cost related to your vehicle."}))),Object(l.h)("hr",null),Object(l.h)("button",{type:"button",class:"btn btn-lg btn-primary",onClick:()=>Object(c.route)("/expense/food")},"Back: Food")," ",Object(l.h)("button",{type:"button",class:"btn btn-lg btn-primary",onClick:()=>Object(c.route)("/expense/lifestyle")},"Next: Life Style"),Object(l.h)("hr",null),Object(l.h)("h5",null,"Other local transport"),Object(l.h)("div",{class:"row align-items-start"},Object(l.h)("div",{class:"col"},Object(l.h)(n.a,{store:i.a.vehicle.ride_hailing,title:"Ride hailing",min_value:"0",max_value:"10000",description:"Estimated cost of ride-hailing services such as Uber/Lyft."})),Object(l.h)("div",{class:"col"},Object(l.h)(n.a,{store:i.a.vehicle.public_transport,title:"Public transportation",min_value:"0",max_value:"50000",description:"Estimated cost of public transportation such as bus, ferry, rail etc."}))))))}}]);
//# sourceMappingURL=route-transport.chunk.a1b02.esm.js.map