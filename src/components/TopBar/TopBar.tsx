import { FC, useCallback, useEffect, useRef, useState } from 'react';
import './TopBar.css';
import { TopBarProps, SearchResult, Planet } from "../../types/componentTypes";

const TopBar: FC<TopBarProps> = (props) => {
  const { changeValueFunction, changeLogStatus, setItems, setURLParams, page } = props;
  const [inputValue, setInputValue] = useState<string>(localStorage.getItem('request') || '');

  const changeValueFunctionRef = useRef(changeValueFunction);
  const changeLogStatusRef = useRef(changeLogStatus);
  const setItemsRef = useRef(setItems);

  useEffect(() => {
    changeValueFunctionRef.current = changeValueFunction;
    changeLogStatusRef.current = changeLogStatus;
    setItemsRef.current = setItems;
  }, [changeValueFunction, changeLogStatus, setItems]);

  const changeInputHandle = (event: React.FormEvent<HTMLInputElement>) => {
    setInputValue(event.currentTarget.value);
  };

  const buttonClickHandle = () => {
    localStorage.setItem('request', inputValue);
    if (page !== "1") {
      setURLParams({ page: "1" });
      return;
    }
    getData(page);
  };

  const getData = useCallback(async (page?: string) => {
    changeLogStatusRef.current(true);
    const pageNumber = page ? `&page=${page}` : "";
    const response: Response = await fetch(
      `https://swapi.dev/api/planets/?search=${inputValue}${pageNumber}`
    );
    const searchResponse: SearchResult = await response.json();
    const data: Planet[] = searchResponse.results;
    changeValueFunctionRef.current(data);
    setItemsRef.current(searchResponse.count);
    console.log(data);
    changeLogStatusRef.current(false);
  }, [inputValue]);

  useEffect(() => {
    getData(page);
  }, [getData, page]);

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={changeInputHandle}
      />
      <button onClick={buttonClickHandle}>Click</button>
    </div>
  );
}

export default TopBar;
