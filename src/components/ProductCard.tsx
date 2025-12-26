import Image from "next/image";

interface ProductCardProps {
  title: string;
  description: string;
  imageSrc?: string;
  href?: string;
  accentColor?: string;
}

export default function ProductCard({
  title,
  description,
  imageSrc,
  href,
  accentColor = "bg-escalate-blue",
}: ProductCardProps) {
  const CardWrapper = href ? "a" : "div";
  const cardProps = href
    ? { href, target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <CardWrapper
      {...cardProps}
      className={`group flex flex-col items-center rounded-2xl bg-white p-6 shadow-md transition-all hover:shadow-lg ${
        href ? "cursor-pointer hover:-translate-y-1" : ""
      }`}
    >
      <div
        className={`mb-4 flex h-16 w-16 items-center justify-center overflow-hidden rounded-xl ${
          imageSrc ? "bg-transparent" : accentColor
        }`}
      >
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={title}
            width={64}
            height={64}
            className="h-full w-full object-contain"
          />
        ) : (
          <span className="text-2xl font-bold text-white">
            {title.charAt(0)}
          </span>
        )}
      </div>
      <h3 className="mb-2 text-lg font-semibold text-gray-900">{title}</h3>
      <p className="text-center text-sm text-gray-600">{description}</p>
      {href && (
        <span className="mt-3 text-sm font-medium text-escalate-blue opacity-0 transition-opacity group-hover:opacity-100">
          Learn more →
        </span>
      )}
    </CardWrapper>
  );
}
