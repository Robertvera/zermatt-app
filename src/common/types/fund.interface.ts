export interface Fund {
    isin: string;
    product: string;
    investedK: number;
    todayValue: number;
    pctPortfolio: number;
    avgCost: number;
    marketPrice: number;
    profit: number;
    pctProfit: number;
}
