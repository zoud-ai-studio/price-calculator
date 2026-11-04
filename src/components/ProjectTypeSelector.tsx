import type { ProjectType } from "../lib/pricing";
import { projectTypes } from "../lib/pricing";

type ProjectTypeSelectorProps = {
  value: ProjectType;
  onChange: (projectType: ProjectType) => void;
};

export function ProjectTypeSelector({ value, onChange }: ProjectTypeSelectorProps) {
  return (
    <fieldset>
      <legend>What would you like to build?</legend>
      <div className="option-list">
        {(Object.entries(projectTypes) as [ProjectType, (typeof projectTypes)[ProjectType]][]).map(
          ([id, projectType]) => (
            <label className="option" key={id}>
              <input
                checked={value === id}
                name="project-type"
                onChange={() => onChange(id)}
                type="radio"
                value={id}
              />
              <span>{projectType.label}</span>
            </label>
          ),
        )}
      </div>
    </fieldset>
  );
}
