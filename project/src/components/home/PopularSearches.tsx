import styled from "styled-components";
import Tag from "../common/Tag";
import SelectDropDown from "../common/SelectDropDown";

const PopularSearches = () => {
    return (
        <Container>
            <Tag text="인기 검색어"/>
            <SelectDropDown/>
        </Container>
    );
};

export default PopularSearches;

const Container = styled.div`
    height:30px;
    display:flex;
    align-items:center;
`