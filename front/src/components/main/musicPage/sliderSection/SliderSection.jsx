import {
  Autocomplete,
  FormControl,
  FormControlLabel,
  FormLabel,
  Input,
  InputAdornment,
  OutlinedInput,
  Radio,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import MusicSlider from "../../../slider/MusicSlider";
import {
  AutoCompleteWrapper,
  StyledButton,
  StyledFormControl,
  StyledOrderListContainer,
  StyledSliderContainer,
  StyledSliderTitle,
  StyledTopSection,
  StyledAutocomplete,
} from "./SliderSection.style";
import { post } from "./../../../../api";
import { useSetRecoilState } from "recoil";
import { searchClickedState } from "../MusicAtom";

const SliderSection = ({ handleSetMusics }) => {
  const [energy, setEnergy] = useState([0.7, 1.0]);
  const [bpm, setBpm] = useState([110, 126]);
  const [danceability, setDanceability] = useState([0.62, 1.0]);
  const [year, setYear] = useState([2014, 2020]);
  const [order, setOrder] = useState("title");
  const [limit, setLimit] = useState(0);
  // 검색 버튼 클릭시 like 업데이트를 위한 상태
  const setSearchClicked = useSetRecoilState(searchClickedState);

  const options = ["제목순", "제목역순", "년도순", "년도역순", "무작위"];

  const handleOnChangeEnergy = (value) => {
    setEnergy(value);
  };

  const handleOnChangeBPM = (value) => {
    setBpm(value);
  };

  const handleOnChangeDanceability = (value) => {
    setDanceability(value);
  };

  const handleOnChangeYear = (value) => {
    setYear(value);
  };

  const handleOnChangeOrderBtn = (value) => {
    setOrder(value);
  };

  const handleOnChangeLimits = (e) => {
    if (isNaN(Number(e.target.value))) {
      setLimit(0);
      return;
    } else {
      setLimit(Number(e.target.value));
    }
  };

  const handloeOnClickSearch = async () => {
    try {
      const res = await post("musics/filtered", {
        orderby: order,
        filter: {
          Tempo: bpm,
          Danceability: danceability,
          Year: year,
          Energy: energy,
        },
        limit,
      });
      handleSetMusics(res.data.musics);
      setSearchClicked((prev) => !prev);
    } catch (e) {
      throw new Error(e);
    }
  };

  useEffect(() => {
    try {
      const postMusics = async () => {
        const res = await post("musics/filtered", {
          orderby: "title",
          filter: {
            Tempo: bpm,
            Danceability: danceability,
            Year: year,
            Energy: energy,
          },
          limit: 9,
        });
        handleSetMusics(res.data.musics);
      };
      postMusics();
    } catch (e) {
      throw new Error(e);
    }
  }, []);

  return (
    <StyledTopSection>
      <StyledSliderContainer>
        <StyledSliderTitle>Energy</StyledSliderTitle>
        <MusicSlider
          min={0.7}
          max={1.0}
          step={0.1}
          handleOnChange={handleOnChangeEnergy}
          value={energy}
        />
      </StyledSliderContainer>
      <StyledSliderContainer>
        <StyledSliderTitle>BPM</StyledSliderTitle>
        <MusicSlider
          min={110}
          max={126}
          step={1}
          handleOnChange={handleOnChangeBPM}
          value={bpm}
        />
      </StyledSliderContainer>
      <StyledSliderContainer>
        <StyledSliderTitle>Danceability</StyledSliderTitle>
        <MusicSlider
          min={0.62}
          max={1.0}
          step={0.01}
          handleOnChange={handleOnChangeDanceability}
          value={danceability}
        />
      </StyledSliderContainer>
      <StyledSliderContainer>
        <StyledSliderTitle>Year</StyledSliderTitle>
        <MusicSlider
          min={2014}
          max={2020}
          step={1}
          handleOnChange={handleOnChangeYear}
          value={year}
        />
      </StyledSliderContainer>
      <StyledFormControl>
        <FormLabel id="orderlist-radio-buttons-group-label">Order</FormLabel>
      </StyledFormControl>
      <AutoCompleteWrapper>
        <StyledAutocomplete
          disablePortal
          id="order-combo-box"
          sx={{ width: "12rem" }}
          onChange={(e, value) => {
            let result = "제목";
            if (value === "제목순") {
              result = "title";
            } else if (value === "제목역순") {
              result = "-title";
            } else if (value === "년도순") {
              result = "year";
            } else if (value === "년도역순") {
              result = "-year";
            } else {
              result = "random";
            }
            console.log(result);
            handleOnChangeOrderBtn(result);
          }}
          renderInput={(params) => (
            <TextField {...params} label="정렬순" variant="standard" />
          )}
          options={options}
          size="small"
        />
        <FormControl sx={{ m: 1, width: "6rem" }} variant="outlined">
          <Input
            id="outlined-adornment-limit"
            style={{ paddingLeft: "2rem" }}
            value={limit}
            color={"info"}
            onChange={handleOnChangeLimits}
            endAdornment={<InputAdornment position="start">곡</InputAdornment>}
          />
        </FormControl>
      </AutoCompleteWrapper>
      <StyledButton onClick={handloeOnClickSearch}>검색</StyledButton>
    </StyledTopSection>
  );
};

export default SliderSection;
