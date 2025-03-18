import React from "react";
import Field from "./Field";
import { useStandardFormStore } from "@/stores/standardFormStore";

const StandardForm: React.FC = () => {
  const { fields } = useStandardFormStore();
  return (
    <div className="space-y-5">
      <h1 className="font-semibold">Standard Form Builder</h1>
      <Field />
      {fields.map((field) => (
        <div key={field.id}>
          <Field field={field} />
        </div>
      ))}
    </div>
  );
};

export default StandardForm;
