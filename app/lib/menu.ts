import menuDataJson from "../data/menu_v2.json";

export type MenuItem = {
  name: string;
  desc?: string;
  price: string;
  image?: string;
  longDesc?: string;
};

export type MenuSection = {
  title: string;
  items: MenuItem[];
};

export type MenuSubcategory = {
  name: string;
  image?: string;
  items?: MenuItem[];
  sections?: MenuSection[];
};

export type MenuCategoryData = {
  category: string;
  slug: string;
  subcategories?: MenuSubcategory[];
  items?: MenuItem[];
};

type SearchParamsValue = string | string[] | undefined;

const menuData = menuDataJson as MenuCategoryData[];

function normalizeParam(value: string) {
  return value.trim().toLocaleLowerCase("sr-Latn-RS");
}

function normalizeLegacyCategory(value: string) {
  return normalizeParam(value)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

export function getMenuCategories() {
  return menuData.map(({ category, slug }) => ({
    label: category,
    slug,
  }));
}

export function resolveMenuCategory(catParam: SearchParamsValue) {
  const rawParam = Array.isArray(catParam) ? catParam[0] : catParam;
  const fallbackCategory = menuData[0];

  if (!rawParam) {
    return {
      categories: getMenuCategories(),
      activeSlug: fallbackCategory.slug,
      activeData: fallbackCategory,
    };
  }

  const normalizedParam = normalizeParam(rawParam);
  const normalizedLegacyParam = normalizeLegacyCategory(rawParam);

  const matchedCategory =
    menuData.find((category) => normalizeParam(category.slug) === normalizedParam) ||
    menuData.find(
      (category) =>
        normalizeLegacyCategory(category.category) === normalizedLegacyParam
    ) ||
    fallbackCategory;

  return {
    categories: getMenuCategories(),
    activeSlug: matchedCategory.slug,
    activeData: matchedCategory,
  };
}
