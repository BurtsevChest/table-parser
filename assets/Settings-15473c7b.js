import{u as f,g as A,a as b,p,R as h,j as e,r as u,b as x,c as S,_ as j,C as v,s as T}from"./index-3bd4da1c.js";const N=()=>{const t=f(A).attributesToSave,s=b();return{attributesToSave:t,updateAttributesToSave:n=>{s(p.setNewAttrsToSave(n))},addAttributeToSave:n=>{s(p.addNewAttrsToSave(n))},deleteAttributeToSave:n=>{s(p.deleteNewAttrsToSave(n))},changeNewAttrsToSave:n=>{s(p.changeNewAttrsToSave(n))}}};const C=({TitleTemplate:t,items:s,onItemClick:a})=>{const[r,o]=h.useState([]);h.useEffect(()=>{o(new Array(s.length).fill(!1))},[s]);const i=n=>{o(r.map((l,c)=>(c===n&&(l=!l),l))),a==null||a(n)};return e.jsx(e.Fragment,{children:s&&s.map((n,l)=>e.jsxs("div",{onClick:()=>i(l),className:"Accordion-item",children:[e.jsx(t,{title:n.title,active:r[l]}),e.jsx("div",{className:"Accordion-item-content "+(r[l]===!0?"Accordion-item-content-show":"Accordion-item-content-hide"),children:n.ItemTemplate})]},l))})},y=({attr:t,value:s,onItemUpdate:a})=>{const[r,o]=u.useState(t),[i,n]=u.useState(s),l=()=>{a({attr:r,value:i})};return e.jsx("div",{className:"AttrList-ItemTemplate",onClick:c=>c.stopPropagation(),children:e.jsxs("p",{children:[e.jsx("input",{type:"text",value:r,onChange:c=>o(c.target.value),style:{color:"purple"}}),e.jsx("input",{type:"text",value:i,onChange:c=>n(c.target.value),style:{color:"grey"}}),e.jsx("button",{onClick:l,children:"Changed"})]})})},w=t=>Object.entries(t).map(([s,a])=>({tagName:s,attrList:Object.entries(a).map(([r,o])=>({attr:r,value:o}))})),_=(t,s)=>w(t).map(a=>({title:a.tagName,ItemTemplate:a.attrList.map((r,o)=>e.jsx(y,{attr:r.attr,value:r.value,onItemUpdate:s},o))})),D=({title:t})=>e.jsx("div",{className:"AttrList-TitleTemplate",children:e.jsx("span",{style:{color:"red"},children:t})});const L=()=>{const{newAttrs:t,updateNewAttrs:s}=x(),a=()=>{s({...t})},r=_(x().newAttrs||{},a);return e.jsxs("div",{children:[e.jsx("h2",{className:"pb-16",children:"Новые атрибуты для элементов"}),e.jsx(C,{TitleTemplate:D,items:r})]})},F=()=>{const{tagsForDelete:t}=x();return e.jsxs(e.Fragment,{children:[e.jsx("h2",{className:"pb-16",children:"Тэги, которые нужно удалить"}),e.jsx("ul",{children:t&&t.map((s,a)=>e.jsx("li",{className:"pb-4",children:e.jsx("p",{children:s})},a))})]})},d=new S;d.defaultStyles={backgroundColor:"#141414",boxShadow:"rgb(0 0 0 / 40%) 0px 0px 40px",padding:"20px",borderRadius:"20px",color:"white",minHeight:"700px",minWidth:"500px"};function P({onDelete:t,onSave:s,title:a}){d.open({Component:()=>j(()=>import("./index-cbddee6f.js"),["./index-cbddee6f.js","./index-3bd4da1c.js","./index-56ca0822.css"],import.meta.url),name:"confirmDeleteDialog",props:{onDelete:t,onSave:s,title:a},styles:{...d.defaultStyles,minWidth:"none",minHeight:"none",borderRadius:"12px",padding:"16px"},modal:!0})}const k=()=>{const{attributesToSave:t,changeNewAttrsToSave:s,deleteAttributeToSave:a}=N(),r=()=>{d.open({Component:()=>j(()=>import("./AddItemDialog-b375843d.js"),["./AddItemDialog-b375843d.js","./index-3bd4da1c.js","./index-56ca0822.css"],import.meta.url),name:"addAttrToSaveDialog",styles:{...d.defaultStyles,minWidth:"none",minHeight:"none",borderRadius:"12px",padding:"16px"}})};return e.jsxs("div",{className:"pb-32 pb-xm-24",children:[e.jsxs("div",{className:"flex",children:[e.jsx("h2",{className:"pb-16",children:"Атрибуты, которые нужно сохранить"}),e.jsx(v,{onClick:r})]}),e.jsx("div",{className:"flex-container",children:t&&t.map((o,i)=>e.jsx("div",{className:"pointer flex-col flex-col-4",children:e.jsx(I,{index:i,title:o,changeNewAttrsToSave:s,deleteAttributeToSave:a},i)},i))})]})},I=({title:t,index:s,changeNewAttrsToSave:a,deleteAttributeToSave:r})=>{const[o,i]=u.useState(!1),[n,l]=u.useState(t),c=()=>{n===""?l(t):n!==t&&a({index:s,value:n}),i(!1)},m=()=>{P({title:"Удалить элемент?",onDelete:()=>{r(s),i(!1),l(t)}})};if(!o)return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"flex",children:[e.jsx("div",{className:"",children:n}),e.jsx("span",{onClick:()=>i(!0),children:"🖆"}),e.jsx("span",{onClick:m,children:"❌"})]})});if(o)return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"flex",children:[e.jsx("input",{value:n,onChange:g=>l(g.target.value)}),e.jsx("span",{onClick:c,children:"✓"}),e.jsx("span",{onClick:m,children:"❌"})]})})};const R=({id:t})=>{const s=()=>{T.close(t)};return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"flex flex-column h-100",children:[e.jsxs("div",{className:"ParserConfigCard-head flex flex-justify-between a-items-center pb-20",children:[e.jsx("h1",{children:"Настройки"}),e.jsx(v,{onClick:s})]}),e.jsxs("div",{className:"ParserConfigCard-content flex-max pt-16",children:[e.jsx(k,{}),e.jsx("div",{className:"pb-32 pb-xm-24",children:e.jsx(L,{})}),e.jsx("div",{children:e.jsx(F,{})})]})]})})},O=Object.freeze(Object.defineProperty({__proto__:null,default:R},Symbol.toStringTag,{value:"Module"}));export{O as S,N as u};