import { Card, Typography } from 'antd';
import styled from 'styled-components';

export const LoginWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f0f2f5;
`;

export const LoginCard = styled(Card)`
  width: 600px;
  max-width: 650px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
`;

export const FormTitle = styled(Typography.Title)`
  text-align: center;
  font-size: 26px !important;
  margin-bottom: 24px;
  color: ${(props) => props.theme.colorPrimary} !important;
`;

export const FromLabel = styled.div`
  font-size: 12px;
  color: #71717a;
  font-weight: 500;
  margin-bottom: 4px;
`;
