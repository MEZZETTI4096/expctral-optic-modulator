const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/EditorRuntime-COWfpmeP.js","assets/rolldown-runtime-QTnfLwEv.js","assets/sandbox-yWaJzm-U.js","assets/three.core-CEiXpGJk.js","assets/store-DnGq-N5d.js","assets/schema-BsIqhWF3.js","assets/scriptStore-IlxWD4M6.js"])))=>i.map(i=>d[i]);
import{h as e,i as t,n,x as r,y as i}from"./sandbox-yWaJzm-U.js";import{n as a,t as o}from"./store-DnGq-N5d.js";import{as as s,bo as c}from"./three.core-CEiXpGJk.js";import{S as l,a as u,c as d,i as f}from"./schema-BsIqhWF3.js";function ee(e,t,n){let r=e=>{let n=t[e];if(typeof n!=`function`)throw Error(`TSL sem a função "${e}"`);return n},i=[],a=e=>{switch(e.k){case`float`:return r(`float`)(e.value);case`color`:return r(`color`)(e.hex);case`vec3`:return r(`vec3`)(a(e.x),a(e.y),a(e.z));case`splat3`:return r(`vec3`)(a(e.a));case`builtin`:return t[e.name];case`op1`:return r(e.op)(a(e.a));case`op2`:return r(e.op)(a(e.a),a(e.b));case`mix`:return r(`mix`)(a(e.a),a(e.b),a(e.t));case`clamp`:return r(`clamp`)(a(e.x),a(e.min),a(e.max));case`distance`:return r(`distance`)(a(e.a),a(e.b));case`swizzle`:return a(e.of)[e.c];case`rgb`:return a(e.of).rgb;case`texture`:return r(`texture`)(n[e.name],r(`uv`)());case`ref`:return i[e.id]}};for(let t of e.lets)i.push(a(t));let o={};for(let[t,n]of Object.entries(e.slots))o[t]=a(n);return o}var p=null,m=new Map;async function te(e,t){let n=e.scene?.services.assets,r=n?.listMeta().find(e=>e.kind===`texture`&&(e.name===t||`${e.name}.${e.ext}`===t));if(!n||!r)return null;let i=await n.loadTexture(r.uuid);return i&&(i.colorSpace=c),i}function ne(e){p=e}function re(){return p}function h(e,t){t?m.set(e,t):m.delete(e)}function ie(){m.clear()}function g(e){e?.traverse(e=>_(e))}function _(t){let n=t.getComponent(e);if(!n)return;let r=t.components.find(e=>m.has(e.componentType)),i=r&&m.get(r.componentType);if(!i||!p){n.setNodeMaterial(null);return}let a=n.nodeMaterialToken={};ae(t,i).then(e=>{if(!(n.nodeMaterialToken!==a||!p))try{let t=new p.MeshStandardNodeMaterial,r=ee(i,p.TSL,e);Object.assign(t,r),r.opacityNode&&(t.transparent=!0),n.setNodeMaterial(t)}catch(e){console.error(`Material TSL "${i.graph}":`,e),n.setNodeMaterial(null)}})}async function ae(e,t){let n={};for(let r of t.textures)n[r]=await te(e,r)??new s;return n}i.onComponentsChanged=_;var v=[{id:`flow`,label:`Fluxo e Eventos`,icon:`fam-fluxo`,color:l[`family-fluxo`]},{id:`player`,label:`Jogador e Movimento`,icon:`fam-jogador`,color:l[`family-jogador`]},{id:`camera`,label:`Câmera`,icon:`fam-camera`,color:l[`family-camera`]},{id:`combat`,label:`Combate`,icon:`fam-combate`,color:l[`family-combate`]},{id:`ai`,label:`Inimigos e IA`,icon:`fam-ia`,color:l[`family-ia`]},{id:`gameplay`,label:`Jogo e Mundo`,icon:`fam-jogo`,color:l[`family-jogo`]},{id:`vfx`,label:`Efeitos (VFX)`,icon:`fam-vfx`,color:l[`family-vfx`]},{id:`hud`,label:`Tela (HUD)`,icon:`fam-hud`,color:l[`family-hud`]},{id:`audio`,label:`Áudio`,icon:`fam-audio`,color:l[`family-audio`]},{id:`physics`,label:`Física`,icon:`fam-fisica`,color:l[`family-fisica`]},{id:`entity`,label:`Objetos`,icon:`fam-objetos`,color:l[`family-objetos`]},{id:`vector`,label:`Vetores`,icon:`fam-vetores`,color:l[`family-vetores`]},{id:`data`,label:`Dados e Matemática`,icon:`fam-dados`,color:l[`family-dados`]}];function oe(e){return v.find(t=>t.id===e)??v[0]}var y=new class{map=new Map;register(e){this.map.set(e.type,e)}registerAll(e){for(let t of e)this.register(t)}get(e){return this.map.get(e)}all(){return[...this.map.values()]}byFamily(){return v.map(e=>({family:e,nodes:this.all().filter(t=>t.family===e.id)})).filter(e=>e.nodes.length>0)}search(e){let t=e.trim().toLowerCase();if(!t)return this.all();let n=t.split(/\s+/);return this.all().filter(e=>{let t=`${e.label} ${e.description} ${e.type} ${e.family}`.toLowerCase();return n.every(e=>t.includes(e))})}compatibleWith(e,t){return this.all().filter(n=>(t===`input`?n.inputs:n.outputs).some(t=>t.type===e))}};function b(e,t){let n=e=>e.replace(/[^a-zA-Z0-9_]/g,`_`);return`_${n(e)}_${n(t).slice(0,4)}`}function x(e,t){let n=new Map;for(let t of e)n.set(t,[]);for(let e of t)n.get(e.source)?.push(e.target);let r=new Map,i=e=>{r.set(e,1);for(let t of n.get(e)??[]){let e=r.get(t)??0;if(e===1||e===0&&i(t))return!0}return r.set(e,2),!1};for(let t of e)if((r.get(t)??0)===0&&i(t))return!0;return!1}function se(e,t){let n=new Map,r=new Map;for(let t of e)n.set(t,0),r.set(t,[]);for(let e of t)!n.has(e.target)||!n.has(e.source)||(n.set(e.target,(n.get(e.target)??0)+1),r.get(e.source)?.push(e));let i=e.filter(e=>(n.get(e)??0)===0),a=[];for(;i.length;){let e=i.shift();a.push(e);for(let t of r.get(e)??[]){let e=(n.get(t.target)??0)-1;n.set(t.target,e),e===0&&i.push(t.target)}}if(a.length<e.length)for(let t of e)a.includes(t)||a.push(t);return a}function ce(e){let t=new Map;for(let n of e.edges){let e=t.get(n.target)??[];e.push(n),t.set(n.target,e)}return t}function le(e){let t=new Map;for(let n of e.edges){let e=t.get(n.source)??[];e.push(n),t.set(n.source,e)}return t}var S={id:`exec`,type:`exec`,label:``},C={id:`exec`,type:`exec`,label:``},ue=[{type:`flow/on-start`,family:`flow`,label:`Ao Iniciar`,description:`Dispara uma vez quando o objeto entra em cena (Play).`,kind:`event`,handler:`start`,inputs:[],outputs:[S],emit:e=>`${e.trace()}${e.next(`exec`)}`},{type:`flow/on-tick`,family:`flow`,label:`A Cada Quadro`,description:`Dispara todo frame enquanto o jogo roda.`,kind:`event`,handler:`update`,inputs:[],outputs:[S],emit:e=>`${e.trace()}${e.next(`exec`)}`},{type:`flow/on-input`,family:`flow`,label:`Ao Apertar Tecla`,description:`Dispara conforme a ação de input (mapeável em Configurações).`,kind:`event`,handler:`update`,inputs:[{id:`action`,type:`string`,label:`Ação`,default:`jump`,options:[{value:`jump`,label:`Pular`},{value:`move-forward`,label:`Frente`},{value:`move-back`,label:`Trás`},{value:`move-left`,label:`Esquerda`},{value:`move-right`,label:`Direita`},{value:`sprint`,label:`Correr`},{value:`fire`,label:`Atirar`},{value:`interact`,label:`Interagir`}]},{id:`mode`,type:`string`,label:`Quando`,default:`pressed`,options:[{value:`pressed`,label:`Ao apertar`},{value:`held`,label:`Enquanto segura`},{value:`released`,label:`Ao soltar`}]}],outputs:[S],emit:e=>{let t=JSON.stringify(e.value(`action`)??`jump`),n=e.value(`mode`)??`pressed`;return`if (this.input.${n===`held`?`isActionActive`:n===`released`?`isActionReleased`:`isActionPressed`}(${t})) {\n${e.trace()}${e.next(`exec`)}}\n`}},{type:`flow/on-trigger`,family:`flow`,label:`Ao Encostar (Gatilho)`,description:`Dispara quando outro objeto entra neste sensor (collider trigger).`,kind:`event`,handler:`onTrigger`,inputs:[],outputs:[S,{id:`other`,type:`entity`,label:`Quem encostou`}],outputExpr:e=>e===`other`?`other`:``,emit:e=>`${e.trace()}${e.next(`exec`)}`},{type:`flow/on-collision`,family:`flow`,label:`Ao Colidir`,description:`Dispara quando este corpo físico bate em outro.`,kind:`event`,handler:`onCollision`,inputs:[],outputs:[S,{id:`other`,type:`entity`,label:`Com quem bateu`}],outputExpr:e=>e===`other`?`other`:``,emit:e=>`${e.trace()}${e.next(`exec`)}`},{type:`flow/branch`,family:`flow`,label:`Se… então`,description:`Segue por um caminho ou outro conforme a condição.`,kind:`exec`,inputs:[C,{id:`cond`,type:`boolean`,label:`Condição`,default:!0,editable:!0}],outputs:[{id:`true`,type:`exec`,label:`Verdadeiro`},{id:`false`,type:`exec`,label:`Falso`}],emit:e=>{let t=e.next(`true`),n=e.next(`false`),r=`${e.trace()}if (${e.in(`cond`)}) {\n${t}}`;return n.trim()&&(r+=` else {\n${n}}`),r+`
`}},{type:`flow/sequence`,family:`flow`,label:`Em Sequência`,description:`Executa a saída 1 e depois a 2, na ordem.`,kind:`exec`,inputs:[C],outputs:[{id:`a`,type:`exec`,label:`1º`},{id:`b`,type:`exec`,label:`2º`}],emit:e=>`${e.trace()}${e.next(`a`)}${e.next(`b`)}`},{type:`flow/once`,family:`flow`,label:`Só Uma Vez`,description:`Deixa passar apenas na primeira vez que é executado.`,kind:`exec`,inputs:[C],outputs:[S],emit:e=>{let t=e.state(`once`,`false`);return`${e.trace()}if (!${t}) {\n${t} = true\n${e.next(`exec`)}}\n`}},{type:`flow/flip-flop`,family:`flow`,label:`Alterna A/B`,description:`Alterna entre as saídas A e B a cada execução.`,kind:`exec`,inputs:[C],outputs:[{id:`a`,type:`exec`,label:`A`},{id:`b`,type:`exec`,label:`B`}],emit:e=>{let t=e.state(`flip`,`false`);return`${e.trace()}${t} = !${t}\nif (${t}) {\n${e.next(`a`)}} else {\n${e.next(`b`)}}\n`}},{type:`flow/cooldown`,family:`flow`,label:`Recarga`,description:`Só deixa passar a cada N segundos (cooldown).`,kind:`exec`,inputs:[C,{id:`tempo`,type:`number`,label:`Segundos`,default:1,min:0,step:.1,editable:!0}],outputs:[S],emit:e=>{let t=e.state(`cd`,`-Infinity`);return`${e.trace()}if (this.time.elapsed - ${t} >= ${e.in(`tempo`)}) {\n${t} = this.time.elapsed\n${e.next(`exec`)}}\n`}},{type:`flow/every`,family:`flow`,label:`A Cada N Segundos`,description:`Dispara repetidamente no intervalo definido.`,kind:`exec`,inputs:[C,{id:`intervalo`,type:`number`,label:`Intervalo`,default:1,min:.01,step:.1,editable:!0}],outputs:[S],emit:e=>{let t=e.state(`acc`,`0`);return`${e.trace()}${t} += this.time.delta\nif (${t} >= ${e.in(`intervalo`)}) {\n${t} = 0\n${e.next(`exec`)}}\n`}},{type:`flow/random-chance`,family:`flow`,label:`Chance`,description:`Deixa passar com a probabilidade escolhida (0 a 1).`,kind:`exec`,inputs:[C,{id:`chance`,type:`number`,label:`Chance`,default:.5,min:0,max:1,step:.05,editable:!0}],outputs:[S],emit:e=>`${e.trace()}if (Math.random() < ${e.in(`chance`)}) {\n${e.next(`exec`)}}\n`},{type:`flow/log`,family:`flow`,label:`Escrever no Console`,description:`Mostra um valor no Console do editor — ótimo para depurar.`,kind:`exec`,inputs:[C,{id:`mensagem`,type:`string`,label:`Mensagem`,default:`oi`,editable:!0}],outputs:[S],emit:e=>`${e.trace()}this.log(${e.in(`mensagem`)})\n${e.next(`exec`)}`},{type:`flow/comment`,family:`flow`,label:`Comentário`,description:`Anotação livre para organizar o grafo (não gera código).`,kind:`data`,inputs:[],outputs:[],emit:()=>``}],w={add:(e,t)=>`(${e} + ${t})`,sub:(e,t)=>`(${e} - ${t})`,mul:(e,t)=>`(${e} * ${t})`,div:(e,t)=>`(${t} !== 0 ? ${e} / ${t} : 0)`,min:(e,t)=>`Math.min(${e}, ${t})`,max:(e,t)=>`Math.max(${e}, ${t})`,pow:(e,t)=>`Math.pow(${e}, ${t})`,mod:(e,t)=>`(${t} !== 0 ? ${e} % ${t} : 0)`},T={abs:e=>`Math.abs(${e})`,neg:e=>`(-${e})`,sqrt:e=>`Math.sqrt(Math.max(0, ${e}))`,floor:e=>`Math.floor(${e})`,round:e=>`Math.round(${e})`,sin:e=>`Math.sin(${e})`,cos:e=>`Math.cos(${e})`},de={gt:`>`,gte:`>=`,lt:`<`,lte:`<=`,eq:`===`,neq:`!==`},fe=[{type:`data/number`,family:`data`,label:`Número`,description:`Um valor numérico fixo (ajustável arrastando).`,kind:`data`,inputs:[{id:`valor`,type:`number`,label:`Valor`,default:1,step:.1,editable:!0}],outputs:[{id:`out`,type:`number`,label:``}],emit:e=>e.in(`valor`)},{type:`data/boolean`,family:`data`,label:`Verdadeiro/Falso`,description:`Um valor booleano fixo.`,kind:`data`,inputs:[{id:`valor`,type:`boolean`,label:`Valor`,default:!0,editable:!0}],outputs:[{id:`out`,type:`boolean`,label:``}],emit:e=>e.in(`valor`)},{type:`data/string`,family:`data`,label:`Texto`,description:`Um texto fixo.`,kind:`data`,inputs:[{id:`valor`,type:`string`,label:`Valor`,default:``,editable:!0}],outputs:[{id:`out`,type:`string`,label:``}],emit:e=>e.in(`valor`)},{type:`data/math`,family:`data`,label:`Matemática`,description:`Soma, subtrai, multiplica, divide, mín/máx entre dois números.`,kind:`data`,inputs:[{id:`a`,type:`number`,label:`A`,default:0,step:.1,editable:!0},{id:`b`,type:`number`,label:`B`,default:0,step:.1,editable:!0},{id:`op`,type:`string`,label:`Operação`,default:`add`,options:[{value:`add`,label:`A + B`},{value:`sub`,label:`A − B`},{value:`mul`,label:`A × B`},{value:`div`,label:`A ÷ B`},{value:`min`,label:`Menor`},{value:`max`,label:`Maior`},{value:`pow`,label:`A ^ B`},{value:`mod`,label:`Resto`}]}],outputs:[{id:`out`,type:`number`,label:``}],emit:e=>(w[e.value(`op`)??`add`]??w.add)(e.in(`a`),e.in(`b`))},{type:`data/math1`,family:`data`,label:`Função`,description:`Aplica uma função a um número (abs, raiz, seno…).`,kind:`data`,inputs:[{id:`a`,type:`number`,label:`Valor`,default:0,step:.1,editable:!0},{id:`op`,type:`string`,label:`Função`,default:`abs`,options:[{value:`abs`,label:`Absoluto`},{value:`neg`,label:`Negativo`},{value:`sqrt`,label:`Raiz`},{value:`floor`,label:`Arredondar ↓`},{value:`round`,label:`Arredondar`},{value:`sin`,label:`Seno`},{value:`cos`,label:`Cosseno`}]}],outputs:[{id:`out`,type:`number`,label:``}],emit:e=>(T[e.value(`op`)??`abs`]??T.abs)(e.in(`a`))},{type:`data/clamp`,family:`data`,label:`Limitar`,description:`Prende um número entre um mínimo e um máximo.`,kind:`data`,inputs:[{id:`valor`,type:`number`,label:`Valor`,default:0,step:.1,editable:!0},{id:`min`,type:`number`,label:`Mín`,default:0,step:.1,editable:!0},{id:`max`,type:`number`,label:`Máx`,default:1,step:.1,editable:!0}],outputs:[{id:`out`,type:`number`,label:``}],emit:e=>`Math.min(Math.max(${e.in(`valor`)}, ${e.in(`min`)}), ${e.in(`max`)})`},{type:`data/lerp`,family:`data`,label:`Interpolar`,description:`Mistura A e B por um fator de 0 a 1.`,kind:`data`,inputs:[{id:`a`,type:`number`,label:`A`,default:0,step:.1,editable:!0},{id:`b`,type:`number`,label:`B`,default:1,step:.1,editable:!0},{id:`t`,type:`number`,label:`Fator`,default:.5,min:0,max:1,step:.01,editable:!0}],outputs:[{id:`out`,type:`number`,label:``}],emit:e=>`(${e.in(`a`)} + (${e.in(`b`)} - ${e.in(`a`)}) * ${e.in(`t`)})`},{type:`data/compare`,family:`data`,label:`Comparar`,description:`Compara dois números e devolve verdadeiro ou falso.`,kind:`data`,inputs:[{id:`a`,type:`number`,label:`A`,default:0,step:.1,editable:!0},{id:`b`,type:`number`,label:`B`,default:0,step:.1,editable:!0},{id:`op`,type:`string`,label:`Teste`,default:`gt`,options:[{value:`gt`,label:`A > B`},{value:`gte`,label:`A ≥ B`},{value:`lt`,label:`A < B`},{value:`lte`,label:`A ≤ B`},{value:`eq`,label:`A = B`},{value:`neq`,label:`A ≠ B`}]}],outputs:[{id:`out`,type:`boolean`,label:``}],emit:e=>`(${e.in(`a`)} ${de[e.value(`op`)??`gt`]??`>`} ${e.in(`b`)})`},{type:`data/logic`,family:`data`,label:`Lógica`,description:`Combina dois booleanos (E, OU, NÃO).`,kind:`data`,inputs:[{id:`a`,type:`boolean`,label:`A`,default:!0,editable:!0},{id:`b`,type:`boolean`,label:`B`,default:!0,editable:!0},{id:`op`,type:`string`,label:`Operação`,default:`and`,options:[{value:`and`,label:`A E B`},{value:`or`,label:`A OU B`},{value:`not`,label:`NÃO A`},{value:`xor`,label:`A OU-EX B`}]}],outputs:[{id:`out`,type:`boolean`,label:``}],emit:e=>{let t=e.value(`op`)??`and`,n=e.in(`a`);if(t===`not`)return`(!${n})`;let r=e.in(`b`);return t===`or`?`(${n} || ${r})`:t===`xor`?`(!!${n} !== !!${r})`:`(${n} && ${r})`}},{type:`data/random-range`,family:`data`,label:`Número Aleatório`,description:`Sorteia um número entre mínimo e máximo.`,kind:`data`,inputs:[{id:`min`,type:`number`,label:`Mín`,default:0,step:.1,editable:!0},{id:`max`,type:`number`,label:`Máx`,default:1,step:.1,editable:!0}],outputs:[{id:`out`,type:`number`,label:``}],emit:e=>`(${e.in(`min`)} + Math.random() * (${e.in(`max`)} - ${e.in(`min`)}))`},{type:`data/time`,family:`data`,label:`Tempo`,description:`Tempo desde o último frame (delta) e desde o início.`,kind:`data`,inputs:[],outputs:[{id:`delta`,type:`number`,label:`Delta`},{id:`elapsed`,type:`number`,label:`Total`}],emit:()=>`this.time`},{type:`data/var-get`,family:`data`,label:`Ler Variável`,description:`Lê um valor guardado neste objeto.`,kind:`data`,inputs:[{id:`nome`,type:`string`,label:`Nome`,default:`contador`,editable:!0}],outputs:[{id:`out`,type:`number`,label:``}],emit:e=>e.state(`var_${E(e.value(`nome`)??`v`)}`,`0`)},{type:`flow/var-set`,family:`data`,label:`Guardar Variável`,description:`Guarda um número neste objeto para usar depois.`,kind:`exec`,inputs:[{id:`exec`,type:`exec`,label:``},{id:`nome`,type:`string`,label:`Nome`,default:`contador`,editable:!0},{id:`valor`,type:`number`,label:`Valor`,default:0,step:.1,editable:!0}],outputs:[{id:`exec`,type:`exec`,label:``}],emit:e=>{let t=e.state(`var_${E(e.value(`nome`)??`v`)}`,`0`);return`${e.trace()}${t} = ${e.in(`valor`)}\n${e.next(`exec`)}`}}];function E(e){return e.replace(/[^a-zA-Z0-9_]/g,`_`)||`v`}var D={id:`exec`,type:`exec`,label:``},O={id:`exec`,type:`exec`,label:``},pe=[{type:`vector/make`,family:`vector`,label:`Montar Vetor`,description:`Junta X, Y e Z num vetor 3D.`,kind:`data`,inputs:[{id:`x`,type:`number`,label:`X`,default:0,step:.1,editable:!0},{id:`y`,type:`number`,label:`Y`,default:0,step:.1,editable:!0},{id:`z`,type:`number`,label:`Z`,default:0,step:.1,editable:!0}],outputs:[{id:`out`,type:`vector3`,label:``}],emit:e=>`new Vector3(${e.in(`x`)}, ${e.in(`y`)}, ${e.in(`z`)})`},{type:`vector/split`,family:`vector`,label:`Separar Vetor`,description:`Devolve X, Y e Z de um vetor separadamente.`,kind:`data`,inputs:[{id:`v`,type:`vector3`,label:`Vetor`}],outputs:[{id:`x`,type:`number`,label:`X`},{id:`y`,type:`number`,label:`Y`},{id:`z`,type:`number`,label:`Z`}],emit:e=>e.in(`v`)},{type:`vector/distance`,family:`vector`,label:`Distância`,description:`Distância entre dois pontos no espaço.`,kind:`data`,inputs:[{id:`a`,type:`vector3`,label:`De`},{id:`b`,type:`vector3`,label:`Até`}],outputs:[{id:`out`,type:`number`,label:``}],emit:e=>`${e.in(`a`)}.distanceTo(${e.in(`b`)})`},{type:`vector/scale`,family:`vector`,label:`Multiplicar Vetor`,description:`Multiplica um vetor por um número.`,kind:`data`,inputs:[{id:`v`,type:`vector3`,label:`Vetor`},{id:`k`,type:`number`,label:`Fator`,default:1,step:.1,editable:!0}],outputs:[{id:`out`,type:`vector3`,label:``}],emit:e=>`${e.in(`v`)}.clone().multiplyScalar(${e.in(`k`)})`}],me=[{type:`entity/self`,family:`entity`,label:`Este Objeto`,description:`O objeto ao qual este grafo está anexado.`,kind:`data`,inputs:[],outputs:[{id:`out`,type:`entity`,label:``}],emit:()=>`this.entity`},{type:`entity/find`,family:`entity`,label:`Achar Objeto`,description:`Procura um objeto da cena pelo nome.`,kind:`data`,inputs:[{id:`nome`,type:`string`,label:`Nome`,default:`Cubo`,editable:!0}],outputs:[{id:`out`,type:`entity`,label:``}],emit:e=>`this.find(${e.in(`nome`)})`},{type:`entity/get-position`,family:`entity`,label:`Posição do Objeto`,description:`Lê a posição atual de um objeto.`,kind:`data`,inputs:[{id:`alvo`,type:`entity`,label:`Objeto`}],outputs:[{id:`out`,type:`vector3`,label:``}],emit:e=>`${e.in(`alvo`)}!.object3D.position`},{type:`entity/set-position`,family:`entity`,label:`Mover Objeto`,description:`Coloca um objeto numa posição do mundo.`,kind:`exec`,inputs:[D,{id:`alvo`,type:`entity`,label:`Objeto`},{id:`pos`,type:`vector3`,label:`Posição`}],outputs:[O],emit:e=>`${e.trace()}${e.in(`alvo`)}.object3D.position.copy(${e.in(`pos`)})\n${e.next(`exec`)}`},{type:`entity/destroy`,family:`entity`,label:`Destruir Objeto`,description:`Remove um objeto da cena (ao fim do frame).`,kind:`exec`,inputs:[D,{id:`alvo`,type:`entity`,label:`Objeto`}],outputs:[O],emit:e=>`${e.trace()}this.destroy(${e.in(`alvo`)})\n${e.next(`exec`)}`}],he=[{type:`physics/apply-impulse`,family:`physics`,label:`Impulso Físico`,description:`Dá um empurrão no corpo físico (pulo, explosão, tiro).`,kind:`exec`,inputs:[D,{id:`alvo`,type:`entity`,label:`Objeto`,default:`@self`},{id:`x`,type:`number`,label:`X`,default:0,step:.5,editable:!0},{id:`y`,type:`number`,label:`Força`,default:5,step:.5,editable:!0},{id:`z`,type:`number`,label:`Z`,default:0,step:.5,editable:!0}],outputs:[O],emit:e=>`${e.trace()}this.physics.applyImpulse(${e.in(`alvo`)}, ${e.in(`x`)}, ${e.in(`y`)}, ${e.in(`z`)})\n`+e.next(`exec`)},{type:`physics/get-velocity`,family:`physics`,label:`Ler Velocidade`,description:`Velocidade atual do corpo: o vetor e a rapidez (tamanho).`,kind:`data`,inputs:[{id:`alvo`,type:`entity`,label:`Objeto`,default:`@self`}],outputs:[{id:`vetor`,type:`vector3`,label:`Velocidade`},{id:`rapidez`,type:`number`,label:`Rapidez`}],emit:e=>`((_gv) => ({ vetor: _gv, rapidez: _gv.length() }))(this.physics.getVelocity(${e.in(`alvo`)}))`},{type:`physics/accelerate`,family:`physics`,label:`Velocidade / Aceleração`,description:`Acelera o corpo numa direção (unidades/s²) sem passar da velocidade máxima no chão (XZ). Ligue a um evento por quadro.`,kind:`exec`,inputs:[D,{id:`alvo`,type:`entity`,label:`Objeto`,default:`@self`},{id:`x`,type:`number`,label:`Direção X`,default:0,step:.1,editable:!0},{id:`y`,type:`number`,label:`Direção Y`,default:0,step:.1,editable:!0},{id:`z`,type:`number`,label:`Direção Z`,default:1,step:.1,editable:!0},{id:`aceleracao`,type:`number`,label:`Aceleração`,default:20,min:0,step:1,editable:!0},{id:`maxima`,type:`number`,label:`Velocidade máxima`,default:8,min:0,step:.5,editable:!0}],outputs:[O],emit:e=>`${e.trace()}{
  const _ac_t = ${e.in(`alvo`)}
  const _ac_dx = ${e.in(`x`)}, _ac_dy = ${e.in(`y`)}, _ac_dz = ${e.in(`z`)}
  const _ac_l = Math.hypot(_ac_dx, _ac_dy, _ac_dz) || 1
  const _ac_a = ${e.in(`aceleracao`)} * this.time.delta
  const _ac_v = this.physics.getVelocity(_ac_t)
  _ac_v.x += (_ac_dx / _ac_l) * _ac_a
  _ac_v.y += (_ac_dy / _ac_l) * _ac_a
  _ac_v.z += (_ac_dz / _ac_l) * _ac_a
  // limite no plano do chão (a gravidade continua livre no Y)
  const _ac_h = Math.hypot(_ac_v.x, _ac_v.z)
  const _ac_max = ${e.in(`maxima`)}
  if (_ac_h > _ac_max && _ac_h > 0) { _ac_v.x *= _ac_max / _ac_h; _ac_v.z *= _ac_max / _ac_h }
  this.physics.setVelocity(_ac_t, _ac_v.x, _ac_v.y, _ac_v.z)
}
${e.next(`exec`)}`},{type:`physics/push`,family:`physics`,label:`Empurrar Objetos`,description:`Ao bater num corpo dinâmico, transfere o momento: empurra o outro na direção do contato, proporcional à sua velocidade.`,kind:`event`,handler:`onCollision`,inputs:[{id:`forca`,type:`number`,label:`Força`,default:1.5,min:0,step:.1,editable:!0},{id:`nome`,type:`string`,label:`Só objetos com nome`,default:``,editable:!0}],outputs:[{id:`exec`,type:`exec`,label:`Ao empurrar`}],emit:e=>`${e.trace()}if (other && (!${e.in(`nome`)} || other.name === ${e.in(`nome`)})) {
  const _pu_a = this.entity.object3D.position, _pu_b = other.object3D.position
  const _pu_dx = _pu_b.x - _pu_a.x, _pu_dz = _pu_b.z - _pu_a.z
  const _pu_d = Math.hypot(_pu_dx, _pu_dz)
  const _pu_v = this.physics.getVelocity(this.entity)
  // só a parte da velocidade que vai NA direção do outro empurra
  const _pu_s = _pu_d > 0.001 ? Math.max(0, (_pu_v.x * _pu_dx + _pu_v.z * _pu_dz) / _pu_d) : 0
  if (_pu_s > 0.1) {
    const _pu_k = _pu_s * ${e.in(`forca`)}
    this.physics.applyImpulse(other, (_pu_dx / _pu_d) * _pu_k, 0, (_pu_dz / _pu_d) * _pu_k)
${e.next(`exec`)}  }
}
`},{type:`physics/set-velocity`,family:`physics`,label:`Definir Velocidade`,description:`Troca a velocidade atual do corpo físico.`,kind:`exec`,inputs:[D,{id:`alvo`,type:`entity`,label:`Objeto`,default:`@self`},{id:`x`,type:`number`,label:`X`,default:0,step:.5,editable:!0},{id:`y`,type:`number`,label:`Y`,default:0,step:.5,editable:!0},{id:`z`,type:`number`,label:`Z`,default:0,step:.5,editable:!0}],outputs:[O],emit:e=>`${e.trace()}this.physics.setVelocity(${e.in(`alvo`)}, ${e.in(`x`)}, ${e.in(`y`)}, ${e.in(`z`)})\n`+e.next(`exec`)},{type:`physics/is-grounded`,family:`physics`,label:`Está no Chão?`,description:`Verdadeiro quando há chão logo abaixo do objeto.`,kind:`data`,inputs:[{id:`alvo`,type:`entity`,label:`Objeto`,default:`@self`},{id:`alcance`,type:`number`,label:`Alcance`,default:1.1,min:.1,step:.1,editable:!0}],outputs:[{id:`out`,type:`boolean`,label:``}],emit:e=>`this.physics.isGrounded(${e.in(`alvo`)}, ${e.in(`alcance`)})`},{type:`physics/raycast`,family:`physics`,label:`Raio (Raycast)`,description:`Dispara um raio e diz se acertou algo.`,kind:`data`,inputs:[{id:`origem`,type:`vector3`,label:`Origem`},{id:`direcao`,type:`vector3`,label:`Direção`},{id:`alcance`,type:`number`,label:`Alcance`,default:10,min:.1,step:.5,editable:!0}],outputs:[{id:`acertou`,type:`boolean`,label:`Acertou`},{id:`objeto`,type:`entity`,label:`Objeto`},{id:`distancia`,type:`number`,label:`Distância`}],emit:e=>`this.physics.raycast(${e.in(`origem`)}, ${e.in(`direcao`)}, ${e.in(`alcance`)})`}],ge=[{type:`player/advanced`,family:`player`,label:`Movimentos Avançados`,description:`Wall-run e wall-jump, escalar, nadar, deslizar e gancho, sobre o corpo físico. Ligue as habilidades que quiser; ponha depois do Controlador de Personagem.`,kind:`event`,handler:`update`,inputs:[{id:`paredes`,type:`boolean`,label:`Wall-run + wall-jump`,default:!0},{id:`escalar`,type:`boolean`,label:`Escalar`,default:!0},{id:`nadar`,type:`boolean`,label:`Nadar`,default:!0},{id:`deslizar`,type:`boolean`,label:`Deslizar`,default:!0},{id:`gancho`,type:`boolean`,label:`Gancho (grapple)`,default:!0},{id:`camera`,type:`entity`,label:`Câmera (mira do gancho)`,default:null},{id:`pulo`,type:`number`,label:`Pulo da parede`,default:7,min:0,step:.5,editable:!0},{id:`empurrao`,type:`number`,label:`Empurrão da parede`,default:6,min:0,step:.5,editable:!0},{id:`velEscalar`,type:`number`,label:`Velocidade de escalada`,default:3,min:0,step:.5,editable:!0},{id:`agua`,type:`string`,label:`Água (nome)`,default:`Água`,editable:!0},{id:`velNado`,type:`number`,label:`Subida no nado`,default:3,min:0,step:.5,editable:!0},{id:`acaoDeslize`,type:`string`,label:`Ação de deslizar`,default:`interact`,options:[{value:`jump`,label:`Pular`},{value:`sprint`,label:`Correr`},{value:`fire`,label:`Atirar`},{value:`interact`,label:`Interagir`}],editable:!0},{id:`velDeslize`,type:`number`,label:`Velocidade do deslize`,default:12,min:0,step:.5,editable:!0},{id:`tempoDeslize`,type:`number`,label:`Duração do deslize (s)`,default:.5,min:.05,step:.05,editable:!0},{id:`acaoGancho`,type:`string`,label:`Ação do gancho`,default:`fire`,options:[{value:`jump`,label:`Pular`},{value:`sprint`,label:`Correr`},{value:`fire`,label:`Atirar`},{value:`interact`,label:`Interagir`}],editable:!0},{id:`alcanceGancho`,type:`number`,label:`Alcance do gancho`,default:20,min:1,step:1,editable:!0},{id:`velGancho`,type:`number`,label:`Puxada do gancho`,default:16,min:0,step:1,editable:!0}],outputs:[{id:`onWallJump`,type:`exec`,label:`Ao pular da parede`},{id:`onHook`,type:`exec`,label:`Ao enganchar`},{id:`naParede`,type:`boolean`,label:`Na parede?`},{id:`naAgua`,type:`boolean`,label:`Na água?`},{id:`enganchado`,type:`boolean`,label:`Enganchado?`},{id:`deslizando`,type:`boolean`,label:`Deslizando?`}],outputExpr:(e,t)=>`this.${b(`am_`+e,t)}`,emit:e=>{let t=t=>e.value(t)!==!1,n=e.state(`am_naParede`,`false`),r=e.state(`am_naAgua`,`false`),i=e.state(`am_enganchado`,`false`),a=e.state(`am_deslizando`,`false`),o=e.state(`am_lfx`,`0`),s=e.state(`am_lfz`,`1`),c=[];if(c.push(`${e.trace()}{
  const _am_e = this.entity
  const _am_p = _am_e.object3D.getWorldPosition(new Vector3())
  const _am_v = this.physics.getVelocity(_am_e)
  const _am_g = this.physics.isGrounded(_am_e)
  const _am_h = Math.hypot(_am_v.x, _am_v.z)
  // última direção de movimento no chão (encostado numa parede, a velocidade some)
  if (_am_h > 0.3) { ${o} = _am_v.x / _am_h; ${s} = _am_v.z / _am_h }
  const _am_fx = ${o}, _am_fz = ${s}
  let _am_vx = _am_v.x, _am_vy = _am_v.y, _am_vz = _am_v.z
  let _am_set = false
  const _am_dt = this.time.delta
`),t(`paredes`)&&c.push(`  // parede ao lado: corre nela (queda lenta) e pula para longe dela
  ${n} = false
  let _am_wx = 0, _am_wz = 0
  if (!_am_g && _am_h > 1) {
    for (const _am_s of [1, -1]) {
      const _am_d = new Vector3(-_am_fz * _am_s, 0, _am_fx * _am_s)
      if (this.physics.raycast(_am_p, _am_d, 0.9, _am_e).acertou) { _am_wx = _am_d.x; _am_wz = _am_d.z; ${n} = true; break }
    }
  }
  if (${n}) {
    if (_am_vy < -1.5) { _am_vy = -1.5; _am_set = true }
    if (this.input.isActionPressed("jump")) {
      _am_vx = -_am_wx * ${e.in(`empurrao`)} + _am_fx * _am_h * 0.6
      _am_vz = -_am_wz * ${e.in(`empurrao`)} + _am_fz * _am_h * 0.6
      _am_vy = ${e.in(`pulo`)}
      _am_set = true
${e.next(`onWallJump`)}    }
  }
`),t(`escalar`)&&c.push(`  // parede à frente + segurando "frente": sobe
  if (this.input.isActionActive("move-forward") && this.physics.raycast(_am_p, new Vector3(_am_fx, 0, _am_fz), 0.9, _am_e).acertou) {
    _am_vy = ${e.in(`velEscalar`)}
    _am_set = true
  }
`),t(`nadar`)&&c.push(`  // dentro de um volume "Água" (Collider sensor): flutua e nada para cima
  ${r} = false
  this.scene.traverse((_am_w) => {
    if (${r} || _am_w === _am_e || _am_w.name !== ${e.in(`agua`)}) return
    if (new THREE.Box3().setFromObject(_am_w.object3D).containsPoint(_am_p)) ${r} = true
  })
  if (${r}) {
    const _am_alvo = this.input.isActionActive("jump") ? ${e.in(`velNado`)} : -0.8
    // empuxo: anula a gravidade do próximo passo e aproxima do alvo
    _am_vy += (_am_alvo - _am_vy) * Math.min(1, 6 * _am_dt) + 9.81 * _am_dt
    _am_vx *= 0.97
    _am_vz *= 0.97
    _am_set = true
  }
`),t(`deslizar`)){let t=e.state(`am_sl`,`-1`);c.push(`  // deslize: arrancada no chão na direção do movimento, perdendo força
  if (_am_g && _am_h > 2 && this.input.isActionPressed(${e.in(`acaoDeslize`)})) ${t} = this.time.elapsed + ${e.in(`tempoDeslize`)}
  ${a} = this.time.elapsed < ${t}
  if (${a}) {
    const _am_k = (${t} - this.time.elapsed) / ${e.in(`tempoDeslize`)}
    const _am_sv = ${e.in(`velDeslize`)} * (0.5 + 0.5 * _am_k)
    _am_vx = _am_fx * _am_sv
    _am_vz = _am_fz * _am_sv
    _am_set = true
  }
`)}if(t(`gancho`)){let t=e.state(`am_hx`,`0`),n=e.state(`am_hy`,`0`),r=e.state(`am_hz`,`0`),a=e.in(`camera`);c.push(`  // gancho: mira pela câmera (ou pela frente), engancha no que o raio acertar e puxa
  const _am_ga = ${e.in(`acaoGancho`)}
  if (this.input.isActionPressed(_am_ga)) {
    const _am_cam = ${a}
    const _am_dir = _am_cam ? this.viewDirOf(_am_cam) : new Vector3(_am_fx, 0.35, _am_fz).normalize()
    const _am_hit = this.physics.raycast(_am_p, _am_dir, ${e.in(`alcanceGancho`)}, _am_e)
    if (_am_hit.acertou) {
      ${i} = true
      ${t} = _am_p.x + _am_dir.x * _am_hit.distancia
      ${n} = _am_p.y + _am_dir.y * _am_hit.distancia
      ${r} = _am_p.z + _am_dir.z * _am_hit.distancia
${e.next(`onHook`)}    }
  }
  if (${i}) {
    const _am_tx = ${t} - _am_p.x, _am_ty = ${n} - _am_p.y, _am_tz = ${r} - _am_p.z
    const _am_tl = Math.hypot(_am_tx, _am_ty, _am_tz)
    if (!this.input.isActionActive(_am_ga) || _am_tl < 1.2) ${i} = false
    else {
      const _am_k = ${e.in(`velGancho`)} / _am_tl
      _am_vx = _am_tx * _am_k
      _am_vy = _am_ty * _am_k
      _am_vz = _am_tz * _am_k
      _am_set = true
    }
  }
`)}return c.push(`  if (_am_set) this.physics.setVelocity(_am_e, _am_vx, _am_vy, _am_vz)
}
`),c.join(``)}},{type:`player/input-map`,family:`player`,label:`Input Map`,description:`Remapear em jogo: espera a próxima tecla, botão do mouse ou do controle e liga à ação (menu de controles do seu jogo).`,kind:`exec`,inputs:[{id:`exec`,type:`exec`,label:``},{id:`acao`,type:`string`,label:`Ação`,default:`jump`,options:[{value:`jump`,label:`Pular`},{value:`move-forward`,label:`Frente`},{value:`move-back`,label:`Trás`},{value:`move-left`,label:`Esquerda`},{value:`move-right`,label:`Direita`},{value:`sprint`,label:`Correr`},{value:`fire`,label:`Atirar`},{value:`interact`,label:`Interagir`}],editable:!0},{id:`modo`,type:`string`,label:`Modo`,default:`trocar`,options:[{value:`trocar`,label:`Trocar (mesmo dispositivo)`},{value:`adicionar`,label:`Adicionar`}],editable:!0}],outputs:[{id:`exec`,type:`exec`,label:``},{id:`onBound`,type:`exec`,label:`Ao remapear`},{id:`tecla`,type:`string`,label:`Código`},{id:`esperando`,type:`boolean`,label:`Esperando?`}],outputExpr:(e,t)=>e===`tecla`?`this.${b(`im_last`,t)}`:e===`esperando`?`this.${b(`im_wait`,t)}`:``,emit:e=>{let t=e.state(`im_wait`,`false`),n=e.state(`im_got`,`""`);return`${e.trace()}{
  ${t} = true
  const _im_a = ${e.in(`acao`)}, _im_r = ${e.in(`modo`)} !== "adicionar"
  // a próxima entrada (tecla, mouse, controle ou toque) vira a da ação
  this.input.captureNext((_im_c) => {
    this.input.bind(_im_a, _im_c, _im_r)
    ${n} = _im_c
  })
}
${e.next(`exec`)}`},emitTick:e=>{let t=e.state(`im_wait`,`false`),n=e.state(`im_got`,`""`);return`if (${n}) {
  ${e.state(`im_last`,`""`)} = ${n}
  ${n} = ""
  ${t} = false
${e.next(`onBound`)}}
`}},{type:`player/dash`,family:`player`,label:`Investida (Dash)`,description:`Impulso rápido na direção do movimento atual.`,kind:`exec`,inputs:[{id:`exec`,type:`exec`,label:``},{id:`forca`,type:`number`,label:`Força`,default:9,min:1,step:.5,editable:!0},{id:`recarga`,type:`number`,label:`Recarga (s)`,default:1,min:0,step:.1,editable:!0}],outputs:[{id:`onDash`,type:`exec`,label:`Ao usar`}],emit:e=>{let t=e.state(`dash_cd`,`-999`);return`${e.trace()}if (this.time.elapsed - ${t} >= ${e.in(`recarga`)}) {
  ${t} = this.time.elapsed
  const _da_v = this.physics.getVelocity(this.entity)
  let _da_x = _da_v.x, _da_z = _da_v.z
  const _da_l = Math.hypot(_da_x, _da_z)
  if (_da_l < 0.1) { const _da_d = this.transform.getWorldDirection(new Vector3()); _da_x = _da_d.x; _da_z = _da_d.z }
  else { _da_x /= _da_l; _da_z /= _da_l }
  this.physics.applyImpulse(this.entity, _da_x * ${e.in(`forca`)}, 0, _da_z * ${e.in(`forca`)})
${e.next(`onDash`)}}
`}},{type:`player/character-controller`,family:`player`,label:`Controlador de Personagem`,description:`Anda, corre e pula com as ações de input. Relativo à câmera (se ligada), com coyote time.`,kind:`event`,handler:`update`,inputs:[{id:`velocidade`,type:`number`,label:`Velocidade`,default:6,min:0,step:.5,editable:!0},{id:`sprint`,type:`number`,label:`Multipl. corrida`,default:1.7,min:1,step:.1,editable:!0},{id:`pulo`,type:`number`,label:`Força do pulo`,default:7,min:0,step:.5,editable:!0},{id:`coyote`,type:`number`,label:`Coyote (s)`,default:.12,min:0,max:.5,step:.01,editable:!0},{id:`camera`,type:`entity`,label:`Câmera`,default:null}],outputs:[],emit:e=>{let t=e.in(`velocidade`),n=e.in(`sprint`),r=e.in(`pulo`),i=e.in(`coyote`),a=e.in(`camera`),o=e.state(`cc_coy`,`0`);return`${e.trace()}// leitura de input
const _cc_mx = this.input.axis("move-left", "move-right")
const _cc_mz = this.input.axis("move-back", "move-forward")
// direção "frente" no plano XZ: mundo por padrão, câmera se ligada
let _cc_ffx = 0, _cc_ffz = -1
const _cc_cam = ${a}
if (_cc_cam) {
  const _cc_d = this.viewDirOf(_cc_cam)
  _cc_ffx = _cc_d.x; _cc_ffz = _cc_d.z
  const _cc_fl = Math.hypot(_cc_ffx, _cc_ffz) || 1
  _cc_ffx /= _cc_fl; _cc_ffz /= _cc_fl
}
// "direita" = frente girada -90° em torno de Y
const _cc_rx = -_cc_ffz, _cc_rz = _cc_ffx
let _cc_fx = _cc_rx * _cc_mx + _cc_ffx * _cc_mz
let _cc_fz = _cc_rz * _cc_mx + _cc_ffz * _cc_mz
// normaliza a diagonal
const _cc_len = Math.hypot(_cc_fx, _cc_fz)
if (_cc_len > 1) { _cc_fx /= _cc_len; _cc_fz /= _cc_len }
// efeitos de status no próprio objeto: lentidão reduz, atordoar trava
const _cc_st = this.entity.object3D.userData.status
const _cc_k = _cc_st?.atordoar?.until > this.time.elapsed ? 0 : _cc_st?.lentidao?.until > this.time.elapsed ? Math.max(0, 1 - _cc_st.lentidao.value) : 1
const _cc_spd = ${t} * (this.input.isActionActive("sprint") ? ${n} : 1) * _cc_k
// preserva a velocidade vertical (gravidade/pulo)
const _cc_v = this.physics.getVelocity(this.entity)
// coyote time: janela para pular logo após sair da borda
if (this.physics.isGrounded(this.entity)) ${o} = ${i}
else ${o} = Math.max(0, ${o} - dt)
let _cc_vy = _cc_v.y
if (this.input.isActionPressed("jump") && ${o} > 0 && _cc_k > 0) { _cc_vy = ${r}; ${o} = 0 }
this.physics.setVelocity(this.entity, _cc_fx * _cc_spd, _cc_vy, _cc_fz * _cc_spd)
`}}],_e=[{type:`camera/first-person`,family:`camera`,label:`Câmera 1ª Pessoa`,description:`Olhar com o mouse; siga o jogador ligando o alvo.`,kind:`event`,handler:`update`,inputs:[{id:`alvo`,type:`entity`,label:`Grudar em`,default:null},{id:`alturaOlhos`,type:`number`,label:`Altura dos olhos`,default:.7,step:.05,editable:!0},{id:`sensibilidade`,type:`number`,label:`Sensibilidade`,default:1,min:.1,max:5,step:.1,editable:!0}],outputs:[],emit:e=>{let t=e.state(`fp_yaw`,`0`),n=e.state(`fp_pitch`,`0`);return`${e.trace()}${t} -= this.input.mouse.dx * ${e.in(`sensibilidade`)} * 0.0028
${n} = Math.max(-1.4, Math.min(1.4, ${n} - this.input.mouse.dy * ${e.in(`sensibilidade`)} * 0.0028))
this.transform.rotation.order = "YXZ"
this.transform.rotation.set(${n}, ${t}, 0)
const _fp_t = ${e.in(`alvo`)}
if (_fp_t) {
  const _fp_p = _fp_t.object3D.position
  this.transform.position.set(_fp_p.x, _fp_p.y + ${e.in(`alturaOlhos`)}, _fp_p.z)
}
`}},{type:`camera/top-down`,family:`camera`,label:`Câmera Top-Down`,description:`Vista de cima seguindo o alvo — ARPG, estratégia, puzzle.`,kind:`event`,handler:`update`,inputs:[{id:`alvo`,type:`entity`,label:`Seguir`,default:null},{id:`altura`,type:`number`,label:`Altura`,default:14,min:2,step:.5,editable:!0},{id:`recuo`,type:`number`,label:`Recuo`,default:6,min:0,step:.5,editable:!0},{id:`suavidade`,type:`number`,label:`Suavidade`,default:6,min:.5,max:20,step:.5,editable:!0}],outputs:[],emit:e=>`${e.trace()}const _td_t = ${e.in(`alvo`)}
if (_td_t) {
  const _td_p = _td_t.object3D.position
  const _td_k = 1 - Math.exp(-${e.in(`suavidade`)} * dt)
  this.transform.position.lerp(new Vector3(_td_p.x, _td_p.y + ${e.in(`altura`)}, _td_p.z + ${e.in(`recuo`)}), _td_k)
  this.aimAt(_td_p.x, _td_p.y, _td_p.z)
}
`},{type:`camera/third-person`,family:`camera`,label:`Câmera 3ª Pessoa`,description:`Faz esta câmera seguir e orbitar um objeto (mouse controla a visão).`,kind:`event`,handler:`update`,inputs:[{id:`alvo`,type:`entity`,label:`Seguir`,default:null},{id:`distancia`,type:`number`,label:`Distância`,default:8,min:1,step:.5,editable:!0},{id:`altura`,type:`number`,label:`Altura`,default:2,min:0,step:.25,editable:!0},{id:`sensibilidade`,type:`number`,label:`Sensibilidade`,default:1,min:.1,max:5,step:.1,editable:!0}],outputs:[],emit:e=>{let t=e.in(`alvo`),n=e.in(`distancia`),r=e.in(`altura`),i=e.in(`sensibilidade`),a=e.state(`cam_yaw`,`0`),o=e.state(`cam_pitch`,`-0.25`);return`${e.trace()}const _tp_alvo = ${t}
if (_tp_alvo) {
  ${a} -= this.input.mouse.dx * ${i} * 0.003
  ${o} = Math.max(-1.2, Math.min(0.5, ${o} - this.input.mouse.dy * ${i} * 0.003))
  const _tp_t = _tp_alvo.object3D.position
  const _tp_cp = Math.cos(${o})
  const _tp_ox = Math.sin(${a}) * _tp_cp * ${n}
  const _tp_oy = -Math.sin(${o}) * ${n}
  const _tp_oz = Math.cos(${a}) * _tp_cp * ${n}
  this.entity.object3D.position.set(_tp_t.x + _tp_ox, _tp_t.y + ${r} + _tp_oy, _tp_t.z + _tp_oz)
  this.aimAt(_tp_t.x, _tp_t.y + ${r} * 0.5, _tp_t.z)
}
`}},{type:`camera/rail`,family:`camera`,label:`Câmera em Trilho`,description:`A câmera percorre um TRAJETO desenhado (Path Editor) — cutscenes e setpieces. Opcional: olhar para um objeto.`,kind:`event`,handler:`update`,inputs:[{id:`trajeto`,type:`path`,label:`Trajeto`},{id:`duracao`,type:`number`,label:`Duração (s)`,default:8,min:.5,step:.5,editable:!0},{id:`loop`,type:`boolean`,label:`Repetir`,default:!0,editable:!0},{id:`olhar`,type:`entity`,label:`Olhar para`,default:null}],outputs:[],emit:e=>{let t=e.value(`trajeto`),n=JSON.stringify(t?.space??`world`),r=JSON.stringify(t?.anchorName??``),i=e.state(`rail_s`,`new PathSampler(${e.in(`trajeto`)})`),a=e.state(`rail_t0`,`-1`),o=e.state(`rail_m`,`null as Matrix4 | null`);return`${e.trace()}if (!${i}.usable) return
if (${a} < 0) { ${a} = this.time.elapsed; ${o} = ${n} === "spawn" ? this.captureMatrix() : null }
const _rl_e = this.time.elapsed - ${a}
const _rl_raw = _rl_e / ${e.in(`duracao`)}
const _rl_u = ${e.in(`loop`)} ? (_rl_raw - Math.floor(_rl_raw)) : Math.min(1, _rl_raw)
const _rl_p = this.pathPoint(${i}, _rl_u, ${n}, ${r}, ${o})
this.transform.position.set(_rl_p.x, _rl_p.y, _rl_p.z)
const _rl_look = ${e.in(`olhar`)}
if (_rl_look) {
  const _rl_lp = _rl_look.object3D.position
  this.aimAt(_rl_lp.x, _rl_lp.y, _rl_lp.z)
} else {
  const _rl_t = this.pathTangent(${i}, _rl_u, ${n}, ${r}, ${o})
  this.aimAt(_rl_p.x + _rl_t.x, _rl_p.y + _rl_t.y, _rl_p.z + _rl_t.z)
}
`}},{type:`camera/shake`,family:`camera`,label:`Tremer Câmera`,description:`Trepidação da câmera — impacto, explosão, dano. Ligue ao evento do golpe.`,kind:`exec`,inputs:[{id:`exec`,type:`exec`,label:``},{id:`forca`,type:`number`,label:`Força`,default:.3,min:0,max:3,step:.05,editable:!0},{id:`duracao`,type:`number`,label:`Duração (s)`,default:.25,min:.05,max:2,step:.05,editable:!0}],outputs:[{id:`exec`,type:`exec`,label:``}],emit:e=>`${e.trace()}this.shakeCamera(${e.in(`forca`)}, ${e.in(`duracao`)})\n${e.next(`exec`)}`}],k={id:`exec`,type:`exec`,label:``},A={id:`exec`,type:`exec`,label:``},ve=[{type:`gameplay/collectible`,family:`gameplay`,label:`Coletável`,description:`Quando algo encosta (sensor), soma no placar e some. Ex.: moeda.`,kind:`event`,handler:`onTrigger`,inputs:[{id:`placar`,type:`string`,label:`Placar`,default:`moedas`,editable:!0},{id:`valor`,type:`number`,label:`Vale`,default:1,min:1,step:1,editable:!0}],outputs:[{id:`onGet`,type:`exec`,label:`Ao coletar`}],emit:e=>{let t=e.state(`col_got`,`false`);return`${e.trace()}if (!${t}) {
  ${t} = true
  const _total = this.game.add(${e.in(`placar`)}, ${e.in(`valor`)})
  this.log("Coletou " + ${e.in(`placar`)} + ": " + _total)
  this.entity.active = false
${e.next(`onGet`)}}
`}},{type:`gameplay/respawn-on-fall`,family:`gameplay`,label:`Renascer ao Cair`,description:`Se o objeto cair abaixo do limite, volta ao ponto onde começou.`,kind:`event`,handler:`update`,inputs:[{id:`limiteY`,type:`number`,label:`Limite Y`,default:-12,step:1,editable:!0}],outputs:[{id:`onRespawn`,type:`exec`,label:`Ao renascer`}],emit:e=>{let t=e.state(`rs_init`,`false`),n=e.state(`rs_x`,`0`),r=e.state(`rs_y`,`0`),i=e.state(`rs_z`,`0`);return`${e.trace()}if (!${t}) {
  ${t} = true
  const _p = this.entity.object3D.position
  ${n} = _p.x; ${r} = _p.y; ${i} = _p.z
}
if (this.entity.object3D.position.y < ${e.in(`limiteY`)}) {
  // se passou por um Checkpoint, renasce nele; senão no ponto inicial
  const _rs_k = "spawn:" + this.entity.name
  if (this.game.getFlag(_rs_k)) {
    this.physics.teleport(this.entity, this.game.getNumber(_rs_k + ":x"), this.game.getNumber(_rs_k + ":y"), this.game.getNumber(_rs_k + ":z"))
  } else {
    this.physics.teleport(this.entity, ${n}, ${r}, ${i})
  }
${e.next(`onRespawn`)}}
`}},{type:`gameplay/moving-platform`,family:`gameplay`,label:`Plataforma Móvel`,description:`Vai e volta num eixo. Use RigidBody CINEMÁTICO para carregar o jogador.`,kind:`event`,handler:`update`,inputs:[{id:`eixo`,type:`string`,label:`Eixo`,default:`x`,options:[{value:`x`,label:`X (lado)`},{value:`y`,label:`Y (sobe/desce)`},{value:`z`,label:`Z (frente)`}]},{id:`amplitude`,type:`number`,label:`Distância`,default:4,min:.5,step:.5,editable:!0},{id:`velocidade`,type:`number`,label:`Velocidade`,default:1,min:.1,step:.1,editable:!0}],outputs:[],emit:e=>{let t=e.state(`mp_init`,`false`),n=e.state(`mp_bx`,`0`),r=e.state(`mp_by`,`0`),i=e.state(`mp_bz`,`0`),a=e.state(`mp_t`,`0`),o=e.value(`eixo`)??`x`,s=o===`y`?`${r} + _mp_o`:o===`z`?`${i} + _mp_o`:`${n} + _mp_o`,c=o===`y`?`this.transform.position.set(${n}, ${s}, ${i})`:o===`z`?`this.transform.position.set(${n}, ${r}, ${s})`:`this.transform.position.set(${s}, ${r}, ${i})`;return`${e.trace()}if (!${t}) { ${t} = true; const _p = this.transform.position; ${n} = _p.x; ${r} = _p.y; ${i} = _p.z }
${a} += dt
const _mp_o = Math.sin(${a} * ${e.in(`velocidade`)}) * ${e.in(`amplitude`)}
${c}
`}},{type:`gameplay/spin`,family:`gameplay`,label:`Girar Sempre`,description:`Gira o objeto continuamente (moedas, hélices, decoração).`,kind:`event`,handler:`update`,inputs:[{id:`velocidade`,type:`number`,label:`Velocidade`,default:2,step:.2,editable:!0}],outputs:[],emit:e=>`${e.trace()}this.transform.rotation.y += ${e.in(`velocidade`)} * dt\n`},{type:`gameplay/teleporter`,family:`gameplay`,label:`Teleporte`,description:`Quem encostar neste sensor vai para o destino.`,kind:`event`,handler:`onTrigger`,inputs:[{id:`x`,type:`number`,label:`Destino X`,default:0,step:.5,editable:!0},{id:`y`,type:`number`,label:`Destino Y`,default:2,step:.5,editable:!0},{id:`z`,type:`number`,label:`Destino Z`,default:0,step:.5,editable:!0}],outputs:[{id:`onTeleport`,type:`exec`,label:`Ao teleportar`}],emit:e=>`${e.trace()}this.physics.teleport(other, ${e.in(`x`)}, ${e.in(`y`)}, ${e.in(`z`)})\nthis.tone(600, 0.12)\n${e.next(`onTeleport`)}`},{type:`gameplay/checkpoint`,family:`gameplay`,label:`Checkpoint`,description:`Quem encostar renasce aqui (funciona com "Renascer ao Cair").`,kind:`event`,handler:`onTrigger`,inputs:[],outputs:[{id:`onSave`,type:`exec`,label:`Ao salvar`}],emit:e=>`${e.trace()}if (other) {
  const _cp = this.entity.object3D.position
  this.game.setNumber("spawn:" + other.name + ":x", _cp.x)
  this.game.setNumber("spawn:" + other.name + ":y", _cp.y + 1)
  this.game.setNumber("spawn:" + other.name + ":z", _cp.z)
  this.game.setFlag("spawn:" + other.name, true)
${e.next(`onSave`)}}
`},{type:`inv/give-item`,family:`gameplay`,label:`Dar Item`,description:`Adiciona um item ao inventário global (chaves, poções…).`,kind:`exec`,inputs:[k,{id:`item`,type:`string`,label:`Item`,default:`chave`,editable:!0},{id:`qtd`,type:`number`,label:`Qtd`,default:1,min:1,step:1,editable:!0}],outputs:[A],emit:e=>`${e.trace()}this.game.add("item:" + ${e.in(`item`)}, ${e.in(`qtd`)})\n${e.next(`exec`)}`},{type:`inv/has-item`,family:`gameplay`,label:`Tem Item?`,description:`Verdadeiro se o inventário tem ao menos 1 do item.`,kind:`data`,inputs:[{id:`item`,type:`string`,label:`Item`,default:`chave`,editable:!0}],outputs:[{id:`out`,type:`boolean`,label:``}],emit:e=>`(this.game.getNumber("item:" + ${e.in(`item`)}) > 0)`},{type:`inv/use-item`,family:`gameplay`,label:`Usar Item`,description:`Consome 1 do item se houver; segue por "Usou" ou "Sem item".`,kind:`exec`,inputs:[k,{id:`item`,type:`string`,label:`Item`,default:`chave`,editable:!0}],outputs:[{id:`ok`,type:`exec`,label:`Usou`},{id:`sem`,type:`exec`,label:`Sem item`}],emit:e=>{let t=e.next(`ok`),n=e.next(`sem`),r=`${e.trace()}if (this.game.getNumber("item:" + ${e.in(`item`)}) > 0) {
  this.game.add("item:" + ${e.in(`item`)}, -1)
${t}}`;return n.trim()&&(r+=` else {\n${n}}`),r+`
`}},{type:`gameplay/get-score`,family:`gameplay`,label:`Ler Placar`,description:`Lê o valor atual de um placar (moedas, pontos…).`,kind:`data`,inputs:[{id:`placar`,type:`string`,label:`Placar`,default:`moedas`,editable:!0}],outputs:[{id:`out`,type:`number`,label:``}],emit:e=>`this.game.getNumber(${e.in(`placar`)})`},{type:`gameplay/add-score`,family:`gameplay`,label:`Somar no Placar`,description:`Adiciona (ou subtrai) um valor a um placar.`,kind:`exec`,inputs:[k,{id:`placar`,type:`string`,label:`Placar`,default:`pontos`,editable:!0},{id:`valor`,type:`number`,label:`Valor`,default:1,step:1,editable:!0}],outputs:[A],emit:e=>`${e.trace()}this.game.add(${e.in(`placar`)}, ${e.in(`valor`)})\n${e.next(`exec`)}`},{type:`gameplay/loot-roll`,family:`gameplay`,label:`Soltar Loot`,description:`Sorteia uma raridade (comum→lendário) pelos pesos e soma o prêmio no placar. Ligue ao "Ao morrer" de um inimigo ou baú.`,kind:`exec`,inputs:[k,{id:`placar`,type:`string`,label:`Placar`,default:`ouro`,editable:!0},{id:`base`,type:`number`,label:`Prêmio base`,default:10,min:0,step:1,editable:!0},{id:`comum`,type:`number`,label:`Peso comum`,default:60,min:0,step:1,editable:!0},{id:`incomum`,type:`number`,label:`Peso incomum`,default:25,min:0,step:1,editable:!0},{id:`raro`,type:`number`,label:`Peso raro`,default:10,min:0,step:1,editable:!0},{id:`epico`,type:`number`,label:`Peso épico`,default:4,min:0,step:1,editable:!0},{id:`lendario`,type:`number`,label:`Peso lendário`,default:1,min:0,step:1,editable:!0}],outputs:[{id:`onLoot`,type:`exec`,label:`Ao soltar`}],emit:e=>`${e.trace()}{
  const _lt_w = [${e.in(`comum`)}, ${e.in(`incomum`)}, ${e.in(`raro`)}, ${e.in(`epico`)}, ${e.in(`lendario`)}]
  const _lt_names = ["Comum", "Incomum", "Raro", "Épico", "Lendário"]
  const _lt_mult = [1, 2, 4, 9, 25]
  let _lt_tot = 0
  for (const _w of _lt_w) _lt_tot += _w
  let _lt_r = Math.random() * (_lt_tot || 1), _lt_i = 0
  for (; _lt_i < 4; _lt_i++) { if (_lt_r < _lt_w[_lt_i]) break; _lt_r -= _lt_w[_lt_i] }
  const _lt_val = Math.round(${e.in(`base`)} * _lt_mult[_lt_i])
  this.game.add(${e.in(`placar`)}, _lt_val)
  this.game.add("loot:" + _lt_names[_lt_i], 1)
  this.tone(480 + _lt_i * 200, 0.12)
  this.log("Loot " + _lt_names[_lt_i] + ": +" + _lt_val + " " + ${e.in(`placar`)})
${e.next(`onLoot`)}}
`},{type:`gameplay/quest`,family:`gameplay`,label:`Missão`,description:`Objetivo com barra no topo (placar × alvo). Dispara "Ao concluir" uma vez quando o placar chega no alvo.`,kind:`event`,handler:`update`,inputs:[{id:`titulo`,type:`string`,label:`Título`,default:`Derrote os inimigos`,editable:!0},{id:`placar`,type:`string`,label:`Placar`,default:`abates`,editable:!0},{id:`alvo`,type:`number`,label:`Alvo`,default:10,min:1,step:1,editable:!0}],outputs:[{id:`onComplete`,type:`exec`,label:`Ao concluir`}],emit:e=>{let t=e.state(`q_done`,`false`);return`${e.trace()}const _q_cur = this.game.getNumber(${e.in(`placar`)})
this.hud?.tracker(${JSON.stringify(e.nodeId)}, { label: ${e.in(`titulo`)}, value: Math.min(_q_cur, ${e.in(`alvo`)}), max: ${e.in(`alvo`)}, done: ${t} })
if (!${t} && _q_cur >= ${e.in(`alvo`)}) {
  ${t} = true
  this.tone(880, 0.1); this.tone(1320, 0.2)
${e.next(`onComplete`)}}
`}},{type:`gameplay/save`,family:`gameplay`,label:`Salvar Jogo`,description:`Grava placares, flags e inventário num slot (continua depois de fechar).`,kind:`exec`,inputs:[k,{id:`slot`,type:`string`,label:`Slot`,default:`1`,editable:!0}],outputs:[A],emit:e=>`${e.trace()}this.saveGame(${e.in(`slot`)})\nthis.log("Jogo salvo (slot " + ${e.in(`slot`)} + ")")\n${e.next(`exec`)}`},{type:`gameplay/load`,family:`gameplay`,label:`Carregar Jogo`,description:`Restaura um slot salvo. Segue por "Carregou" ou "Vazio".`,kind:`exec`,inputs:[k,{id:`slot`,type:`string`,label:`Slot`,default:`1`,editable:!0}],outputs:[{id:`ok`,type:`exec`,label:`Carregou`},{id:`vazio`,type:`exec`,label:`Vazio`}],emit:e=>{let t=e.next(`ok`),n=e.next(`vazio`),r=`${e.trace()}if (this.loadGame(${e.in(`slot`)})) {\n${t}}`;return n.trim()&&(r+=` else {\n${n}}`),r+`
`}}],j={id:`exec`,type:`exec`,label:``},ye=[{type:`stats/health`,family:`gameplay`,label:`Vida`,description:`HP com dano e morte. Publica no placar para o HUD. Reage a dano.`,kind:`event`,handler:`onDamage`,inputs:[{id:`maxVida`,type:`number`,label:`Vida máxima`,default:100,min:1,step:5,editable:!0},{id:`placar`,type:`string`,label:`Placar (HUD)`,default:``,editable:!0},{id:`invuln`,type:`number`,label:`Invulnerável (s)`,default:.2,min:0,step:.05,editable:!0}],outputs:[{id:`onDie`,type:`exec`,label:`Ao morrer`},{id:`hp`,type:`number`,label:`Vida`},{id:`vivo`,type:`boolean`,label:`Vivo?`}],outputExpr:(e,t)=>{let n=`this.${b(`hp`,t)}`;return e===`hp`?n:e===`vivo`?`(${n} > 0)`:``},emitStart:e=>{let t=e.state(`hp`,e.in(`maxVida`)),n=e.in(`placar`);return`if (${n}) this.game.setNumber(${n}, ${t})\n`},emit:e=>{let t=e.state(`hp`,e.in(`maxVida`)),n=e.state(`hphit`,`-999`),r=e.in(`placar`);return`if (${t} <= 0) return
if (this.time.elapsed - ${n} < ${e.in(`invuln`)}) return
${n} = this.time.elapsed
{
  // escudo (Status Effects) absorve o dano antes da vida
  const _hs_e = this.entity.object3D.userData.status?.escudo
  if (_hs_e && _hs_e.until > this.time.elapsed && _hs_e.value > 0) {
    const _hs_a = Math.min(_hs_e.value, amount)
    _hs_e.value -= _hs_a
    amount -= _hs_a
  }
}
if (amount <= 0) return
${t} = Math.max(0, ${t} - amount)
if (${r}) this.game.setNumber(${r}, ${t})
if (${t} <= 0) {
${e.next(`onDie`)}}
`}},{type:`stats/resource`,family:`gameplay`,label:`Recurso (Mana/Stamina)`,description:`Mana, stamina ou energia num placar: regenera por segundo, com atraso depois de gastar.`,kind:`event`,handler:`update`,inputs:[{id:`placar`,type:`string`,label:`Placar`,default:`stamina`,editable:!0},{id:`maximo`,type:`number`,label:`Máximo`,default:100,min:1,step:5,editable:!0},{id:`regen`,type:`number`,label:`Regenera (/s)`,default:20,min:0,step:1,editable:!0},{id:`atraso`,type:`number`,label:`Atraso após gastar (s)`,default:.8,min:0,step:.1,editable:!0}],outputs:[{id:`valor`,type:`number`,label:`Valor`},{id:`cheio`,type:`boolean`,label:`Cheio?`}],outputExpr:(e,t)=>{let n=`this.${b(`res`,t)}`;return e===`valor`?n:e===`cheio`?`(${n} >= this.${b(`resmax`,t)})`:``},emitStart:e=>{let t=e.state(`res`,e.in(`maximo`)),n=e.state(`resmax`,e.in(`maximo`)),r=e.in(`placar`);return`this.game.setNumber(${r}, ${t})\nthis.game.setNumber(${r} + ":max", ${n})\n`},emit:e=>{let t=e.state(`res`,e.in(`maximo`)),n=e.state(`resmax`,e.in(`maximo`)),r=e.in(`placar`);return`${e.trace()}{
  // o valor vive no placar: o Gastar Recurso (de qualquer objeto) mexe nele
  let _rs_v = this.game.getNumber(${r})
  const _rs_gasto = this.game.getNumber(${r} + ":gasto")
  ${n} = ${e.in(`maximo`)}
  if (_rs_v < ${n} && this.time.elapsed - _rs_gasto >= ${e.in(`atraso`)}) {
    _rs_v = Math.min(${n}, _rs_v + ${e.in(`regen`)} * this.time.delta)
    this.game.setNumber(${r}, _rs_v)
  }
  ${t} = _rs_v
}
`}},{type:`stats/spend`,family:`gameplay`,label:`Gastar Recurso`,description:`Tenta gastar do recurso (ex.: stamina para correr, mana para magia): segue por "Tinha" ou "Faltou".`,kind:`exec`,inputs:[j,{id:`placar`,type:`string`,label:`Placar`,default:`stamina`,editable:!0},{id:`custo`,type:`number`,label:`Custo`,default:20,min:0,step:1,editable:!0}],outputs:[{id:`exec`,type:`exec`,label:`Tinha`},{id:`falta`,type:`exec`,label:`Faltou`}],emit:e=>{let t=e.in(`placar`),n=e.in(`custo`);return`${e.trace()}if (this.game.getNumber(${t}) >= ${n}) {
  this.game.add(${t}, -(${n}))
  this.game.setNumber(${t} + ":gasto", this.time.elapsed)
${e.next(`exec`)}} else {
${e.next(`falta`)}}
`}},{type:`stats/xp`,family:`gameplay`,label:`Experiência & Nível`,description:`Curva de XP: some XP num placar (Somar no Placar) e o nível sobe ao bater a meta de cada nível.`,kind:`event`,handler:`update`,inputs:[{id:`placarXp`,type:`string`,label:`Placar de XP`,default:`xp`,editable:!0},{id:`placarNivel`,type:`string`,label:`Placar de nível`,default:`nivel`,editable:!0},{id:`base`,type:`number`,label:`XP do nível 1→2`,default:100,min:1,step:10,editable:!0},{id:`curva`,type:`number`,label:`Curva`,default:1.5,min:1,max:3,step:.05,editable:!0}],outputs:[{id:`onLevelUp`,type:`exec`,label:`Ao subir de nível`},{id:`nivel`,type:`number`,label:`Nível`},{id:`progresso`,type:`number`,label:`Progresso (0–1)`},{id:`meta`,type:`number`,label:`XP da próxima meta`}],outputExpr:(e,t)=>{let n=e=>`this.${b(e,t)}`;return e===`nivel`?n(`xplvl`):e===`meta`?n(`xpneed`):e===`progresso`?`Math.min(1, Math.max(0, (this.game.getNumber(${n(`xpkey`)}) - ${n(`xpprev`)}) / (${n(`xpneed`)} - ${n(`xpprev`)})))`:``},emitStart:e=>{let t=e.state(`xplvl`,`1`);return e.state(`xpkey`,e.in(`placarXp`)),`this.game.setNumber(${e.in(`placarNivel`)}, ${t})\n`},emit:e=>{let t=e.state(`xplvl`,`1`),n=e.state(`xpprev`,`0`),r=e.state(`xpneed`,e.in(`base`)),i=e.state(`xpkey`,e.in(`placarXp`));return`${e.trace()}${i} = ${e.in(`placarXp`)}
if (this.game.getNumber(${i}) >= ${r}) {
  ${t} += 1
  ${n} = ${r}
  ${r} = ${n} + ${e.in(`base`)} * Math.pow(${t}, ${e.in(`curva`)})
  this.game.setNumber(${e.in(`placarNivel`)}, ${t})
${e.next(`onLevelUp`)}}
`}},{type:`stats/apply-status`,family:`gameplay`,label:`Aplicar Efeito`,description:`Põe um efeito de status num objeto por um tempo: veneno, queimadura, lentidão, atordoar ou escudo.`,kind:`exec`,inputs:[j,{id:`alvo`,type:`entity`,label:`Alvo (vazio = este)`,default:null},{id:`efeito`,type:`string`,label:`Efeito`,default:`veneno`,options:[{value:`veneno`,label:`Veneno (dano/s)`},{value:`queimadura`,label:`Queimadura (dano/s)`},{value:`lentidao`,label:`Lentidão (0–1)`},{value:`atordoar`,label:`Atordoar`},{value:`escudo`,label:`Escudo (absorve)`}],editable:!0},{id:`duracao`,type:`number`,label:`Duração (s)`,default:3,min:0,step:.5,editable:!0},{id:`intensidade`,type:`number`,label:`Intensidade`,default:5,min:0,step:.5,editable:!0}],outputs:[{id:`exec`,type:`exec`,label:``}],emit:e=>{let t=e.in(`alvo`),n=t===`null`?`this.entity`:`(${t} ?? this.entity)`;return`${e.trace()}{
  // efeitos ficam em userData.status do alvo; o node Efeitos de Status
  // (no alvo), a Vida e o Controlador de Personagem os leem
  const _ae_t = ${n}
  const _ae_s = (_ae_t.object3D.userData.status ??= {})
  _ae_s[${e.in(`efeito`)}] = { until: this.time.elapsed + ${e.in(`duracao`)}, value: ${e.in(`intensidade`)} }
}
${e.next(`exec`)}`}},{type:`stats/status`,family:`gameplay`,label:`Efeitos de Status`,description:`No objeto afetado: aplica veneno e queimadura (dano a cada 0,5 s) e informa lentidão, atordoamento e escudo.`,kind:`event`,handler:`update`,inputs:[],outputs:[{id:`fator`,type:`number`,label:`Fator de velocidade`},{id:`atordoado`,type:`boolean`,label:`Atordoado?`},{id:`escudo`,type:`number`,label:`Escudo`},{id:`envenenado`,type:`boolean`,label:`Envenenado?`},{id:`queimando`,type:`boolean`,label:`Queimando?`}],outputExpr:(e,t)=>`this.${b(`st_`+e,t)}`,emit:e=>{let t=e.state(`st_fator`,`1`),n=e.state(`st_atordoado`,`false`),r=e.state(`st_escudo`,`0`),i=e.state(`st_envenenado`,`false`),a=e.state(`st_queimando`,`false`);return`${e.trace()}{
  const _se_s = this.entity.object3D.userData.status
  const _se_now = this.time.elapsed
  ${t} = 1; ${n} = false; ${r} = 0; ${i} = false; ${a} = false
  if (_se_s) {
    // efeitos vencidos saem
    for (const _se_k of Object.keys(_se_s)) if (_se_s[_se_k].until <= _se_now) delete _se_s[_se_k]
    if (_se_s.lentidao) ${t} = Math.max(0, 1 - _se_s.lentidao.value)
    if (_se_s.atordoar) { ${n} = true; ${t} = 0 }
    if (_se_s.escudo) ${r} = _se_s.escudo.value
    ${i} = !!_se_s.veneno
    ${a} = !!_se_s.queimadura
    // dano por tempo, em pulsos de 0,5 s (passa pela Vida e pelo escudo)
    for (const _se_d of ["veneno", "queimadura"]) {
      const _se_fx = _se_s[_se_d]
      if (!_se_fx) continue
      _se_fx.acc = (_se_fx.acc ?? 0) + this.time.delta
      if (_se_fx.acc >= 0.5) {
        _se_fx.acc -= 0.5
        this.damage(this.entity, _se_fx.value * 0.5)
      }
    }
  }
}
`}}],M={id:`exec`,type:`exec`,label:``},N={id:`exec`,type:`exec`,label:``},be=[{type:`combat/melee`,family:`combat`,label:`Ataque Melee`,description:`Golpe à frente: antecipação, janela ativa e arco. Cada alvo leva dano uma vez por golpe, com empurrão.`,kind:`exec`,inputs:[M,{id:`alvo`,type:`string`,label:`Atinge (nome)`,default:`Inimigo`,editable:!0},{id:`dano`,type:`number`,label:`Dano`,default:10,min:0,step:1,editable:!0},{id:`alcance`,type:`number`,label:`Alcance`,default:2,min:.1,step:.1,editable:!0},{id:`arco`,type:`number`,label:`Arco (°)`,default:120,min:10,max:360,step:5,editable:!0},{id:`antecipacao`,type:`number`,label:`Antecipação (s)`,default:.1,min:0,step:.05,editable:!0},{id:`janela`,type:`number`,label:`Janela ativa (s)`,default:.15,min:.01,step:.05,editable:!0},{id:`recarga`,type:`number`,label:`Recarga (s)`,default:.5,min:0,step:.05,editable:!0},{id:`empurrao`,type:`number`,label:`Empurrão`,default:4,min:0,step:.5,editable:!0}],outputs:[{id:`onSwing`,type:`exec`,label:`Ao golpear`},{id:`onHit`,type:`exec`,label:`Ao acertar`},{id:`atingido`,type:`entity`,label:`Atingido`}],outputExpr:(e,t)=>e===`atingido`?`this.${b(`ml_hit`,t)}`:``,emit:e=>{let t=e.state(`ml_cd`,`-999`),n=e.state(`ml_t0`,`-1`),r=e.state(`ml_hits`,`new Set<string>()`);return`${e.trace()}if (this.time.elapsed - ${t} >= ${e.in(`recarga`)}) {
  ${t} = this.time.elapsed
  ${n} = this.time.elapsed
  ${r}.clear()
${e.next(`onSwing`)}}
`},emitTick:e=>{let t=e.state(`ml_t0`,`-1`),n=e.state(`ml_hits`,`new Set<string>()`),r=e.state(`ml_hit`,`null as Entity | null`),i=e.in(`alcance`),a=e.in(`empurrao`);return`if (${t} >= 0) {
  const _ml_t = this.time.elapsed - ${t}
  if (_ml_t > ${e.in(`antecipacao`)} + ${e.in(`janela`)}) ${t} = -1
  else if (_ml_t >= ${e.in(`antecipacao`)}) {
    const _ml_o = this.entity.object3D.position
    const _ml_f = this.entity.object3D.getWorldDirection(new Vector3())
    const _ml_fl = Math.hypot(_ml_f.x, _ml_f.z) || 1
    const _ml_cos = Math.cos((${e.in(`arco`)} * 0.5 * Math.PI) / 180)
    const _ml_list: Entity[] = []
    this.scene.traverse((_ml_e) => {
      if (_ml_e !== this.entity && _ml_e.active && _ml_e.name === ${e.in(`alvo`)} && !${n}.has(_ml_e.id)) _ml_list.push(_ml_e)
    })
    for (const _ml_e of _ml_list) {
      const _ml_p = _ml_e.object3D.position
      const _ml_dx = _ml_p.x - _ml_o.x, _ml_dz = _ml_p.z - _ml_o.z
      const _ml_d = Math.hypot(_ml_dx, _ml_dz)
      if (_ml_d > ${i} || Math.abs(_ml_p.y - _ml_o.y) > ${i}) continue
      if (${e.in(`arco`)} < 360 && _ml_d > 0.001 && (_ml_f.x / _ml_fl) * (_ml_dx / _ml_d) + (_ml_f.z / _ml_fl) * (_ml_dz / _ml_d) < _ml_cos) continue
      ${n}.add(_ml_e.id)
      ${r} = _ml_e
      this.damage(_ml_e, ${e.in(`dano`)})
      if (${a} > 0 && _ml_d > 0.001) this.physics.applyImpulse(_ml_e, (_ml_dx / _ml_d) * ${a}, ${a} * 0.3, (_ml_dz / _ml_d) * ${a})
${e.next(`onHit`)}    }
  }
}
`}},{type:`combat/shoot`,family:`combat`,label:`Atirar Projétil`,description:`Cria um projétil (prefab) na direção da mira, com recarga.`,kind:`exec`,inputs:[M,{id:`prefab`,type:`string`,label:`Prefab`,default:`Projétil`,editable:!0},{id:`mira`,type:`entity`,label:`Mira (câmera)`,default:null},{id:`recarga`,type:`number`,label:`Recarga (s)`,default:.25,min:0,step:.05,editable:!0},{id:`distancia`,type:`number`,label:`Saída à frente`,default:1.2,min:0,step:.1,editable:!0}],outputs:[{id:`onShoot`,type:`exec`,label:`Ao atirar`}],emit:e=>{let t=e.state(`shoot_cd`,`-999`);return`${e.trace()}if (this.time.elapsed - ${t} >= ${e.in(`recarga`)}) {
  ${t} = this.time.elapsed
  const _sh_o = this.entity.object3D.position
  const _sh_aim = ${e.in(`mira`)}
  const _sh_d = _sh_aim
    ? this.viewDirOf(_sh_aim)
    : this.entity.object3D.getWorldDirection(new Vector3())
  const _sh_p = this.spawnPrefab(${e.in(`prefab`)}, _sh_o.x + _sh_d.x * ${e.in(`distancia`)}, _sh_o.y + _sh_d.y * ${e.in(`distancia`)} + 0.4, _sh_o.z + _sh_d.z * ${e.in(`distancia`)})
  if (_sh_p) _sh_p.object3D.lookAt(_sh_p.object3D.position.x + _sh_d.x, _sh_p.object3D.position.y + _sh_d.y, _sh_p.object3D.position.z + _sh_d.z)
${e.next(`onShoot`)}}
`}},{type:`combat/projectile-move`,family:`combat`,label:`Comportamento de Projétil`,description:`Move o objeto para a frente e o destrói após a vida útil. Use RigidBody cinemático + Collider sensor.`,kind:`event`,handler:`update`,inputs:[{id:`velocidade`,type:`number`,label:`Velocidade`,default:22,min:0,step:1,editable:!0},{id:`vidaUtil`,type:`number`,label:`Vida útil (s)`,default:2.5,min:.1,step:.1,editable:!0}],outputs:[],emit:e=>{let t=e.state(`proj_t`,`0`);return`${e.trace()}${t} += dt
if (${t} > ${e.in(`vidaUtil`)}) { this.destroy(); return }
this.transform.translateZ(${e.in(`velocidade`)} * dt)
`}},{type:`combat/projectile-path`,family:`combat`,label:`Projétil em Trajeto`,description:`Faz o objeto percorrer um TRAJETO desenhado (Path Editor) e some ao fim. Âncora viva: espiral que sai da arma, orbital que gira com o alvo…`,kind:`event`,handler:`update`,inputs:[{id:`trajeto`,type:`path`,label:`Trajeto`},{id:`duracao`,type:`number`,label:`Duração (s)`,default:2,min:.1,step:.1,editable:!0}],outputs:[{id:`onEnd`,type:`exec`,label:`Ao terminar`}],emit:e=>{let t=e.value(`trajeto`),n=JSON.stringify(t?.space??`spawn`),r=JSON.stringify(t?.anchorName??``),i=e.state(`pp_s`,`new PathSampler(${e.in(`trajeto`)})`),a=e.state(`pp_on`,`false`),o=e.state(`pp_t0`,`0`),s=e.state(`pp_m`,`null as Matrix4 | null`);return`${e.trace()}if (!${i}.usable) { this.destroy(); return }
if (!${a}) { ${a} = true; ${o} = this.time.elapsed; ${s} = ${n} === "spawn" ? this.captureMatrix() : null }
const _pp_u = Math.min(1, (this.time.elapsed - ${o}) / ${e.in(`duracao`)})
const _pp_p = this.pathPoint(${i}, _pp_u, ${n}, ${r}, ${s})
this.transform.position.set(_pp_p.x, _pp_p.y, _pp_p.z)
const _pp_t = this.pathTangent(${i}, _pp_u, ${n}, ${r}, ${s})
this.transform.lookAt(_pp_p.x + _pp_t.x, _pp_p.y + _pp_t.y, _pp_p.z + _pp_t.z)
if (_pp_u >= 1) {
${e.next(`onEnd`)}  this.destroy()
}
`}},{type:`combat/hitstop`,family:`combat`,label:`Hitstop (impacto)`,description:`Congela o tempo por um instante no impacto — o "peso" do golpe.`,kind:`exec`,inputs:[M,{id:`duracao`,type:`number`,label:`Duração (s)`,default:.08,min:0,max:1,step:.01,editable:!0},{id:`intensidade`,type:`number`,label:`Intensidade`,default:1,min:0,max:1,step:.05,editable:!0}],outputs:[N],emit:e=>`${e.trace()}this.hitstop(${e.in(`duracao`)}, 1 - ${e.in(`intensidade`)})\n${e.next(`exec`)}`},{type:`combat/deal-damage`,family:`combat`,label:`Causar Dano`,description:`Aplica dano a um objeto (dispara a Vida dele).`,kind:`exec`,inputs:[M,{id:`alvo`,type:`entity`,label:`Alvo`},{id:`dano`,type:`number`,label:`Dano`,default:10,min:0,step:1,editable:!0}],outputs:[N],emit:e=>`${e.trace()}this.damage(${e.in(`alvo`)}, ${e.in(`dano`)})\n${e.next(`exec`)}`}],xe=[{type:`ai/chase`,family:`ai`,label:`Perseguir Alvo`,description:`Anda na direção do alvo quando ele está no raio de visão.`,kind:`event`,handler:`update`,inputs:[{id:`alvo`,type:`entity`,label:`Alvo`,default:null},{id:`velocidade`,type:`number`,label:`Velocidade`,default:3.5,min:0,step:.5,editable:!0},{id:`visao`,type:`number`,label:`Raio de visão`,default:18,min:1,step:1,editable:!0},{id:`parar`,type:`number`,label:`Parar a`,default:1.4,min:0,step:.1,editable:!0}],outputs:[],emit:e=>`${e.trace()}const _ch_t = ${e.in(`alvo`)}
if (_ch_t) {
  const _ch_a = _ch_t.object3D.position, _ch_b = this.entity.object3D.position
  const _ch_dx = _ch_a.x - _ch_b.x, _ch_dz = _ch_a.z - _ch_b.z
  const _ch_d = Math.hypot(_ch_dx, _ch_dz)
  const _ch_v = this.physics.getVelocity(this.entity)
  if (_ch_d < ${e.in(`visao`)} && _ch_d > ${e.in(`parar`)}) {
    this.physics.setVelocity(this.entity, (_ch_dx / _ch_d) * ${e.in(`velocidade`)}, _ch_v.y, (_ch_dz / _ch_d) * ${e.in(`velocidade`)})
    this.transform.lookAt(_ch_a.x, _ch_b.y, _ch_a.z)
  } else {
    this.physics.setVelocity(this.entity, 0, _ch_v.y, 0)
  }
}
`},{type:`ai/patrol`,family:`ai`,label:`Patrulhar`,description:`Vai e volta a partir do ponto inicial, no eixo X.`,kind:`event`,handler:`update`,inputs:[{id:`amplitude`,type:`number`,label:`Distância`,default:5,min:.5,step:.5,editable:!0},{id:`velocidade`,type:`number`,label:`Velocidade`,default:2,min:0,step:.5,editable:!0}],outputs:[],emit:e=>{let t=e.state(`pt_init`,`false`),n=e.state(`pt_x0`,`0`),r=e.state(`pt_dir`,`1`);return`${e.trace()}if (!${t}) { ${t} = true; ${n} = this.entity.object3D.position.x }
const _pt_x = this.entity.object3D.position.x
if (${r} > 0 && _pt_x > ${n} + ${e.in(`amplitude`)}) ${r} = -1
if (${r} < 0 && _pt_x < ${n} - ${e.in(`amplitude`)}) ${r} = 1
const _pt_v = this.physics.getVelocity(this.entity)
this.physics.setVelocity(this.entity, ${r} * ${e.in(`velocidade`)}, _pt_v.y, 0)
`}},{type:`ai/spawner`,family:`ai`,label:`Spawner de Inimigos`,description:`Cria um prefab neste ponto a cada intervalo, até o limite vivo.`,kind:`event`,handler:`update`,inputs:[{id:`prefab`,type:`string`,label:`Prefab`,default:`Inimigo`,editable:!0},{id:`intervalo`,type:`number`,label:`A cada (s)`,default:3,min:.2,step:.1,editable:!0},{id:`maximo`,type:`number`,label:`Máx. vivos`,default:4,min:1,step:1,editable:!0}],outputs:[{id:`onSpawn`,type:`exec`,label:`Ao criar`}],emit:e=>{let t=e.state(`sp_acc`,`0`);return`${e.trace()}${t} += dt
if (${t} >= ${e.in(`intervalo`)}) {
  ${t} = 0
  let _sp_n = 0
  this.scene.traverse((e) => { if (e.name === ${e.in(`prefab`)} && e.active) _sp_n++ })
  if (_sp_n < ${e.in(`maximo`)}) {
    const _sp_p = this.entity.object3D.position
    this.spawnPrefab(${e.in(`prefab`)}, _sp_p.x, _sp_p.y + 0.5, _sp_p.z)
${e.next(`onSpawn`)}  }
}
`}},{type:`ai/perception`,family:`ai`,label:`Vê o Alvo?`,description:`Verdadeiro se o alvo está no cone de visão (raio + ângulo). Opcional: paredes bloqueiam a visão.`,kind:`data`,inputs:[{id:`alvo`,type:`entity`,label:`Alvo`,default:null},{id:`raio`,type:`number`,label:`Alcance`,default:16,min:1,step:1,editable:!0},{id:`angulo`,type:`number`,label:`Ângulo (°)`,default:360,min:10,max:360,step:5,editable:!0},{id:`paredes`,type:`boolean`,label:`Paredes bloqueiam`,default:!1,editable:!0}],outputs:[{id:`out`,type:`boolean`,label:``}],emit:e=>`this.perceives(${e.in(`alvo`)}, ${e.in(`raio`)}, ${e.in(`angulo`)}, ${e.in(`paredes`)})`},{type:`ai/brain`,family:`ai`,label:`Cérebro (FSM)`,description:`Inimigo completo: patrulha → percebe → persegue → ataca → recua. Steering com separação (a horda não empilha). Ligue o Alvo (Achar Objeto: Jogador).`,kind:`event`,handler:`update`,inputs:[{id:`alvo`,type:`entity`,label:`Alvo`,default:null},{id:`velocidade`,type:`number`,label:`Velocidade`,default:3.6,min:0,step:.2,editable:!0},{id:`visao`,type:`number`,label:`Visão (raio)`,default:16,min:1,step:1,editable:!0},{id:`angulo`,type:`number`,label:`Visão (°)`,default:360,min:10,max:360,step:5,editable:!0},{id:`alcance`,type:`number`,label:`Ataca a`,default:1.8,min:.2,step:.1,editable:!0},{id:`dano`,type:`number`,label:`Dano`,default:8,min:0,step:1,editable:!0},{id:`recarga`,type:`number`,label:`Recarga (s)`,default:.8,min:.05,step:.05,editable:!0},{id:`memoria`,type:`number`,label:`Memória (s)`,default:2,min:0,step:.5,editable:!0},{id:`separacao`,type:`number`,label:`Separação`,default:1.6,min:0,step:.2,editable:!0},{id:`recuo`,type:`number`,label:`Recuo pós-ataque (s)`,default:0,min:0,step:.1,editable:!0}],outputs:[{id:`onAtacar`,type:`exec`,label:`Ao atacar`}],emit:e=>{let t=e.state(`br_st`,`0`),n=e.state(`br_init`,`false`),r=e.state(`br_seen`,`-999`),i=e.state(`br_atk`,`-999`),a=e.state(`br_ru`,`0`),o=e.state(`br_hx`,`0`),s=e.state(`br_hz`,`0`),c=e.state(`br_wx`,`0`),l=e.state(`br_wz`,`0`),u=e.state(`br_wt`,`0`),d=e.in(`velocidade`),f=e.in(`separacao`);return`${e.trace()}if (!${n}) { ${n} = true; const _p0 = this.entity.object3D.position; ${o} = _p0.x; ${s} = _p0.z; ${c} = _p0.x; ${l} = _p0.z }
const _br_t = ${e.in(`alvo`)}
const _br_pos = this.entity.object3D.position
const _br_v = this.physics.getVelocity(this.entity)
const _br_sep = this.separationForce(this.entity.name, ${f})
let _br_dx = 0, _br_dz = 0, _br_dist = 999
if (_br_t) { _br_dx = _br_t.object3D.position.x - _br_pos.x; _br_dz = _br_t.object3D.position.z - _br_pos.z; _br_dist = Math.hypot(_br_dx, _br_dz) }
if (_br_t && this.perceives(_br_t, ${e.in(`visao`)}, ${e.in(`angulo`)}, false)) ${r} = this.time.elapsed
const _br_mem = (this.time.elapsed - ${r}) < ${e.in(`memoria`)}
if (${t} === 0) {
  ${u} += dt
  if (${u} >= 2) { ${u} = 0; const _wa = Math.random() * 6.283; const _wr = Math.random() * 3; ${c} = ${o} + Math.cos(_wa) * _wr; ${l} = ${s} + Math.sin(_wa) * _wr }
  const _pw_x = ${c} - _br_pos.x, _pw_z = ${l} - _br_pos.z
  const _pw_l = Math.hypot(_pw_x, _pw_z) || 1
  const _pw_s = ${d} * 0.4
  this.physics.setVelocity(this.entity, (_pw_x / _pw_l) * _pw_s + _br_sep.x * ${d}, _br_v.y, (_pw_z / _pw_l) * _pw_s + _br_sep.z * ${d})
  if (_pw_l > 0.4) this.transform.lookAt(${c}, _br_pos.y, ${l})
  if (_br_mem) ${t} = 1
} else if (${t} === 1) {
  if (!_br_mem) { ${t} = 0 } else if (_br_dist <= ${e.in(`alcance`)}) { ${t} = 2 } else {
    const _ch_l = _br_dist || 1
    this.physics.setVelocity(this.entity, (_br_dx / _ch_l) * ${d} + _br_sep.x * ${d}, _br_v.y, (_br_dz / _ch_l) * ${d} + _br_sep.z * ${d})
    if (_br_t) this.transform.lookAt(_br_t.object3D.position.x, _br_pos.y, _br_t.object3D.position.z)
  }
} else if (${t} === 2) {
  this.physics.setVelocity(this.entity, _br_sep.x * ${d}, _br_v.y, _br_sep.z * ${d})
  if (_br_t) this.transform.lookAt(_br_t.object3D.position.x, _br_pos.y, _br_t.object3D.position.z)
  if (!_br_t || _br_dist > ${e.in(`alcance`)} * 1.4) { ${t} = 1 } else if (this.time.elapsed - ${i} >= ${e.in(`recarga`)}) {
    ${i} = this.time.elapsed
    this.damage(_br_t, ${e.in(`dano`)})
${e.next(`onAtacar`)}    if (${e.in(`recuo`)} > 0) { ${t} = 3; ${a} = this.time.elapsed + ${e.in(`recuo`)} }
  }
} else {
  if (this.time.elapsed >= ${a}) { ${t} = 1 } else if (_br_t) {
    const _fl_l = _br_dist || 1
    this.physics.setVelocity(this.entity, (-_br_dx / _fl_l) * ${d} + _br_sep.x * ${d}, _br_v.y, (-_br_dz / _fl_l) * ${d} + _br_sep.z * ${d})
  }
}
`}},{type:`ai/waves`,family:`ai`,label:`Ondas de Inimigos`,description:`Cria inimigos em ondas: N por onda, com pausa entre ondas e escalonamento (cada onda vem maior). Respeita o máximo vivo.`,kind:`event`,handler:`update`,inputs:[{id:`prefab`,type:`string`,label:`Prefab`,default:`Inimigo`,editable:!0},{id:`porOnda`,type:`number`,label:`Por onda`,default:5,min:1,step:1,editable:!0},{id:`intervalo`,type:`number`,label:`Entre ondas (s)`,default:6,min:.5,step:.5,editable:!0},{id:`cadencia`,type:`number`,label:`Entre spawns (s)`,default:.3,min:.02,step:.02,editable:!0},{id:`maximo`,type:`number`,label:`Máx. vivos`,default:30,min:1,step:1,editable:!0},{id:`escalonar`,type:`number`,label:`Escalonar/onda`,default:1,min:0,step:.5,editable:!0}],outputs:[{id:`onWave`,type:`exec`,label:`Nova onda`}],emit:e=>{let t=e.state(`wv_t`,`999`),n=e.state(`wv_left`,`0`),r=e.state(`wv_st`,`0`),i=e.state(`wv_i`,`0`);return`${e.trace()}${t} += dt
if (${n} > 0) {
  ${r} += dt
  let _wv_n = 0
  this.scene.traverse((e) => { if (e.name === ${e.in(`prefab`)} && e.active) _wv_n++ })
  if (${r} >= ${e.in(`cadencia`)} && _wv_n < ${e.in(`maximo`)}) {
    ${r} = 0
    const _wv_p = this.entity.object3D.position
    const _wv_a = Math.random() * 6.283, _wv_r = 1 + Math.random() * 2
    this.spawnPrefab(${e.in(`prefab`)}, _wv_p.x + Math.cos(_wv_a) * _wv_r, _wv_p.y + 0.5, _wv_p.z + Math.sin(_wv_a) * _wv_r)
    ${n} -= 1
  }
} else if (${t} >= ${e.in(`intervalo`)}) {
  ${t} = 0
  ${i} += 1
  ${n} = Math.round(${e.in(`porOnda`)} + (${i} - 1) * ${e.in(`escalonar`)})
${e.next(`onWave`)}}
`}},{type:`ai/boss-phase`,family:`ai`,label:`Fase do Boss`,description:`Número da fase (1..N) conforme a vida do boss cai. Ligue a um placar de vida próprio do boss.`,kind:`data`,inputs:[{id:`placar`,type:`string`,label:`Placar`,default:`boss-vida`,editable:!0},{id:`maxVida`,type:`number`,label:`Vida máx.`,default:100,min:1,step:5,editable:!0},{id:`fases`,type:`number`,label:`Fases`,default:3,min:1,step:1,editable:!0}],outputs:[{id:`out`,type:`number`,label:``}],emit:e=>`Math.max(1, Math.min(${e.in(`fases`)}, 1 + Math.floor((1 - Math.max(0, Math.min(1, this.game.getNumber(${e.in(`placar`)}) / ${e.in(`maxVida`)}))) * ${e.in(`fases`)})))`}],P={id:`exec`,type:`exec`,label:``},F={id:`exec`,type:`exec`,label:``},Se=[{type:`hud/bar`,family:`hud`,label:`Barra na Tela`,description:`Barra (vida/energia) ligada a um valor. Atualiza sozinha.`,kind:`event`,handler:`update`,inputs:[{id:`rotulo`,type:`string`,label:`Rótulo`,default:`VIDA`,editable:!0},{id:`valor`,type:`number`,label:`Valor`,default:100},{id:`maximo`,type:`number`,label:`Máximo`,default:100,min:1,step:5,editable:!0},{id:`cor`,type:`string`,label:`Cor`,default:`#34e27a`,editable:!0}],outputs:[],emit:e=>`${e.trace()}this.hud?.bar(${JSON.stringify(e.nodeId)}, { label: ${e.in(`rotulo`)}, value: ${e.in(`valor`)}, max: ${e.in(`maximo`)}, color: ${e.in(`cor`)} })\n`},{type:`hud/counter`,family:`hud`,label:`Contador na Tela`,description:`Mostra um placar no canto (moedas, pontos, abates).`,kind:`event`,handler:`update`,inputs:[{id:`rotulo`,type:`string`,label:`Rótulo`,default:`Moedas`,editable:!0},{id:`placar`,type:`string`,label:`Placar`,default:`moedas`,editable:!0},{id:`icone`,type:`string`,label:`Ícone`,default:`●`,editable:!0}],outputs:[],emit:e=>`${e.trace()}this.hud?.counter(${JSON.stringify(e.nodeId)}, { label: ${e.in(`rotulo`)}, value: this.game.getNumber(${e.in(`placar`)}), icon: ${e.in(`icone`)} })\n`},{type:`meta/victory`,family:`hud`,label:`Vitória`,description:`Mostra a tela de vitória e congela o placar do jogo.`,kind:`exec`,inputs:[P,{id:`titulo`,type:`string`,label:`Título`,default:`VITÓRIA!`,editable:!0},{id:`sub`,type:`string`,label:`Subtítulo`,default:`Você venceu.`,editable:!0}],outputs:[F],emit:e=>`${e.trace()}if (!this.game.getFlag("fim")) {
  this.game.setFlag("fim", true)
  this.hud?.showBanner(${e.in(`titulo`)}, ${e.in(`sub`)})
  this.tone(880, 0.15); this.tone(1320, 0.3)
${e.next(`exec`)}}
`},{type:`meta/defeat`,family:`hud`,label:`Derrota`,description:`Mostra a tela de derrota (ligue ao "Ao morrer" da Vida).`,kind:`exec`,inputs:[P,{id:`titulo`,type:`string`,label:`Título`,default:`FIM DE JOGO`,editable:!0},{id:`sub`,type:`string`,label:`Subtítulo`,default:`Tente de novo.`,editable:!0}],outputs:[F],emit:e=>`${e.trace()}if (!this.game.getFlag("fim")) {
  this.game.setFlag("fim", true)
  this.hud?.showBanner(${e.in(`titulo`)}, ${e.in(`sub`)})
  this.tone(220, 0.4)
${e.next(`exec`)}}
`},{type:`meta/game-running`,family:`hud`,label:`Jogo em Andamento?`,description:`Falso depois de Vitória/Derrota — use para pausar IA e controles.`,kind:`data`,inputs:[],outputs:[{id:`out`,type:`boolean`,label:``}],emit:()=>`(!this.game.getFlag("fim"))`},{type:`dialog/say`,family:`hud`,label:`Diálogo`,description:`Mostra uma fala com até duas escolhas. Segue por "Escolha A" ou "Escolha B" quando o jogador clica.`,kind:`exec`,inputs:[P,{id:`texto`,type:`string`,label:`Fala`,default:`Olá, viajante!`,editable:!0},{id:`opcaoA`,type:`string`,label:`Opção A`,default:`Continuar`,editable:!0},{id:`opcaoB`,type:`string`,label:`Opção B`,default:``,editable:!0}],outputs:[{id:`escA`,type:`exec`,label:`Escolha A`},{id:`escB`,type:`exec`,label:`Escolha B`}],emit:e=>{let t=e.next(`escA`),n=e.next(`escB`);return`${e.trace()}this.showDialogue(${e.in(`texto`)}, [${e.in(`opcaoA`)}, ${e.in(`opcaoB`)}], (_dlg_i) => {
  if (_dlg_i === 0) {
${t}  } else {
${n}  }
})
`}},{type:`audio/tone`,family:`audio`,label:`Bip Sintetizado`,description:`Som curto sem precisar de arquivo — coleta, dano, interface.`,kind:`exec`,inputs:[P,{id:`freq`,type:`number`,label:`Frequência`,default:880,min:40,max:4e3,step:10,editable:!0},{id:`duracao`,type:`number`,label:`Duração (s)`,default:.08,min:.02,max:2,step:.01,editable:!0}],outputs:[F],emit:e=>`${e.trace()}this.tone(${e.in(`freq`)}, ${e.in(`duracao`)})\n${e.next(`exec`)}`},{type:`audio/play`,family:`audio`,label:`Tocar Som do Objeto`,description:`Toca o Audio Source deste objeto (adicione um no Inspector).`,kind:`exec`,inputs:[P],outputs:[F],emit:e=>`${e.trace()}this.getComponent("AudioSource")?.play?.()\n${e.next(`exec`)}`},{type:`vfx/particles`,family:`vfx`,label:`Emissor de Partículas`,description:`Liga, desliga ou solta uma rajada nas Partículas (GPU) de um objeto (compute pass §4.2). O objeto precisa do componente.`,kind:`exec`,inputs:[P,{id:`alvo`,type:`entity`,label:`Objeto (vazio = este)`,default:null},{id:`acao`,type:`string`,label:`Ação`,default:`rajada`,options:[{value:`rajada`,label:`Rajada`},{value:`ligar`,label:`Ligar`},{value:`desligar`,label:`Desligar`}],editable:!0},{id:`duracao`,type:`number`,label:`Rajada (s)`,default:.3,min:.05,step:.05,editable:!0}],outputs:[F],emit:e=>{let t=e.in(`alvo`),n=t===`null`?`this.entity`:`(${t} ?? this.entity)`,r=e.state(`px_until`,`-1`),i=e.state(`px_who`,`null as Entity | null`),a=e.in(`acao`);return`${e.trace()}{
  const _px_t = ${n}
  const _px_on = ${a} !== "desligar"
  this.particles(_px_t, _px_on)
  // rajada: liga agora e o tick desliga depois da duração
  ${r} = ${a} === "rajada" ? this.time.elapsed + ${e.in(`duracao`)} : -1
  ${i} = _px_t
}
${e.next(`exec`)}`},emitTick:e=>{let t=e.state(`px_until`,`-1`);return`if (${t} >= 0 && this.time.elapsed >= ${t}) {
  this.particles(${e.state(`px_who`,`null as Entity | null`)}, false)
  ${t} = -1
}
`}},{type:`vfx/path`,family:`vfx`,label:`VFX em Trajeto`,description:`Solta uma fila de prefabs (faíscas, orbes, partículas) que percorrem um TRAJETO do Path Editor com âncora viva e somem no fim.`,kind:`exec`,inputs:[P,{id:`trajeto`,type:`path`,label:`Trajeto`},{id:`prefab`,type:`string`,label:`Prefab`,default:`Faísca`,editable:!0},{id:`quantidade`,type:`number`,label:`Quantidade`,default:6,min:1,max:64,step:1,editable:!0},{id:`espaco`,type:`number`,label:`Espaçamento (s)`,default:.08,min:0,step:.01,editable:!0},{id:`duracao`,type:`number`,label:`Duração (s)`,default:1.2,min:.05,step:.05,editable:!0}],outputs:[{id:`exec`,type:`exec`,label:``},{id:`onEnd`,type:`exec`,label:`Ao terminar`}],emit:e=>{let t=(e.value(`trajeto`)?.space??`spawn`)===`spawn`?`this.captureMatrix()`:`null`,n=e.state(`vp_s`,`new PathSampler(${e.in(`trajeto`)})`),r=e.state(`vp_runs`,`[] as { t0: number; m: Matrix4 | null; n: number; items: { e: Entity; k: number }[] }[]`);return`${e.trace()}if (${n}.usable) ${r}.push({ t0: this.time.elapsed, m: ${t}, n: 0, items: [] })
${e.next(`exec`)}`},emitTick:e=>{let t=e.value(`trajeto`),n=JSON.stringify(t?.space??`spawn`),r=JSON.stringify(t?.anchorName??``),i=e.state(`vp_s`,`new PathSampler(${e.in(`trajeto`)})`),a=e.state(`vp_runs`,`[] as { t0: number; m: Matrix4 | null; n: number; items: { e: Entity; k: number }[] }[]`),o=e.in(`quantidade`),s=e.in(`espaco`),c=e.in(`duracao`);return`for (let _vp_r = ${a}.length - 1; _vp_r >= 0; _vp_r--) {
  const _vp = ${a}[_vp_r]
  const _vp_now = this.time.elapsed - _vp.t0
  // solta o próximo da fila quando chega a vez dele
  while (_vp.n < ${o} && _vp_now >= _vp.n * ${s}) {
    const _vp_p0 = this.pathPoint(${i}, 0, ${n}, ${r}, _vp.m)
    const _vp_e = this.spawnPrefab(${e.in(`prefab`)}, _vp_p0.x, _vp_p0.y, _vp_p0.z)
    if (_vp_e) _vp.items.push({ e: _vp_e, k: _vp.n })
    _vp.n++
  }
  for (let _vp_i = _vp.items.length - 1; _vp_i >= 0; _vp_i--) {
    const _vp_it = _vp.items[_vp_i]
    const _vp_u = (_vp_now - _vp_it.k * ${s}) / ${c}
    if (_vp_u >= 1) {
      this.destroy(_vp_it.e)
      _vp.items.splice(_vp_i, 1)
      continue
    }
    const _vp_p = this.pathPoint(${i}, Math.max(0, _vp_u), ${n}, ${r}, _vp.m)
    _vp_it.e.object3D.position.set(_vp_p.x, _vp_p.y, _vp_p.z)
  }
  if (_vp.n >= ${o} && _vp.items.length === 0) {
    ${a}.splice(_vp_r, 1)
${e.next(`onEnd`)}  }
}
`}},{type:`vfx/trail`,family:`vfx`,label:`Trail / Rastro`,description:`Fita atrás do objeto (projétil, espada, veículo) que afina e some com o tempo.`,kind:`event`,handler:`update`,inputs:[{id:`largura`,type:`number`,label:`Largura`,default:.3,min:.01,step:.05,editable:!0},{id:`vida`,type:`number`,label:`Duração (s)`,default:.35,min:.05,step:.05,editable:!0},{id:`cor`,type:`string`,label:`Cor`,default:`#c8ff00`,widget:`color`,editable:!0},{id:`orientacao`,type:`string`,label:`Fita`,default:`horizontal`,options:[{value:`horizontal`,label:`Deitada`},{value:`vertical`,label:`Em pé`}],editable:!0}],outputs:[],emit:e=>`${e.trace()}this.trail(${JSON.stringify(e.nodeId)}, { width: ${e.in(`largura`)}, life: ${e.in(`vida`)}, color: ${e.in(`cor`)}, orientation: ${e.in(`orientacao`)} === "vertical" ? "vertical" : "horizontal" }).update(this.entity.object3D.getWorldPosition(new Vector3()), this.time.elapsed)
`},{type:`vfx/flash`,family:`vfx`,label:`Piscar (Flash)`,description:`Pisca o material do objeto — feedback de dano/coleta.`,kind:`exec`,inputs:[P,{id:`cor`,type:`string`,label:`Cor`,default:`#ffffff`,editable:!0},{id:`tempo`,type:`number`,label:`Tempo (s)`,default:.12,min:.05,max:1,step:.01,editable:!0}],outputs:[F],emit:e=>`${e.trace()}{
  const _fl_mr = this.getComponent("MeshRenderer")
  if (_fl_mr) {
    const _fl_prev = _fl_mr.emissive, _fl_prevI = _fl_mr.emissiveIntensity
    _fl_mr.emissive = ${e.in(`cor`)}; _fl_mr.emissiveIntensity = 2; _fl_mr.onPropChanged("emissive")
    setTimeout(() => { _fl_mr.emissive = _fl_prev; _fl_mr.emissiveIntensity = _fl_prevI; _fl_mr.onPropChanged("emissive") }, ${e.in(`tempo`)} * 1000)
  }
}
${e.next(`exec`)}`},{type:`vfx/grow-pop`,family:`vfx`,label:`Pulso de Escala`,description:`Dá um "pop" no tamanho do objeto — feedback tátil.`,kind:`exec`,inputs:[P,{id:`fator`,type:`number`,label:`Fator`,default:1.35,min:1,max:3,step:.05,editable:!0}],outputs:[F],emit:e=>`${e.trace()}{
  const _gp_s = this.transform.scale
  const _gp_x = _gp_s.x, _gp_y = _gp_s.y, _gp_z = _gp_s.z
  _gp_s.multiplyScalar(${e.in(`fator`)})
  setTimeout(() => _gp_s.set(_gp_x, _gp_y, _gp_z), 140)
}
${e.next(`exec`)}`}],I=e=>()=>{throw Error(`"${e}" é um node de shader: ligue-o só à saída Material TSL (direto ou via nodes de dados).`)},Ce=[{type:`shader/output`,family:`vfx`,label:`Material TSL`,description:`Saída do material: o que chegar aqui vira TSL e pinta o objeto que tem este grafo (WebGPU). Canais sem fio usam o Mesh Renderer.`,kind:`data`,inputs:[{id:`cor`,type:`vector3`,label:`Cor`,linkOnly:!0},{id:`emissivo`,type:`vector3`,label:`Emissivo`,linkOnly:!0},{id:`rugosidade`,type:`number`,label:`Rugosidade`,linkOnly:!0},{id:`metalico`,type:`number`,label:`Metálico`,linkOnly:!0},{id:`opacidade`,type:`number`,label:`Opacidade`,linkOnly:!0},{id:`deslocamento`,type:`vector3`,label:`Posição do vértice`,linkOnly:!0}],outputs:[],emit:()=>`undefined`},{type:`shader/color`,family:`vfx`,label:`Cor`,description:`Uma cor fixa (RGB). No TSL vira color(0xRRGGBB).`,kind:`data`,inputs:[{id:`cor`,type:`string`,label:`Cor`,default:`#d946ef`,widget:`color`}],outputs:[{id:`out`,type:`vector3`,label:`RGB`}],emit:I(`Cor`)},{type:`shader/position`,family:`vfx`,label:`Posição (vértice)`,description:`Posição de cada vértice — no próprio objeto (local) ou no mundo.`,kind:`data`,inputs:[{id:`espaco`,type:`string`,label:`Espaço`,default:`local`,options:[{value:`local`,label:`Local`},{value:`mundo`,label:`Mundo`}]}],outputs:[{id:`out`,type:`vector3`,label:`XYZ`}],emit:I(`Posição (vértice)`)},{type:`shader/normal`,family:`vfx`,label:`Normal`,description:`Direção da superfície em cada ponto — local ou no mundo.`,kind:`data`,inputs:[{id:`espaco`,type:`string`,label:`Espaço`,default:`local`,options:[{value:`local`,label:`Local`},{value:`mundo`,label:`Mundo`}]}],outputs:[{id:`out`,type:`vector3`,label:`XYZ`}],emit:I(`Normal`)},{type:`shader/texture`,family:`vfx`,label:`Textura`,description:`Lê uma textura dos Assets (pelo nome do arquivo) nas coordenadas UV do objeto.`,kind:`data`,inputs:[{id:`arquivo`,type:`string`,label:`Arquivo`,default:``}],outputs:[{id:`rgb`,type:`vector3`,label:`RGB`},{id:`alfa`,type:`number`,label:`Alfa`}],emit:I(`Textura`)}];function we(){y.registerAll(ue),y.registerAll(ge),y.registerAll(_e),y.registerAll(be),y.registerAll(ye),y.registerAll(xe),y.registerAll(ve),y.registerAll(Se),y.registerAll(Ce),y.registerAll(he),y.registerAll(me),y.registerAll(pe),y.registerAll(fe)}we();var L={start:``,update:`dt`,fixedUpdate:`dt`,onCollision:`other`,onTrigger:`other`,onDamage:`amount, from`},R=Object.keys(L);function Te(e){let t=[],n=new Map(e.nodes.map(e=>[e.id,e]));for(let n of e.nodes)y.get(n.type)||t.push({nodeId:n.id,message:`Node desconhecido: ${n.type}`,severity:`error`});for(let r of e.edges){let e=n.get(r.source),i=n.get(r.target);if(!e||!i){t.push({message:`Conexão apontando para um node inexistente.`,severity:`warning`});continue}let a=y.get(e.type),o=y.get(i.type),s=a?.outputs.find(e=>e.id===r.sourceHandle),c=o?.inputs.find(e=>e.id===r.targetHandle);if(!s||!c){t.push({nodeId:r.target,message:`Conexão com socket inexistente.`,severity:`warning`});continue}f(s.type,c.type)||t.push({nodeId:r.target,message:`Tipos incompatíveis: ${s.type} → ${c.type}.`,severity:`error`})}let r=e.edges.filter(e=>{let t=n.get(e.source);return(t&&y.get(t.type))?.outputs.find(t=>t.id===e.sourceHandle)?.type===`exec`});x(e.nodes.map(e=>e.id),r)&&t.push({message:`Ciclo no fluxo de execução — o jogo travaria. Remova a conexão que fecha o laço.`,severity:`error`});let i=e.edges.filter(e=>!r.includes(e));return x(e.nodes.map(e=>e.id),i)&&t.push({message:`Ciclo entre nodes de dados.`,severity:`error`}),t}function z(e,t){return e==null?t===`number`?`0`:t===`boolean`?`false`:t===`string`?`''`:`null`:t===`entity`&&e===`@self`?`this.entity`:JSON.stringify(e)}function Ee(e,t){let n=e,r=2;for(;t.has(n);)n=`${e}${r++}`;return t.add(n),n}function B(e){return e.replace(/[^a-zA-Z0-9_]/g,`_`)}var De=class{graph;byId;incoming;outgoing;consumerCount=new Map;e;constructor(e,t){this.graph=e,this.byId=new Map(e.nodes.map(e=>[e.id,e])),this.incoming=ce(e),this.outgoing=le(e),this.e={params:new Map,states:new Map,exprCache:new Map,locals:[],localCount:0,traceOn:t,graphName:e.name};for(let t of e.edges){let e=`${t.source}:${t.sourceHandle}`;this.consumerCount.set(e,(this.consumerCount.get(e)??0)+1)}}def(e){let t=this.byId.get(e);return t&&y.get(t.type)}inputExpr(e,t){let n=this.def(e)?.inputs.find(e=>e.id===t),r=(this.incoming.get(e)??[]).find(e=>e.targetHandle===t);if(r){let e=this.def(r.source);if(e?.outputExpr)return e.outputExpr(r.sourceHandle,r.source);let t=this.dataExpr(r.source);return(e?.outputs.filter(e=>e.type!==`exec`).length??0)>1?`${t}.${r.sourceHandle}`:t}let i=this.byId.get(e)?.values?.[t]??n?.default;return n?.editable&&n.type!==`exec`&&n.type!==`entity`?`this.${this.paramFor(e,n,i)}`:z(i,n?.type??`string`)}paramFor(e,t,n){let r=`${e}:${t.id}`,i=this.e.params.get(r);if(i)return i.spec.id;let a=new Set([...this.e.params.values()].map(e=>e.spec.id)),o=Ee(B(t.id),a);return this.e.params.set(r,{spec:{...t,id:o},init:z(n,t.type)}),o}dataExpr(e){let t=this.e.exprCache.get(e);if(t)return t;let n=this.def(e);if(!n)return`undefined`;let r=n.emit(this.ctx(e)),i=0;for(let[t,n]of this.consumerCount)t.startsWith(e+`:`)&&(i+=n);if(i>1&&!/^this\.[a-zA-Z_$][\w$]*$/.test(r)){let t=`n_${B(e).slice(0,6)}_${this.e.localCount++}`;return this.e.locals.push(`const ${t} = ${r}`),this.e.exprCache.set(e,t),t}return this.e.exprCache.set(e,r),r}execChain(e,t){let n=(this.outgoing.get(e)??[]).find(e=>e.sourceHandle===t);return n?this.execNode(n.target):``}execNode(e){let t=this.def(e);return t?t.emit(this.ctx(e)):``}ctx(e){return{nodeId:e,in:t=>this.inputExpr(e,t),next:t=>this.execChain(e,t),value:t=>{let n=this.byId.get(e),r=this.def(e)?.inputs.find(e=>e.id===t);return n?.values?.[t]??r?.default},local:(e,t)=>{let n=`${B(e)}_${this.e.localCount++}`;return this.e.locals.push(`const ${n} = ${t}`),n},state:(t,n)=>{let r=b(t,e);return this.e.states.has(r)||this.e.states.set(r,n),`this.${r}`},trace:()=>this.e.traceOn?`globalThis.__SINAPSE_TRACE__?.(${JSON.stringify(this.e.graphName)}, ${JSON.stringify(e)})\n`:``}}handlerBody(e){let t=this.graph.nodes.filter(t=>{let n=y.get(t.type);return n?.kind===`event`&&(n.handler??`update`)===e}),n=e===`start`?this.graph.nodes.filter(e=>y.get(e.type)?.emitStart):[],r=e===`update`?this.graph.nodes.filter(e=>y.get(e.type)?.emitTick):[];if(t.length===0&&n.length===0&&r.length===0)return``;this.e.locals=[];let i=se(this.graph.nodes.map(e=>e.id),this.graph.edges);t.sort((e,t)=>i.indexOf(e.id)-i.indexOf(t.id));let a=n.map(e=>y.get(e.type).emitStart(this.ctx(e.id))).join(``),o=r.map(e=>y.get(e.type).emitTick(this.ctx(e.id))).join(``)+t.map(e=>this.execNode(e.id)).join(``),s=this.e.locals.length?this.e.locals.join(`
`)+`
`:``;return this.e.exprCache.clear(),s+a+o}compile(){let e=Object.fromEntries(R.map(e=>[e,this.handlerBody(e)])),t=`Sinapse_${B(this.graph.name)}`,n=[];n.push(`// Gerado pela Sinapse — grafo "${this.graph.name}".`),n.push(`// Edite o grafo no editor, ou ejete este código e siga em TypeScript.`),n.push(`export default class ${t} extends Behaviour {`);let r=[];for(let{spec:e,init:t}of this.e.params.values()){n.push(`  ${e.id} = ${t}`);let i=[`type: ${JSON.stringify(Oe(e))}`];e.label&&i.push(`label: ${JSON.stringify(e.label)}`),e.min!==void 0&&i.push(`min: ${e.min}`),e.max!==void 0&&i.push(`max: ${e.max}`),e.step!==void 0&&i.push(`step: ${e.step}`),e.options&&i.push(`options: ${JSON.stringify(e.options)}`),r.push(`    ${e.id}: { ${i.join(`, `)} },`)}if(r.length&&(n.push(``),n.push(`  static editable = {`),n.push(...r),n.push(`  }`)),this.e.states.size){n.push(``);for(let[e,t]of this.e.states)n.push(`  ${e} = ${t}`)}for(let t of R){let r=e[t];r.trim()&&(n.push(``),n.push(`  ${t}(${L[t]}) {`),n.push(ke(r.trimEnd(),4)),n.push(`  }`))}return n.push(`}`),{code:n.join(`
`)+`
`,className:t}}};function Oe(e){return e.options?`enum`:e.type===`number`?e.min!==void 0&&e.max!==void 0?`slider`:`number`:e.type===`boolean`?`boolean`:e.type===`vector3`?`vec3`:`string`}function ke(e,t){let n=0;return e.split(`
`).map(e=>{let r=e.trim();if(!r)return``;r.startsWith(`}`)&&(n=Math.max(0,n-1));let i=` `.repeat(t+n*2)+r,a=(r.match(/\{/g)??[]).length,o=(r.match(/\}/g)??[]).length;return n+=a-o+(r.startsWith(`}`)&&o>0?1:0),n=Math.max(0,n),i}).join(`
`)}function V(e,t=!1){let n=Te(e),r=`Sinapse_${B(e.name)}`;if(n.some(e=>e.severity===`error`))return{ok:!1,code:``,className:r,issues:n};try{let{code:i}=new De(e,t).compile();return{ok:!0,code:i,className:r,issues:n}}catch(e){return{ok:!1,code:``,className:r,issues:[...n,{message:`Falha ao gerar código: ${e instanceof Error?e.message:String(e)}`,severity:`error`}]}}}var Ae={colorNode:`vec3`,emissiveNode:`vec3`,roughnessNode:`float`,metalnessNode:`float`,opacityNode:`float`,positionNode:`vec3`};function H(e,t){switch(e.k){case`float`:case`distance`:case`swizzle`:return`float`;case`color`:case`vec3`:case`splat3`:case`rgb`:return`vec3`;case`texture`:return`vec4`;case`builtin`:return e.name===`time`||e.name===`deltaTime`?`float`:`vec3`;case`op1`:return H(e.a,t);case`op2`:return U(H(e.a,t),H(e.b,t));case`mix`:return U(H(e.a,t),H(e.b,t));case`clamp`:return H(e.x,t);case`ref`:return H(t[e.id],t)}}function U(e,t){return e===`vec4`||t===`vec4`?`vec4`:e===`vec3`||t===`vec3`?`vec3`:`float`}var je=`shader/output`,Me={cor:`colorNode`,emissivo:`emissiveNode`,rugosidade:`roughnessNode`,metalico:`metalnessNode`,opacidade:`opacityNode`,deslocamento:`positionNode`},Ne={add:`add`,sub:`sub`,mul:`mul`,div:`div`,min:`min`,max:`max`,pow:`pow`,mod:`mod`},Pe={abs:`abs`,neg:`negate`,sqrt:`sqrt`,floor:`floor`,round:`round`,sin:`sin`,cos:`cos`},W=class extends Error{nodeId;constructor(e,t){super(e),this.nodeId=t}};function G(e){let t=performance.now(),n=e.nodes.filter(e=>e.type===je);if(n.length===0)return{ok:!0,hasOutput:!1,ast:null,issues:[],nodeCount:0,ms:0};let r=[];n.length>1&&r.push({nodeId:n[1].id,message:`Mais de uma saída Material TSL: só a primeira vale. Remova as outras.`,severity:`warning`});try{let i=new Fe(e,n[0].id).build();return{ok:!0,hasOutput:!0,ast:i.material,issues:r,nodeCount:i.nodeCount,ms:performance.now()-t}}catch(e){let n=e instanceof W?e:new W(String(e));return r.push({nodeId:n.nodeId,message:`TSL: ${n.message}`,severity:`error`}),{ok:!1,hasOutput:!0,ast:null,issues:r,nodeCount:0,ms:performance.now()-t}}}var Fe=class{byId;incoming=new Map;consumers=new Map;memo=new Map;visiting=new Set;used=new Set;lets=[];textures=new Set;graph;outputId;constructor(e,t){this.graph=e,this.outputId=t,this.byId=new Map(e.nodes.map(e=>[e.id,e]));for(let t of e.edges){let e=this.incoming.get(t.target)??[];e.push(t),this.incoming.set(t.target,e)}this.countConsumers(t,new Set)}countConsumers(e,t){if(!t.has(e)){t.add(e);for(let n of this.incoming.get(e)??[]){let e=`${n.source}:${n.sourceHandle}`;this.consumers.set(e,(this.consumers.get(e)??0)+1),this.countConsumers(n.source,t)}}}build(){let e={};for(let t of this.incoming.get(this.outputId)??[]){let n=Me[t.targetHandle];if(!n)continue;let r=Ae[n],i=this.fromEdge(t);e[n]=this.coerce(i,r,this.outputId,t.targetHandle)}if(Object.keys(e).length===0)throw new W(`a saída Material TSL não tem nenhum canal ligado.`,this.outputId);return{material:{version:1,graph:this.graph.name,lets:this.lets,slots:e,textures:[...this.textures]},nodeCount:this.used.size+1}}coerce(e,t,n,r){let i=H(e,this.lets);if(i===t)return e;if(t===`vec3`&&i===`float`)return{k:`splat3`,a:e};if(t===`vec3`&&i===`vec4`)return{k:`rgb`,of:e};throw new W(`"${this.def(n)?.label??n}" espera ${t} em "${r}" e recebeu ${i}. Separe o vetor (Separar Vetor) para pegar um número.`,n)}def(e){let t=this.byId.get(e);return t?y.get(t.type):void 0}fromEdge(e){return this.output(e.source,e.sourceHandle)}output(e,t){let n=`${e}:${t}`,r=this.memo.get(n);if(r)return r;if(this.visiting.has(e))throw new W(`ciclo entre nodes de dados do material.`,e);this.visiting.add(e);let i=this.nodeExpr(e,t);this.visiting.delete(e),this.used.add(e);let a=i.k===`float`||i.k===`builtin`||i.k===`color`||i.k===`ref`;return(this.consumers.get(n)??0)>1&&!a&&(this.lets.push(i),i={k:`ref`,id:this.lets.length-1}),this.memo.set(n,i),i}input(e,t){let n=this.def(e)?.inputs.find(e=>e.id===t),r=(this.incoming.get(e)??[]).find(e=>e.targetHandle===t),i=n?.type===`vector3`?`vec3`:`float`;return r?this.coerce(this.fromEdge(r),i,e,t):this.literal(e,n)}value(e,t){let n=this.byId.get(e),r=this.def(e)?.inputs.find(e=>e.id===t);return n?.values?.[t]??r?.default}literal(e,t){let n=this.value(e,t?.id??``);if(t?.type===`vector3`){let e=Array.isArray(n)?n:[0,0,0],t=t=>({k:`float`,value:K(e[t])});return{k:`vec3`,x:t(0),y:t(1),z:t(2)}}return{k:`float`,value:K(n)}}textureSample(e,t){let n=`${e}:#sample`,r=this.memo.get(n);if(r)return r;let i=0;for(let[t,n]of this.consumers)t.startsWith(e+`:`)&&(i+=n);let a={k:`texture`,name:t};return i>1&&(this.lets.push(a),a={k:`ref`,id:this.lets.length-1}),this.memo.set(n,a),a}nodeExpr(e,t){let n=this.byId.get(e),r=this.def(e)?.label??n.type;switch(n.type){case`data/number`:return this.input(e,`valor`);case`data/math`:return{k:`op2`,op:Ne[this.value(e,`op`)??`add`]??`add`,a:this.input(e,`a`),b:this.input(e,`b`)};case`data/math1`:return{k:`op1`,op:Pe[this.value(e,`op`)??`abs`]??`abs`,a:this.input(e,`a`)};case`data/clamp`:return{k:`clamp`,x:this.input(e,`valor`),min:this.input(e,`min`),max:this.input(e,`max`)};case`data/lerp`:return{k:`mix`,a:this.input(e,`a`),b:this.input(e,`b`),t:this.input(e,`t`)};case`data/time`:return{k:`builtin`,name:t===`delta`?`deltaTime`:`time`};case`vector/make`:return{k:`vec3`,x:this.input(e,`x`),y:this.input(e,`y`),z:this.input(e,`z`)};case`vector/split`:{let n=t===`y`?`y`:t===`z`?`z`:`x`;return{k:`swizzle`,of:this.input(e,`v`),c:n}}case`vector/distance`:return{k:`distance`,a:this.input(e,`a`),b:this.input(e,`b`)};case`vector/scale`:return{k:`op2`,op:`mul`,a:this.input(e,`v`),b:this.input(e,`k`)};case`shader/color`:return{k:`color`,hex:Ie(this.value(e,`cor`),e)};case`shader/position`:return{k:`builtin`,name:this.value(e,`espaco`)===`mundo`?`positionWorld`:`positionLocal`};case`shader/normal`:return{k:`builtin`,name:this.value(e,`espaco`)===`mundo`?`normalWorld`:`normalLocal`};case`shader/texture`:{let n=(this.value(e,`arquivo`)??``).trim();if(!n)throw new W(`Textura sem arquivo: escreva o nome de uma textura dos Assets.`,e);this.textures.add(n);let r=this.textureSample(e,n);return t===`alfa`?{k:`swizzle`,of:r,c:`w`}:{k:`rgb`,of:r}}default:throw new W(`"${r}" não tem equivalente TSL. No material entram só nodes de dados: número, matemática, função, limitar, interpolar, tempo, vetores, cor, posição, normal e textura.`,e)}}};function K(e){let t=typeof e==`number`?e:Number(e);return Number.isFinite(t)?t:0}function Ie(e,t){let n=/^#?([0-9a-f]{6})$/i.exec(e??``);if(!n)throw new W(`cor inválida "${e}": use #RRGGBB.`,t);return parseInt(n[1],16)}var Le=[`colorNode`,`emissiveNode`,`roughnessNode`,`metalnessNode`,`opacityNode`,`positionNode`];function q(e){let t=new Set,n=e=>J(e,t,!0),r=e.lets.map((e,t)=>`  const v${t} = ${n(e)}`),i=Le.filter(t=>e.slots[t]).map(t=>`  material.${t} = ${n(e.slots[t])}`),a=e.slots.opacityNode?[`  material.transparent = true`]:[],o=e.textures.length>0,s=[`// Gerado pelo Expctral Optic Modulator — Sinapse → TSL (0% lock-in).`,`// Grafo "${e.graph}". Requer three r171+ (WebGPURenderer, que cai sozinho para WebGL2).`,o?`// Texturas esperadas em \`textures\`: ${e.textures.map(e=>JSON.stringify(e)).join(`, `)}.`:null].filter(e=>e!==null),c=[o?`import { Texture } from 'three'`:null,`import { MeshStandardNodeMaterial } from 'three/webgpu'`,`import { ${[...t].sort().join(`, `)} } from 'three/tsl'`].filter(e=>e!==null),l=o?`export function createMaterial(textures: Record<string, Texture> = {}): MeshStandardNodeMaterial {`:`export function createMaterial(): MeshStandardNodeMaterial {`;return[...s,...c,``,`/** Material do grafo "${e.graph}". Use em qualquer Mesh: new Mesh(geometria, createMaterial()). */`,l,`  const material = new MeshStandardNodeMaterial()`,...r,...i,...a,`  return material`,`}`,``].join(`
`)}function Re(e){return Object.is(e,-0)?`0`:String(e)}function J(e,t,n=!1){let r=e=>J(e,t),i=(e,...n)=>(t.add(e),`${e}(${n.join(`, `)})`);switch(e.k){case`float`:return i(`float`,Re(e.value));case`color`:{let t=i(`color`,`0x${e.hex.toString(16).padStart(6,`0`)}`);return n?t:`${t}.rgb`}case`vec3`:return i(`vec3`,r(e.x),r(e.y),r(e.z));case`splat3`:return i(`vec3`,r(e.a));case`builtin`:return t.add(e.name),e.name;case`op1`:return i(e.op,r(e.a));case`op2`:return i(e.op,r(e.a),r(e.b));case`mix`:return i(`mix`,r(e.a),r(e.b),r(e.t));case`clamp`:return i(`clamp`,r(e.x),r(e.min),r(e.max));case`distance`:return i(`distance`,r(e.a),r(e.b));case`swizzle`:return`${r(e.of)}.${e.c}`;case`rgb`:return`${r(e.of)}.rgb`;case`texture`:return t.add(`uv`),i(`texture`,`textures[${JSON.stringify(e.name)}] ?? new Texture()`,`uv()`);case`ref`:return`v${e.id}`}}function ze(e){return t(d(e))}function Y(e,t){h(ze(e),t?.ok?t.ast:null),r(()=>import(`./EditorRuntime-COWfpmeP.js`).then(e=>e.t).then(e=>g(e.getRuntime().scene)),__vite__mapDeps([0,1,2,3,4,5,6]))}var X=new Map,Be=300;function Z(e,t){if(e.name!==t.name||e.folder!==t.folder||!!e.disabled!=!!t.disabled||e.nodes.length!==t.nodes.length||e.edges.length!==t.edges.length||JSON.stringify(e.groups??[])!==JSON.stringify(t.groups??[]))return!1;for(let n=0;n<e.nodes.length;n++){let r=e.nodes[n],i=t.nodes[n];if(r.id!==i.id||r.type!==i.type||r.position.x!==i.position.x||r.position.y!==i.position.y||(r.comment??``)!==(i.comment??``)||JSON.stringify(r.values??{})!==JSON.stringify(i.values??{}))return!1}for(let n=0;n<e.edges.length;n++){let r=e.edges[n],i=t.edges[n];if(r.id!==i.id||r.source!==i.source||r.target!==i.target||r.sourceHandle!==i.sourceHandle||r.targetHandle!==i.targetHandle)return!1}return!0}function Q(e,t){let n=t,r=2;for(;e[n];)n=`${t}${r++}`;return n}function $(e,t){let n=t,r=2;for(;e.includes(n);)n=`${t} ${r++}`;return n}function Ve(e){return`Sinapse_${e.replace(/[^a-zA-Z0-9_]/g,`_`)}_off`}var He=a((e,t)=>({graphs:{},active:null,status:{},folders:[],focusNodeId:null,setActive:t=>e({active:t}),create:n=>{let r=Q(t().graphs,n??`Novo Grafo`);return e(e=>({graphs:{...e.graphs,[r]:u(r)},active:r})),t().compile(r),r},rename:(n,r)=>{let i=r.trim();!i||t().graphs[i]||(e(e=>{let t={...e.graphs},r=t[n];return r?(delete t[n],t[i]={...r,name:i},{graphs:t,active:e.active===n?i:e.active}):e}),Y(n,null),t().compile(i))},remove:t=>{Y(t,null),e(e=>{let n={...e.graphs};delete n[t];let r={...e.status};return delete r[t],{graphs:n,status:r,active:e.active===t?null:e.active}})},duplicate:n=>{let r=t().graphs[n];if(!r)return null;let i=Q(t().graphs,`${n} (cópia)`),a=JSON.parse(JSON.stringify({...r,name:i}));return e(e=>({graphs:{...e.graphs,[i]:a},active:i})),t().compile(i),i},setDisabled:(n,r)=>{e(e=>{let t=e.graphs[n];return t?{graphs:{...e.graphs,[n]:{...t,disabled:r}}}:e}),t().compile(n)},setFolder:(t,n)=>e(e=>{let r=e.graphs[t];if(!r)return e;let i={...r};return n?i.folder=n:delete i.folder,{graphs:{...e.graphs,[t]:i}}}),update:(n,r)=>{let i=t().graphs[n];if(i&&Z(i,r))return;e(e=>({graphs:{...e.graphs,[n]:r}}));let a=X.get(n);a&&window.clearTimeout(a),X.set(n,window.setTimeout(()=>{t().compile(n)},Be))},compile:async r=>{let i=t().graphs[r];if(!i)return;if(i.disabled){let t=`export default class ${Ve(r)} extends Behaviour {}\n`,i=await n(d(r),t);e(e=>({status:{...e.status,[r]:{ok:i.ok,issues:i.ok?[]:[{message:i.error??`falha`,severity:`error`}],code:t,compiledAt:Date.now()}}})),Y(r,null),o.getState().bump();return}let a=performance.now(),s=V(i,!0),c=performance.now()-a,l=G(i),u=l.hasOutput?{ok:l.ok,nodeCount:l.nodeCount,ms:l.ms,code:l.ast?q(l.ast):``}:void 0;if(e(e=>({status:{...e.status,[r]:{ok:s.ok&&l.ok,issues:[...s.issues,...l.issues],code:s.code,compiledAt:Date.now(),compileMs:c,nodeCount:i.nodes.length,tsl:u}}})),!s.ok){Y(r,null);return}let f=await n(d(r),s.code);if(!f.ok){e(e=>({status:{...e.status,[r]:{...e.status[r],ok:!1,issues:[...s.issues,{message:f.error??`Falha ao registrar o script`,severity:`error`}]}}})),o.getState().pushConsole(`error`,`Sinapse ${r}: ${f.error}`),Y(r,null);return}Y(r,l.hasOutput?l:null),o.getState().bump()},compileAll:async()=>{for(let e of Object.keys(t().graphs))await t().compile(e)},focusNode:t=>e({focusNodeId:t}),createFolder:n=>{let r=$(t().folders,n??`Nova Pasta`);return e(e=>({folders:[...e.folders,r]})),r},renameFolder:(t,n)=>{let r=n.trim();r&&e(e=>{if(e.folders.includes(r))return e;let n=e.folders.map(e=>e===t?r:e),i={...e.graphs};for(let[e,n]of Object.entries(i))n.folder===t&&(i[e]={...n,folder:r});return{folders:n,graphs:i}})},removeFolder:t=>e(e=>{let n=e.folders.filter(e=>e!==t),r={...e.graphs};for(let[e,n]of Object.entries(r))if(n.folder===t){let t={...n};delete t.folder,r[e]=t}return{folders:n,graphs:r}}),duplicateFolder:n=>{let r=$(t().folders,`${n} (cópia)`);e(e=>({folders:[...e.folders,r]}));let i=Object.values(t().graphs).filter(e=>e.folder===n);for(let e of i){let n=t().duplicate(e.name);n&&t().setFolder(n,r)}},load:async(n,r)=>{let i=new Set(r??[]);for(let e of Object.values(n))e.folder&&i.add(e.folder);ie(),e({graphs:{...n},active:Object.keys(n)[0]??null,status:{},folders:[...i]}),await t().compileAll()},serialize:()=>({...t().graphs}),serializeFolders:()=>[...t().folders]}));function Ue(e){let t=V(e,!1);return t.ok?t.code:null}export{V as a,y as c,g as d,h as f,G as i,re as l,He as n,v as o,q as r,oe as s,Ue as t,ne as u};