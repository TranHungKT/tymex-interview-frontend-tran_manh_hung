import { MOCK_PRODUCTS } from './contants';
import { fetchProducts } from './products';

describe('fetchProducts', () => {
  beforeEach(() => {
    global.fetch = jest.fn();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
  test('should query and return successfully', async () => {
    const startAt = 0;
    const filter = {
      category: 'Electronics',
      tier: 'Premium',
      price: 'desc',
      searchText: 'phone',
      priceRange: [100, 500],
    };

    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve(MOCK_PRODUCTS),
    });

    const products = await fetchProducts(startAt, filter);
    expect(global.fetch).toBeCalledWith(
      'http://localhost:5005/products?_start=0&_limit=20&category_like=Electronics&tier_like=Premium&_sort=price,createdAt&_order=desc,desc&q=phone&price_gte=100&price_lte=500',
    );
    expect(products).toHaveLength(4);
  });

  test('should query and return errors', async () => {
    const startAt = 0;
    const filter = {
      tier: 'Basic',
    };
    global.fetch = jest.fn().mockResolvedValue({
      ok: false,
    });

    await expect(fetchProducts(startAt, filter)).rejects.toThrow('Network response was not ok');
  });
});
