import clsx from "clsx";

type InputType = {
    className: string,
    props: any,
}

const Input = ({ className, ...props }: InputType) => {
  return (
    <input
      className={clsx(
        "border-solid border-gray border-2 px-6 py-2 text-lg rounded-3xl w-full",
        className
      )}
      {...props}
    />
  );
};

export default Input;