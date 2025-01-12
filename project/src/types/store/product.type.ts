export type ProductState = {
  products: ProductType[] | null;
  popularProducts: ProductType[] | null;
  majorCategory: string;
  middleCategory: string;
  searchString : string;
  setProducts: (products: ProductType[] | null) => void;
  setPopularProducts: (products: ProductType[] | null) => void;
  setMajorCategory: (majorCategory: string) => void;
  setMiddleCategory: (middleCategory: string) => void;
  setSearchString: (searchString: string) => void;
};

export type ProductType = {
  id?: number;
  created_at?: Date;
  name: string; // 제품 이름 (varchar)
  link: string; // 제품 링크 (varchar)
  src: string; // 소스 URL 또는 파일 경로 (varchar)
  major_category?: string; // 주요 카테고리 (varchar)
  middle_category?: string; // 중간 카테고리 (varchar)
  price: number;
  piece?: number;
  price_per_piece: number;
  view?:number;
  nutritional: Nutritional; // 영양 정보 (json)
};

export type Nutritional = {
  [key: string]: number;
  calories: number;
  carbohydrate: number;
  protein: number;
  fat: number;
};
