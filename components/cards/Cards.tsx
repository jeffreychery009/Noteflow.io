const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-28 w-full rounded-[12px] border-[0.5px] border-dark-800 px-5 py-7 dark:border-dark-700 dark:bg-dark-200 dark:text-white">
      {children}
    </div>
  );
};

export default Card;
