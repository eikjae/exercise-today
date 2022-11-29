/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useContext } from "react";
import Music from "./Music";
import { StyledBottomSection } from "./MusicSection.style";
import { StyledBottomLayout } from "./MusicSection.style";
import * as Api from "../../../../api";
import { useSetRecoilState } from "recoil";
import { likedMusicsState } from "../MusicAtom";
import { UserStateContext } from "../../../../App";

const MusicSection = ({ musics }) => {
  const setLikedMusics = useSetRecoilState(likedMusicsState);
  const userState = useContext(UserStateContext);

  // 로그인 했을시, 좋아요 누른 음악들을 가져와 세팅함 (recoil 사용)
  useEffect(async () => {
    if (userState.user) {
      const res = await Api.get("like/music");
      const likedMusics = res.data;
      setLikedMusics([...likedMusics]);
    }
  }, []);

  return (
    <StyledBottomSection>
      <StyledBottomLayout>
        {musics.length > 0 &&
          musics.map((m, index) => <Music key={index} music={m} />)}
      </StyledBottomLayout>
    </StyledBottomSection>
  );
};

export default MusicSection;
