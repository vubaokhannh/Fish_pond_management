
export interface ChartDataPoint {
  name: string;
  [key: string]: string | number;
}

export interface SeriesItem {
  name: string;
  color: string;
}

export interface ChartCardProps {
  title: string;
  data: ChartDataPoint[];
  options: string[];
  selected: string;
  onChange: (val: string) => void;
  series: SeriesItem[];
  dataKey: string;
}
