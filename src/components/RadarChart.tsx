
import { ModelData, BenchmarkInfo } from "@/data/modelData";
import { PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, ResponsiveContainer, Tooltip } from "recharts";

interface RadarChartProps {
  selectedModels: ModelData[];
  benchmarks: BenchmarkInfo[];
}

export function ModelRadarChart({ selectedModels, benchmarks }: RadarChartProps) {
  if (selectedModels.length === 0) {
    return (
      <div className="flex h-80 items-center justify-center rounded-xl border bg-white p-5 shadow-sm">
        <p className="text-center text-gray-500">Select models to compare</p>
      </div>
    );
  }

  const chartData = benchmarks.map(benchmark => {
    const data: any = {
      subject: benchmark.name,
      fullMark: 100,
    };

    selectedModels.forEach(model => {
      data[model.name] = model.benchmarks[benchmark.id].score;
    });

    return data;
  });

  // Define colors for up to 6 models
  const modelColors = [
    "#3b82f6", // blue-500
    "#8b5cf6", // violet-500
    "#ec4899", // pink-500
    "#f97316", // orange-500
    "#14b8a6", // teal-500
    "#84cc16", // lime-500
  ];

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 rounded-md shadow-md border text-sm">
          <p className="font-medium">{payload[0].payload.subject}</p>
          {payload.map((entry: any, index: number) => (
            <p key={index} style={{ color: entry.color }}>
              {entry.name}: <span className="font-medium">{entry.value.toFixed(1)}</span>
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="rounded-xl border bg-white p-5 shadow-sm">
      <h2 className="mb-4 text-xl font-semibold">Performance Radar</h2>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart cx="50%" cy="50%" outerRadius="70%" data={chartData}>
            <PolarGrid gridType="polygon" />
            <PolarAngleAxis dataKey="subject" tick={{ fontSize: 12 }} />
            <PolarRadiusAxis angle={30} domain={[0, 100]} tick={{ fontSize: 10 }} />
            
            {selectedModels.map((model, i) => (
              <Radar
                key={model.id}
                name={model.name}
                dataKey={model.name}
                stroke={modelColors[i % modelColors.length]}
                fill={modelColors[i % modelColors.length]}
                fillOpacity={0.1}
              />
            ))}
            
            <Tooltip content={<CustomTooltip />} />
          </RadarChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-3 flex flex-wrap justify-center gap-3">
        {selectedModels.map((model, i) => (
          <div key={model.id} className="flex items-center gap-2 text-sm">
            <span 
              className="inline-block h-3 w-3 rounded-full" 
              style={{ backgroundColor: modelColors[i % modelColors.length] }}
            ></span>
            <span>{model.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
