import { mergeSaves } from "../.tmp-test/merge.mjs";
let pass=0, fail=0;
const t=(n,ok)=>{ok?pass++:fail++;console.log((ok?"  ok  ":"FALHA ")+n);};

const base = { streak:0,gems:30,xp:0,hearts:5,dayIndex:0,doneDays:[],activeUnit:"",
  mastery:{},studyPos:{},diary:[],reminder:{enabled:false,time:"07:00"},onboarded:false,theme:"system" };

// celular tem mais XP, notebook tem mais dias concluidos
const local  = {...base, xp:500, gems:80, streak:7, doneDays:["cad-1","cad-2"], mastery:{solas:60}, hearts:2,
  diary:[{d:"01 de agosto",ref:"Sl 23.1",t:"reflexao do celular"}], onboarded:true};
const remote = {...base, xp:300, gems:120, streak:4, doneDays:["cad-1","sc-1"], mastery:{solas:40,tulip:70}, hearts:5,
  diary:[{d:"02 de agosto",ref:"Sl 27.1",t:"reflexao do note"}], onboarded:true};

const m = mergeSaves(local, remote);
t("XP fica com o maior", m.xp===500);
t("gemas ficam com o maior", m.gems===120);
t("ofensiva fica com a maior", m.streak===7);
t("dias concluidos se unem sem repetir", m.doneDays.length===3 && m.doneDays.includes("sc-1") && m.doneDays.includes("cad-2"));
t("maestria pega o maior por curso", m.mastery.solas===60 && m.mastery.tulip===70);
t("diario nao perde entrada de nenhum lado", m.diary.length===2);
t("vidas ficam com o menor", m.hearts===2);

// idempotencia: mesclar duas vezes nao duplica
const m2 = mergeSaves(m, remote);
t("mesclar de novo nao duplica diario", m2.diary.length===2);
t("mesclar de novo nao duplica dias", m2.doneDays.length===3);

// conta nova (remoto vazio) nao apaga o local
const m3 = mergeSaves(local, base);
t("conta nova preserva o progresso local", m3.xp===500 && m3.doneDays.length===2 && m3.diary.length===1);

console.log(`\n${pass} passou, ${fail} falhou`);
process.exit(fail?1:0);
