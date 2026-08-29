import { hashPassword, verifyPassword, newSalt, signSession, readSession } from "../.tmp-test/auth.mjs";

let pass = 0, fail = 0;
const t = (name, ok) => { ok ? pass++ : fail++; console.log((ok ? "  ok  " : "FALHA ") + name); };

// senha
const salt = newSalt();
const h = await hashPassword("senhaSegura123", salt);
t("hash não contém a senha", !h.includes("senhaSegura123"));
t("senha correta valida", await verifyPassword("senhaSegura123", salt, h));
t("senha errada rejeita", !(await verifyPassword("senhaSegura124", salt, h)));
t("salt diferente muda o hash", (await hashPassword("senhaSegura123", newSalt())) !== h);

// sessão
const secret = "segredo-de-teste-bem-longo-aqui";
const tok = await signSession("user-123", secret);
t("token válido devolve o usuário", (await readSession(tok, secret)) === "user-123");
t("segredo errado rejeita", (await readSession(tok, "outro-segredo")) === null);
t("token adulterado rejeita", (await readSession(tok.slice(0, -3) + "AAA", secret)) === null);
t("lixo rejeita", (await readSession("nao-e-token", secret)) === null);

// expiração
const expirado = "user-9.1000.assinaturaqualquer";
t("token expirado rejeita", (await readSession(expirado, secret)) === null);

console.log(`\n${pass} passou, ${fail} falhou`);
process.exit(fail ? 1 : 0);
