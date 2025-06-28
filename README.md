
# AI Model Benchmark Battle

An interactive dashboard to compare and evaluate different AI language models across various NLP benchmarks.

## Features

- **Model Comparison**: Select and compare up to 3 AI language models side by side
- **Interactive Visualizations**: Bar charts, radar charts, and detailed comparison tables
- **Benchmark Details**: View performance across multiple NLP tasks like MMLU, HellaSwag, TruthfulQA, and more
- **Responsive Design**: Works on desktop and mobile devices

## Technologies Used

- React
- TypeScript
- Tailwind CSS
- Recharts (for data visualization)
- shadcn-ui components

## Getting Started

### Prerequisites

- Node.js (v14+)
- npm or yarn

### Installation

1. Clone the repository:
```sh
git clone <repository-url>
cd ai-model-benchmark-battle
```

2. Install dependencies:
```sh
npm install
# or
yarn install
```

3. Start the development server:
```sh
npm run dev
# or
yarn dev
```

4. Open your browser and navigate to `http://localhost:5173`

## How to Use

1. Select models to compare by clicking on the model cards (up to 3 models)
2. View benchmark performance in the charts and tables below
3. Use the benchmark buttons to switch between different benchmarks
4. Explore the radar chart to see relative strengths across all benchmarks
5. Check the detailed comparison table for side-by-side statistics

## Project Structure

- `src/components/` - UI components for the dashboard
- `src/data/` - Model and benchmark data
- `src/pages/` - Main page components
- `src/hooks/` - Custom React hooks

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.
