export type PrimativeType = boolean | string | number | undefined;
export type InputTextField = {
  type: "text" | "text-area";
  required?: boolean;
  leading?: string;
  disable?: boolean;
  row?: string;
  search?: boolean;
};

export type InputTimeField = {
  type: "time";
  required?: boolean;
  leading?: string;
  disable?: boolean;
  format?: string;
}

export type InputTextMultipleField = {
  type: "text-multiple";
  required?: boolean;
  leading?: string;
  separateKey?: string[];
};
export type InputNumberField = {
  type: "number";
  required?: boolean;
  leading?: string;
  prefix?: string;
  thousandSeparator?: string;
};
export type InputSelectField = {
  type: "select";
  required?: boolean;
  clearable?: boolean;
  options: ({ value: string; label: string } | string)[] | undefined | any;
  searchable?: boolean;
  clearable?: boolean;
  multiple?: boolean;
};
export type InputSelectAsyncField = {
  type: "select-async";
  queryKey: string[] | ((context: any) => string[]);
  fetcher: () => Promise<any[]>;
  required?: boolean;
  clearable?: boolean;
  context?: any;
  getOptionValue?(value: any): any;
  getOptionLabel?(value: any): any;
};
export type InputSwitchField = {
  type: "switch";
  required?: boolean;
};
export type InputDateField = {
  type: "date";
  required?: boolean;
};
export type InputTelField = {
  type: "tel";
  code_name?: string;
  parentKey?: string;
  required?: boolean;
};
export type InputArrayField<S extends FieldValues> = {
  type: "array";
  required?: boolean;
  action?: string;
  fields: StepObject<S>;
};

export type StepObject<D extends FieldValues = {}, Keys extends keyof D = keyof D> = {
  [K in Keys]-?: {
    label: string;
    placeholder?: string;
    help?: string;
  } & (Exclude<D[K], undefined> extends PrimativeType
    ? InputField
    : Exclude<D[K], undefined> extends Array<infer S>
    ? S extends FieldValues
      ? InputArrayField<S>
      : InputTextMultipleField
    : InputDateField);
} & { orders: Keys[] };

export type InputField =
  | InputTextMultipleField
  | InputTextField
  | InputNumberField
  | InputSelectField
  | InputSwitchField
  | InputDateField
  | InputTimeField
  | InputTelField
  | InputSelectAsyncField;
