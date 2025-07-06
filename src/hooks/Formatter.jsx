const useFormatter = () => {
  const formatter = Intl.NumberFormat("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  return formatter;
}

export default useFormatter;