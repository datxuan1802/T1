// "use client";
// import React, {
//   forwardRef,
//   useImperativeHandle,
//   useRef,
//   useState,
// } from "react";
// import Svg from "../icons/svg";

// type CustomChangeInputEvent<V> = {
//   target: Omit<HTMLElement, "value"> & { value: V; name?: string };
// };

// type Value = string[];
// type Props = {
//   help?: React.ReactNode;
//   value?: Value;
//   defaultValues?: Value;
//   onChange?(event: CustomChangeInputEvent<Value>): void;
//   separateKey?: Value;
// };
// type OverWriteProps = Omit<
//   React.DetailedHTMLProps<
//     React.InputHTMLAttributes<HTMLInputElement>,
//     HTMLInputElement
//   >,
//   keyof Props
// > &
//   Props;
// type CustomInput = Omit<HTMLInputElement, keyof Props> & Props;
// const InputTag = forwardRef(function InputTag(
//   {
//     help,
//     disabled,
//     placeholder,
//     value: valueProps,
//     defaultValues,
//     onChange,
//     separateKey = ["Enter", ",", " "],
//     ...rest
//   }: OverWriteProps,
//   forwardedRef: React.Ref<CustomInput | null>
// ) {
//   const [query, setQuery] = useState("");
//   const [tags, setTags] = useState<string[]>(defaultValues || valueProps || []);
//   const values = valueProps || tags;
//   const ref = useRef<HTMLInputElement>(null);
//   useImperativeHandle(forwardedRef, () =>
//     ref.current
//       ? {
//           ...ref.current,
//           get value() {
//             return tags;
//           },
//           set value(tags: string[]) {
//             setTags(Array.isArray(tags) ? tags : []);
//           },
//         }
//       : null
//   );

//   const handleChange = (tags: string[], e: HTMLElement) => {
//     onChange &&
//       onChange({
//         target: { ...e, value: tags, name: rest.name, type: undefined } as any,
//       });
//     setTags(tags);
//   };

//   const handleChangeInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
//     const element = e.currentTarget;
//     const value = element.value;
//     if (!value) return setQuery("");
//     const isExisted = values?.some((v) => v === value);
//     if (!isExisted) {
//       const newValue = [...values, value];
//       handleChange(newValue, element);
//     }
//     setQuery("");
//   };

//   const onKeyUp: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
//     // if (separateKey.includes(e.key)) handleChangeInput(e);
//   };
//   const onKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
//     if (separateKey.includes(e.key)) {
//       e.preventDefault();
//       return handleChangeInput(e);
//     }
//     switch (e.key) {
//       case "Enter":
//         e.preventDefault();
//         break;
//       case "Tab":
//         handleChangeInput(e);
//         break;
//       case "Backspace":
//         if (values.length && e.currentTarget.value.length === 0) {
//           handleChange(values.splice(0, values.length - 1), e.currentTarget);
//           setQuery(values.pop()!);
//           e.preventDefault();
//         }
//         break;
//       default:
//         break;
//     }
//   };
//   const onDelete: React.MouseEventHandler<HTMLDivElement> = (e) => {
//     const input = e.currentTarget.dataset.value;
//     const newValue = values.filter((v) => v !== input);
//     handleChange(newValue, e.currentTarget);
//   };
//   const showPlaceHolder = !query && !values.length;

//   return (
//     <label
//       aria-disabled={disabled}
//       className={
//         "flex flex-auto input h-auto py-1 items-center text-sm gap-y-1 aria-disabled:opacity-30 aria-disabled:cursor-not-allowed bg-[#d4d5f4]" +
//         (showPlaceHolder ? "flex-nowrap" : "flex-wrap")
//       }
//     >
//       {values.length > 0 &&
//         values.map((value, index) => {
//           return value ? (
//             <div
//               key={index}
//               className="mr-2"
//               onMouseDown={(e) => {
//                 e.stopPropagation();
//                 e.preventDefault();
//               }}
//             >
//               <div className="flex items-center justify-center py-2 pl-4 pr-1.5 bg-[#d4d5f4] text-[#1E1E1E] text-[15px] font-medium rounded-full gap-x-1">
//                 <span>{value}</span>
//                 <div
//                   className="cursor-pointer hover:bg-secondary-200 rounded-full p-1"
//                   data-value={value}
//                   onClick={onDelete}
//                 >
//                   <Svg
//                     src="/icons/close.svg"
//                     width={12}
//                     height={12}
//                     color="#1E1E1E"
//                     className="font-medium"
//                   />
//                 </div>
//               </div>
//             </div>
//           ) : null;
//         })}
//       <div className="grid">
//         {showPlaceHolder && (
//           <div
//             className="text-gray-400 text-base line-clamp-1"
//             style={{ gridArea: "1/1/2/3" }}
//           >
//             {placeholder}
//           </div>
//         )}
//         <div
//           className="flex-1 inline-grid grid-cols-[0px,min-content] input-after cursor-text"
//           style={{ gridArea: "1/1/2/3" }}
//         >
//           <input
//             className="bg-transparent w-full outline-none bg-[#F5F5FA]"
//             value={query}
//             onKeyDown={onKeyDown}
//             onKeyUp={onKeyUp}
//             style={{ gridArea: "1/2", minWidth: 2 }}
//             onChange={(e) => {
//               setQuery(e.target.value);
//             }}
//             ref={ref}
//             {...rest}
//           />
//           <span
//             style={{
//               content: "attr(data-value)",
//               visibility: "hidden",
//               whiteSpace: "pre",
//               gridArea: "1 / 2",
//               font: "inherit",
//               minWidth: 2,
//               border: "0px none",
//               margin: 0,
//               outline: 0,
//               padding: 0,
//             }}
//           >
//             {query}
//           </span>
//         </div>
//       </div>
//     </label>
//   );
// });

// export default InputTag;
