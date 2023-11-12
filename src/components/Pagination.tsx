import React, { FC } from 'react';
import styled from 'styled-components';

interface PaginationProps {
  nextPage: () => void;
  prevPage: () => void;
  pages: number[];
  gotoPage: (page: number) => void;
  index: number;
  pageCount: number;
  pageSize: number;
}

const NumberContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  width: 2.25rem;
  height: 2.25rem;
  cursor: pointer;
`;
const PageNumber = styled.a`
  float: left;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  border: none;
  &:active {
    background: #000;
    border-radius: 0.5rem;
  }
`;
const LeftSpacer = styled.div`
  margin-right: 0.625rem;
`;
const RightSpacer = styled.div`
  margin-left: 0.625rem;
`;
const PaginationWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: end;
`;

const Number: FC<any> = ({ page, gotoPage, index, arrayIndex }) => {
  return (
    <NumberContainer onClick={() => gotoPage(page)}>
      <PageNumber
        style={{
          background: index === arrayIndex ? '#16236E' : '',
          borderRadius: index === arrayIndex ? '.5rem' : '',
          color: index === arrayIndex ? '#fff' : '',
        }}
      >
        {page + 1}
      </PageNumber>
    </NumberContainer>
  );
};

const PaginationArrows: FC<any> = ({ prevPage, nextPage, children }) => {
  return (
    <PaginationWrapper>
      {/* <ChevronLeftIcon width={20} onClick={() => prevPage()} /> */}
      <LeftSpacer />
      {children}
      <RightSpacer />
      {/* <ChevronRightIcon width={20} onClick={() => nextPage()} /> */}
    </PaginationWrapper>
  );
};

const FrontPagination: FC<any> = ({
  pages,
  prevPage,
  gotoPage,
  nextPage,
  index,
  pageCount,
}) => {
  return (
    <PaginationArrows nextPage={nextPage} prevPage={prevPage}>
      {pages.map((page: any, i: any) => {
        return (
          <>
            {page + 1 > 5 ? null : (
              <Number
                page={page}
                gotoPage={gotoPage}
                index={index}
                arrayIndex={i}
                key={i}
              />
            )}
            {page + 1 === 6 && <p style={{ margin: '0 0.625rem' }}>...</p>}
            {page + 1 === pageCount ? (
              <Number
                page={page}
                gotoPage={gotoPage}
                index={index}
                arrayIndex={i}
                key={i}
              />
            ) : null}
          </>
        );
      })}
    </PaginationArrows>
  );
};
const RearPagination: FC<any> = ({
  pages,
  prevPage,
  gotoPage,
  nextPage,
  index,
  pageCount,
}) => {
  return (
    <PaginationArrows nextPage={nextPage} prevPage={prevPage}>
      {pages.map((page: any, i: any) => {
        return (
          <>
            {page + 1 > 1 ? null : (
              <Number
                page={page}
                gotoPage={gotoPage}
                index={index}
                arrayIndex={i}
                key={i}
              />
            )}
            {page + 1 === 6 && <p style={{ margin: '0 0.625rem' }}>...</p>}
            {page + 1 > pageCount - 5 ? (
              <Number
                page={page}
                gotoPage={gotoPage}
                index={index}
                arrayIndex={i}
                key={i}
              />
            ) : null}
          </>
        );
      })}
    </PaginationArrows>
  );
};

const MidPagination: FC<any> = ({
  pages,
  prevPage,
  gotoPage,
  nextPage,
  index,
  pageCount,
}) => {
  const slicedPages = pages
    .map((page: any) => page)
    .slice(index - 2, index + 3);
  return (
    <PaginationArrows nextPage={nextPage} prevPage={prevPage}>
      {
        <>
          <Number
            page={pages[0]}
            gotoPage={gotoPage}
            index={index}
            arrayIndex={pages[0]}
          />
          <p style={{ margin: '0 0.625rem' }}>...</p>
          {slicedPages.map((page: any, i: any) => {
            return (
              <Number
                page={page}
                gotoPage={gotoPage}
                index={index}
                arrayIndex={page}
                key={i}
              />
            );
          })}
            <p style={{ margin: '0 0.625rem' }}>...</p>
          <Number
            page={pages.length - 1}
            gotoPage={gotoPage}
            index={index}
            arrayIndex={pages.length - 1}
          />
        </>
      }
    </PaginationArrows>
  );
};

const paginationLogic = (
  pages: any,
  prevPage: any,
  gotoPage: any,
  nextPage: any,
  index: any,
  pageCount: any
) => {
  if (index + 1 < 5) {
    return (
      <FrontPagination
        pages={pages}
        prevPage={prevPage}
        gotoPage={gotoPage}
        nextPage={nextPage}
        index={index}
        pageCount={pageCount}
      />
    );
  }
  if (index + 1 > 4 && index + 1 < pageCount - 3) {
    return (
      <MidPagination
        pages={pages}
        prevPage={prevPage}
        gotoPage={gotoPage}
        nextPage={nextPage}
        index={index}
        pageCount={pageCount}
      />
    );
  }
  if (index + 1 > pageCount - 4) {
    return (
      <RearPagination
        pages={pages}
        prevPage={prevPage}
        gotoPage={gotoPage}
        nextPage={nextPage}
        index={index}
        pageCount={pageCount}
      />
    );
  }
  return null;
};

export const Pagination = ({
  prevPage,
  nextPage,
  pages,
  gotoPage,
  index,
  pageCount,
  pageSize,
}: PaginationProps) => {
  return pageCount > 10 ? (
    paginationLogic(pages, prevPage, gotoPage, nextPage, index, pageCount)
  ) : (
    <PaginationArrows nextPage={nextPage} prevPage={prevPage}>
      {pages.map((page, i) => {
        return (
          <Number
            page={page}
            gotoPage={gotoPage}
            index={index}
            arrayIndex={i}
            key={i}
          />
        );
      })}
    </PaginationArrows>
  );
};
