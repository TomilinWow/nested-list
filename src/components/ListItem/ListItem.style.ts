import styled from 'styled-components';

export const StyledListItem = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0;
`;

export const AddButton = styled.button`
  width: 100px;
  border-radius: 4px;
  border: none;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  padding: 5px 10px;
  cursor: pointer;
  height: 25px;
  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`;

export const RemoveButton = styled.button`
  background-color: ${({ theme }) => theme.colors.danger};
  color: white;
  border-radius: 5px;
  padding: 5px 10px;  
  border: none;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors.secondaryDanger};
  }
`;

export const StyledInput = styled.input`
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: 5px;
  padding: 8px;
  margin: 10px 0;
  font-size: 14px;
  width: 200px;
  height: 25px;

  transition: border-color 0.3s, box-shadow 0.3s;

  &:focus {
    border-color: ${({ theme }) => theme.colors.secondary};
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  }

  &:hover {
    border-color: ${({ theme }) => theme.colors.secondary};
  }
`;
