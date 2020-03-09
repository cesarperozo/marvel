import React from 'react';
import { StyledLoading, LoadingWrapper } from './styles';

const Loading = () => (
  <LoadingWrapper>
    <StyledLoading viewBox="0 0 50 50">
      <circle className="path" cx="25" cy="25" r="20" fill="none" strokeWidth="4" />
    </StyledLoading>
  </LoadingWrapper>
);

export default Loading;
