import {
  FormControl,
  FormControlLabel,
  formHelperTextClasses,
  FormLabel,
  InputAdornment,
  OutlinedInput,
  Radio,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import MusicSlider from "../../../slider/MusicSlider";
import {
  StyledButton,
  StyledFormControl,
  StyledOrderListContainer,
  StyledSliderContainer,
  StyledSliderTitle,
  StyledTopSection,
} from "./SliderSection.style";
import { post, get } from "./../../../../api";

const SliderSection = ({ handleSetMusics }) => {
  const [energy, setEnergy] = useState([0.7, 1.0]);
  const [bpm, setBpm] = useState([110, 126]);
  const [danceability, setDanceability] = useState([0.62, 1.0]);
  const [year, setYear] = useState([2014, 2020]);
  const [order, setOrder] = useState("title");
  const [limit, setLimit] = useState(0);

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

  const handleOnChangeOrderBtn = (e) => {
    setOrder(e.target.value);
  };

  const handleOnChangeLimits = (e) => {
    if (isNaN(Number(e.target.value))) {
      alert("숫자만 입력해주세여!");
      setLimit(0);
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
            Tempo: [110, 126],
            Danceability: [0.62, 1.0],
            Year: [2014, 2020],
            Energy: [0.7, 1.0],
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
        <StyledOrderListContainer
          aria-labelledby="orderlist-radio-buttons-group-label"
          defaultValue="title"
          name="radio-buttons-group"
          onChange={handleOnChangeOrderBtn}
        >
          <FormControlLabel value="title" control={<Radio />} label="제목순" />
          <FormControlLabel
            value="-title"
            control={<Radio />}
            label="제목역순"
          />
          <FormControlLabel value="year" control={<Radio />} label="년도순" />
          <FormControlLabel
            value="-year"
            control={<Radio />}
            label="년도역순"
          />
          <FormControlLabel value="random" control={<Radio />} label="무작위" />
        </StyledOrderListContainer>
      </StyledFormControl>
      <FormControl sx={{ m: 1, width: "10rem" }} variant="outlined">
        <OutlinedInput
          id="outlined-adornment-limit"
          style={{ paddingLeft: "3rem" }}
          value={limit}
          onChange={handleOnChangeLimits}
          endAdornment={<InputAdornment position="start">곡</InputAdornment>}
        />
      </FormControl>
      <StyledButton onClick={handloeOnClickSearch}>검색</StyledButton>
    </StyledTopSection>
  );
};

export default SliderSection;
