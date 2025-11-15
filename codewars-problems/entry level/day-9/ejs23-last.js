function last(...args) {
  if (args.length > 1) {
    return args[args.length - 1];
  }

  const item = args[0];
  if (typeof item === "string" || Array.isArray(item)) {
    return item[item.length - 1];
  }

  return item;
}