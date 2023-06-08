/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to true if you want to use the splash screen.
  useCustomCursor: true, // Change this to false if you want the good'ol cursor
  googleTrackingID: "UA-174238252-2",
};

//Home Page
const greeting = {
  title: "Olá 👋.",
  title2: "Railson Santos",
  logo_name: "Ideal Solânea",
  // nickname: "harry / picleric",
  full_name: "Ideal Capoeira Solânea",
  subTitle:
    "Nosso trabalho consiste em desenvolver a capoeira e transformar vidas!",
  resumeLink:
    "https://drive.google.com/file/d/1wrkG62HyDgbUOjNxexCT891tcqd83_cK/view?usp=sharing",
  mail: "mailto:im.vedanshvijay2002@gmail.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/idealcapoeirasolanea",
  whatsapp: "https://wa.me/+5583993822366?text=Como%20faço%20para%20treinar?",
  instagram: "https://www.instagram.com/ideal_capoeira_solanea/",
};

const skills = {
  data: [
    {
      title: "Desenvolvimento das aulas",
      fileName: "FullStackImg",
      skills: [
        "⚡ História: conhecemos a origem da arte capoeira e o desenvolvimento do grupo Ideal;",
        "⚡ Capoeira é luta: com muitos exercícios de alongamento, resistência e acrobáticos se faz essa linda arte marcial;",
        "⚡ Música: com a participação e estudos dos instrumentos musicais o aluno vai sentir a energia de jogar capoeira;",
        "⚡ Diálogos, conselhos e orientação, aqui você encontra muito mais, focado no desenvolvimento físico e psicológico do aluno.",
      ],
      
    },
    {
      title: "Quem pode participar?",
      skills: [
        "⚡ Crianças, adultos, idosos, etc. Venha conhercer;",
        "⚡ Você que procura uma arte marcial;",
        "⚡ Quem quer manter o corpo em dia e quer fugir da rotina para viver um lazer;",
        "⚡ Quem procura conhecer outras culturas por meio da capoeira.",
      ],
      
    },
  ],
};

