import styled from "styled-components";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/outline";


const Down = ({ className }) => <ChevronDownIcon className={className} />;
const Up = ({ className }) => <ChevronUpIcon className={className} />;

export const TableWrapper = styled.div`
  background: #fff;
  width: 100%;
  border-radius: 0.75rem;
  padding: 1rem;
  padding-bottom: 0;
  box-shadow:   0px 0px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  overflow-x: auto;
`;
export const TableStyle = styled.table`
  width: 100%;
  table-layout: fixed;
  border-collapse: collapse;
  th:nth-last-child(1) {
    width: 6.25rem;
  }
`;
export const TableH = styled.th`
  text-align: left;
  padding: 1rem;
  padding-top: 0;
`;
export const TableData = styled.td`
  align-items: center;
  display: flex;
  height: fit-content;
  padding: 1rem;
`;
export const TableButtonsWrapper = styled.div`
  display: flex;
  width: ${({ showFilter }) => (showFilter ? "22%" : "12%")};
  justify-content: ${({ showFilter }) =>
    showFilter ? "space-between" : "flex-end"};
`;
export const PaginationWrapper = styled.div`
  margin-top: 1.5rem;
`;
export const HeaderWrapper = styled.div`
  display: flex;
  &:hover h2,
  :hover svg {
    color: #fff;
  }
`;
export const DownArrow = styled(Down)`
  width: 20px;
  margin-left: 8px;
  color: #fff;
`;
export const UpArrow = styled(Up)`
  width: 20px;
  margin-left: 8px;
  color: #fff;
`;
export const InputsWrapper = styled.div`
  margin-bottom: 2rem;
  display: flex;
  justify-content: space-between;
`;
