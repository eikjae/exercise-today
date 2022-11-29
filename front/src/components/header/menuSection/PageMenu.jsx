import { useState, useRef, useEffect, useContext } from "react";
import { UserStateContext } from "../../../App";
import {
  ClickAwayListener,
  MenuList,
  MenuItem,
  Popper,
  Grow,
  Paper,
} from "@mui/material";
import { ROUTE } from "../route";
import { MenuButton, StyledLink } from "./PageMenu.style";

export default function MyPageMenu({ isRecommendPage, isMyPage }) {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);
  const userState = useContext(UserStateContext);

  const handleToggle = () => {
    setOpen((prev) => !prev);
  };

  const handleClose = (e) => {
    if (anchorRef.current && anchorRef.current.contains(e.target)) {
      return;
    }
    setOpen(false);
  };

  function handleListKeyDown(e) {
    if (e.key === "Tab") {
      e.preventDefault();
      setOpen(false);
    } else if (e.key === "Escape") {
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);
  return (
    <>
      <MenuButton
        ref={anchorRef}
        aria-controls={open ? "composition-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
        onMouseLeave={handleClose}
      >
        {isRecommendPage && "추천페이지"}
        {isMyPage && "마이페이지"}
      </MenuButton>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        placement="bottom-start"
        transition
        disablePortal
        onMouseLeave={handleClose}
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom-start" ? "left top" : "left bottom",
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  autoFocusItem={open}
                  id="composition-menu"
                  aria-labelledby="composition-button"
                  onKeyDown={handleListKeyDown}
                  onMouseLeave={handleClose}
                >
                  {isRecommendPage && (
                    <div>
                      <MenuItem onClick={handleClose}>
                        <StyledLink to={ROUTE.FOOD.link}>음식</StyledLink>
                      </MenuItem>
                      <MenuItem onClick={handleClose}>
                        <StyledLink to={ROUTE.EXERCISE.link}>
                          부위별 운동
                        </StyledLink>
                      </MenuItem>
                      <MenuItem onClick={handleClose}>
                        <StyledLink to={ROUTE.MUSIC.link}>음악</StyledLink>
                      </MenuItem>
                    </div>
                  )}
                  {isMyPage && (
                    <div>
                      <MenuItem onClick={handleClose}>
                        <StyledLink
                          to={ROUTE.MYPAGE.link + `/${userState.user?.id}`}
                        >
                          북마크
                        </StyledLink>
                      </MenuItem>
                      <MenuItem onClick={handleClose}>
                        <StyledLink to={ROUTE.CALENDAR.link}>캘린더</StyledLink>
                      </MenuItem>
                    </div>
                  )}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  );
}
