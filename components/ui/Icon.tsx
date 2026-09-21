type IconProps = {
  name: string;
  className?: string;
  size?: number;
  viewBox?: string;
  ariaHidden?: boolean;
};

export default function Icon({
  name,
  className,
  size,
  viewBox = '0 0 24 24',
  ariaHidden = true
}: IconProps) {
  return (
    <svg
      viewBox={viewBox}
      width={size}
      height={size}
      className={className}
      aria-hidden={ariaHidden}
    >
      <use href={`#${name}`} />
    </svg>
  );
}