const degrees = {
  degrees: [
    {
      nome: "Corda Crua",
      image: "https://raw.githubusercontent.com/idealcapoeirasolanea/images/main/branca-removebg-preview%20(1).png",
      requisitos: ["⚡ É a “corda de entrada” e é atribuída na forma de uma\n" +
          "pequena prova após a 4ª sessão de treino juntamente com o uniforme;",
        "⚡ Experiência de 0 - 1 ano."],
      alt_name: "Corda Crua",

    },
    {
      nome: "Corda Crua e Amarela",
      image: "https://raw.githubusercontent.com/idealcapoeirasolanea/images/main/crua_amarela-removebg-preview.png",
      requisitos: [
          "⚡ CONHECER E SER CAPAZ DE REALIZAR MOVIMENTOS BÁSICOS COMO GINGA, ATAQUES, DEFESA E ACROBÁTICA E\n" +
          " REPETI-LOS EM SEQUÊNCIA;",
          "⚡ CONHECER, NOMEAR E TOCAR OS INSTRUMENTOS;",
          "⚡ BÁSICO - MÚSICA, CANTAR, APLAUDIR E ACOMPANHAR;",
          "⚡ SER CAPAZ DE REPRESENTAR VALORES COMPORTAMENTAIS;",
          "⚡ Experiência de 1 - 2 ano(s)."
      ],
      alt_name: "Corda Crua e Amarela",
    },
    {
      nome: "Corda Amarela",
      image: "https://raw.githubusercontent.com/idealcapoeirasolanea/images/main/amarela-removebg-preview.png",
      requisitos: [
        "⚡ CONHECER E SER CAPAZ DE REALIZAR MOVIMENTOS BÁSICOS COMO GINGA, ATAQUES, DEFESA E ACROBÁTICA E\n" +
        " REPETI-LOS EM SEQUÊNCIA;",
        "⚡ CONHECER, NOMEAR E TOCAR OS INSTRUMENTOS;",
        "⚡ BÁSICO - MÚSICA, CANTAR, APLAUDIR E ACOMPANHAR;",
        "⚡ SER CAPAZ DE REPRESENTAR VALORES COMPORTAMENTAIS;",
        "⚡ Experiência de 2 - 3 anos."
      ],
      alt_name: "Corda Amarela",
    },
    {
      nome: "Corda Amarela e Laranja",
      image: "https://raw.githubusercontent.com/idealcapoeirasolanea/images/main/amarela_laranja-removebg-preview.png",
      requisitos: [
        "⚡ CONHECER E SER CAPAZ DE REALIZAR MOVIMENTOS BÁSICOS COMO GINGA, ATAQUES, DEFESA E ACROBÁTICA E\n" +
        " REPETI-LOS EM SEQUÊNCIA;",
        "⚡ CONHECER, NOMEAR E TOCAR OS INSTRUMENTOS;",
        "⚡ BÁSICO - MÚSICA, CANTAR, APLAUDIR E ACOMPANHAR;",
        "⚡ SER CAPAZ DE REPRESENTAR VALORES COMPORTAMENTAIS;",
        "⚡ Experiência de 3 - 4 anos."
      ],
      alt_name: "Corda Amarela e Laranja",
    },
    {
      nome: "Corda Laranja",
      image: "https://raw.githubusercontent.com/idealcapoeirasolanea/images/main/laranja-removebg-preview.png",
      requisitos: [
        "⚡ CONHECER E SER CAPAZ DE REALIZAR MOVIMENTOS BÁSICOS COMO GINGA, ATAQUES, DEFESA E ACROBÁTICA E\n" +
        " REPETI-LOS EM SEQUÊNCIA;",
        "⚡ CONHECER, NOMEAR E TOCAR OS INSTRUMENTOS;",
        "⚡ BÁSICO - MÚSICA, CANTAR, APLAUDIR E ACOMPANHAR;",
        "⚡ SER CAPAZ DE REPRESENTAR VALORES COMPORTAMENTAIS;",
        "⚡ Experiência de 4 - 5 anos."
      ],
      alt_name: "Corda Laranja",
    },
    {
      nome: "Corda Laranja e Azul",
      image: "https://raw.githubusercontent.com/idealcapoeirasolanea/images/main/laranja_azul-removebg-preview.png",
      requisitos: [
        "⚡ CONHECER E SER CAPAZ DE REALIZAR MOVIMENTOS BÁSICOS COMO GINGA, ATAQUES, DEFESA E ACROBÁTICA E\n" +
        " REPETI-LOS EM SEQUÊNCIA;",
        "⚡ CONHECER, NOMEAR E TOCAR OS INSTRUMENTOS;",
        "⚡ BÁSICO - MÚSICA, CANTAR, APLAUDIR E ACOMPANHAR;",
        "⚡ SER CAPAZ DE REPRESENTAR VALORES COMPORTAMENTAIS;",
        "⚡ Experiência de 5 - 6 anos."
      ],
      alt_name: "Corda Laranja e Azul",
    },
    {
      nome: "Azul",
      image: "https://raw.githubusercontent.com/idealcapoeirasolanea/images/main/azul-removebg-preview.png",
      requisitos: [
        "⚡ OS CAPOEIRISTAS GANHAM O GRAU \"GRADUADO\" NESTE NÍVEL. ELE PODE ATÉ SER CAPAZ DE AJUDAR SOB A SUPERVISÃO DE SEUS " +
        " PROFESSORES. ELES TAMBÉM AJUDAM A TODOS CAPOEIRISTAS DE GRADUAÇÃO QUE PRECISAM DE AJUDA. " +
        "ELES TÊM UM REPERTÓRIO DE MÚSICAS E JÁ DOMINAM VÁRIOS INSTRUMENTOS E PODEM LEVAR UMA RODA;",
        "⚡ COMO CAPOEIRISTA NESSE NÍVEL VOCÊ TEM CONHECIMENTO DE COMPORTAMENTO NA RODA  E SÃO CAPAZES DE FAZER ISSO SEM MUITO ESFORÇO" +
        " APLICAR.",
        "⚡ Experiência de 7 - 11 anos."
      ],
      alt_name: "Azul",
    },
    {
      nome: "Corda Azul e Verde",
      image: "https://raw.githubusercontent.com/idealcapoeirasolanea/images/main/azul_verde-removebg-preview.png",
      requisitos: [
        "⚡ OS CAPOEIRISTAS GANHAM O GRAU \"GRADUADO\" NESTE NÍVEL. ELE PODE ATÉ SER CAPAZ DE AJUDAR SOB A SUPERVISÃO DE SEUS " +
        " PROFESSORES. ELES TAMBÉM AJUDAM A TODOS CAPOEIRISTAS DE GRADUAÇÃO QUE PRECISAM DE AJUDA. " +
        "ELES TÊM UM REPERTÓRIO DE MÚSICAS E JÁ DOMINAM VÁRIOS INSTRUMENTOS E PODEM LEVAR UMA RODA;",
        "⚡ COMO CAPOEIRISTA NESSE NÍVEL VOCÊ TEM CONHECIMENTO DE COMPORTAMENTO NA RODA  E SÃO CAPAZES DE FAZER ISSO SEM MUITO ESFORÇO" +
        " APLICAR.",
        "⚡ Experiência de 7 - 11 anos."
      ],
      alt_name: "Corda Azul e Verde",
    },
    {
      nome: "Corda Verde",
      image: "https://raw.githubusercontent.com/idealcapoeirasolanea/images/main/verde-removebg-preview.png",
      requisitos: [
        "⚡ OS  CAPOEIRISTAS  GANHAM  O  TÍTULO \"INSTRUTOR\" NESTE NÍVEL. NISSO DEVE POSICIONAR OS ELEMENTOS COMPLETOS " +
        "E CONHEÇA A CARTA IDEAL DE CAPOEIRA. CONHECIMENTO SOBRE DIFERENTES MÉTODOS DE TREINO, MÚSICA E ESTILOS " +
        "DE CAPOEIRA FAZEM PARTE DO CAPOEIRISTA;",
        "⚡ DESENVOLVIMENTO CONSTANTE EM TODOS OS NÍVEIS;",
        "⚡ ELE JÁ ESTÁ FAMILIARIZADO SOBRE HISTÓRICO PRECISO CONHECE A CAPOEIRA E TRANSPORTA O\n" +
        "A FILOSOFIA DO GRUPO CONTINUA. IDEAL É\n" +
        "ELE JÁ ESTÁ CONSTRUINDO SEU PRÓPRIO GRUPO E\n" +
        "ENSINO ATIVADO;",
        "⚡ Experiência de 12 - 16 anos."
      ],
      alt_name: "Corda Verde",
    },
    {
      nome: "Corda Verde e Roxa",
      image: "https://raw.githubusercontent.com/idealcapoeirasolanea/images/main/verde_roxa-removebg-preview.png",
      requisitos: [
        "⚡ OS  CAPOEIRISTAS  GANHAM  O  TÍTULO \"INSTRUTOR\" NESTE NÍVEL. NISSO DEVE POSICIONAR OS ELEMENTOS COMPLETOS " +
        "E CONHEÇA A CARTA IDEAL DE CAPOEIRA. CONHECIMENTO SOBRE DIFERENTES MÉTODOS DE TREINO, MÚSICA E ESTILOS " +
        "DE CAPOEIRA FAZEM PARTE DO CAPOEIRISTA;",
        "⚡ DESENVOLVIMENTO CONSTANTE EM TODOS OS NÍVEIS;",
        "⚡ ELE JÁ ESTÁ FAMILIARIZADO SOBRE HISTÓRICO PRECISO CONHECE A CAPOEIRA E TRANSPORTA O\n" +
        "A FILOSOFIA DO GRUPO CONTINUA. IDEAL É\n" +
        "ELE JÁ ESTÁ CONSTRUINDO SEU PRÓPRIO GRUPO E\n" +
        "ENSINO ATIVADO;",
        "⚡ Experiência de 12 - 16 anos."
      ],
      alt_name: "Corda Verde e Roxa",
    },
    {
      nome: "Corda Roxa",
      image: "https://raw.githubusercontent.com/idealcapoeirasolanea/images/main/roxa-removebg-preview.png",
      requisitos: [
        "⚡ OS CAPOEIRISTAS GANHAM O TÍTULO DE \"PROFESSOR\" NESTE NÍVEL. EM " +
        "NESTA POSIÇÃO ELE DEVE CONHECER E SER CAPAZ DE REFLETIR OS ELEMENTOS COMPLETOS DA CARTA IDEAL DA CAPOEIRA." +
        " CONHECIMENTO SOBRE DIFERENTES MÉTODOS DE TREINO, MÚSICA E ESTILOS DE CAPOEIRA FAZEM PARTE DO CAPOERISTA E A SUA" +
        " CRIATIVIDADE ENVOLVE;",
        "⚡ A CAPOEIRA É DE GRANDE IMPORTÂNCIA NA TRANSMISSÃO E EXECUÇÃO;",
        "⚡ ELE DEVE DESENVOLVER SEU PRÓPRIO TRABALHO NESTE NÍVEL E\n" +
        "RECONHECER-SE COMO CAPOEIRA, BEM COMO A IMPORTÂNCIA DA CAPOEIRA PARA \n" +
        "SI E PARA OS OUTROS. NESTA POSIÇÃO SE TORNA MODELO E INSPIRAÇÃO PARA OUTROS CAPOEIRISTAS;",
        "⚡ CONHECIMENTO HISTÓRICO PRECISO DA CAPOEIRA;",
        "⚡ DÊ AULAS COM HÁBITO E RELAXAMENTO;",
        "⚡ SEMPRE ESTAR EM \"BOAS\" CONDIÇÕES FÍSICAS  E TÁTICAS;",
        "⚡ TENDO UM PONTO DE VISTA SOBRE A CAPOEIRA;",
        "⚡ DESENVOLVIMENTO  CONSTANTE;",
        "⚡ REDE;",
        "⚡ TRABALHO SISTEMÁTICO NA DIVULGAÇÃO DA CAPOEIRA E SUAS\n" +
        "PRINCÍPIOS;",
        "⚡ GESTÃO DO PRÓPRIO TRABALHO E AÇÕES ESTRATÉGICAS;",
        "⚡ Experiência de 16 - 20 anos.",
      ],
      alt_name: "Corda Roxa",
    },
    {
      nome: "Corda Roxa e Marron",
      image: "https://raw.githubusercontent.com/idealcapoeirasolanea/images/main/roxa_marron-removebg-preview.png",
      requisitos: [
        "⚡ OS CAPOEIRISTAS GANHAM O TÍTULO DE \"PROFESSOR\" NESTE NÍVEL. EM " +
        "NESTA POSIÇÃO ELE DEVE CONHECER E SER CAPAZ DE REFLETIR OS ELEMENTOS COMPLETOS DA CARTA IDEAL DA CAPOEIRA." +
        " CONHECIMENTO SOBRE DIFERENTES MÉTODOS DE TREINO, MÚSICA E ESTILOS DE CAPOEIRA FAZEM PARTE DO CAPOERISTA E A SUA" +
        " CRIATIVIDADE ENVOLVE;",
        "⚡ A CAPOEIRA É DE GRANDE IMPORTÂNCIA NA TRANSMISSÃO E EXECUÇÃO;",
        "⚡ ELE DEVE DESENVOLVER SEU PRÓPRIO TRABALHO NESTE NÍVEL E\n" +
        "RECONHECER-SE COMO CAPOEIRA, BEM COMO A IMPORTÂNCIA DA CAPOEIRA PARA \n" +
        "SI E PARA OS OUTROS. NESTA POSIÇÃO SE TORNA MODELO E INSPIRAÇÃO PARA OUTROS CAPOEIRISTAS;",
        "⚡ CONHECIMENTO HISTÓRICO PRECISO DA CAPOEIRA;",
        "⚡ DÊ AULAS COM HÁBITO E RELAXAMENTO;",
        "⚡ SEMPRE ESTAR EM \"BOAS\" CONDIÇÕES FÍSICAS  E TÁTICAS;",
        "⚡ TENDO UM PONTO DE VISTA SOBRE A CAPOEIRA;",
        "⚡ DESENVOLVIMENTO  CONSTANTE;",
        "⚡ REDE;",
        "⚡ TRABALHO SISTEMÁTICO NA DIVULGAÇÃO DA CAPOEIRA E SUAS\n" +
        "PRINCÍPIOS;",
        "⚡ GESTÃO DO PRÓPRIO TRABALHO E AÇÕES ESTRATÉGICAS;",
        "⚡ Experiência de 16 - 20 anos.",
      ],
      alt_name: "Corda Roxa e Marron",
    },
    {
      nome: "Corda Marron",
      image: "https://raw.githubusercontent.com/idealcapoeirasolanea/images/main/marron-removebg-preview.png",
      requisitos: [
        "⚡ OS CAPOEIRISTAS GANHAM O TÍTULO \"CONTRAMESTRE\" NESTE NÍVEL. ATRAVÉS DE SEU TREINAMENTO DE LONGO " +
        "PRAZO E INTENSO COMO CAPOEIRISTA, ELE MERECEU ESTE GRAU E A SI MESMO COMO ALUNO ESPECIAL EXCELENTE;",
        "⚡ LIDAR COM SUA PRÓPRIA IDENTIDADE DENTRO E FORA DA CAPOEIRA;",
        "⚡ BÁSICO - MÚSICA, CANTAR, APLAUDIR E ACOMPANHAR;",
        "⚡ TRANSMITA OS PRINCÍPIOS DA CAPOEIRA E RESPEITE-OS;",
        "⚡ Experiência de 20 - 25 anos."
      ],
      alt_name: "Corda Marron",
    },
    {
      nome: "Corda Marron e Vermelha",
      image: "https://raw.githubusercontent.com/idealcapoeirasolanea/images/main/marron_vermelha-removebg-preview.png",
      requisitos: [
        "⚡ OS CAPOEIRISTAS GANHAM O TÍTULO \"CONTRAMESTRE\" NESTE NÍVEL. ATRAVÉS DE SEU TREINAMENTO DE LONGO PRAZO " +
        "E INTENSO COMO CAPOEIRISTA, ELE MERECEU ESTE GRAU E A SI MESMO COMO ALUNO ESPECIAL EXCELENTE;",
        "⚡ LIDAR COM SUA PRÓPRIA IDENTIDADE DENTRO E FORA DA CAPOEIRA;",
        "⚡ BÁSICO - MÚSICA, CANTAR, APLAUDIR E ACOMPANHAR;",
        "⚡ TRANSMITA OS PRINCÍPIOS DA CAPOEIRA E RESPEITE-OS;",
        "⚡ Experiência de 20 - 25 anos."
      ],
      alt_name: "Corda Marron e Vermelha",
    },
    {
      nome: "Corda Vermelha",
      image: "https://raw.githubusercontent.com/idealcapoeirasolanea/images/main/vermelha-removebg-preview.png",
      requisitos: [
        "⚡ NESTE NÍVEL TORNA-SE \"MESTRE\" POR TER DEDICADO TODA SUA VIDA À CAPOEIRA;",
        "⚡ TRABALHO EFICAZ PARA A CAPOEIRA;",
        "⚡ RESPONSABILIDADE NA CAPOEIRA;",
        "⚡ EXPERIÊNCIA COM PESSOAS DIFERENTES;",
        "⚡ AVALIAÇÃO EXPERIENTE E RECONHECIMENTO DE MESTRE;",
        "⚡ EXIGÊNCIA PESSOAL DE CONTINUAR O ENSINO DA CAPOEIRA;",
        "⚡ TREINANDO ALUNOS PARA A CONTINUAÇÃO DE\n" +
        "GRUPO;",
        "⚡ \"CORDA BRANCA\" REPRESENTA O MAIOR\n" +
        "PRÊMIO. NESTE NÍVEL, VOCÊ É A MAIOR RESPONSABILIDADE POR\n" +
        "VOCÊ E POR ELES NO\n" +
        "GRUPO."
      ],
      alt_name: "Corda Vermelha",
    },
    {
      nome: "Corda Vermelha e Branca",
      image: "https://raw.githubusercontent.com/idealcapoeirasolanea/images/main/vermelha_branca-removebg-preview.png",
      requisitos: [
        "⚡ NESTE NÍVEL TORNA-SE \"MESTRE\" POR TER DEDICADO TODA SUA VIDA À CAPOEIRA;",
        "⚡ TRABALHO EFICAZ PARA A CAPOEIRA;",
        "⚡ RESPONSABILIDADE NA CAPOEIRA;",
        "⚡ EXPERIÊNCIA COM PESSOAS DIFERENTES;",
        "⚡ AVALIAÇÃO EXPERIENTE E RECONHECIMENTO DE MESTRE;",
        "⚡ EXIGÊNCIA PESSOAL DE CONTINUAR O ENSINO DA CAPOEIRA;",
        "⚡ TREINANDO ALUNOS PARA A CONTINUAÇÃO DE\n" +
        "GRUPO;",
        "⚡ \"CORDA BRANCA\" REPRESENTA O MAIOR\n" +
        "PRÊMIO. NESTE NÍVEL, VOCÊ É A MAIOR RESPONSABILIDADE POR\n" +
        "VOCÊ E POR ELES NO\n" +
        "GRUPO."
      ],
      alt_name: "Corda Vermelha e Branca",
    },
    {
      nome: "Corda Branca",
      image: "https://raw.githubusercontent.com/idealcapoeirasolanea/images/main/branca-removebg-preview%20(1).png",
      requisitos: [
        "⚡ NESTE NÍVEL TORNA-SE \"MESTRE\" POR TER DEDICADO TODA SUA VIDA À CAPOEIRA;",
        "⚡ TRABALHO EFICAZ PARA A CAPOEIRA;",
        "⚡ RESPONSABILIDADE NA CAPOEIRA;",
        "⚡ EXPERIÊNCIA COM PESSOAS DIFERENTES;",
        "⚡ AVALIAÇÃO EXPERIENTE E RECONHECIMENTO DE MESTRE;",
        "⚡ EXIGÊNCIA PESSOAL DE CONTINUAR O ENSINO DA CAPOEIRA;",
        "⚡ TREINANDO ALUNOS PARA A CONTINUAÇÃO DE\n" +
        "GRUPO;",
        "⚡ \"CORDA BRANCA\" REPRESENTA O MAIOR\n" +
        "PRÊMIO. NESTE NÍVEL, VOCÊ É A MAIOR RESPONSABILIDADE POR\n" +
        "VOCÊ E POR ELES NO\n" +
        "GRUPO."
      ],
      alt_name: "Corda Branca",
    },
  ],

};

