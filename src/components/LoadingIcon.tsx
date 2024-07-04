import { pick } from "@/utils/styles";
import { IconContext, IconProps } from "@phosphor-icons/react";
import { Fragment, useContext } from "react";

export function LoadingIcon(props: IconProps) {
  const iconProps = useContext(IconContext);
  const size = props.size ?? iconProps?.size;
  const weight = props.weight ?? iconProps?.weight ?? "regular";
  const color = props.color ?? iconProps?.color ?? "currentColor";

  const strokeWidth = pick(weight, {
    thin: 8,
    light: 12,
    regular: 16,
    bold: 24,
    duotone: 16,
    fill: 16,
  });

  const bgStrokeWidth = weight === "duotone" ? 28 : strokeWidth;
  const bgFill = weight === "duotone" ? color : "none";

  return (
    <div role="status">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        ria-hidden="true"
        className="animate-spin"
        fill="none"
        style={{ width: size, height: size }}
        viewBox="0 0 256 256"
      >
        <path fill="none" d="M0 0H256V256H0z"></path>
        {weight === "fill" ? (
          <path
            d="M128 24a104 104 0 10104 104A104.11 104.11 0 00128 24zm0 176A72 72 0 0192 65.64a8 8 0 018 13.85 56 56 0 1056 0 8 8 0 018-13.85A72 72 0 01128 200z"
            fill={color}
          />
        ) : (
          <Fragment>
            <path
              fill="none"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={strokeWidth}
              d="M 128 32 A 96 96 0 0 1 224 128"
            />
            <circle cx="128" cy="128" r="96" stroke={color} strokeWidth={bgStrokeWidth} fill={bgFill} opacity={0.2} />
          </Fragment>
        )}
      </svg>
      {/* <svg
        aria-hidden="true"
        className="animate-spin"
        viewBox="0 0 100 101"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: size, height: size }}
      >
        <path
          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
          className="fill-white/20"
        />
        <path
          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
          className="fill-current"
        />
      </svg> */}
      <span className="sr-only">Loading...</span>
    </div>
  );
}
