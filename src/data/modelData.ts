
interface BenchmarkScore {
  score: number;
  rank?: number;
}

export interface ModelData {
  id: string;
  name: string;
  developer: string;
  releaseDate: string;
  description: string;
  parameterCount: string;
  imageUrl: string;
  benchmarks: {
    [key: string]: BenchmarkScore;
  };
}

export interface BenchmarkInfo {
  id: string;
  name: string;
  description: string;
  maxScore: number;
  category: 'general' | 'reasoning' | 'knowledge' | 'qa' | 'code';
}

export const benchmarks: BenchmarkInfo[] = [
  {
    id: 'mmlu',
    name: 'MMLU',
    description: 'Measures multitask language understanding across 57 subjects',
    maxScore: 100,
    category: 'knowledge'
  },
  {
    id: 'hellaswag',
    name: 'HellaSwag',
    description: 'Tests commonsense inference with challenging endings',
    maxScore: 100,
    category: 'reasoning'
  },
  {
    id: 'truthfulqa',
    name: 'TruthfulQA',
    description: 'Evaluates truthfulness in question answering',
    maxScore: 100,
    category: 'qa'
  },
  {
    id: 'gsm8k',
    name: 'GSM8K',
    description: 'Grade school math problems requiring multi-step reasoning',
    maxScore: 100,
    category: 'reasoning'
  },
  {
    id: 'humaneval',
    name: 'HumanEval',
    description: 'Measures coding ability through function completion',
    maxScore: 100,
    category: 'code'
  },
  {
    id: 'winogrande',
    name: 'WinoGrande',
    description: 'Tests for commonsense reasoning about everyday situations',
    maxScore: 100,
    category: 'reasoning'
  },
  {
    id: 'arc',
    name: 'ARC',
    description: 'Grade-school science questions with challenging reasoning',
    maxScore: 100,
    category: 'knowledge'
  },
  {
    id: 'boolq',
    name: 'BoolQ',
    description: 'Yes/no questions requiring paragraph comprehension',
    maxScore: 100,
    category: 'qa'
  }
];

export const models: ModelData[] = [
  {
    id: 'gpt-4o',
    name: 'GPT-4o',
    developer: 'OpenAI',
    releaseDate: '2024',
    description: 'Multimodal model with strong reasoning and instruction following',
    parameterCount: '~1.8T (estimated)',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/OpenAI_Logo.svg/1024px-OpenAI_Logo.svg.png',
    benchmarks: {
      mmlu: { score: 90.3 },
      hellaswag: { score: 95.7 },
      truthfulqa: { score: 71.8 },
      gsm8k: { score: 94.2 },
      humaneval: { score: 89.5 },
      winogrande: { score: 88.5 },
      arc: { score: 96.8 },
      boolq: { score: 91.2 }
    }
  },
  {
    id: 'claude-3-opus',
    name: 'Claude 3 Opus',
    developer: 'Anthropic',
    releaseDate: '2024',
    description: 'Strong across reasoning tasks with robust alignment',
    parameterCount: '~1.5T (estimated)',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Anthropic_logo.svg/1200px-Anthropic_logo.svg.png',
    benchmarks: {
      mmlu: { score: 86.8 },
      hellaswag: { score: 94.1 },
      truthfulqa: { score: 81.2 },
      gsm8k: { score: 95.0 },
      humaneval: { score: 84.7 },
      winogrande: { score: 87.2 },
      arc: { score: 95.6 },
      boolq: { score: 90.8 }
    }
  },
  {
    id: 'gemini-1.5-pro',
    name: 'Gemini 1.5 Pro',
    developer: 'Google',
    releaseDate: '2024',
    description: 'Long-context multimodal model with strong reasoning',
    parameterCount: '~1.5T (estimated)',
    imageUrl: 'https://storage.googleapis.com/gweb-uniblog-publish-prod/images/gemini_1.max-1000x1000.png',
    benchmarks: {
      mmlu: { score: 83.5 },
      hellaswag: { score: 92.8 },
      truthfulqa: { score: 69.4 },
      gsm8k: { score: 91.5 },
      humaneval: { score: 82.6 },
      winogrande: { score: 85.1 },
      arc: { score: 93.2 },
      boolq: { score: 89.3 }
    }
  },
  {
    id: 'llama-3-70b',
    name: 'Llama 3 70B',
    developer: 'Meta',
    releaseDate: '2024',
    description: 'Open-weight model with strong instruction-following',
    parameterCount: '70B',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/1920px-Meta_Platforms_Inc._logo.svg.png',
    benchmarks: {
      mmlu: { score: 78.9 },
      hellaswag: { score: 91.2 },
      truthfulqa: { score: 62.3 },
      gsm8k: { score: 87.4 },
      humaneval: { score: 76.8 },
      winogrande: { score: 83.9 },
      arc: { score: 89.6 },
      boolq: { score: 87.1 }
    }
  },
  {
    id: 'claude-3-sonnet',
    name: 'Claude 3 Sonnet',
    developer: 'Anthropic',
    releaseDate: '2024',
    description: 'Balanced model for enterprise use cases',
    parameterCount: '~800B (estimated)',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Anthropic_logo.svg/1200px-Anthropic_logo.svg.png',
    benchmarks: {
      mmlu: { score: 81.2 },
      hellaswag: { score: 90.5 },
      truthfulqa: { score: 78.6 },
      gsm8k: { score: 88.3 },
      humaneval: { score: 79.4 },
      winogrande: { score: 84.7 },
      arc: { score: 91.8 },
      boolq: { score: 88.5 }
    }
  },
  {
    id: 'mistral-large',
    name: 'Mistral Large',
    developer: 'Mistral AI',
    releaseDate: '2024',
    description: 'Strong at reasoning with structured prompting',
    parameterCount: '~65B (estimated)',
    imageUrl: 'https://avatars.githubusercontent.com/u/99472923?s=200&v=4',
    benchmarks: {
      mmlu: { score: 77.8 },
      hellaswag: { score: 89.3 },
      truthfulqa: { score: 65.4 },
      gsm8k: { score: 86.9 },
      humaneval: { score: 74.1 },
      winogrande: { score: 82.6 },
      arc: { score: 87.3 },
      boolq: { score: 85.9 }
    }
  }
];

// Calculate and add ranks for each benchmark
benchmarks.forEach(benchmark => {
  const sortedModels = [...models].sort((a, b) => 
    b.benchmarks[benchmark.id].score - a.benchmarks[benchmark.id].score
  );
  
  sortedModels.forEach((model, index) => {
    models.find(m => m.id === model.id)!.benchmarks[benchmark.id].rank = index + 1;
  });
});

// Calculate average benchmark score for each model
export const getAverageScore = (model: ModelData): number => {
  const scores = Object.values(model.benchmarks).map(b => b.score);
  return scores.reduce((sum, score) => sum + score, 0) / scores.length;
};

// Calculate overall rank for each model
export const getOverallRank = (model: ModelData, allModels: ModelData[]): number => {
  const sortedModels = [...allModels].sort((a, b) => 
    getAverageScore(b) - getAverageScore(a)
  );
  
  return sortedModels.findIndex(m => m.id === model.id) + 1;
};

// Get color based on score
export const getScoreColor = (score: number): string => {
  if (score >= 90) return 'text-emerald-600';
  if (score >= 80) return 'text-green-500';
  if (score >= 70) return 'text-lime-500';
  if (score >= 60) return 'text-yellow-500';
  return 'text-orange-500';
};

// Calculate percentage of max score
export const getScorePercentage = (score: number, maxScore: number): number => {
  return (score / maxScore) * 100;
};
