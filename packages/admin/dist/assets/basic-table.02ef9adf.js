import{W as e,h as t,t as s,s as a,b as c}from"./vendor.c531581f.js";import"./index.esm.860715ad.js";var r=Object.defineProperty,d=Object.getOwnPropertyDescriptor;let o=class extends e{constructor(){super(...arguments),this.dataSource=[],this.columns=[{title:"ID",render:e=>t("strong",null,e.id)},{title:"Name",key:"name"},{title:"Age",key:"age"},{title:"Address",key:"address"},{title:"操作",align:"right",render:e=>t("o-tooltip",{content:"删除"+e.name},t("o-icon-delete",{"data-item-id":e.id,onClick:this.onClick,style:"cursor:pointer;font-size:20px;"}))}],this.onClick=e=>{this.deleteItemById(Number(e.currentTarget.dataset.itemId))}}async install(){this.dataSource=await async function(){return[{id:1,name:"xwang",age:18,address:"Tencent"},{id:2,name:"dntzhang",age:12,address:"Tencent",$config:{bgColor:"rgb(247 176 176 / 32%)"}},{id:3,name:"lucy",age:12,address:"Tencent"},{id:4,name:"john",age:12,address:"Tencent",$config:{bgColor:"rgb(230 162 60 / 34%)"}},{id:5,name:"tim",age:12,address:"Tencent"},{id:6,name:"tim",age:12,address:"Tencent"},{id:7,name:"tim",age:12,address:"Tencent"},{id:8,name:"tim",age:12,address:"Tencent"}]}(),this.update()}deleteItemById(e){const t=this.dataSource.indexOf(this.dataSource.find((t=>t.id===e)));-1!==t&&(this.dataSource.splice(t,1),this.update())}render(){return t("div",{class:s`pl-0.5`},t("div",{class:s`flex flex-row`},t("div",{class:s`flex-1 px-2`},t("h4",{class:s`py-2 text-sm`},"带复选框"),t("o-table",{checkbox:!0,stripe:!0,border:!1,compact:!0,columns:this.columns,dataSource:this.dataSource})),t("div",{class:s`flex-1  px-2`},t("h4",{class:s`py-2 text-sm`},"带边框"),t("o-table",{checkbox:!0,stripe:!0,border:!0,compact:!0,columns:this.columns,dataSource:this.dataSource}))),t("div",{class:s`px-2`},t("h4",{class:s`py-2 text-sm`},"基础表格"),t("o-table",{checkbox:!1,stripe:!1,border:!1,compact:!1,columns:this.columns,dataSource:this.dataSource})),t("div",{class:s`flex flex-row`},t("div",{class:s`flex-1  px-2`},t("h4",{class:s`py-2 text-sm`},"压缩高度"),t("o-table",{checkbox:!1,stripe:!0,border:!1,compact:!0,columns:this.columns,dataSource:this.dataSource})),t("div",{class:s`flex-1  px-2`},t("h4",{class:s`py-2 text-sm`},"无隔行变色"),t("o-table",{checkbox:!0,stripe:!1,border:!0,compact:!0,columns:this.columns,dataSource:this.dataSource}))))}};o.css=a.target,o=((e,t,s,a)=>{for(var c,o=a>1?void 0:a?d(t,s):t,i=e.length-1;i>=0;i--)(c=e[i])&&(o=(a?c(t,s,o):c(o))||o);return a&&o&&r(t,s,o),o})([c("basic-table")],o);export default o;