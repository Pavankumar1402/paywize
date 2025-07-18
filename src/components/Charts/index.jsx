import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,

} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,

);

export const options = {
  responsive: true,
  interaction: {
    mode: 'index',
    intersect: false,
  },
  stacked: false,
  plugins: {

  },
  scales: {
    y: {
      type: 'linear',
      display: true,
      position: 'left',
    },
    y1: {
      type: 'linear',
      display: false,
      position: 'right',
    },
  },
};

const labels = ['01', '02', '03', '04', '05', '06', '07'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      // data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
      yAxisID: 'y',
    },
    {
      label: 'Dataset 2',
      // data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
      yAxisID: 'y1',
    },
  ],
};

export function Charts() {
  return (
    <>
      <div className='task-container-header'>
        <div className='flex items-center gap-3'>
          <h1 className='text-lg font-bold'>Performance</h1>
        </div>
        <div>
          <select className='select-box bg-gray-100'>
            <option value="week">01-07 may</option>
            <option value="week">01-07 june</option>
            <option value="week">01-07 july</option>
          </select>
        </div>
      </div>
      <div>
        <Line options={options} data={data} />
      </div>
    </>
  )
}
