export interface LossDataPoint {
  region: string;
  ponds: string;
  area: string;
  lossRate: string;
}

export interface LineChartPoint {
  name: string;
  value: number;
}

export interface RadialChartPoint {
  name: string;
  value: number;
  color: string;
}
