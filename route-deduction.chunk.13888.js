(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"6vys":function(e,t,a){"use strict";function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}function i(e,t){for(var a=0;a<t.length;a++){var i=t[a];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,(o=void 0,o=function(e,t){if("object"!==n(e)||null===e)return e;var a=e[Symbol.toPrimitive];if(void 0!==a){var i=a.call(e,t||"default");if("object"!==n(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(i.key,"string"),"symbol"===n(o)?o:String(o)),i)}var o}a.d(t,"a",(function(){return o}));var o=function(){function e(){}var t,a,n;return t=e,n=[{key:"focusFirstInputElement",value:function(){var e=document.querySelectorAll("input");e.length>0&&e[0].focus()}},{key:"focusFirstSelectElement",value:function(){var e=document.querySelectorAll("select");e.length>0&&e[0].focus()}}],(a=null)&&i(t.prototype,a),n&&i(t,n),Object.defineProperty(t,"prototype",{writable:!1}),e}()},"Ej/d":function(e,t,a){"use strict";var n=a("hosL");t.a=function(e){var t=function(e){var t=e.style.backgroundColor;e.style.backgroundColor="lightgreen",setTimeout((function(){e.style.backgroundColor=t}),500)},a=function(e){var t=e.style.backgroundColor;e.style.backgroundColor="pink",setTimeout((function(){e.style.backgroundColor=t}),500)};return Object(n.h)("div",{class:"mb-3 border rounded",style:"width:450px;padding:5px;"},Object(n.h)("div",{class:"input-group mb-3"},Object(n.h)("span",{class:"input-group-text",style:"width:180px;font-size:10pt;"},e.title),Object(n.h)("div",{class:"input-group-text"},Object(n.h)("input",{onChange:function(t){t.preventDefault(),e.store.enabled.value=!e.store.enabled.value,!1===e.store.enabled.value?e.store.amt.value=0:function(e){var t=document.querySelectorAll("input"),a=function(e,t){for(var a=0,n=0;n<e.length;++n)if(e[n]==t&&n!==e.length-1){a=n+1;break}return a}(t,e.target);setTimeout((function(){var e=t[a];e.focus(),e.select()}),0)}(t)},class:"form-check-input mt-0",type:"checkbox","aria-label":"Checkbox for following text input",checked:e.store.enabled.value})),Object(n.h)("span",{class:"input-group-text"},"$"),Object(n.h)("input",{onBlur:function(n){var i=n.currentTarget;if(""===i.value)i.value="0",e.store.enabled.value=!1,a(i);else{var o=parseInt(i.value);o>e.min_value?o>e.max_value?(a(i),i.value=e.max_value):(t(i),e.store.amt.value=o):(a(i),e.store.amt.value=0,e.store.enabled.value=!1)}},type:"number",value:e.store.amt.value,"aria-label":"Amount",class:"form-control text-end",disabled:!1===e.store.enabled.value}),Object(n.h)("span",{class:"input-group-text"},".00")),Object(n.h)("label",{style:"font-size:11px;padding-left:4px;"},e.description))}},UPth:function(e,t,a){"use strict";function n(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var a=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var n,i,o,r,u=[],c=!0,l=!1;try{if(o=(a=a.call(e)).next,0===t){if(Object(a)!==a)return;c=!1}else for(;!(c=(n=o.call(a)).done)&&(u.push(n.value),u.length!==t);c=!0);}catch(e){l=!0,i=e}finally{try{if(!c&&null!=a.return&&(r=a.return(),Object(r)!==r))return}finally{if(l)throw i}}return u}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return i(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return i(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}a.r(t);var o=a("hosL"),r=a("Y3FI"),u=a("QRet"),c=a("Ej/d"),l=a("obIk"),s=a("VHJu"),m=a("WvLY"),d=a("6vys");t.default=function(){var e=n(Object(u.k)([["income","amount"]]),2),t=e[0],a=e[1];Object(u.d)((function(){d.a.focusFirstInputElement()}),[]),Object(u.d)((function(){a(m.a.getDeductionTaxChartData())}),[l.a.deduction.deduction.value,l.a.income.agi.value]);return Object(o.h)("div",{style:"padding:10px;"},Object(o.h)("p",{style:"height:50px;"}),Object(o.h)("div",{class:"container"},Object(o.h)("hr",null),Object(o.h)("h6",null,Object(o.h)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"currentColor",class:"bi bi-people",viewBox:"0 0 16 16"},Object(o.h)("path",{d:"M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8Zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022ZM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816ZM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z"}))," ",Object(o.h)("i",null,"Post-tax Contribution")),l.a.about.has_child.value?Object(o.h)("div",{class:"row align-items-start"},Object(o.h)("div",{class:"col"},Object(o.h)(c.a,{store:l.a.deduction.f529_contribution,title:"529 contribution",min_value:"0",max_value:"32000",description:"Estimated annual 529 contribution. 529 limit is $16k per parent, per year. 529 grows tax-free for education use."})),Object(o.h)("div",{class:"col"},Object(o.h)(c.a,{store:l.a.deduction.utma_contribution,title:"UTMA contribution",min_value:"0",max_value:"32000",description:"Estimated UTMA contribution to child. If joint filing, sum up both. UTMA account contribution is considered gift and limit to $16k per parent, per year."}))):Object(o.h)("div",null),Object(o.h)("div",{class:"row align-items-start"},Object(o.h)("div",{class:"col"},Object(o.h)(c.a,{store:l.a.deduction.roth_ira,title:"Roth IRA",min_value:"0",max_value:"14000",description:"A Roth IRA is a way to save for retirement that gives you tax advantages. Generally, amounts in your Roth IRA (including earnings and gains) are not taxed and able to grow tax-free. The annual contribution limit for 2023 is $6,500, or $7,500 if you're age 50 or older. To qualify, MAGI less than $129,000 for a full contribution or $129,000 - $144,000 for a partial contribution. Married filing jointly: MAGI less than $204,000 for a full contribution or $204,000 - $214,000 for a partial contribution."})),Object(o.h)("div",{class:"col"})),Object(o.h)("hr",null),Object(o.h)("h6",null,Object(o.h)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"currentColor",class:"bi bi-bandaid",viewBox:"0 0 16 16"},Object(o.h)("path",{d:"M14.121 1.879a3 3 0 0 0-4.242 0L8.733 3.026l4.261 4.26 1.127-1.165a3 3 0 0 0 0-4.242ZM12.293 8 8.027 3.734 3.738 8.031 8 12.293 12.293 8Zm-5.006 4.994L3.03 8.737 1.879 9.88a3 3 0 0 0 4.241 4.24l.006-.006 1.16-1.121ZM2.679 7.676l6.492-6.504a4 4 0 0 1 5.66 5.653l-1.477 1.529-5.006 5.006-1.523 1.472a4 4 0 0 1-5.653-5.66l.001-.002 1.505-1.492.001-.002Z"}),Object(o.h)("path",{d:"M5.56 7.646a.5.5 0 1 1-.706.708.5.5 0 0 1 .707-.708Zm1.415-1.414a.5.5 0 1 1-.707.707.5.5 0 0 1 .707-.707ZM8.39 4.818a.5.5 0 1 1-.708.707.5.5 0 0 1 .707-.707Zm0 5.657a.5.5 0 1 1-.708.707.5.5 0 0 1 .707-.707ZM9.803 9.06a.5.5 0 1 1-.707.708.5.5 0 0 1 .707-.707Zm1.414-1.414a.5.5 0 1 1-.706.708.5.5 0 0 1 .707-.708ZM6.975 9.06a.5.5 0 1 1-.707.708.5.5 0 0 1 .707-.707ZM8.39 7.646a.5.5 0 1 1-.708.708.5.5 0 0 1 .707-.708Zm1.413-1.414a.5.5 0 1 1-.707.707.5.5 0 0 1 .707-.707Z"}))," ",Object(o.h)("i",null,"health & education deduction")),Object(o.h)("div",{class:"row align-items-start"},Object(o.h)("div",{class:"col"},Object(o.h)(c.a,{store:l.a.deduction.medical_dental_expense,title:"Medical/Dental Cost",min_value:"0",max_value:"1000000",description:"Estimated paymentfor co-pay, out-of-pocket, medical/dental insurance premium. You can deduct the amount of the total un-reimbursed allowable medical care expenses for the 2022 Tax Year that exceeds 7.5% of your Adjusted Gross Income."})),Object(o.h)("div",{class:"col"},Object(o.h)(c.a,{store:l.a.deduction.college_expense,title:"College expense",min_value:"0",max_value:"200000",description:"Estimated annual college expense. The Form 1098-T is a form provided to you and the IRS by an eligible educational institution that reports, among other things, amounts paid for qualified tuition and related expenses. The form may be useful in calculating the amount of the allowable education tax credits."}))),Object(o.h)("hr",null),Object(o.h)("h6",null,Object(o.h)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"currentColor",class:"bi bi-piggy-bank",viewBox:"0 0 16 16"},Object(o.h)("path",{d:"M5 6.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0zm1.138-1.496A6.613 6.613 0 0 1 7.964 4.5c.666 0 1.303.097 1.893.273a.5.5 0 0 0 .286-.958A7.602 7.602 0 0 0 7.964 3.5c-.734 0-1.441.103-2.102.292a.5.5 0 1 0 .276.962z"}),Object(o.h)("path",{"fill-rule":"evenodd",d:"M7.964 1.527c-2.977 0-5.571 1.704-6.32 4.125h-.55A1 1 0 0 0 .11 6.824l.254 1.46a1.5 1.5 0 0 0 1.478 1.243h.263c.3.513.688.978 1.145 1.382l-.729 2.477a.5.5 0 0 0 .48.641h2a.5.5 0 0 0 .471-.332l.482-1.351c.635.173 1.31.267 2.011.267.707 0 1.388-.095 2.028-.272l.543 1.372a.5.5 0 0 0 .465.316h2a.5.5 0 0 0 .478-.645l-.761-2.506C13.81 9.895 14.5 8.559 14.5 7.069c0-.145-.007-.29-.02-.431.261-.11.508-.266.705-.444.315.306.815.306.815-.417 0 .223-.5.223-.461-.026a.95.95 0 0 0 .09-.255.7.7 0 0 0-.202-.645.58.58 0 0 0-.707-.098.735.735 0 0 0-.375.562c-.024.243.082.48.32.654a2.112 2.112 0 0 1-.259.153c-.534-2.664-3.284-4.595-6.442-4.595zM2.516 6.26c.455-2.066 2.667-3.733 5.448-3.733 3.146 0 5.536 2.114 5.536 4.542 0 1.254-.624 2.41-1.67 3.248a.5.5 0 0 0-.165.535l.66 2.175h-.985l-.59-1.487a.5.5 0 0 0-.629-.288c-.661.23-1.39.359-2.157.359a6.558 6.558 0 0 1-2.157-.359.5.5 0 0 0-.635.304l-.525 1.471h-.979l.633-2.15a.5.5 0 0 0-.17-.534 4.649 4.649 0 0 1-1.284-1.541.5.5 0 0 0-.446-.275h-.56a.5.5 0 0 1-.492-.414l-.254-1.46h.933a.5.5 0 0 0 .488-.393zm12.621-.857a.565.565 0 0 1-.098.21.704.704 0 0 1-.044-.025c-.146-.09-.157-.175-.152-.223a.236.236 0 0 1 .117-.173c.049-.027.08-.021.113.012a.202.202 0 0 1 .064.199z"}))," ",Object(o.h)("i",null,"investment deduction")),Object(o.h)("div",{class:"row align-items-start"},Object(o.h)("div",{class:"col"},Object(o.h)(c.a,{store:l.a.deduction.salt,title:"State & Local Tax",min_value:"0",max_value:"10000",description:"This includes tax from state/local govt such as property tax, vehicle registrations and sales tax. State and local taxes you pay are deductible if you itemize on your federal income tax return. Limit is $10k."})),Object(o.h)("div",{class:"col"},Object(o.h)(c.a,{store:l.a.deduction.mortgage_interest,title:"Rental Mortgage interest",min_value:"0",max_value:"100000",description:"Estimated interest paid on mortgage. The interest you pay on a mortgage on a home other than your main or second home may be deductible if the proceeds of the loan were used for business, investment, or other deductible purposes."}))),Object(o.h)("div",{class:"row align-items-start"},Object(o.h)("div",{class:"col"},Object(o.h)(c.a,{store:l.a.deduction.business_deduction,title:"Business deduction",min_value:"0",max_value:"1000000",description:"Estimated business income deduction. This deduction allows you to deduct up to 20% of your Qualified Business Income."})),Object(o.h)("div",{class:"col"},Object(o.h)(c.a,{store:l.a.deduction.early_withdrawal_penalty,title:"Retirement withdrawal",min_value:"0",max_value:"1000000",description:"10% of total early withdrawal of funds from IRA, 401(k), or other qualified retirement."}))),Object(o.h)("div",{class:"row align-items-start"},Object(o.h)("div",{class:"col"},Object(o.h)(c.a,{store:l.a.deduction.investment_expense,title:"Investment expense",min_value:"0",max_value:"1000000",description:"Estimated investment expense. Any interest you paid on borrowed money to buy taxable investments (property, stocks, etc.)."})),Object(o.h)("div",{class:"col"})),Object(o.h)("hr",null),Object(o.h)("h6",null,Object(o.h)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"currentColor",class:"bi bi-currency-dollar",viewBox:"0 0 16 16"},Object(o.h)("path",{d:"M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718H4zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73l.348.086z"}))," ",Object(o.h)("i",null,"other deduction")),Object(o.h)("div",{class:"row align-items-start"},Object(o.h)("div",{class:"col"},Object(o.h)(c.a,{store:l.a.deduction.charity_contribution,title:"Charitable donation",min_value:"0",max_value:"2000000",description:"Donations made to charitable foundation. You can claim up to $500 without receipt."})),Object(o.h)("div",{class:"col"},Object(o.h)(c.a,{store:l.a.deduction.other_deduction,title:"Other Itemized",min_value:"0",max_value:"2000000",description:"Estimated other uncommon itemized deduction."}))),Object(o.h)("hr",null),Object(o.h)("button",{type:"button",class:"btn btn-lg btn-success",onClick:function(){return Object(r.route)("/income")}},"Back: Income")," ",Object(o.h)("button",{type:"button",class:"btn btn-lg btn-success",onClick:function(){return Object(r.route)("/taxcredit")}},"Next: Tax Credit"),Object(o.h)("hr",null),Object(o.h)("div",{class:"row align-items-start"},Object(o.h)("div",{class:"col"},Object(o.h)("div",{class:"mb-3 border rounded",style:"width:450px;padding:5px;"},Object(o.h)("div",{class:"input-group mb-3"},Object(o.h)("span",{class:"input-group-text",style:"width:180px;font-size:11pt;"},l.a.deduction.deduction.value[0]),Object(o.h)("input",{type:"number",id:"txt_total",value:l.a.deduction.deduction.value[1],"aria-label":"Total",class:"form-control text-end",disabled:!0}),Object(o.h)("span",{class:"input-group-text"},".00")),Object(o.h)("label",{style:"font-size:12px;"},"Standard deduction is $",l.a.deduction.standardized_deduction.value,". Itemized deduction is $",l.a.deduction.itemized_deduction.value,". ",l.a.deduction.deduction.value[0]," is best for your case."))),Object(o.h)("div",{class:"col"},Object(o.h)(s.a,{chartType:"PieChart",data:t,options:m.a.getDeductionTaxChartConfig(),width:"450px",height:"350px"})))))}},WvLY:function(e,t,a){"use strict";function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}function i(e,t){for(var a=0;a<t.length;a++){var i=t[a];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,(o=void 0,o=function(e,t){if("object"!==n(e)||null===e)return e;var a=e[Symbol.toPrimitive];if(void 0!==a){var i=a.call(e,t||"default");if("object"!==n(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(i.key,"string"),"symbol"===n(o)?o:String(o)),i)}var o}a.d(t,"a",(function(){return r}));var o=a("obIk"),r=function(){function e(){}var t,a,n;return t=e,n=[{key:"getAgiChartData",value:function(){var e=[];return e.push(["income","amount"]),o.a.income.w2.value>0&&e.push(["W2",parseInt(o.a.income.w2.value)]),o.a.income.f1099misc.amt.value>0&&e.push(["Misc/Nec/Rental",parseInt(o.a.income.f1099misc.amt.value)]),o.a.income.rsu.amt.value>0&&e.push(["RSU/Options",parseInt(o.a.income.rsu.amt.value)]),(o.a.income.f1099b_longterm.amt.value>0||o.a.income.f1099b_shortterm.amt.value>0)&&e.push(["Capital gain",parseInt(o.a.income.f1099b_longterm.amt.value)+parseInt(o.a.income.f1099b_shortterm.amt.value)]),o.a.income.f1099r.amt.value>0&&e.push(["Retirement dist.",parseInt(o.a.income.f1099r.amt.value)]),o.a.income.f1099g.amt.value>0&&e.push(["Unemployment benefits",parseInt(o.a.income.f1099g.amt.value)]),o.a.income.farm.amt.value>0&&e.push(["Farm income",parseInt(o.a.income.farm.amt.value)]),(o.a.income.f1099_div_qualified.amt.value>0||o.a.income.f1099_div.amt.value>0)&&e.push(["Dividend",parseInt(o.a.income.f1099_div_qualified.amt.value)+parseInt(o.a.income.f1099_div.amt.value)]),o.a.income.f1099_int.amt.value>0&&e.push(["Interest",parseInt(o.a.income.f1099_int.amt.value)]),o.a.income.gambling_other.amt.value>0&&e.push(["Gambling/Others",parseInt(o.a.income.gambling_other.amt.value)]),o.a.income.espp_discount.amt.value>0&&e.push(["ESPP Discount",parseInt(o.a.income.espp_discount.amt.value)]),e}},{key:"getAgiChartConfig",value:function(){return{title:"Adjusted Gross Income",pieHole:.5,is3D:!1,titleTextStyle:{fontName:"Helvetica",fontSize:14}}}},{key:"getTaxCreditDistributionChartData",value:function(){var e=[];return e.push(["income","amount"]),o.a.taxcredit.eic.amt.value>0&&e.push(["EIC",parseInt(o.a.taxcredit.eic.amt.value)]),o.a.taxcredit.child_tax_credit.amt.value>0&&e.push(["Child Tax Credit",parseInt(o.a.taxcredit.child_tax_credit.amt.value)]),o.a.taxcredit.dependent_credit.amt.value>0&&e.push(["Dependent Tax Credit",parseInt(o.a.taxcredit.dependent_credit.amt.value)]),o.a.taxcredit.child_dependent_care_expense.amt.value>0&&e.push(["Dependent Care Expense",parseInt(o.a.taxcredit.child_dependent_care_expense.amt.value)]),o.a.taxcredit.premium_tax_credit.amt.value>0&&e.push(["Premium Tax Credit",parseInt(o.a.taxcredit.premium_tax_credit.amt.value)]),o.a.taxcredit.residential_energy_credit.amt.value>0&&e.push(["Residential Energy Credit",parseInt(o.a.taxcredit.residential_energy_credit.amt.value)]),o.a.taxcredit.ev_credit.amt.value>0&&e.push(["EV Tax Credit",parseInt(o.a.taxcredit.ev_credit.amt.value)]),o.a.taxcredit.foreign_tax_credit.amt.value>0&&e.push(["Foreign Tax Credit",parseInt(o.a.taxcredit.foreign_tax_credit.amt.value)]),e}},{key:"getTaxCreditDistributionChartConfig",value:function(){return{title:"Estimated Tax Credit",pieHole:.5,is3D:!1,titleTextStyle:{fontName:"Helvetica",fontSize:14}}}},{key:"getTaxAdvantageChartData",value:function(){var e=[];return e.push(["income","amount"]),o.a.income.f1099b_longterm.amt.value>0&&e.push(["Long term capital gain",parseInt(o.a.income.f1099b_longterm.amt.value)]),o.a.income.f1099_div_qualified.amt.value>0&&e.push(["Qualified Dividend",parseInt(o.a.income.f1099_div_qualified.amt.value)]),o.a.income.f1099_int_taxfree.amt.value>0&&e.push(["Tax-exempt Interest",parseInt(o.a.income.f1099_int_taxfree.amt.value)]),o.a.income.espp_discount.amt.value>0&&e.push(["ESPP Discount",parseInt(o.a.income.espp_discount.amt.value)]),o.a.income.f401k_match.amt.value>0&&e.push(["401k/403b match",parseInt(o.a.income.f401k_match.amt.value)]),o.a.income.f401k_contrib.amt.value>0&&e.push(["401k/403b contribution",parseInt(o.a.income.f401k_contrib.amt.value)]),o.a.income.ira.amt.value>0&&e.push(["IRA contribution",parseInt(o.a.income.ira.amt.value)]),o.a.income.fsa.amt.value>0&&e.push(["FSA contribution",parseInt(o.a.income.fsa.amt.value)]),o.a.income.hsa.amt.value>0&&e.push(["HSA contribution",parseInt(o.a.income.hsa.amt.value)]),o.a.income.utma_gain.amt.value>0&&e.push(["UTMA gain",parseInt(o.a.income.utma_gain.amt.value)]),e}},{key:"getTaxAdvantageChartConfig",value:function(){return{title:"Tax Advantage Income",pieHole:.5,is3D:!1,titleTextStyle:{fontName:"Helvetica",fontSize:14}}}},{key:"getDeductionTaxChartData",value:function(){var e=[];e.push(["income","amount"]);var t=parseInt(o.a.income.agi.value)-parseInt(o.a.deduction.deduction.value[1]),a=0;return t>=0?a=parseInt(o.a.deduction.deduction.value[1]):(a=parseInt(o.a.deduction.deduction.value[1])+t)<0&&(a=0),e.push(["Pretax income",parseInt(o.a.income.pretax.value)]),e.push(["Deductions",a]),e.push(["Taxable income",parseInt(o.a.income.agi.value)-a]),e}},{key:"getDeductionTaxChartConfig",value:function(){return{title:"Deductions/Pre-Tax/Taxable",pieHole:.5,is3D:!1,titleTextStyle:{fontName:"Helvetica",fontSize:14}}}},{key:"getIncomeDistributionChartData",value:function(){var e=[];e.push(["income","amount"]);var t=parseInt(o.a.income.agi.value)-parseInt(o.a.deduction.deduction.value[1]),a=0;return t>=0?a=parseInt(o.a.deduction.deduction.value[1]):(a=parseInt(o.a.deduction.deduction.value[1])+t)<0&&(a=0),e.push(["Pretax income",parseInt(o.a.income.pretax.value)]),e.push(["Deductions",a]),e.push(["Tax Credits",o.a.taxcredit.total_tax_credit.value]),e.push(["Tax Due",Math.max(0,o.a.tax.due.value)]),e.push(["Net Income",o.a.tax.taxable_income.value-o.a.tax.tax_amount.value-o.a.income.ssa_medicare_contrib.value]),e.push(["SSA/Medicare",o.a.income.ssa_medicare_contrib.value]),e}},{key:"getIncomeDistributionChartConfig",value:function(){return{title:"Income Distribution",pieHole:.5,is3D:!1,titleTextStyle:{fontName:"Helvetica",fontSize:14}}}},{key:"getIncomeFlowScoreChartData",value:function(){var e=[];return e.push(["Label","Value"]),e.push(["Score",(o.a.income.income.value-o.a.tax.due.value)/o.a.income.income.value*100]),e}},{key:"getIncomeFlowScoreConfigData",value:function(){return{greehFrom:80,greenTo:100,yellowFrom:50,yellowTo:80,redFrom:0,redTo:50,minorTicks:5}}},{key:"getGrossIncomeChartData",value:function(){var e=[];return e.push(["income","amount"]),o.a.income.w2.value>0&&e.push(["W2",parseInt(o.a.income.w2.value)]),o.a.income.f1099misc.amt.value>0&&e.push(["Misc/Nec/Rental",parseInt(o.a.income.f1099misc.amt.value)]),o.a.income.rsu.amt.value>0&&e.push(["RSU/Options",parseInt(o.a.income.rsu.amt.value)]),(o.a.income.f1099b_longterm.amt.value>0||o.a.income.f1099b_shortterm.amt.value>0)&&e.push(["Capital gain",parseInt(o.a.income.f1099b_longterm.amt.value)+parseInt(o.a.income.f1099b_shortterm.amt.value)]),o.a.income.f1099r.amt.value>0&&e.push(["Retirement dist.",parseInt(o.a.income.f1099r.amt.value)]),o.a.income.f1099g.amt.value>0&&e.push(["Unemployment benefits",parseInt(o.a.income.f1099g.amt.value)]),o.a.income.farm.amt.value>0&&e.push(["Farm income",parseInt(o.a.income.farm.amt.value)]),(o.a.income.f1099_div_qualified.amt.value>0||o.a.income.f1099_div.amt.value>0)&&e.push(["Dividend",parseInt(o.a.income.f1099_div_qualified.amt.value)+parseInt(o.a.income.f1099_div.amt.value)]),o.a.income.f1099_int.amt.value>0&&e.push(["Interest",parseInt(o.a.income.f1099_int.amt.value)]),o.a.income.gambling_other.amt.value>0&&e.push(["Gambling/Others",parseInt(o.a.income.gambling_other.amt.value)]),o.a.income.espp_discount.amt.value>0&&e.push(["ESPP Discount",parseInt(o.a.income.espp_discount.amt.value)]),o.a.income.f401k_match.amt.value>0&&e.push(["401k match",parseInt(o.a.income.f401k_match.amt.value)]),o.a.income.f1099_int_taxfree.amt.value>0&&e.push(["Tax-exempt interest",parseInt(o.a.income.f1099_int_taxfree.amt.value)]),e}},{key:"getGrossIncomeChartConfig",value:function(){return{title:"Gross Income",pieHole:.5,is3D:!1,titleTextStyle:{fontName:"Helvetica",fontSize:14}}}},{key:"getIncomeFlowChartData",value:function(){var e=[];return e.push(["From","To","$"]),o.a.income.w2.value>0&&(e.push(["W2","Adjusted Gross Income",parseInt(o.a.income.w2.value)]),o.a.income.f401k_match.amt.value>0&&(e.push(["W2","401k + match",parseInt(o.a.income.f401k_match.amt.value)+parseInt(o.a.income.f401k_contrib.amt.value)]),e.push(["401k + match","Pre-tax",parseInt(o.a.income.f401k_match.amt.value)+parseInt(o.a.income.f401k_contrib.amt.value)])),o.a.income.hsa.amt.value>0&&(e.push(["W2","HSA",parseInt(o.a.income.hsa.amt.value)]),e.push(["HSA","Pre-tax",parseInt(o.a.income.hsa.amt.value)])),o.a.income.fsa.amt.value>0&&(e.push(["W2","FSA",parseInt(o.a.income.fsa.amt.value)]),e.push(["FSA","Pre-tax",parseInt(o.a.income.fsa.amt.value)])),e.push(["W2","SSA + Medicare contrib.",o.a.income.ssa_medicare_contrib.value]),e.push(["SSA + Medicare contrib.","Social Security/Medicare",o.a.income.ssa_medicare_contrib.value])),o.a.income.pretax.value>0&&e.push(["Pre-tax","Tax-advantage Income",parseInt(o.a.income.pretax.value)]),o.a.income.f1099misc.amt.value>0&&e.push(["Misc/Nec/Rental","Adjusted Gross Income",parseInt(o.a.income.f1099misc.amt.value)]),o.a.income.rsu.amt.value>0&&e.push(["RSU/Options","Adjusted Gross Income",parseInt(o.a.income.rsu.amt.value)]),o.a.income.f1099b_longterm.amt.value>0&&(e.push(["long-term cap gain","Adjusted Gross Income",parseInt(o.a.income.f1099b_longterm.amt.value)]),e.push(["Adjusted Gross Income","Tax-advantage cap gain",parseInt(o.a.income.f1099_div_qualified.amt.value)]),e.push(["Tax-advantage cap gain","Tax-advantage Income",parseInt(o.a.income.f1099_div_qualified.amt.value)])),o.a.income.f1099b_shortterm.amt.value>0&&e.push(["short-term cap gain","Adjusted Gross Income",parseInt(o.a.income.f1099b_shortterm.amt.value)]),o.a.income.f1099r.amt.value>0&&e.push(["Retirement dist.","Adjusted Gross Income",parseInt(o.a.income.f1099r.amt.value)]),o.a.income.f1099g.amt.value>0&&e.push(["Unemployment benefits","Adjusted Gross Income",parseInt(o.a.income.f1099g.amt.value)]),o.a.income.farm.amt.value>0&&e.push(["Farm income","Adjusted Gross Income",parseInt(o.a.income.farm.amt.value)]),o.a.income.f1099_div.amt.value>0&&e.push(["Ordinary Dividend","Adjusted Gross Income",parseInt(o.a.income.f1099_div.amt.value)]),o.a.income.f1099_div_qualified.amt.value>0&&(e.push(["Qualified Dividend","Adjusted Gross Income",parseInt(o.a.income.f1099_div_qualified.amt.value)]),e.push(["Adjusted Gross Income","Tax-advantage Dividend",parseInt(o.a.income.f1099_div_qualified.amt.value)]),e.push(["Tax-advantage Dividend","Tax-advantage Income",parseInt(o.a.income.f1099_div_qualified.amt.value)])),o.a.income.f1099_int.amt.value>0&&e.push(["Interest","Adjusted Gross Income",parseInt(o.a.income.f1099_int.amt.value)]),o.a.income.gambling_other.amt.value>0&&e.push(["Gambling/Others","Adjusted Gross Income",parseInt(o.a.income.gambling_other.amt.value)]),o.a.income.espp_discount.amt.value>0&&e.push(["ESPP Discount","Adjusted Gross Income",parseInt(o.a.income.espp_discount.amt.value)]),o.a.income.f1099_int_taxfree.amt.value>0&&e.push(["Tax-exempt interest","Pre-tax",parseInt(o.a.income.f1099_int_taxfree.amt.value)]),o.a.income.utma_gain.amt.value>0&&e.push(["UTMA gain","Pre-tax",parseInt(o.a.income.utma_gain.amt.value)]),o.a.income.ira.amt.value>0&&(e.push(["Adjusted Gross Income","IRA contribution",parseInt(o.a.income.ira.amt.value)]),e.push(["IRA contribution","Pre-tax",parseInt(o.a.income.ira.amt.value)])),o.a.income.agi.value>0&&(e.push(["Adjusted Gross Income","Deductions",parseInt(o.a.deduction.deduction.value[1])]),e.push(["Adjusted Gross Income","Taxable Income",parseInt(o.a.tax.taxable_income.value)]),e.push(["Deductions","Tax-advantage Income",parseInt(o.a.deduction.deduction.value[1])])),o.a.deduction.f529_contribution.amt.value>0&&(e.push(["Taxable Income","529 contribution",parseInt(o.a.deduction.f529_contribution.amt.value)]),e.push(["529 contribution","Tax-advantage Income",parseInt(o.a.deduction.f529_contribution.amt.value)])),o.a.deduction.roth_ira.amt.value>0&&(e.push(["Taxable Income","Roth IRA contribution",parseInt(o.a.deduction.roth_ira.amt.value)]),e.push(["Roth IRA contribution","Tax-advantage Income",parseInt(o.a.deduction.roth_ira.amt.value)])),o.a.tax.taxable_income.value>0&&(o.a.tax.tax_amount.value>0&&e.push(["Taxable Income","Tax Amount",o.a.tax.tax_amount.value]),o.a.tax.taxable_income.value-o.a.tax.tax_amount.value>0&&e.push(["Taxable Income","Net Income",o.a.tax.taxable_income.value-o.a.tax.tax_amount.value-o.a.income.ssa_medicare_contrib.value])),o.a.tax.tax_amount.value>0&&(o.a.taxcredit.total_tax_credit.value>0&&e.push(["Tax Amount","Tax Credit",o.a.taxcredit.total_tax_credit.value]),o.a.tax.due.value>0&&e.push(["Tax Amount","Tax Due",o.a.tax.due.value]),o.a.taxcredit.total_tax_credit.value>0&&e.push(["Tax Credit","Tax-advantage Income",o.a.taxcredit.total_tax_credit.value])),e}}],(a=null)&&i(t.prototype,a),n&&i(t,n),Object.defineProperty(t,"prototype",{writable:!1}),e}()}}]);
//# sourceMappingURL=route-deduction.chunk.13888.js.map