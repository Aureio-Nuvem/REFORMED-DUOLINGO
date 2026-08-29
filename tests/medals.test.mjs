import { computeMedals, heatmap } from "../.tmp-test/medals.mjs";
let pass=0,fail=0; const t=(n,ok)=>{ok?pass++:fail++;console.log((ok?"  ok  ":"FALHA ")+n);};

const novo = { streak:0,gems:30,xp:0,hearts:5,dayIndex:0,doneDays:[],activeUnit:"",
  mastery:{},studyPos:{},diary:[],seals:[],perfect:0,localName:"",
  reminder:{enabled:false,time:"07:00"},onboarded:false,theme:"system" };

const m0 = computeMedals(novo);
t("usuário novo não tem NENHUMA medalha", m0.every(m=>!m.done));
t("usuário novo tem barra zerada em todas", m0.every(m=>m.pct===0 || m.id==="tesouro"));
t("existe a medalha de primeiro devocional", m0.some(m=>m.id==="primeira-luz"));

const hoje = new Date();
const iso = d => `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,"0")}-${String(d.getDate()).padStart(2,"0")}`;

// concluiu o primeiro devocional, de madrugada
const um = {...novo, seals:[{dayId:"cad-1",title:"A lâmpada",unit:"Conhecendo a Deus",ref:"Sl 119.105",iso:iso(hoje),hour:6}], streak:1};
const m1 = computeMedals(um);
t("primeiro devocional conquista Primeira Luz", m1.find(m=>m.id==="primeira-luz").done);
t("devocional antes das 8h conquista Madrugador", m1.find(m=>m.id==="madrugador").done);
t("Chama Viva ainda não (1 de 7)", !m1.find(m=>m.id==="chama-viva").done);
t("Chama Viva mostra progresso parcial", m1.find(m=>m.id==="chama-viva").pct===14);

// mapa de constância
const h0 = heatmap([]);
t("mapa vazio para quem não concluiu nada", h0.length===35 && h0.every(v=>v===0));
const h1 = heatmap(um.seals);
t("mapa marca o dia de hoje", h1[h1.length-1]>0);
t("mapa não marca os outros dias", h1.slice(0,-1).every(v=>v===0));

// lição perfeita
t("Perfeição só com lição sem erros", !m1.find(m=>m.id==="perfeicao").done);
t("Perfeição conquistada ao registrar uma", computeMedals({...um,perfect:1}).find(m=>m.id==="perfeicao").done);

console.log(`\n${pass} passou, ${fail} falhou`);
process.exit(fail?1:0);
