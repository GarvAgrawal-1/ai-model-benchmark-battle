
import React, { useState } from "react";
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { ModelData, BenchmarkInfo, getScoreColor } from "@/data/modelData";

interface BenchmarkChartProps {
  models: ModelData[];
  benchmarks: BenchmarkInfo[];
  selectedBenchmark: string;
  onSelectBenchmark: (id: string) => void;
}

export function BenchmarkChart({ 
  models, 
  benchmarks, 
  selectedBenchmark, 
  onSelectBenchmark 
}: BenchmarkChartProps) {
  const selectedBenchmarkInfo = benchmarks.find(b => b.id === selectedBenchmark);
  
  // Prepare data for the chart
  const chartData = models.map(model => ({
    name: model.name,
    score: model.benchmarks[selectedBenchmark].score,
    rank: model.benchmarks[selectedBenchmark].rank,
    color: getBarColor(model.benchmarks[selectedBenchmark].score)
  })).sort((a, b) => b.score - a.score);

  function getBarColor(score: number): string {
    if (score >= 90) return '#059669'; // emerald-600
    if (score >= 80) return '#22c55e'; // green-500
    if (score >= 70) return '#84cc16'; // lime-500
    if (score >= 60) return '#eab308'; // yellow-500
    return '#f97316'; // orange-500
  }

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 rounded-md shadow-md border text-sm">
          <p className="font-medium">{label}</p>
          <p className="text-gray-600">Score: <span className="font-medium">{payload[0].value.toFixed(1)}</span></p>
          <p className="text-gray-600">Rank: <span className="font-medium">#{payload[0].payload.rank}</span></p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="rounded-xl border bg-white p-5 shadow-sm">
      <div className="mb-5 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-semibold">Benchmark Comparison</h2>
          <p className="text-sm text-gray-500">
            {selectedBenchmarkInfo?.description || "Compare model performance on selected benchmark"}
          </p>
        </div>
        
        <div className="flex flex-wrap gap-2">
          {benchmarks.map(benchmark => (
            <button
              key={benchmark.id}
              onClick={() => onSelectBenchmark(benchmark.id)}
              className={`rounded-full px-3 py-1 text-sm transition-colors ${
                selectedBenchmark === benchmark.id
                  ? 'bg-blue-100 text-blue-700'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {benchmark.name}
            </button>
          ))}
        </div>
      </div>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={chartData}
            margin={{ top: 10, right: 10, left: 10, bottom: 20 }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} opacity={0.3} />
            <XAxis 
              dataKey="name" 
              tick={{ fontSize: 12 }} 
              axisLine={false}
              tickLine={false}
            />
            <YAxis 
              domain={[0, 100]} 
              tick={{ fontSize: 12 }} 
              axisLine={false}
              tickLine={false}
              tickCount={6}
            />
            <Tooltip content={<CustomTooltip />} />
            <Bar 
              dataKey="score" 
              radius={[4, 4, 0, 0]} 
              barSize={40}
              fill="#3b82f6"
              opacity={0.9}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
