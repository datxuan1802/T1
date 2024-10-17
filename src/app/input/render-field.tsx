"use client";
import {
  Controller,
  FieldPath,
  FieldPathValue,
  FieldValues,
  get,
  useFormContext,
} from "react-hook-form";
import {
  InputArrayField,
  InputDateField,
  InputField,
  InputNumberField,
  InputSelectAsyncField,
  InputSelectField,
  InputSwitchField,
  InputTelField,
  InputTextField,
  InputTextMultipleField,
  //   InputTimeField,
  PrimativeType,
} from "@/app/input/type";
import clsx from "clsx";
// import InputTag from "./input-tag";
import { Select } from "antd";
import { DatePicker, InputNumber, TimePicker } from "antd";
import dayjs from "dayjs";
import SelectAsync from "./select-async";
// import Svg from "../icons/svg";

type RenderInputProps<T> = InputField & {
  label?: string;
  name: T;
  placeholder?: string;
  className?: string;
} & { [key: string]: any };

export function RenderInput<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>(
  item: RenderInputProps<TName> &
    Omit<JSX.IntrinsicElements["input"], keyof RenderInputProps<TName> | "ref">
) {
  const {
    type,
    placeholder,
    name,
    disable,
    className,
    options,
    searchable,
    clearable,
    defaultValue,
    multiple,
    onChange,
    thousandSeparator,
    format,
    search,
    mode,
    ...rest
  } = item;
  const { register, control } = useFormContext<TFieldValues>();

  return type === "text" ? (
    <div className="relative w-full">
      <input
        type="text"
        placeholder={placeholder}
        disabled={disable}
        className={clsx(
          "rounded-lg py-3 px-4 outline-none bg-[#F5F5FA]",
          className
        )}
        {...register(name)}
        {...rest}
      />
      {/* {search && (
        <button className="absolute right-2 top-1/2 transform -translate-y-1/2">
          <Svg src="/icons/Search.svg" width={24} height={24} />
        </button>
      )} */}
    </div>
  ) : //   : type === "text-multiple" ? (
  //     <InputTag
  //       placeholder={placeholder}
  //       {...register(name)}
  //       {...rest}
  //       className="bg-[#F5F5FA]"
  //     />
  //   )
  type === "text-area" ? (
    <textarea
      {...register(name)}
      placeholder={placeholder}
      {...rest}
      className={clsx(
        "text-left rounded-lg py-3 px-4 outline-none bg-[#F5F5FA]",
        className
      )}
    />
  ) : type === "select" ? (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <Select
          mode={mode}
          defaultValue={defaultValue}
          value={field.value}
          onChange={field.onChange}
          options={options}
          size="large"
          placeholder={placeholder}
          disabled={disable}
          showSearch
          style={{
            width: "100%",
            textAlign: "left",
            height: "48px",
          }}
        />
      )}
    />
  ) : type === "date" ? (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <DatePicker
          placeholder={placeholder}
          onChange={field.onChange}
          value={field.value ? dayjs(field.value, "DD/MM/YYYY") : null}
          disabled={disable}
          name={name}
          size="large"
          className={clsx(
            "rounded-lg  py-3 px-4 outline-none bg-[#F5F5FA] text-base",
            className
          )}
          style={{ border: "none" }}
          format="DD/MM/YYYY"
          //isClearable={clearable}
          {...rest}
        />
      )}
    />
  ) : type === "number" ? (
    <Controller
      control={control}
      name={name}
      render={({ field }) => {
        return (
          <InputNumber<number>
            className={clsx(
              "rounded-lg p-[5px] bg-[#F5F5FA] outline-none text-base",
              className
            )}
            style={{ border: "none" }}
            defaultValue={defaultValue}
            value={defaultValue ? defaultValue : field.value}
            size="large"
            formatter={(value) =>
              `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            }
            parser={(value) =>
              value?.replace(/\$\s?|(,*)/g, "") as unknown as number
            }
            onChange={field.onChange}
            placeholder={placeholder}
          />
        );
      }}
    />
  ) : type === "time" ? (
    <Controller
      control={control}
      name={name}
      render={({ field }) => {
        return (
          <TimePicker
            needConfirm={false}
            format={format}
            onChange={(value) => field.onChange(value)}
            disabled={disable}
            value={field.value ? dayjs(field.value, format) : field.value}
            placeholder={placeholder}
            className={clsx("rounded-lg py-3 px-4 bg-[#F5F5FA]", className)}
          />
        );
      }}
    />
  ) : type === "select-async" ? (
    <SelectAsync {...(item as any)} />
  ) : null;
}

type Option<
  TFieldValues extends FieldValues,
  K extends FieldPath<TFieldValues>
> = Exclude<
  FieldPathValue<TFieldValues, K>,
  undefined | null
> extends PrimativeType
  ?
      | InputTextField
      | InputNumberField
      | InputSelectField
      | InputSwitchField
      | InputDateField
      | InputTelField
      | InputSelectAsyncField
  : Exclude<FieldPathValue<TFieldValues, K>, undefined | null> extends Array<
      infer S
    >
  ? S extends FieldValues
    ? InputArrayField<S>
    : InputTextMultipleField
  : InputDateField;
type ExtraOption<T extends FieldValues, K extends FieldPath<T>> = {
  label: string;
  placeholder?: string;
  help?: React.ReactNode;
  format?(v?: FieldPathValue<T, K>, data?: T): React.ReactNode;
  editable?: boolean;
  render?: React.ComponentType<{ value: FieldPathValue<T, K> }>;
  [k: string]: any;
};
export function createFieldHelper<T extends FieldValues>() {
  return function <K extends FieldPath<T>>(
    name: K,
    options: Option<T, K> & ExtraOption<T, K>
  ) {
    return {
      ...options,
      name,
    } as Option<T, K> & ExtraOption<T, K> & { name: K; [k: string]: any };
  };
}
