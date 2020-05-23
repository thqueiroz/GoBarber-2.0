import React from 'react';

import { Container } from './styles';

interface Tooltipprops {
  title: string;
  className?: string;
}

const Tooltip: React.FC<Tooltipprops> = ({
  title,
  className = '',
  children,
}) => {
  return (
    <Container className={className}>
      {children}
      <span>{title}</span>
    </Container>
  );
};

export default Tooltip;
