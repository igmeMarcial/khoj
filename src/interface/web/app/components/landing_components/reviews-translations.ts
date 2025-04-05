import type { Language } from '@plotwist_app/tmdb'

export type Review = {
  name: string
  description: string
  time: string
  rating: number
}

export const reviews: Record<Language, Review[]> = {
  'pt-BR': [
    {
      name: 'Cinephile123',
      description:
        '“Inception” oferece uma viagem alucinante através dos sonhos que vai deixar você questionando sua própria realidade.',
      time: '15m atrás',
      rating: 5,
    },
    {
      name: 'SeriAddict',
      description:
        '“Breaking Bad” redefine o gênero de crime com sua narrativa complexa e personagens inesquecíveis.',
      time: '12m atrás',
      rating: 5,
    },
    {
      name: 'AnimeLover',
      description:
        '“Attack on Titan” é uma série de anime que mistura ação épica com profundas questões existenciais.',
      time: '10m atrás',
      rating: 5,
    },
    {
      name: 'DramaQueen',
      description:
        'O dorama “Crash Landing on You” conta uma apaixonante história de amor que cruza fronteiras nacionais e culturais.',
      time: '8m atrás',
      rating: 4,
    },
    {
      name: 'HorrorFan',
      description:
        '“Hereditary” eleva o gênero de terror com uma atmosfera perturbadora e um terror psicológico intenso.',
      time: '6m atrás',
      rating: 5,
    },
  ],
  'en-US': [
    {
    name: 'JuanBusiness',
    description:
      'Amazing service! I got my questions answered in seconds and placed my order without waiting.',
    time: '15m ago',
    rating: 5,
  },
  {
    name: 'ProMerchant',
    description:
      'I was surprised by how fast they responded, even late at night. Very useful for my business.',
    time: '12m ago',
    rating: 5,
  },
  {
    name: 'HappyCustomer',
    description:
      'No matter the time, I always get an instant response. It saves me a lot of time.',
    time: '10m ago',
    rating: 5,
  },
  {
    name: 'FastShop',
    description:
      'No delays in support—I closed a sale in minutes without losing the customer.',
    time: '8m ago',
    rating: 4,
  },
  {
    name: 'SecureBuyer',
    description:
      'It gives me confidence knowing there is always someone to answer my questions instantly.',
    time: '6m ago',
    rating: 5,
  },
  ],
  'es-ES': [
    {
    name: 'JuanEmprende',
    description:
      'Increíble atención, pude resolver mis dudas en segundos y hacer mi pedido sin esperar.',
    time: 'Hace 15m',
    rating: 5,
  },
  {
    name: 'ComerciantePro',
    description:
      'Me sorprendió lo rápido que respondieron, incluso en la madrugada. Muy útil para mi negocio.',
    time: 'Hace 12m',
    rating: 5,
  },
  {
    name: 'ClienteFeliz',
    description:
      'No importa la hora, siempre obtengo una respuesta inmediata. Me ahorra mucho tiempo.',
    time: 'Hace 10m',
    rating: 5,
  },
  {
    name: 'TiendaExpress',
    description:
      'Atención sin demoras, pude concretar una venta en minutos sin perder al cliente.',
    time: 'Hace 8m',
    rating: 4,
  },
  {
    name: 'CompraSegura',
    description:
      'Me dio confianza saber que siempre hay alguien para responder mis dudas al instante.',
    time: 'Hace 6m',
    rating: 5,
  },
  ],
  'fr-FR': [
    {
      name: 'Cinephile123',
      description:
        '“Inception” offre un voyage hallucinant à travers les rêves qui vous fera remettre en question votre propre réalité.',
      time: 'Il y a 15 min',
      rating: 5,
    },
    {
      name: 'SeriAddict',
      description:
        '“Breaking Bad” redéfinit le genre du crime avec son récit complexe et ses personnages inoubliables.',
      time: 'Il y a 12 min',
      rating: 5,
    },
    {
      name: 'AnimeLover',
      description:
        '“Attack on Titan” est une série animée qui mêle action épique et questions existentielles profondes.',
      time: 'Il y a 10 min',
      rating: 5,
    },
    {
      name: 'DramaQueen',
      description:
        'Le dorama “Crash Landing on You” raconte une histoire d’amour captivante qui transcende les frontières nationales et culturelles.',
      time: 'Il y a 8 min',
      rating: 4,
    },
    {
      name: 'HorrorFan',
      description:
        '“Hereditary” élève le genre de l’horreur avec une atmosphère troublante et une terreur psychologique intense.',
      time: 'Il y a 6 min',
      rating: 5,
    },
  ],
  'de-DE': [
    {
      name: 'Cinephile123',
      description:
        '“Inception” bietet eine verblüffende Reise durch Träume, die Sie an Ihrer eigenen Realität zweifeln lassen wird.',
      time: 'Vor 15m',
      rating: 5,
    },
    {
      name: 'SeriAddict',
      description:
        '“Breaking Bad” definiert das Krimigenre mit seiner komplexen Erzählung und unvergesslichen Charakteren neu.',
      time: 'Vor 12m',
      rating: 5,
    },
    {
      name: 'AnimeLover',
      description:
        '“Attack on Titan” ist eine Anime-Serie, die epische Action mit tiefgründigen existenziellen Fragen verbindet.',
      time: 'Vor 10m',
      rating: 5,
    },
    {
      name: 'DramaQueen',
      description:
        'Das Drama “Crash Landing on You” erzählt eine fesselnde Liebesgeschichte, die nationale und kulturelle Grenzen überschreitet.',
      time: 'Vor 8m',
      rating: 4,
    },
    {
      name: 'HorrorFan',
      description:
        '“Hereditary” hebt das Horrorgenre mit einer verstörenden Atmosphäre und intensivem psychologischem Schrecken auf ein neues Niveau.',
      time: 'Vor 6m',
      rating: 5,
    },
  ],
  'it-IT': [
    {
      name: 'Cinephile123',
      description:
        '“Inception” offre un viaggio sconcertante attraverso i sogni che ti farà mettere in discussione la tua stessa realtà.',
      time: '15m fa',
      rating: 5,
    },
    {
      name: 'SeriAddict',
      description:
        '“Breaking Bad” ridefinisce il genere crime con una narrativa complessa e personaggi indimenticabili.',
      time: '12m fa',
      rating: 5,
    },
    {
      name: 'AnimeLover',
      description:
        '“Attack on Titan” è una serie anime che fonde azione epica con profonde questioni esistenziali.',
      time: '10m fa',
      rating: 5,
    },
    {
      name: 'DramaQueen',
      description:
        'Il dorama “Crash Landing on You” racconta una storia d’amore avvincente che supera i confini nazionali e culturali.',
      time: '8m fa',
      rating: 4,
    },
    {
      name: 'HorrorFan',
      description:
        '“Hereditary” eleva il genere horror con un’atmosfera inquietante e un intenso terrore psicologico.',
      time: '6m fa',
      rating: 5,
    },
  ],
  'ja-JP': [
    {
      name: 'Cinephile123',
      description:
        '「インセプション」は、夢の中を通じて現実を疑問視させる驚異的な旅を提供します。',
      time: '15分前',
      rating: 5,
    },
    {
      name: 'SeriAddict',
      description:
        '「ブレイキング・バッド」は、複雑な物語と忘れられないキャラクターで犯罪ジャンルを再定義します。',
      time: '12分前',
      rating: 5,
    },
    {
      name: 'AnimeLover',
      description:
        '「進撃の巨人」は、壮大なアクションと深い存在論的な問題を融合させたアニメシリーズです。',
      time: '10分前',
      rating: 5,
    },
    {
      name: 'DramaQueen',
      description:
        'ドラマ「愛の不時着」は、国境や文化を超えた情熱的なラブストーリーを語ります。',
      time: '8分前',
      rating: 4,
    },
    {
      name: 'HorrorFan',
      description:
        '「ヘレディタリー」は、不穏な雰囲気と強烈な心理的恐怖でホラーのジャンルを高めます。',
      time: '6分前',
      rating: 5,
    },
  ],
}
