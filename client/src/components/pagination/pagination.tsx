import React, { useEffect, useState } from 'react';
import { PaginationContainer } from '@/styles/components/pagination.style';
import { IoIosArrowBack } from 'react-icons/io';
import { IoIosArrowForward } from 'react-icons/io';
import { useAppDispatch, useAppSelector } from '@/hooks/hooks';
import { RootState } from '@/store/store';
import { setCurrentPage } from '@/store/slices/products.slice';

const Pagination: React.FC = () => {
  const currentPage = useAppSelector(
    (state: RootState) => state.products.pagination.currentPage
  );
  const totalPages = useAppSelector(
    (state: RootState) => state.products.pagination.totalPages
  );
  const dispatch = useAppDispatch();

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      const newPage = currentPage + 1;
      dispatch(setCurrentPage(newPage));
    }
  };
  const handlePrevPage = () => {
    if (currentPage > 1) {
      const newPage = currentPage - 1;
      dispatch(setCurrentPage(newPage));
    }
  };

  return (
    <PaginationContainer>
      <div
        className={currentPage === 1 ? 'prev disabled' : 'prev enabled'}
        onClick={() => handlePrevPage()}
      >
        <IoIosArrowBack />
      </div>
      <div className="text">
        Page{' '}
        <span>
          {currentPage} de {totalPages}
        </span>
      </div>
      <div
        className={currentPage >= totalPages ? 'next disabled' : 'next enabled'}
        onClick={() => handleNextPage()}
      >
        <IoIosArrowForward />
      </div>
    </PaginationContainer>
  );
};

export default Pagination;
