import { pick, tw } from "@/utils/styles";
import { TDesignRounded, TDesignSize } from "../DesignContext";

export function buttonSizeClass(size: TDesignSize) {
  return pick(size, {
    xs: tw`text-sm min-h-[28px] min-w-[28px]`,
    sm: tw`text-sm min-h-[32px] min-w-[32px]`,
    md: tw`text-base min-h-[40px] min-w-[40px]`,
    lg: tw`text-lg min-h-[54px] min-w-[54px]`,
  });
}

export function buttonRoundedClass(rounded: TDesignRounded) {
  return pick(rounded, {
    start: tw`rounded-l-md`,
    end: tw`rounded-r-md`,
    none: tw``,
    all: tw`rounded-md`,
  });
}
