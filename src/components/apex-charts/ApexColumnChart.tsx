// ** MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'

// ** Third Party Imports
import { ApexOptions } from 'apexcharts'

// ** Component Import
import ReactApexcharts from "react-apexcharts";
import { Text } from '@mantine/core'

type Props = {
  title?: string | React.ReactNode
  subTitle?: string | React.ReactNode
  categories: string[]
  series: ApexOptions["series"]
  columnColors?: string[]
  horizontal?: boolean
  distributed?: boolean
  height?: number,
  ylabels?: boolean
}

const ApexColumnChart = (props: Props) => {
  const { title = '', subTitle, categories, series, columnColors, horizontal = false, height = 300, distributed = false, ylabels = false } = props
  // ** States

  const options: ApexOptions = {
    chart: {
      type: 'bar',
      height: '100%',
      stacked: true,
      toolbar: {
        show: false
      }
    },
    legend: {
      show: true,
      showForSingleSeries: true,
      showForNullSeries: true,
      showForZeroSeries: true,
      horizontalAlign: 'left',
      itemMargin: {
        horizontal: 15,
        vertical: 0
      },
    },
    plotOptions: {
      bar: {
        barHeight: '100%',
        columnWidth: '15%',
        distributed: distributed,
        horizontal: horizontal,
        dataLabels: {
          position: 'bottom'
        },
      }
    },
    responsive: [
      {
        breakpoint: 600,
        options: {
          plotOptions: {
            bar: {
              columnWidth: '35%'
            }
          }
        }
      }
    ],
    dataLabels: {
      enabled: !ylabels,
      textAnchor: 'start',
      style: {
        colors: ['#fff']
      },
      formatter: function (val, opt) {
        return opt.w.globals.labels[opt.dataPointIndex] + ":  " + Math.round(Number(val))
      },
      offsetX: 0,
      dropShadow: {
        enabled: true
      }
    },
    colors: columnColors ? columnColors : undefined,
    stroke: {
      width: 1,
      colors: ['#fff']
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return val + ''
        }
      }
    },
    grid: {
      xaxis: {
        lines: {
          show: true
        }
      }
    },
    xaxis: {
      categories: categories
    },
    yaxis: {
      labels: {
        show: ylabels,

      }
    },
    fill: {
      opacity: 1
    }
  }

  return (
    <Card>
      <CardHeader
        title={<Text size={'md'}>{title}</Text>}
        titleTypographyProps={{ variant: 'h6' }}
        subheader={<Text size={'sm'}>{subTitle}</Text>}
        subheaderTypographyProps={{ variant: 'caption', sx: { color: 'text.disabled' } }}
        sx={{
          flexDirection: ['column', 'row'],
          alignItems: ['flex-start', 'center'],
          '& .MuiCardHeader-action': { mb: 0 },
          '& .MuiCardHeader-content': { mb: [2, 0] }
        }}
      />
      <CardContent>
        <ReactApexcharts options={options} series={series} type='bar' height={height ? height : 300} />
      </CardContent>
    </Card>
  )
}

export default ApexColumnChart