const degreesChildren = {
  degrees: [
    {
      nome: "Corda Crua",
      image: "https://raw.githubusercontent.com/idealcapoeirasolanea/images/main/branca-removebg-preview%20(1).png",
      requisitos: ["⚡ É a “corda de entrada” e é atribuída na forma de uma\n" +
      "pequena prova após a 4ª sessão de treino juntamente com o uniforme;",
        "⚡ Experiência de 0 - 1 ano."],
      alt_name: "Corda Crua",

    },
    {
      nome: "Corda Crua e Amarela",
      image: "https://raw.githubusercontent.com/idealcapoeirasolanea/images/main/crua_amarela-removebg-preview.png",
      requisitos: [
        "⚡ CONHECER E SER CAPAZ DE REALIZAR MOVIMENTOS BÁSICOS COMO GINGA, ATAQUES, DEFESA E ACROBÁTICA E\n" +
        " REPETI-LOS EM SEQUÊNCIA;",
        "⚡ CONHECER, NOMEAR E TOCAR OS INSTRUMENTOS;",
        "⚡ BÁSICO - MÚSICA, CANTAR, APLAUDIR E ACOMPANHAR;",
        "⚡ SER CAPAZ DE REPRESENTAR VALORES COMPORTAMENTAIS;",
        "⚡ Experiência de 1 - 2 ano(s)."
      ],
      alt_name: "Corda Crua e Amarela",
    },
    {
      nome: "Corda Amarela",
      image: "https://raw.githubusercontent.com/idealcapoeirasolanea/images/main/amarela-removebg-preview.png",
      requisitos: [
        "⚡ CONHECER E SER CAPAZ DE REALIZAR MOVIMENTOS BÁSICOS COMO GINGA, ATAQUES, DEFESA E ACROBÁTICA E\n" +
        " REPETI-LOS EM SEQUÊNCIA;",
        "⚡ CONHECER, NOMEAR E TOCAR OS INSTRUMENTOS;",
        "⚡ BÁSICO - MÚSICA, CANTAR, APLAUDIR E ACOMPANHAR;",
        "⚡ SER CAPAZ DE REPRESENTAR VALORES COMPORTAMENTAIS;",
        "⚡ Experiência de 2 - 3 anos."
      ],
      alt_name: "Corda Amarela",
    },
    {
      nome: "Corda Crua e Laranja",
      image: "https://raw.githubusercontent.com/idealcapoeirasolanea/images/main/crua_laranja-removebg-preview.png",
      requisitos: [
        "⚡ CONHECER E SER CAPAZ DE REALIZAR MOVIMENTOS BÁSICOS COMO GINGA, ATAQUES, DEFESA E ACROBÁTICA E\n" +
        " REPETI-LOS EM SEQUÊNCIA;",
        "⚡ CONHECER, NOMEAR E TOCAR OS INSTRUMENTOS;",
        "⚡ BÁSICO - MÚSICA, CANTAR, APLAUDIR E ACOMPANHAR;",
        "⚡ SER CAPAZ DE REPRESENTAR VALORES COMPORTAMENTAIS;",
        "⚡ Experiência de 2 - 3 anos."
      ],
      alt_name: "Corda Amarela",
    },
    {
      nome: "Corda Amarela e Laranja",
      image: "https://raw.githubusercontent.com/idealcapoeirasolanea/images/main/amarela_laranja-removebg-preview.png",
      requisitos: [
        "⚡ CONHECER E SER CAPAZ DE REALIZAR MOVIMENTOS BÁSICOS COMO GINGA, ATAQUES, DEFESA E ACROBÁTICA E\n" +
        " REPETI-LOS EM SEQUÊNCIA;",
        "⚡ CONHECER, NOMEAR E TOCAR OS INSTRUMENTOS;",
        "⚡ BÁSICO - MÚSICA, CANTAR, APLAUDIR E ACOMPANHAR;",
        "⚡ SER CAPAZ DE REPRESENTAR VALORES COMPORTAMENTAIS;",
        "⚡ Experiência de 3 - 4 anos."
      ],
      alt_name: "Corda Amarela e Laranja",
    },
    {
      nome: "Corda Laranja",
      image: "https://raw.githubusercontent.com/idealcapoeirasolanea/images/main/laranja-removebg-preview.png",
      requisitos: [
        "⚡ CONHECER E SER CAPAZ DE REALIZAR MOVIMENTOS BÁSICOS COMO GINGA, ATAQUES, DEFESA E ACROBÁTICA E\n" +
        " REPETI-LOS EM SEQUÊNCIA;",
        "⚡ CONHECER, NOMEAR E TOCAR OS INSTRUMENTOS;",
        "⚡ BÁSICO - MÚSICA, CANTAR, APLAUDIR E ACOMPANHAR;",
        "⚡ SER CAPAZ DE REPRESENTAR VALORES COMPORTAMENTAIS;",
        "⚡ INSTRUMENTOS DE DOMINAÇÃO",
        "⚡ Experiência de 4 - 5 anos."
      ],
      alt_name: "Corda Laranja",
    },
    {
      nome: "Corda Crua e Azul",
      image: "https://raw.githubusercontent.com/idealcapoeirasolanea/images/main/crua_azul-removebg-preview.png",
      requisitos: [
        "⚡ CONHECER E SER CAPAZ DE REALIZAR MOVIMENTOS BÁSICOS COMO GINGA, ATAQUES, DEFESA E ACROBÁTICA E\n" +
        " REPETI-LOS EM SEQUÊNCIA;",
        "⚡ CONHECER, NOMEAR E TOCAR OS INSTRUMENTOS;",
        "⚡ BÁSICO - MÚSICA, CANTAR, APLAUDIR E ACOMPANHAR;",
        "⚡ SER CAPAZ DE REPRESENTAR VALORES COMPORTAMENTAIS;",
        "⚡ INSTRUMENTOS DE DOMINAÇÃO",
        "⚡ Experiência de 5 - 6 anos."
      ],
      alt_name: "Corda Laranja",
    },
    {
      nome: "Corda Azul e Amarela",
      image: "https://raw.githubusercontent.com/idealcapoeirasolanea/images/main/amarelo_azul-removebg-preview.png",
      requisitos: [
        "⚡ CONHECER E SER CAPAZ DE REALIZAR MOVIMENTOS BÁSICOS COMO GINGA, ATAQUES, DEFESA E ACROBÁTICA E\n" +
        " REPETI-LOS EM SEQUÊNCIA;",
        "⚡ CONHECER, NOMEAR E TOCAR OS INSTRUMENTOS;",
        "⚡ BÁSICO - MÚSICA, CANTAR, APLAUDIR E ACOMPANHAR;",
        "⚡ SER CAPAZ DE REPRESENTAR VALORES COMPORTAMENTAIS;",
        "⚡ INSTRUMENTOS DE DOMINAÇÃO",
        "⚡ Experiência de 6 - 7 anos."
      ],
      alt_name: "Corda Laranja",
    },
    {
      nome: "Corda Laranja e Azul",
      image: "https://raw.githubusercontent.com/idealcapoeirasolanea/images/main/laranja_azul-removebg-preview.png",
      requisitos: [
        "⚡ CONHECER E SER CAPAZ DE REALIZAR MOVIMENTOS BÁSICOS COMO GINGA, ATAQUES, DEFESA E ACROBÁTICA E\n" +
        " REPETI-LOS EM SEQUÊNCIA;",
        "⚡ CONHECER, NOMEAR E TOCAR OS INSTRUMENTOS;",
        "⚡ BÁSICO - MÚSICA, CANTAR, APLAUDIR E ACOMPANHAR;",
        "⚡ SER CAPAZ DE REPRESENTAR VALORES COMPORTAMENTAIS;",
        "⚡ INSTRUMENTOS DE DOMINAÇÃO",
        "⚡ Experiência de 7 - 8 anos."
      ],
      alt_name: "Corda Laranja e Azul",
    },
    {
      nome: "Azul",
      image: "https://raw.githubusercontent.com/idealcapoeirasolanea/images/main/azul-removebg-preview.png",
      requisitos: [
        "⚡ CONHECER E SER CAPAZ DE REALIZAR MOVIMENTOS BÁSICOS COMO GINGA, ATAQUES, DEFESA E ACROBÁTICA E\n" +
        " REPETI-LOS EM SEQUÊNCIA;",
        "⚡ CONHECER, NOMEAR E TOCAR OS INSTRUMENTOS;",
        "⚡ BÁSICO - MÚSICA, CANTAR, APLAUDIR E ACOMPANHAR;",
        "⚡ SER CAPAZ DE REPRESENTAR VALORES COMPORTAMENTAIS;",
        "⚡ INSTRUMENTOS DE DOMINAÇÃO",
        "⚡ Experiência de 8 - 9 anos."
      ],
      alt_name: "Azul",
    },

  ],

};

