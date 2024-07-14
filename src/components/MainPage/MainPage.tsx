import {FC, useState } from 'react';
import './MainPage.css';
import TopBar from '../TopBar/TopBar';
import Results from '../Results/Results';
import { Planet } from "../../types/componentTypes";
import FakeErrorButton from '../FakeErrorButton/FakeErrorButton';
import type { MainPageProps } from "../../types/componentTypes";
import { Outlet, useSearchParams } from 'react-router-dom';

const ROWS_PER_PAGE = 10;
const getTotalPageCount = (rowCount: number): number =>
  Math.ceil(rowCount / ROWS_PER_PAGE);

const MainPage: FC<MainPageProps> = (props) => {
  const [dataValue, setDataValue] = useState<Planet[]>([])
  const [items, setItems] = useState<number>(0);
  const [isLoading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams({ page: "1" });
  const {isPanelExpand, setPanelAppear} = {...props}
  const page = Number(searchParams.get("page"));
  const changeLoadStatus = (status: boolean) => {
    setLoading(status);
  };

  const prevPageClick = () => {
    setSearchParams({ page: String(page - 1) });
  };
  const nextPageClick = () => {
    setSearchParams({ page: String(page + 1) });
  };

  return (
    <div className="main-page-container">
      <div className={!isPanelExpand ? 'main-section-wide' : 'main-section-compact'}>
      <TopBar changeValueFunction={setDataValue} changeLogStatus={changeLoadStatus} setItems={setItems} setURLParams={setSearchParams} page={page.toString()}/>
      <FakeErrorButton/>
      <Results arrayOfPlanets={dataValue} onNextPageClick={nextPageClick} onPrevPageClick={prevPageClick} disable={{
          left: page === 1,
          right: page === getTotalPageCount(items)
        }}
        nav={{ current: page, total: getTotalPageCount(items) }} setPanelAppear={setPanelAppear} page={page.toString()} isLoad={isLoading}    />
      </div>
      <div className={!isPanelExpand ? 'side-section-close' : 'side-section-open'}>
          <Outlet/>
      </div>
     
    </div>
  );
}

export default MainPage;
