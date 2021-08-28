export {};

type DebugType = () => void;
type SomeTypes = string | number | DebugType;
type FuntionType = Exclude<SomeTypes, string | number>;
type NonFuntionType = Exclude<SomeTypes, DebugType>;
type TypeExcludingFunction = Exclude<SomeTypes, Function>;

type FunctionTypeByExtract = Extract<SomeTypes, DebugType>;
type NonFuntionTypeExtract = Extract<SomeTypes, string | number>;
type TypeExcludingFunctionExtract = Extract<SomeTypes, Function>;

type NullableTypes = string | number | null | undefined;
type NonNullableTypes = NonNullable<NullableTypes>;