const certifications = {
  certifications: [
    {
      title: "Google Cloud",
      subtitle: "Google Cloud Training",
      logo_path: "google_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1r0hYt8Pp0N0u_4Tg-poMF1Qv3LkoKVAP/view",
      alt_name: "MongoDB University",
      // color_code: "#2AAFED",
      color_code: "#2AAFED",
    },
    {
      title: "Hackathon",
      subtitle: "Backyard Hacks 2.0",
      logo_path: "hackathon1.png",
      // certificate_link:
      //   "https://drive.google.com/file/d/1Y-HT1flWDfeyfnfqVr3ubNgGIcnuUEYt/view?usp=sharing",
      alt_name: "hackathon",
      color_code: "#f47e2c",
    },
    {
      title: "Hackathon",
      subtitle: "HyperHacks",
      logo_path: "hackathon2.png",
      // certificate_link:
      //   "https://drive.google.com/file/d/1Y-HT1flWDfeyfnfqVr3ubNgGIcnuUEYt/view?usp=sharing",
      alt_name: "hackathon",
      color_code: "#E2405F",
    },
    // {
    //   title: "A300: Atlas Security",
    //   subtitle: "MongoDB University",
    //   logo_path: "mongo.png",
    //   certificate_link:
    //     "https://drive.google.com/file/d/12u_tkvhgB-K2TIm-RDdJOwYbQ9ccqiqA/view?usp=sharing",
    //   alt_name: "MongoDB University",
    //   // color_code: "#F6B808",
    //   color_code: "#47A048",
    // },
    {
      title: "Contributor's Hack",
      subtitle: "Hakin Codes",
      logo_path: "HakinCodes.jfif",
      certificate_link:
        "https://drive.google.com/file/d/1xvyy1M05lQN-s2VKw_Qvz6E7rPwrK2qm/view?usp=sharing",
      alt_name: "Opensource Event",
      color_code: "#fefd7b",
    },
    // {
    //   title: "MLH Local Hack Day: Build",
    //   subtitle: "Major League Hacking",
    //   logo_path: "mlh-logo.svg",
    //   certificate_link:
    //     "https://drive.google.com/file/d/1ws7g2Oepu76vDFir6SvR_emFAMSkB2ZQ/view?usp=sharing",
    //   alt_name: "Google",
    //   color_code: "#fe0037",
    // },
    {
      title: "Olympiad",
      subtitle: "Ramanujan Mathematics Olympiad",
      logo_path: "Olympiad.png",
      certificate_link:
        "https://drive.google.com/file/d/1SAKHjKisJIY3-FRZQGKLusdsGDusXAjX/view",
      alt_name: "Postman",
      // color_code: "#f36c3d",
      color_code: "#fffbf3",
    },
    {
      title: "Competitive Programming",
      subtitle: "Reply Challenges",
      logo_path: "Reply.jfif",
      certificate_link:
        "https://drive.google.com/file/d/1KamrXJPTrF3zfMuEerbSnFUjOkt-agKT/view",
      alt_name: "Reply",
      color_code: "#2AAFED",
    },
    {
      title: "Competitive Programming",
      subtitle: "Google Hash Code",
      logo_path: "google_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1sD6GS8f2Fh5MHMWlf5DhXoMhu4mykW-f/view",
      alt_name: "Reply",
      color_code: "#2AAFED",
    },
    {
      title: "Training",
      subtitle: "30 Days of Open Source",
      logo_path: "CFC.jfif",
      certificate_link:
        "https://drive.google.com/file/d/1SAKHjKisJIY3-FRZQGKLusdsGDusXAjX/view",
      alt_name: "Postman",
      // color_code: "#f36c3d",
      color_code: "#a60000",
    },
    {
      title: "Training",
      subtitle: "Git Learning",
      logo_path: "Progate.png",
      certificate_link:
        "https://drive.google.com/file/d/1sD6GS8f2Fh5MHMWlf5DhXoMhu4mykW-f/view",
      alt_name: "Reply",
      color_code: "#88e7ce",
    },
    // color_code: "#8C151599",
    // color_code: "#7A7A7A",
    // color_code: "#0C9D5899",
    // color_code: "#C5E2EE",
    // color_code: "#ffc475",
    // color_code: "#g",
    // color_code: "#ffbfae",
    // color_code: "#fffbf3",
    // color_code: "#b190b0",
  ],
};

