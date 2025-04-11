
import React from "react";
import { ModelData, BenchmarkInfo, getScoreColor } from "@/data/modelData";

interface ModelComparisonProps {
  selectedModels: ModelData[];
  benchmarks: BenchmarkInfo[];
}

export function ModelComparison({ selectedModels, benchmarks }: ModelComparisonProps) {
  if (selectedModels.length === 0) {
    return (
      <div className="flex h-80 items-center justify-center rounded-xl border bg-white p-5 shadow-sm">
        <p className="text-center text-gray-500">Select models to compare</p>
      </div>
    );
  }

  // Group benchmarks by category
  const benchmarksByCategory: Record<string, BenchmarkInfo[]> = {};
  
  benchmarks.forEach((benchmark) => {
    if (!benchmarksByCategory[benchmark.category]) {
      benchmarksByCategory[benchmark.category] = [];
    }
    benchmarksByCategory[benchmark.category].push(benchmark);
  });

  const categoryLabels: Record<string, string> = {
    general: "General Capability",
    reasoning: "Reasoning & Logic",
    knowledge: "Knowledge & Facts",
    qa: "Question Answering",
    code: "Code Generation",
    multilingual: "Multilingual Capabilities"
  };

  return (
    <div className="rounded-xl border bg-white p-5 shadow-sm overflow-x-auto">
      <h2 className="mb-4 text-xl font-semibold">Detailed Comparison</h2>
      
      <table className="w-full min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th className="py-3 text-left text-sm font-medium text-gray-500">Benchmark</th>
            {selectedModels.map((model) => (
              <th key={model.id} className="px-3 py-3 text-left text-sm font-medium text-gray-500">
                {model.name}
              </th>
            ))}
          </tr>
        </thead>
        
        <tbody className="divide-y divide-gray-200">
          {Object.entries(benchmarksByCategory).map(([category, categoryBenchmarks]) => (
            <React.Fragment key={category}>
              <tr className="bg-gray-50">
                <th 
                  colSpan={selectedModels.length + 1}
                  className="px-2 py-2 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider"
                >
                  {categoryLabels[category] || category}
                </th>
              </tr>
              
              {categoryBenchmarks.map((benchmark) => (
                <tr key={benchmark.id} className="hover:bg-gray-50">
                  <td className="py-3 text-sm text-gray-500">
                    {benchmark.name}
                    <span className="block text-xs">{benchmark.description}</span>
                  </td>
                  
                  {selectedModels.map((model) => {
                    const score = model.benchmarks[benchmark.id].score;
                    const rank = model.benchmarks[benchmark.id].rank;
                    
                    return (
                      <td key={`${model.id}-${benchmark.id}`} className="px-3 py-3">
                        <div className={`text-lg font-bold ${getScoreColor(score)}`}>
                          {score.toFixed(1)}
                        </div>
                        <div className="text-xs text-gray-500">
                          Rank: #{rank}
                        </div>
                      </td>
                    );
                  })}
                </tr>
              ))}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
}
