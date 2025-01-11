const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="border-dark-800 h-[120px] w-full rounded-[12px] border-[0.5px] px-5 py-7 dark:border-dark-700 dark:bg-dark-200 dark:text-white">
      {children}
    </div>
  );
};

export default Card;