// Experience Page
const experience = {
  title: "Ideal Capoeira Solânea",
  subtitle: "Qual o objetivo da capoeira em nossa cidade?",
  description:
    "O grupo Ideal Capoeria Solânea vem trazer no nosso município, para as pessoas, " +
    "oportunidade de crescimento físico e pscicológico com a proposta de agregar " +
    "valores comportamentais e fundamentais para o dia a dia do capoeira como pessoa. " +
    "O nosso grupo é supervisionado pelo mestre Hailton que atualmente realiza trabalhos na " +
    "Áustria e também pelo mundo. Como responsável de ministrar e desenvolver a capoeira em nossa " +
    "cidade temos o Graduado Marreta (Fábio Oliveira), capoeirista com mais de 15 anos de experiência " + 
    "ele vem trazer sabedoria e saúde com a capoeira.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Qual é origem da Capoeira?",
      experiences: [
        {
          referencia: "Remote",
          description: "Quanto à origem, várias são as hipóteses sobre a Capoeira, existindo duas fortes correntes: " +
          "uma afirma que a Capoeira teria vindo para o Brasil, trazida pelos escravos, e a outra considera a Capoeira " + 
          "como uma invenção dos escravos no Brasil. Porém, não existem documentos que comprovem estas hipóteses. " +
          "Infelizmente, o Conselheiro Ruy Barbosa, quando Ministro da Fazenda do Go- verno Deodoro da Fonseca, mandou " +
          "queimar toda documentação referente à escravidão negra no Brasil, achando que se tratava de uma mancha na história " +
          "do país que deveria ser apagada. A sua resolução foi de 15 de novembro de 1890. Ficamos assim, sem saber com " +
          "fidelidade quando vieram os primeiros escravos e de onde vieram. " + 
          "O documento mais antigo legalizando a importação de es cravos para o Brasil, inclusive indicando o local de " +
          "procedência, é o alvará de D. João III, de 29 de março de 1559, que permitia que fossem importados escravos de " +
          "São Tomé. Porém, um ponto de vista é quase unânime entre os historiadores, no que concerne à hipótese de terem " +
          "vindo de Angola os primeiros escravos, assim como sendo originária de lá a maior parte de negros importados. " +
          "Segundo Waldeloir Rêgo 25 , em seu livro Capoeira Angola: ",
          color: "#0071C5",
        },
        {
          referencia: "Remote",
          description: "O documento mais antigo legalizando a importação de es cravos para o Brasil, inclusive indicando o local de " +
          "procedência, é o alvará de D. João III, de 29 de março de 1559, que permitia que fossem importados escravos de " +
          "São Tomé. Porém, um ponto de vista é quase unânime entre os historiadores, no que concerne à hipótese de terem " +
          "vindo de Angola os primeiros escravos, assim como sendo originária de lá a maior parte de negros importados. " +
          "Segundo Waldeloir Rêgo 25 , em seu livro Capoeira Angola: ",
          color: "#0071C5",
        },
        {
          referencia: "Remote",
          description: "...tudo nos leva a crer que seja a Capoeira uma invenção dos africanos no Brasil, desenvolvida " +
          "por seus descendentes Afro-Brasileiros, tendo em vista uma série de fatores colhidos em docu- mentos escritos e " +
          "sobretudo no convívio e diálogos constantes com os capoeiristas atuais e antigos que ainda vivem na Bahia.",
          color: "#0071C5",
        },
        {
          referencia: "Remote",
          description: "Convém lembrar que vários pesquisadores que estiveram na África, principalmente em Angola, " +
          "jamais encontraram vestígio algum de uma luta parecida com a nossa Capoeira. Ainda para reforçar esta hipótese " +
          "do aparecimento da Capoeira no Brasil, não existem nomes de golpes nem de toques em língua africana, como por " +
          "exemplo no Candomblé. Uma indagação que pode ser feita é a seguinte: por que os africanos não preservaram a " +
          "linguagem da capoeira como fizeram com tantas outras manifestações vindas com eles da África? Tudo nos leva a crer " +
          "que a Capoeira se trate realmente de uma manifestação regional da Bahia.",
          color: "#0071C5",
        },
        
      ],
    },
    {
      title: "Para que server a Capoeira?",
      experiences: [
        {
          referencia: "Remote",
          description: "(EDUCAÇÃO) Como modalidade desportiva e " +
          "institucionalizada em 1972 pelo Conselho Nacional de Desportos, " +
          "ela mesma deverá ter um enfoque especial para competição, estabe" +
          "lecendo-se treinamentos físicos, técnicos e táticos.",
          color: "#0071C5",
        },
        {
          referencia: "Remote",
          description: "(LUTA) Representa a sua origem e sobrevivência " +
          "através dos tempos na sua forma natural como instrumento de defe" +
          "sa pessoal genuinamente brasileiro. Deverá ser ministrada com o " +
          "objetivo de Capoeira combate e de defesa.",
          color: "#0071C5",
        },
        {
          referencia: "Remote",
          description: "(ARTE) A arte se faz presente através da " +
          "música, ritmo, canto, instrumento, expressão corporal, criatividade " +
          "de movimentos, assim como um riquíssimo tema para as artes plásti" +
          "cas, literária e cênicas. Na dança, as aulas deverão ser dirigidas no " +
          "sentido de aproveitar os movimentos da capoeira, desenvolvendo " +
          "flexibilidade, agilidade, destreza, equilíbrio e coordenação em busca " +
          "da coreografia e satisfação pessoal.",
          color: "#0071C5",
        },
        {
          referencia: "Remote",
          description: "(FILOSOFIA) Muitos são os adeptos que " +
          "se engajam de corpo e alma, criando uma filosofia própria de vida, " +
          "tendo a capoeira como elemento símbolo, e até mesmo usando-a " +
          "para sua sobrevivência.",
          color: "#0071C5",
        },
      ],
    },
    {
      title: "O que é o Grupo Ideal Capoeira?",
      experiences: [
        {
          referencia: "Remote",
          description: "O Grupo Ideal Capoeira é uma associação que possui o reconhecimento no mundo inteiro. " +
          "A sede é na Europa (Áustria, Alemanha, Suiça, Liechtenstein e Espanha), presidida pelo mestre Hailton. " +
          "No Brasil, a escola Ideal Capoeira tem diversas representações em vários estados no nordeste e no sul. " +
          "Com experiência a mais de 20 anos, a escola Ideal Capoeira é especializada no trabalho infantil e juvenil, promovendo " +
          "crianças e jovens com todo o seu potencial criativo.",
          color: "#0071C5",
        },
      ],
    },
    
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projetos Sociais",
  description:
    "O Ideal Capoeira, seja no município de Solânea ou em qualquer lugar do mundo, vem com a proposta de socialização, " +
    "dessa forma fundindo educação, esporte, lazer, entre outras formas de conquistar a população para praticar essa linda arte.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Entre em Contato",
    profile_image_path: "",
    description:
      "Conheça nossos projetos, trienos e eventos, além disso, também, participe e contribua com esse trabalho maravilhoso.",
  },
  blogSection: {
    title: "Seja Ideal",
    subtitle:
      "Faça parte desse grupo unido, contribua para que possamos continuar evoluindo cada vez mais e representar nossa cidade "+
      "pelo mundo.",
    link: "https://medium.com/@vedanshvijay/",
    avatar_image_path: "blogs_image.svg",
  },
};

