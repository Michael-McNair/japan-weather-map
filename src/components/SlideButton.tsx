import styled from 'styled-components';
import { useState, useRef, useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';

const StyledButton = styled.button<{ width: number }>`
  border: #eee 2px solid;
  border-radius: 5px;
  background-color: transparent;
  color: #eee;
  position: relative;
  transition: 0.5s;
  &:hover {
    color: #181818;
  }
  .slide {
    position: absolute;
    left: -1px;
    top: -1px;
    bottom: -1px;
    right: ${(props) => props.width + 'px' || '60px'};
    background-color: #eee;
    transition: 0.5s;
    z-index: -1;
  }
  &:hover .slide {
    right: -1px;
    transition: 0.5s;
  }
  .dummy {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
`;

export default function SlideButton(props: {
  onClick: any;
  content: string;
  to: string;
}) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [buttonWidth, setButtonWidth] = useState<any | null>(null);

  useLayoutEffect(() => {
    if (buttonRef.current !== null) {
      setButtonWidth(buttonRef.current.offsetWidth);
    }
  }, []);

  return (
    <StyledButton onClick={props.onClick} ref={buttonRef} width={buttonWidth}>
      {props.content}
      <div className="slide"></div>
      <Link to={props.to} className="dummy"></Link>
    </StyledButton>
  );
}
