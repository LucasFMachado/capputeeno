const faker = require('faker')

const TOTAL_PAGES = 5

const baseProducts = [
  {
    name: 'Rustic ceramic mug',
    description: faker.lorem.paragraph(),
    image_url:
      'https://storage.googleapis.com/xesque-dev/challenge-images/caneca-06.jpg',
    category: 'mugs',
  },
  {
    name: 'Not today t-shirt',
    description: faker.lorem.paragraph(),
    image_url:
      'https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-05.jpg',
    category: 't-shirts',
  },
  {
    name: 'Black ring mug',
    description: faker.lorem.paragraph(),
    image_url:
      'https://storage.googleapis.com/xesque-dev/challenge-images/caneca-04.jpg',
    category: 'mugs',
  },
  {
    name: 'Broken saints t-shirt',
    description: faker.lorem.paragraph(),
    image_url:
      'https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-03.jpg',
    category: 't-shirts',
  },
  {
    name: 'Outcast t-shirt',
    description: faker.lorem.paragraph(),
    image_url:
      'https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-06.jpg',
    category: 't-shirts',
  },
  {
    name: 'The grounds mug',
    description: faker.lorem.paragraph(),
    image_url:
      'https://storage.googleapis.com/xesque-dev/challenge-images/caneca-05.jpg',
    category: 'mugs',
  },
  {
    name: 'Evening t-shirt',
    description: faker.lorem.paragraph(),
    image_url:
      'https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-02.jpg',
    category: 't-shirts',
  },
  {
    name: 'Matte black mug',
    description: faker.lorem.paragraph(),
    image_url:
      'https://storage.googleapis.com/xesque-dev/challenge-images/caneca-01.jpg',
    category: 'mugs',
  },
  {
    name: 'Never settle mug',
    description: faker.lorem.paragraph(),
    image_url:
      'https://storage.googleapis.com/xesque-dev/challenge-images/caneca-03.jpg',
    category: 'mugs',
  },
  {
    name: 'Dreamer t-shirt',
    description: faker.lorem.paragraph(),
    image_url:
      'https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-01.jpg',
    category: 't-shirts',
  },
  {
    name: 'Decaf! P&Co mug',
    description: faker.lorem.paragraph(),
    image_url:
      'https://storage.googleapis.com/xesque-dev/challenge-images/caneca-02.jpg',
    category: 'mugs',
  },
  {
    name: 'Ramones t-shirt',
    description: faker.lorem.paragraph(),
    image_url:
      'https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-04.jpg',
    category: 't-shirts',
  },
]

const allProducts = new Array(TOTAL_PAGES).fill(1).reduce(acc => {
  const products = baseProducts
    .map(product => ({
      ...product,
      id: faker.datatype.uuid(),
      price_in_cents: faker.datatype.number({
        min: 1500,
        max: 8000,
      }),
      sales: faker.datatype.number(40),
      created_at: faker.date.past(),
    }))
    .sort(() => 0.5 - Math.random())

  return [...acc, ...products]
}, [])

module.exports = {
  products: allProducts,
}
