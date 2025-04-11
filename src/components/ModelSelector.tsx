
import { useState } from "react";
import { ModelData } from "@/data/modelData";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

interface ModelSelectorProps {
  models: ModelData[];
  selectedModelIds: string[];
  onSelectModel: (modelId: string) => void;
  onRemoveModel: (modelId: string) => void;
}

export function ModelSelector({ 
  models, 
  selectedModelIds, 
  onSelectModel, 
  onRemoveModel 
}: ModelSelectorProps) {
  const [selectedId, setSelectedId] = useState<string>("");
  const availableModels = models.filter(model => !selectedModelIds.includes(model.id));
  const maxModelsSelected = selectedModelIds.length >= 3;

  const handleSelectChange = (value: string) => {
    setSelectedId(value);
    onSelectModel(value);
    setSelectedId(""); // Reset after selection
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center gap-3">
        <div className="flex-1 min-w-[250px]">
          <Select
            value={selectedId}
            onValueChange={handleSelectChange}
            disabled={maxModelsSelected}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder={maxModelsSelected ? "Max 3 models selected" : "Select a model to compare"} />
            </SelectTrigger>
            <SelectContent>
              {availableModels.map((model) => (
                <SelectItem key={model.id} value={model.id}>
                  {model.name} - {model.developer}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        <div className="text-sm text-gray-500">
          {selectedModelIds.length} of 3 models selected
        </div>
      </div>

      {/* Selected Models */}
      {selectedModelIds.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {selectedModelIds.map((id) => {
            const model = models.find(m => m.id === id);
            if (!model) return null;
            
            return (
              <div key={id} className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-sm text-blue-700">
                <img 
                  src={model.imageUrl} 
                  alt={`${model.name} logo`} 
                  className="h-4 w-4 rounded-full"
                />
                <span>{model.name}</span>
                <button
                  onClick={() => onRemoveModel(id)}
                  className="ml-1 rounded-full p-0.5 hover:bg-blue-100"
                >
                  <X size={14} />
                </button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
