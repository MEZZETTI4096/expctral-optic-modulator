import{a as e,n as t}from"./sandbox-yWaJzm-U.js";import{n,t as r}from"./store-DnGq-N5d.js";var i=e=>`// ${e} — script de componente
// Estende Behaviour; campos em \`static editable\` viram controles no Inspector.

export default class ${e} extends Behaviour {
  speed = 1

  static editable = {
    speed: { type: 'slider', min: 0, max: 10, step: 0.1, label: 'Velocidade' },
  }

  start() {
    this.log('${e} iniciado em', this.entity.name)
  }

  update(dt) {
    this.transform.rotation.y += this.speed * dt
  }
}
`;function a(e,t){let n=t,r=1;for(;e[n];)n=`${t}${r++}`;return n}var o=n((n,o)=>({scripts:{},selected:null,select:e=>n({selected:e}),revealLine:null,reveal:(e,t)=>n({selected:e,revealLine:t}),clearReveal:()=>n({revealLine:null}),create:e=>{let t=o(),r=a(t.scripts,e??`NovoScript`),s=i(r);return n({scripts:{...t.scripts,[r]:{name:r,code:s,error:null}},selected:r}),o().save(r),r},setCode:(e,t)=>n(n=>({scripts:{...n.scripts,[e]:{...n.scripts[e],code:t}}})),save:async e=>{let i=o().scripts[e];if(!i)return;let a=await t(e,i.code);n(t=>({scripts:{...t.scripts,[e]:{...t.scripts[e],error:a.ok?null:a.error??`erro`}}})),a.ok?r.getState().pushConsole(`log`,`Script compilado: ${e}`):r.getState().pushConsole(`error`,`Script ${e}: ${a.error}`),r.getState().bump()},remove:t=>{e(t),n(e=>{let n={...e.scripts};return delete n[t],{scripts:n,selected:e.selected===t?null:e.selected}}),r.getState().bump()},compileAll:async()=>{for(let e of Object.values(o().scripts))await o().save(e.name)},load:async e=>{let t={};for(let[n,r]of Object.entries(e))t[n]={name:n,code:r,error:null};n({scripts:t,selected:Object.keys(t)[0]??null}),await o().compileAll()},serialize:()=>{let e={};for(let t of Object.values(o().scripts))e[t.name]=t.code;return e}}));export{o as t};