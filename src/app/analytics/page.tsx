"use client"

import { useState, useEffect } from "react";
import { useRouter } from 'next/navigation'
import { PieChartState } from "@/types";
import Chart from "react-apexcharts";

export default function AddPage() {
  const router = useRouter()

  const [state, setState] = useState<PieChartState>({
    series: [],
    options: {
      labels: [],
      responsive: [{
        breakpoint: 600,
        options: {
          chart: {
            width: 380
          },
          legend: {
            position: 'bottom'
          }
        }
      }]
    },
  });

  const loadStatistics = () => {
    fetch("api/analytics", { method: 'GET' })
      .then(response => response.json())
      .then(({ data }) => {
        const _state = { ...state };
        for (const row of data) {
          _state.options.labels.push(row.pokemon ?? "No pokemon");
          _state.series.push(parseInt(row.count));
        }
        setState(_state);
      })
  }

  useEffect(() => {
    loadStatistics();
  }, []);

  return (
    <div className="grid grid-cols-12 gap-x-8 gap-y-4">

      <div className="col-span-4 col-start-3 p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-4">Pokemones</h2>
        {state.series.length ? <Chart
          options={state.options}
          series={state.series}
          width={380}
          type="pie"
        /> : (<><h2 className="text-2xl font-bold text-center mb-4">Sin Datos</h2></>)}
      </div>

      <div className="col-span-4 p-6">
        <button type="button" onClick={() => router.back()} className="w-full px-4 py-2 text-white bg-orange-500 rounded-lg hover:bg-orange-600">Volver</button>
      </div>

    </div>
  );
} 