const projects = {
  data: [
    {
      id: "0",
      name: "Mind Space",
      url: "https://www.mindspace.cf/",
      description:
        "This is Blogging website where users can create blogs, follow and unfollow other users, get summarized blog reccomendation on their dashboard and have a personalised searching mechanism.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "Flask",
          iconifyClass: "cib-flask",
        },
      ],
    },
    {
      id: "1",
      name: "Youtube Downloader",
      url: "https://github.com/vvHacker007/Youtube-Downloader/",
      description:
        "A desktop GUI which can be used to download youtube videos and playlist with desired quality and type on desktop.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
      ],
    },
    {
      id: "2",
      name: "Tune In",
      url: "https://github.com/vvHacker007/Tune-In",
      description:
        "Tune in is a collaborative music playing system where multiple guests can join a room and enjoy the song being played. Guests can pause and vote to skip the current song.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
        {
          name: "Django",
          iconifyClass: "logos-django",
        },
      ],
    },
    {
      id: "3",
      name: "Event Scheduler",
      url: "https://github.com/vvHacker007/Event-Scheduler",
      description:
        "It is an all-purpose scheduler software. It is designed to monitor all the activities and give appropriate reminders for them.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "Flask",
          iconifyClass: "cib-flask",
        },
      ],
    },
    {
      id: "4",
      name: "Movie Reccomendation System",
      url: "https://github.com/vvHacker007/Movie-Recommendation-Systems",
      description:
        "Made three python kernels explaining and implementing the three different types of movie recommender systems.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "Jupyter Notebook",
          iconifyClass: "logos-jupyter",
        },
      ],
    },
    {
      id: "3",
      name: "Login Authenticator",
      url: "https://github.com/vvHacker007/Login-Authenticator",
      description: "Made a template for a Login Authenticator using Flask ",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "Flask",
          iconifyClass: "cib-flask",
        },
      ],
    },
    {
      id: "4",
      name: "Calculator",
      url: "https://github.com/vvHacker007/Calculator",
      description:
        "Made a GUI based Calculator. Also made an executable file for the project which can be downloaded and used by anyone on their personal computer.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
      ],
    },
    {
      id: "5",
      name: "Notepad",
      url: "https://github.com/vvHacker007/Notepad",
      description:
        "Made a GUI based Notepad. Also made an executable file for the project which can be downloaded and used by anyone on their personal computer.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
      ],
    },
    {
      id: "6",
      name: "Tetris",
      url: "https://github.com/vvHacker007/Tetris",
      description: "Made a GUI based arcade game Tetris using pygame.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
      ],
    },
    {
      id: "7",
      name: "Steganography",
      url: "https://github.com/vvHacker007/Steganography",
      description:
        "A CLI tool to conceal messages within a file, text, image, or video.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "OpenCV",
          iconifyClass: "logos-opencv",
        },
      ],
    },
    {
      id: "8",
      name: "Mini Paint",
      url: "https://github.com/vvHacker007/Mini-Paint",
      description: "GUI based Mini Paint Application.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
      ],
    },
    {
      id: "9",
      name: "Speedtest",
      url: "https://github.com/vvHacker007/Speed-test",
      description:
        "An internet speed testing application which can notify about the download speed, upload speed, and also the reaction time of the connection.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
      ],
    },
    {
      id: "10",
      name: "Cat Classifier",
      url: "https://github.com/vvHacker007/Cat-Classifier",
      description:
        "Binary Cat Classifier made by hard coding Neural Networks in Python without using libraries such as Tensorflow or keras.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "Jupyter Notebook",
          iconifyClass: "logos-jupyter",
        },
      ],
    },
    {
      id: "11",
      name: "Snake",
      url: "https://github.com/vvHacker007/Snake",
      description:
        "A snake game which covers all the basic features like score, high score and an automated speed increase simultaneously when the snake eats the food.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
      ],
    },
    {
      id: "12",
      name: "Score Predictor",
      url: "https://score-predictor-app.herokuapp.com/",
      description:
        "Predicts students score based on the number of hours the student puts in it.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "Flask",
          iconifyClass: "cib-flask",
        },
        {
          name: "Jupyter Notebook",
          iconifyClass: "logos-jupyter",
        },
      ],
    },
    {
      id: "13",
      name: "Blood Donation Predictor",
      url: "https://blood-donation-predictor-app.herokuapp.com/",
      description:
        "Predicts if one is ready to donate blood based on the user's blood donation history.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "Jupyter Notebook",
          iconifyClass: "logos-jupyter",
        },
      ],
    },
    {
      id: "14",
      name: "Credit-Card Default Predictor",
      url: "https://default-predictor-app.herokuapp.com/",
      description:
        "Predicts whether user's credit card would be defaulted or not based on the user's bank statements and history.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "Jupyter Notebook",
          iconifyClass: "logos-jupyter",
        },
      ],
    },
    {
      id: "15",
      name: "Portfolio Website",
      url: "https://vvhacker007.github.io/Portfolio/",
      description: "You are stalking it right now 😉",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
      ],
    },
  ],
};



export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  degreesChildren,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};
