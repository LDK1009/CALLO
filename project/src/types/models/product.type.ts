export interface Product {
  id: number; // 제품 ID (int4)
  name: string; // 제품 이름 (varchar)
  link: string; // 제품 링크 (varchar)
  src: string; // 소스 URL 또는 파일 경로 (varchar)
  majorCategory: string; // 주요 카테고리 (varchar)
  middleCategory: string; // 중간 카테고리 (varchar)
  nutritional: Nutritional; // 영양 정보 (json)
}

export interface Nutritional {
  calories: number;
  carbohydrate: number;
  protein: number;
  fat: number;
}
