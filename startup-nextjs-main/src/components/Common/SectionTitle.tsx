const SectionTitle = ({
  title,
  paragraph,
  width = "600px",
  center = false,
  mb = "80px",
}: {
  title: string;
  paragraph: string;
  width?: string;
  center?: boolean;
  mb?: string;
}) => {
  return (
    <div
      className={`w-full ${center ? "mx-auto text-center" : ""}`}
      style={{ maxWidth: width, marginBottom: mb }}
    >
      <h2 className="mb-4 text-4xl font-extrabold leading-tight text-gradient sm:text-5xl md:text-[50px]">
        {title}
      </h2>
      <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300 md:text-xl">
        {paragraph}
      </p>
    </div>
  );
};

export default SectionTitle;
