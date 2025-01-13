import { supabase } from "../../lib/supabaseClient";

// patch
export const patchSearchKeyword = async (searchString: string) => {
  const { data, error } = await supabase.from("search_keywords").select().eq("search_keyword", searchString);

  console.log(data);
  // 이미 해당 키워드가 존재한다면
  if (data && data.length > 0) {
    const currentKeywordCount = data[0].count; // 현재 카운트
    const nextKeywordCount = currentKeywordCount + 1; // 업데이트할 카운트
    await supabase.from("search_keywords").update({ count: nextKeywordCount }).eq("search_keyword", searchString); // 카운트 업데이트
  } else {
    await supabase.from("search_keywords").insert({ search_keyword: searchString, count: 1 }); // 키워드 추가
  }

  return error;
};
