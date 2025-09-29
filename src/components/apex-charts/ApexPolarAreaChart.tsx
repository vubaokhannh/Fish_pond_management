// ** MUI Imports
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";

// ** Third Party Imports
import { ApexOptions } from "apexcharts";

// ** Component Import
import ReactApexcharts from "react-apexcharts";

import { Text } from "@mantine/core";

type Props = {
  title?: string | React.ReactNode;
  subTitle?: string | React.ReactNode;
  categories: string[];
  series: ApexOptions["series"];
  columnColors?: string[];
  distributed?: boolean;
  height?: number;
  ylabels?: boolean;
  onClick?: (e: any, chart?: any, options?: any) => void;
  loading?: boolean;
  options?: ApexOptions;
  curve?:
    | "smooth"
    | "straight"
    | "stepline"
    | "linestep"
    | "monotoneCubic"
    | undefined;
  type?:
    | "area"
    | "line"
    | "bar"
    | "pie"
    | "donut"
    | "radialBar"
    | "scatter"
    | "bubble"
    | "heatmap"
    | "candlestick"
    | "boxPlot"
    | "radar"
    | "polarArea"
    | "rangeBar"
    | "rangeArea"
    | "treemap"
    | undefined;
};

const ApexPolarAreaChart = (props: Props) => {
  const {
    title = "",
    subTitle,
    categories,
    series,
    columnColors,
    curve,
    height = 300,
  } = props;
  // ** States

  const options: ApexOptions = {
    chart: {
      height: "100%",
      type: "polarArea",
      dropShadow: {
        enabled: true,
        color: "#000",
        top: 18,
        left: 7,
        blur: 10,
        opacity: 0.2,
      },
      toolbar: {
        show: false,
      },
    },
    colors: columnColors ? columnColors : undefined,
    dataLabels: {
      enabled: true,
    },
    stroke: {
      curve: curve || "smooth",
    },
    grid: {
      borderColor: "#e7e7e7",
      row: {
        colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
        opacity: 0.5,
      },
    },
    markers: {
      size: 1,
    },
    xaxis: {
      categories: categories,
    },
    legend: {
      show: true,
      showForSingleSeries: true,
      showForNullSeries: true,
      showForZeroSeries: true,
      horizontalAlign: "left",
      itemMargin: {
        horizontal: 15,
        vertical: 0,
      },
    },
  };

  return (
    <Card>
      <CardHeader
        title={<Text size={"md"}>{title}</Text>}
        titleTypographyProps={{ variant: "h6" }}
        subheader={<Text size={"sm"}>{subTitle}</Text>}
        subheaderTypographyProps={{
          variant: "caption",
          sx: { color: "text.disabled" },
        }}
        sx={{
          flexDirection: ["column", "row"],
          alignItems: ["flex-start", "center"],
          "& .MuiCardHeader-action": { mb: 0 },
          "& .MuiCardHeader-content": { mb: [2, 0] },
        }}
      />
      <CardContent>
        <ReactApexcharts
          type={"polarArea"}
          options={props?.options ? { ...options, ...props.options } : options}
          series={series}
          height={height ? height : 500}
        />
      </CardContent>
    </Card>
  );
};

export default ApexPolarAreaChart;
