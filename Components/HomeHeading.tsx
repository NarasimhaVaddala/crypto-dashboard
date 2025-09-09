type Props = {
  heading: String;
  subHeading?: String;
};

export default function HomeHeading({ heading, subHeading }: Props) {
  return (
    <div>
      <h1 className="text-secondary font-bold text-xl md:text-3xl">
        {heading}
      </h1>
      <p className="text-xs">{subHeading}</p>
    </div>
  );
}
