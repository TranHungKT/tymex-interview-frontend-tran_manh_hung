import { MOCK_CATEGORIES, MOCK_PRODUCTS } from './contants';
import { fetchProductCategories, fetchProducts, getCategory, getTheme, getTier } from './products';

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
      category: 'Upper Body',
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
      'http://localhost:5005/products?_start=0&_limit=20&category_like=Upper Body&tier_like=Premium&_sort=price,createdAt&_order=desc,desc&q=phone&price_gte=100&price_lte=500',
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

describe('fetchProductCategories', () => {
  beforeEach(() => {
    global.fetch = jest.fn();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
  test('should query and return successfully', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve(MOCK_CATEGORIES),
    });

    const productCategories = await fetchProductCategories();
    expect(global.fetch).toBeCalledWith('/data/category-metadata.json');
    expect(productCategories).toHaveLength(10);
  });

  test('should query and return errors', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: false,
    });

    await expect(fetchProductCategories()).rejects.toThrow('Network response was not ok');
  });
});

describe('getCategory', () => {
  it('should return empty if using All', () => {
    const result = getCategory('All');
    expect(result).toEqual('');
  });

  it('should return empty if empty', () => {
    const result = getCategory('');
    expect(result).toEqual('');
  });

  it('should return value if there is value', () => {
    const result = getCategory('Upper Body');
    expect(result).toEqual('&category_like=Upper Body');
  });
});

describe('getTier', () => {
  it('should return empty if using All', () => {
    const result = getTier('All');
    expect(result).toEqual('');
  });

  it('should return empty if empty', () => {
    const result = getTier('');
    expect(result).toEqual('');
  });

  it('should return value if there is value', () => {
    const result = getTier('Basic');
    expect(result).toEqual('&tier_like=Basic');
  });
});

describe('getTheme', () => {
  it('should return empty if using All', () => {
    const result = getTheme('All');
    expect(result).toEqual('');
  });

  it('should return empty if empty', () => {
    const result = getTheme('');
    expect(result).toEqual('');
  });

  it('should return value if there is value', () => {
    const result = getTheme('Premium');
    expect(result).toEqual('&theme_like=Premium');
  });
});
