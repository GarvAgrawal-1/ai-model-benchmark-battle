
import { ModelData, getAverageScore, getOverallRank, getScoreColor, models } from "@/data/modelData";

interface ModelCardProps {
  model: ModelData;
  isSelected: boolean;
  onClick: () => void;
}

export function ModelCard({ model, isSelected, onClick }: ModelCardProps) {
  const averageScore = getAverageScore(model);
  const overallRank = getOverallRank(model, models);
  
  return (
    <div 
      className={`relative overflow-hidden rounded-xl border p-5 shadow-sm transition-all duration-300 
        ${isSelected ? 'border-blue-500 shadow-md ring-2 ring-blue-500/20' : 'hover:border-blue-200 hover:shadow'}`}
      onClick={onClick}
    >
      <div className="absolute -right-4 -top-4 rounded-full bg-blue-500/10 p-10"></div>
      
      <div className="flex items-start gap-4">
        <div className="h-12 w-12 overflow-hidden rounded-lg bg-gray-100 p-1">
          <img 
            src={model.imageUrl} 
            alt={`${model.name} logo`} 
            className="h-full w-full object-contain"
          />
        </div>
        
        <div className="flex-1">
          <h3 className="flex items-center gap-2 font-medium">
            {model.name}
            <span className="rounded-full bg-blue-50 px-2 py-0.5 text-xs text-blue-600">
              Rank #{overallRank}
            </span>
          </h3>
          <p className="text-sm text-gray-500">{model.developer} • {model.parameterCount}</p>
        </div>
        
        <div className="text-right">
          <div className={`text-xl font-bold ${getScoreColor(averageScore)}`}>
            {averageScore.toFixed(1)}
          </div>
          <div className="text-xs text-gray-500">avg. score</div>
        </div>
      </div>

      <p className="mt-3 text-sm text-gray-600 line-clamp-2">{model.description}</p>
      
      {isSelected && (
        <div className="mt-3 pt-3 border-t">
          <p className="text-xs text-gray-500">Selected for comparison</p>
        </div>
      )}
    </div>
  );
}
