export const priceFilter = {
  filters: {
    renderCost(cost) {
      return cost === 0 ? `免費` : `$${cost.toLocaleString("en-US")}`;
    },
  },
}