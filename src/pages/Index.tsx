
import React, { useState } from "react";
import { models, benchmarks, getAverageScore } from "@/data/modelData";
import { ModelCard } from "@/components/ModelCard";
import { BenchmarkChart } from "@/components/BenchmarkChart";
import { ModelRadarChart } from "@/components/RadarChart";
import { ModelComparison } from "@/components/ModelComparison";

const Index = () => {
  const [selectedModelIds, setSelectedModelIds] = useState<string[]>([]);
  const [selectedBenchmark, setSelectedBenchmark] = useState<string>("mmlu");

  const selectedModels = models.filter(model => 
    selectedModelIds.includes(model.id)
  );

  const toggleModelSelection = (modelId: string) => {
    if (selectedModelIds.includes(modelId)) {
      setSelectedModelIds(selectedModelIds.filter(id => id !== modelId));
    } else {
      // Limit to 3 models for comparison
      if (selectedModelIds.length < 3) {
        setSelectedModelIds([...selectedModelIds, modelId]);
      }
    }
  };

  // Sort models by average score
  const sortedModels = [...models].sort((a, b) => 
    getAverageScore(b) - getAverageScore(a)
  );

  return (
    <div className="min-h-screen bg-gray-50 pb-10">
      {/* Header */}
      <header className="bg-white border-b shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-900">AI Model Benchmark Battle</h1>
          <p className="text-gray-600 mt-2">
            Compare how well different AI language models perform on common NLP tasks and benchmarks
          </p>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Model Selection */}
        <section className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-semibold">Language Models</h2>
            <div className="text-sm text-gray-500">
              {selectedModelIds.length > 0 ? (
                <span>
                  {selectedModelIds.length} of 3 models selected
                </span>
              ) : (
                <span>Select up to 3 models to compare</span>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {sortedModels.map((model) => (
              <ModelCard
                key={model.id}
                model={model}
                isSelected={selectedModelIds.includes(model.id)}
                onClick={() => toggleModelSelection(model.id)}
              />
            ))}
          </div>
        </section>

        {/* Visualization Section */}
        <section className="space-y-8">
          {/* Benchmark Bar Chart */}
          <BenchmarkChart
            models={models}
            benchmarks={benchmarks}
            selectedBenchmark={selectedBenchmark}
            onSelectBenchmark={setSelectedBenchmark}
          />

          {/* Radar Chart and Detail Comparison */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <ModelRadarChart 
              selectedModels={selectedModels}
              benchmarks={benchmarks}
            />
            
            <ModelComparison
              selectedModels={selectedModels}
              benchmarks={benchmarks}
            />
          </div>
        </section>

        {/* About Section */}
        <section className="mt-12 rounded-xl border bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">About AI Model Benchmarks</h2>
          <p className="text-gray-600 mb-4">
            These benchmarks evaluate language models on a variety of natural language processing tasks, including 
            question answering, reasoning, knowledge retrieval, and code generation. Performance is measured as a 
            score from 0-100, where higher is better.
          </p>
          
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {benchmarks.map((benchmark) => (
              <div key={benchmark.id} className="rounded-lg border p-3">
                <h3 className="font-medium">{benchmark.name}</h3>
                <p className="text-sm text-gray-500">{benchmark.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Index;
