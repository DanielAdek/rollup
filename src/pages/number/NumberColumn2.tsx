import React, { useState } from "react";
import { ChevronDown, ChevronUp, X } from "lucide-react";

interface Condition {
  id: number;
  name: string;
  operator: string;
  text: string;
}

interface FilterState {
  board: string;
  conditions: Condition[];
  returnOption: string;
}

type ConditionField = "name" | "operator" | "text";

export default function NumbersColumn(): JSX.Element {
  const [board, setBoard] = useState<string>("");
  const [conditions, setConditions] = useState<Condition[]>([
    { id: 1, name: "", operator: "equals to", text: "" },
  ]);
  const [returnOption, setReturnOption] = useState<string>("");

  const addCondition = (): void => {
    const newCondition: Condition = {
      id: conditions.length + 1,
      name: "",
      operator: "equals to",
      text: "",
    };
    setConditions([...conditions, newCondition]);
  };

  const removeCondition = (id: number): void => {
    if (conditions.length > 1) {
      setConditions(conditions.filter((condition) => condition.id !== id));
    }
  };

  const updateCondition = (
    id: number,
    field: ConditionField,
    value: string
  ): void => {
    setConditions(
      conditions.map((condition) =>
        condition.id === id ? { ...condition, [field]: value } : condition
      )
    );
  };

  const handleSave = (): void => {
    const filterState: FilterState = {
      board,
      conditions,
      returnOption,
    };
    console.log("Saving filter:", filterState);
  };

  return (
    <div className="w-full max-w-xl p-6 space-y-6">
      <h1 className="text-3xl font-semibold text-gray-800">Numbers Column</h1>

      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <label className="text-gray-600 w-24 flex-shrink-0">Find items in</label>
          <div className="relative flex-1">
            <select
              className="w-full p-2 border rounded-md appearance-none bg-white pr-8"
              value={board}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                setBoard(e.target.value)
              }
            >
              <option value="">Select Board</option>
              <option value="board1">Board 1</option>
              <option value="board2">Board 2</option>
            </select>
            <ChevronDown className="absolute right-2 top-3 w-4 h-4 text-gray-400" />
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-4">
            <label className="text-gray-600 w-24 flex-shrink-0">Where</label>
            <div className="flex-1">
              {conditions.map((condition) => (
                <div key={condition.id} className="flex gap-2 items-center mb-2">
                  <div className="relative w-1/3">
                    <select
                      className="w-full p-2 border rounded-md appearance-none bg-white pr-8"
                      value={condition.name}
                      onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                        updateCondition(condition.id, "name", e.target.value)
                      }
                    >
                      <option value="">Name</option>
                      <option value="name1">Name 1</option>
                      <option value="name2">Name 2</option>
                    </select>
                    <ChevronUp className="absolute right-2 top-3 w-4 h-4 text-gray-400" />
                  </div>

                  <div className="relative w-1/3">
                    <select
                      className="w-full p-2 border rounded-md appearance-none bg-white pr-8"
                      value={condition.operator}
                      onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                        updateCondition(condition.id, "operator", e.target.value)
                      }
                    >
                      <option value="equals to">equals to</option>
                      <option value="contains">contains</option>
                      <option value="starts with">starts with</option>
                    </select>
                    <ChevronUp className="absolute right-2 top-3 w-4 h-4 text-gray-400" />
                  </div>

                  <div className="relative w-1/3">
                    <select
                      className="w-full p-2 border rounded-md appearance-none bg-white pr-8"
                      value={condition.text}
                      onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                        updateCondition(condition.id, "text", e.target.value)
                      }
                    >
                      <option value="">Text</option>
                      <option value="text1">Text 1</option>
                      <option value="text2">Text 2</option>
                    </select>
                    <ChevronDown className="absolute right-2 top-3 w-4 h-4 text-gray-400" />
                  </div>

                  {conditions.length > 1 && (
                    <button
                      onClick={() => removeCondition(condition.id)}
                      className="text-gray-400 hover:text-gray-600"
                      type="button"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="pl-28">
          <button
            onClick={addCondition}
            className="text-blue-600 hover:text-blue-700 flex items-center gap-1"
            type="button"
          >
            + Add condition
          </button>
        </div>

        <div className="flex items-center gap-4">
          <label className="text-gray-600 w-24 flex-shrink-0">And return</label>
          <div className="relative flex-1">
            <select
              className="w-full p-2 border rounded-md appearance-none bg-white pr-8"
              value={returnOption}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                setReturnOption(e.target.value)
              }
            >
              <option value="">Select Option</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
            </select>
            <ChevronUp className="absolute right-2 top-3 w-4 h-4 text-gray-400" />
          </div>
        </div>

        <div className="pl-28">
          <button
            onClick={handleSave}
            className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition-colors"
            type="button"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}