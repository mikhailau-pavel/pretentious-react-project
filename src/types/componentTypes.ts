import { ReactNode } from "react";
import { SetURLSearchParams } from "react-router-dom";

type MainPageState = {
  dataValue: Planet[];
};
type Planet = {
  name: string;
  diameter: string;
  url: string
};

type SearchResult = {
  count: number;
  next: null;
  previous: null;
  results: Planet[];
};

type TopBarProps = {
  changeValueFunction: (data: Planet[]) => void;
  changeLogStatus: (status: boolean) => void;
  setItems: React.Dispatch<React.SetStateAction<number>>;
  setURLParams: SetURLSearchParams;
  page?: string;
};

type TopBarState = {
  inputValue: string;
};

type ResultsProps = {
  arrayOfPlanets: Planet[];
  onNextPageClick: () => void;
  onPrevPageClick: () => void;
  disable: {
    left: boolean;
    right: boolean;
  };
  nav?: {
    current: number;
    total: number;
  };
  setPanelAppear: React.Dispatch<React.SetStateAction<boolean>>;
  page: string;
  isLoad: boolean
};

type ErrorBoundaryProps = {
    fallback: ReactNode;
    children: ReactNode
}
type PlanetCard = {
  setPanelAppear: React.Dispatch<React.SetStateAction<boolean>>
}

type MainPageProps = {
  isPanelExpand: boolean
  setPanelAppear: React.Dispatch<React.SetStateAction<boolean>>

}

type PersonPageProps = {
  setPanelAppear: React.Dispatch<React.SetStateAction<boolean>>;
};
export type {
  MainPageState,
  Planet,
  SearchResult,
  TopBarProps,
  TopBarState,
  ResultsProps,
  ErrorBoundaryProps,
  PlanetCard,
  MainPageProps,
  PersonPageProps
};
