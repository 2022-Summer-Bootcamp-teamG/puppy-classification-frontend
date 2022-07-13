import { useMediaQuery } from 'react-responsive';

export const Mobile = ({ children }: { children: JSX.Element }): JSX.Element | null => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return isMobile ? children : null;
};

// mobile이 아닐 때만 출력되는 컴포넌트
export const Default = ({ children }: { children: JSX.Element }): JSX.Element | null => {
  const isNotMobile = useMediaQuery({ minWidth: 768 });
  return isNotMobile ? children : null;
};
