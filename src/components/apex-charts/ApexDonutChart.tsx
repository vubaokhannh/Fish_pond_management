// ** MUI Imports
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";

// ** Third Party Imports
import { ApexOptions } from "apexcharts";
import { useTheme } from "@mui/material";
// ** Component Import
import ReactApexcharts from "react-apexcharts";


type Props = {
  title: string;
  subTitle?: string;
  totalLabel?: string;
  totalShow?: boolean;
  labels: string[];
  series: number[];
  height?: number;
  donutSize?: string;
  donutColors?: string[];
  loading?: boolean;
};
const ApexDonutChart = ({
  title,
  subTitle,
  totalLabel,
  totalShow,
  labels,
  series,
  height,
  donutColors,
  loading = false,
  donutSize,
}: Props) => {
  const theme = useTheme();
  const options: ApexOptions = {
    stroke: {
      width: 5,
      colors: [theme.palette.background.paper],
      curve: "smooth",
    },
    tooltip: {
      y: {
        formatter: (val: number) => {
          return `${parseFloat(`${val}`)}`;
        },
      },
    },
    states: {
      hover: {
        filter: { type: "none" },
      },
      active: {
        filter: { type: "none" },
      },
    },

    noData: {
      text: loading
        ? "Đang thống kê..."
        : "Không lấy được dữ liệu cần thống kê!",
      align: "center",
      verticalAlign: "middle",
      offsetX: 0,
      offsetY: 0,
      style: {
        color: "#000000",
        fontSize: "14px",
        fontFamily: "Helvetica",
      },
    },
    labels: labels,
    markers: {
      size: 1,
    },
    colors: donutColors ? donutColors : undefined,
    dataLabels: {
      enabled: true,
      textAnchor: "middle",
      distributed: false,
      offsetX: 0,
      offsetY: 0,
      style: {
        fontSize: "12px",
      },
      formatter(val: string) {
        return `${Number(val).toFixed(2)}%`;
      },
    },
    plotOptions: {
      pie: {
        donut: {
          size: donutSize || "0%",
          labels: {
            show: totalShow,
            name: {
              fontSize: "14px",
            },
            value: {
              fontSize: "1rem",
              formatter(val: string) {
                return `${parseInt(val, 10)}`;
              },
            },
            total: {
              show: totalShow,
              fontSize: "1.5rem",
              color: "black",
              label: totalLabel || "",
              formatter(v) {
                return (
                  v?.config?.series?.reduce(
                    (partialSum: number, num: number) => partialSum + num,
                    0
                  ) + ""
                );
              },
            },
          },
        },
      },
    },
    legend: {
      show: true,
      showForSingleSeries: true,
      horizontalAlign: "left",
      itemMargin: {
        horizontal: 0,
        vertical: 0,
      },
    },
    responsive: [
      {
        breakpoint: 992,
        options: {
          chart: {
            height: 380,
          },
          legend: {
            position: "bottom",
          },
        },
      },
      {
        breakpoint: 576,
        options: {
          chart: {
            height: 320,
          },
          plotOptions: {
            pie: {
              donut: {
                labels: {
                  show: true,
                  name: {
                    fontSize: "1.5rem",
                  },
                  value: {
                    fontSize: "1rem",
                  },
                  total: {
                    fontSize: "1.5rem",
                  },
                },
              },
            },
          },
        },
      },
    ],
  };

  return (
    <Card>
      <CardHeader
        title={title}
        titleTypographyProps={{ variant: "h6" }}
        subheader={subTitle}
        subheaderTypographyProps={{
          variant: "caption",
          sx: { color: "text.disabled" },
        }}
      />
      <CardContent
        sx={{
          "& .apexcharts-canvas .apexcharts-pie .apexcharts-datalabel-label, & .apexcharts-canvas .apexcharts-pie .apexcharts-datalabel-value":
            { fontSize: "1.2rem" },
        }}
      >
        <ReactApexcharts
          options={options}
          series={series}
          type={"donut"}
          height={height ? height : 300}
        />
      </CardContent>
    </Card>
  );
};

export default ApexDonutChart;
