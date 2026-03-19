import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  type ChartOptions,
  type ChartData,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { useMemo, type FC } from 'react';

// Register once (outside component)
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

// 🔹 Types
type Props = {
  labels: string[];
  dataset1: number[];
  dataset2?: number[];
  title?: string;
};

// 🔹 Component
const BarChart: FC<Props> = ({
  labels,
  dataset1,
  dataset2 = [],
  title = 'Overview',
}) => {
  // ✅ Memoized options
  const options: ChartOptions<'bar'> = useMemo(
    () => ({
      responsive: true,
      maintainAspectRatio: false, // 👈 dashboard friendly
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: !!title,
          text: title,
        },
      },
      scales: {
        x: {
          grid: { display: false },
        },
        y: {
          beginAtZero: true,
        },
      },
    }),
    [title],
  );

  // ✅ Memoized data
  const data: ChartData<'bar'> = useMemo(
    () => ({
      labels,
      datasets: [
        {
          label: 'Target',
          data: dataset1,
          backgroundColor: 'rgba(99, 102, 241, 0.6)', // nicer color
          borderRadius: 6,
        },
        ...(dataset2.length
          ? [
              {
                label: 'Achieve',
                data: dataset2,
                backgroundColor: 'rgba(34, 197, 94, 0.6)',
                borderRadius: 6,
              },
            ]
          : []),
      ],
    }),
    [labels, dataset1, dataset2],
  );

  return (
    <div style={{ height: 300 }}>
      <Bar options={options} data={data} />
    </div>
  );
};

export default BarChart;
