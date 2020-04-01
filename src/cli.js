'use strict';
require('dotenv/config');

const getVictim = name => {
  name = name.toLowerCase();
  switch (name) {
    case 'prior':
      return 0;
    case 'manu':
      return 1;
    case 'mari':
      return 2;
  }

  throw new Error('candidato invalido, use prior | manu | mari');
};

module.exports = () => {
  const victim = process.argv[2] || 'manu';
  const email =  process.argv[3] || process.env.EMAIL;
  const password = process.argv[4] || process.env.PASSWORD;

  if (email && password && victim) {
    return {
      victim: getVictim(victim),
      login: { email, password }
    };
  }

  console.log(
    `[❌] Erro: Comando invalido
  Utilize: node src/index.js [prior | manu | mari] seu@email.com sua_senha
  Exemplo: node src/index.js prior eduardo@gmail.com minhasenha123`
      .split('\n')
      .map(str => str.trim())
      .join('\n')
  );
  return null;
};
