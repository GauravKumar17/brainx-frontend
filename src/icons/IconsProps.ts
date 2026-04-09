export default interface IconProps {
    size: "sm" | "md" | "lg" |"xl" ;

}

export const IconsSizeVariants = {
    sm: "size-3",
    md: "size-5",
    lg: "size-7 ",
    xl: "size-10"
};

export const IconsFontVariants = { // Font size for stroke-width in plus.tsx svg is written like stroke-width = "1.5"
    // These values are used to set the stroke-width in the SVG icons
    sm: "1",
    md: "1.5",
    lg: "1.5",
    xl: "2.0"
};