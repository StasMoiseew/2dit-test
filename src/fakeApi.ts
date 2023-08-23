import { Product, Task1Accordion } from "./models";

const fakeData = {
  task1response: `<p>Когда застройщик нарушает сроки сдачи по ДДУ, вы как дольщик имеете право требовать неустойку за просрочку, а также компенсацию убытков, вызванных этой просрочкой.</p>
  <p>Само собой, застройщику невыгодно добровольно выплачивать вам компенсацию. Когда дело доходит до суда, суд урезает сумму неустойки на основании ст. 333 ГК РФ. Это урезание практически неизбежно.</p>
  <p>Основная наша задача состоит в том, чтобы взыскать неустойку по ДДУ в максимальном размере, т.е. избежать сильного ее урезания. Вот что вы можете требовать от застройщика.</p>`,
  task1accordions: [
    {
      title: 'Выплата неустойки по ДДУ',
      description: 'Anim fugiat mollit sit non nostrud duis velit esse anim laborum. Ea dolore proident do exercitation ea aliquip eiusmod elit consectetur. Tempor non mollit amet eiusmod nulla nulla pariatur voluptate dolore quis voluptate. Proident cupidatat occaecat proident aliqua ea minim dolor dolore nostrud. Minim proident do dolore ea incididunt veniam deserunt. Dolore adipisicing consequat officia ullamco dolore id sit incididunt laboris enim mollit Lorem commodo. Non anim consequat mollit veniam proident occaecat ut dolor labore occaecat aute laborum.'
    },
    {
      title: 'Компенсация морального вреда',
      description: 'Fugiat aliquip adipisicing consectetur cillum in minim anim magna enim nulla tempor velit. Est aute id adipisicing non eu pariatur laboris labore do. Eu laboris ad nisi incididunt. Velit commodo proident sint elit consectetur aute occaecat duis ullamco. Exercitation in enim qui culpa cillum cillum et fugiat minim. Nisi occaecat ipsum Lorem consectetur. Lorem culpa culpa nostrud amet aute magna aliqua ut.'
    },
    {
      title: 'Штраф в размере 50%',
      description: 'Esse aliqua eu occaecat exercitation. Esse nisi dolor consectetur cupidatat tempor nulla irure. Velit cupidatat excepteur irure ullamco ullamco esse duis fugiat ea cillum deserunt fugiat nostrud. Ipsum cillum quis ullamco laborum. Ad pariatur proident ipsum laboris aute. Minim consequat sit irure laborum sit dolore fugiat aliquip.'
    },
    {
      title: 'Компенсация расходов по аренде жилья',
      description: 'Nulla et ipsum commodo eiusmod aute elit consequat cillum ullamco culpa elit ullamco do magna. In et aute non do sint velit quis nisi nulla sint ut. Fugiat ad in minim cupidatat. Laborum veniam adipisicing ut ipsum et duis nulla ipsum Lorem exercitation consequat nisi sit sint. Duis pariatur occaecat ea velit. Occaecat eu adipisicing Lorem minim Lorem irure. Nostrud in pariatur esse magna Lorem amet in Lorem proident officia laborum.'
    },
    {
      title: 'Компенсация убытков по ипотеке',
      description: 'Ad consectetur non culpa dolor. Lorem ut enim aliqua ex aute ipsum sunt commodo aliquip id do fugiat exercitation eiusmod. Et nostrud elit esse commodo sint consectetur ad labore sint id. Aliquip sint labore nisi excepteur dolore.'
    },
    {
      title: 'Возмещение иных расходов',
      description: 'Reprehenderit excepteur ipsum fugiat cupidatat sunt aliqua. Nostrud sunt anim aliquip cupidatat dolore consectetur deserunt consectetur sint nisi. Cillum aliqua enim laborum non. Commodo veniam deserunt excepteur aliqua ipsum velit enim in culpa irure tempor aliqua tempor.'
    },
  ],
  products: [
    {
      title: 'Театральное кресло Прайм',
      vendor: '789-2341',
      price: 6762,
      imageUrl: 'https://i.ibb.co/VC7vtmc/Rectangle-6.png',
      onStorage: true,
      isHit: true,
      category: 'Кресла театральные',
    },
    {
      title: 'Театральное кресло Прайм',
      vendor: '789-2341',
      price: 6762,
      imageUrl: 'https://i.ibb.co/VC7vtmc/Rectangle-6.png',
      onStorage: true,
      isSale: true,
      category: 'Кресла театральные',
    },
    {
      title: 'Театральное кресло Прайм',
      vendor: '789-2341',
      price: 6762,
      imageUrl: 'https://i.ibb.co/VC7vtmc/Rectangle-6.png',
      onStorage: true,
      isNew: true,
      category: 'Кресла театральные',
    },
    {
      title: 'Театральное кресло Прайм',
      vendor: '789-2341',
      price: 6762,
      imageUrl: 'https://i.ibb.co/VC7vtmc/Rectangle-6.png',
      category: 'Кресла театральные',
    },
    {
      title: 'Театральное кресло Прайм',
      vendor: '789-2341',
      price: 6762,
      imageUrl: 'https://i.ibb.co/VC7vtmc/Rectangle-6.png',
      category: 'Кресла театральные',
    },
    {
      title: 'Театральное кресло Прайм',
      vendor: '789-2341',
      price: 6762,
      imageUrl: 'https://i.ibb.co/VC7vtmc/Rectangle-6.png',
      category: 'Кресла театральные',
    },
  ] as Product[],
}

export const fakeApi = {
  task1request: async () => {
    const response = await fakeData.task1response;
    return response;
  },
  task1accordionsRequest: async (): Promise<Task1Accordion[]> => {
    const response = await fakeData.task1accordions;
    return response;
  },
  getProducts: async (): Promise<Product[]> => {
    const response = await fakeData.products;
    return response;
  }
}