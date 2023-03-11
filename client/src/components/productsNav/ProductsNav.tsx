import {
  FilterSelect,
  NavContainer,
  ProductsFilter,
  ProductsMenu,
  ProductsSort
} from '@/styles/components/productsNav.style';
import React, { useState } from 'react';
import Pagination from '../pagination';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { Categories } from '@/types/types';
import { useAppDispatch } from '@/hooks/hooks';
import { filterProducts } from '@/store/slices/products.slice';

const filters: Categories[] = [
  'All Products',
  'Audio',
  'Cameras',
  'Drones',
  'Gaming',
  'Laptops',
  'Monitors & TV',
  'PC Accessories',
  'Phone Accessories',
  'Phones',
  'Smart Home',
  'Tablets & E-readers'
];

const ProductsNav: React.FC = () => {
  const dispatch = useAppDispatch();
  const [filterOpen, setFilterOpen] = useState<boolean>(false);
  const [sortRecent, setSortRecent] = useState<boolean>(false);
  const [sortLowest, setSortLowest] = useState<boolean>(false);
  const [sortHighest, setSortHighest] = useState<boolean>(false);

  const handleOpenFilter = () => {
    setFilterOpen(!filterOpen);
  };

  const handleFilter = (filterBy: Categories) => {
    dispatch(filterProducts(filterBy));
    setFilterOpen(false);
  };
  const handleSortRecent = () => {
    setSortRecent(!sortRecent);
    if (sortRecent === false) {
      setSortLowest(false);
      setSortHighest(false);
    }
  };
  const handleSortLowest = () => {
    setSortLowest(!sortLowest);
    if (sortLowest === false) {
      setSortRecent(false);
      setSortHighest(false);
    }
  };
  const handleSortHighest = () => {
    setSortHighest(!sortHighest);
    if (sortHighest === false) {
      setSortRecent(false);
      setSortLowest(false);
    }
  };
  return (
    <NavContainer>
      <ProductsMenu>
        <ProductsFilter>
          <p>Filter by:</p>
          <FilterSelect>
            <div className="select-btn" onClick={() => handleOpenFilter()}>
              <span className="btn-text">All Products</span>
              <i>
                {filterOpen ? (
                  <IoIosArrowUp style={{ verticalAlign: 'middle' }} />
                ) : (
                  <IoIosArrowDown style={{ verticalAlign: 'middle' }} />
                )}
              </i>
            </div>
            <ul className={filterOpen ? 'options' : 'options close'}>
              {filters.map((filter) => (
                <li className="option" onClick={() => handleFilter(filter)}>
                  {filter}
                </li>
              ))}
            </ul>
          </FilterSelect>
        </ProductsFilter>

        <div className="bar" />

        <ProductsSort>
          <p>Sort by:</p>
          <div className="sort-buttons">
            <button
              className={sortRecent ? 'selected' : 'not-selected'}
              onClick={() => handleSortRecent()}
            >
              <span>Most Recent</span>
            </button>
            <button
              className={sortLowest ? 'selected' : 'not-selected'}
              onClick={() => handleSortLowest()}
            >
              <span>Lowest Price</span>
            </button>
            <button
              className={sortHighest ? 'selected' : 'not-selected'}
              onClick={() => handleSortHighest()}
            >
              <span>Highest Price</span>
            </button>
          </div>
        </ProductsSort>
      </ProductsMenu>
      <div className="pager">
        <Pagination />
      </div>
    </NavContainer>
  );
};

export default ProductsNav;
