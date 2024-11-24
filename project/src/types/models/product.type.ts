

export type Product = {
  name: string; // 제품 이름 (varchar)
  link: string; // 제품 링크 (varchar)
  src: string; // 소스 URL 또는 파일 경로 (varchar)
  major_category: string; // 주요 카테고리 (varchar)
  middle_category: string; // 중간 카테고리 (varchar)
  price: number;
  piece: number;
  price_per_piece: number;
  nutritional: Nutritional; // 영양 정보 (json)
}

export type Nutritional = {
  calories: number;
  carbohydrate: number;
  protein: number;
  fat: number;
}
