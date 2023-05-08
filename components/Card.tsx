import clsx from "clsx";

type CardType = {
    className: string,
    children: any,
}

const Card = ({ className, children }: CardType) => {
  return (
    <div
      className={clsx(
        "rounded-3xl px-10 py-4 drop-shadow-xl bg-white",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Card;
