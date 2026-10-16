# Expctral Optic Modulator — build publicado

Engine gráfica WebGPU do ecossistema **Expctral** (evolução da Reafforesthree Engine): monte jogos com nodes **Sinapse**, jogue no navegador e ejete o código TypeScript, 0% lock-in.

**Online:** https://mezzetti4096.github.io/expctral-optic-modulator/

Este repositório contém só o **build estático** servido pelo GitHub Pages.
- `/` página inicial · `/editor` ORBIT WORKSPACE (viewport WebGPU com fallback WebGL2, Sinapse, código) · `/archives` biblioteca local de jogos
- Projetos, pacotes e jogos publicados ficam salvos no próprio navegador (IndexedDB); nada é enviado a servidor.
- WebGPU exige navegador compatível (Chrome/Edge 113+); sem ele, o renderer usa WebGL2. Sem nenhum dos dois, o viewport avisa.
- Ícones: geometria de [Lucide](https://lucide.dev) (ISC License).
