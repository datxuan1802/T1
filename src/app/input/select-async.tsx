import { useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { Controller, useFormContext } from "react-hook-form";
import { Select } from "antd";

type Props<TName> = {
  label?: string;
  name: TName;
  placeholder?: string;
  disable?: boolean;
  fetcher: () => Promise<any>;
  queryKey: string | ((context?: any) => string);
  getOptionLabel: (option: any) => string;
  getOptionValue: (option: any) => any;
  context?: any;
  defaultValue?: any;
  mode?: "multiple" | "tags";
} & { [key: string]: any };

const SelectAsync = <TName extends any = any>(props: Props<TName>) => {
  const {
    name,
    placeholder,
    disable,
    fetcher,
    queryKey,
    getOptionLabel,
    getOptionValue,
    context,
    defaultValue,
    mode,
    ...rest
  } = props;

  const { control } = useFormContext();

  const keys = useMemo(() => {
    return Array.isArray(queryKey) ? queryKey : [queryKey, context];
  }, [context, queryKey]);

  const { data: optionsData } = useQuery({
    queryKey: keys,
    queryFn: fetcher,
  });

  const options = optionsData?.map((option: any) => ({
    label: getOptionLabel(option),
    value: getOptionValue(option),
  }));

  return (
    <Controller
      name={name as any}
      control={control}
      render={({ field }) => (
        <Select
          {...field}
          {...rest}
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
  );
};

export default SelectAsync;
