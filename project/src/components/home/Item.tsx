import { Product } from "@/types/store/product.type";
import styled from "styled-components";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { checkUserSession } from "@/services/auth/checkUserSession";

export default function Item({ data }: { data: Product }) {
  const { name, link, src, major_category, middle_category, price, piece, price_per_piece, nutritional } = data;
  const { calories, carbohydrate, protein, fat } = nutritional;

  async function addCart() {
    const isLogin = await checkUserSession();

    if (isLogin) {
      console.log("장바구니에 담겼습니다!");
    } else {
      console.log("로그인 후 이용가능합니다!");
    }
  }

  return (
    <Card>
      <ScrollContainer>
        {/* Left Page */}
        <Page>
          <ImageContainer>
            <StyledImage src={src} alt={name} />
          </ImageContainer>
          <Title>{name}</Title>
          <Category>{major_category}</Category>
          <PriceContainer>
            <div>
              <Price>{price}원</Price>
              <PricePerUnit>{price_per_piece}원/개</PricePerUnit>
            </div>
            <ShoppingCartIconContaienr onClick={addCart}>
              <ShoppingCartIcon />
            </ShoppingCartIconContaienr>
          </PriceContainer>
        </Page>

        {/* Right Page */}
        <Page>
          <NutritionTitle>영양 성분</NutritionTitle>
          <NutritionItem>
            <span>칼로리</span>
            <span>{calories} kcal</span>
          </NutritionItem>
          <NutritionItem>
            <span>단백질</span>
            <span>{protein}g</span>
          </NutritionItem>
          <NutritionItem>
            <span>탄수화물</span>
            <span>{carbohydrate}g</span>
          </NutritionItem>
          <NutritionItem>
            <span>지방</span>
            <span>{fat}g</span>
          </NutritionItem>
        </Page>
      </ScrollContainer>
    </Card>
  );
}

const Card = styled.div`
  width: 200px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;
`;

const ScrollContainer = styled.div`
  display: flex;
  scroll-snap-type: x mandatory;
  overflow-x: auto;
  /* 스크롤바 제거 */
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE/Edge */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari */
  }
`;

const Page = styled.div`
  width: 200px;
  /* width: 100%; */
  scroll-snap-align: start;
  flex-shrink: 0;
  padding: 20px;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 12rem;
  margin-bottom: 1rem;
`;

const StyledImage = styled.img`
  width: 100%;
  border-radius: 0.5rem;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 0.25rem;
`;

const Category = styled.p`
  font-size: 0.875rem;
  color: #6b7280;
  margin-bottom: 1rem;
`;

const PriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Price = styled.p`
  font-size: 1.125rem;
  font-weight: 600;
`;

const PricePerUnit = styled.p`
  font-size: 0.875rem;
  color: #6b7280;
`;

const AddToCartButton = styled.button`
  background-color: #3b82f6;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  font-weight: 500;
`;

const NutritionTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

const NutritionItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
`;

const ShoppingCartIconContaienr = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  border: 1px solid black;
`;
