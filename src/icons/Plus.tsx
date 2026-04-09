import type IconProps from "./IconsProps";
import { IconsSizeVariants } from "./IconsProps";
import { IconsFontVariants } from "./IconsProps";

export const PlusIcon = (props:IconProps)=>{
  return (
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width={IconsFontVariants[props.size]} stroke="currentColor" className={IconsSizeVariants[props.size]}>
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
</svg>
  );
}
