function top3(products, amounts, prices) {
  const revenueList = products.map((p, i) => ({
    name: p,
    revenue: amounts[i] * prices[i]
  }));
  revenueList.sort((a, b) => b.revenue - a.revenue);
  return revenueList.slice(0, 3).map(item => item.name);
}