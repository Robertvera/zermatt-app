import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import { Fund } from "../../../../common/types/fund.interface";

type InvestmentTableProps = {
  investments: {
    funds?: Fund[];
  };
};

const InvestmentTable = ({ investments }: InvestmentTableProps) => {
  return (
    <TableContainer>
      <Table variant="simple">
        <TableCaption>Investments</TableCaption>
        <Thead>
          <Tr>
            <Th>Product</Th>
            <Th isNumeric>Invested K</Th>
            <Th isNumeric>Today's Value</Th>
            <Th isNumeric>% Portfolio</Th>
            <Th isNumeric>Average Cost</Th>
            <Th isNumeric>Market Price</Th>
            <Th isNumeric>Profit</Th>
            <Th isNumeric>% Profit</Th>
          </Tr>
        </Thead>
        <Tbody>
          {investments.funds
            ? investments.funds.map((fund: Fund) => {
                return (
                  <Tr key={fund.isin}>
                    <Td>{fund.product}</Td>
                    <Td isNumeric>{fund.investedK}</Td>
                    <Td isNumeric>{fund.todayValue}</Td>
                    <Td isNumeric>{fund.pctPortfolio}</Td>
                    <Td isNumeric>{fund.avgCost}</Td>
                    <Td isNumeric>{fund.marketPrice}</Td>
                    <Td isNumeric>{fund.profit}</Td>
                    <Td isNumeric>{fund.pctProfit}</Td>
                  </Tr>
                );
              })
            : null}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default InvestmentTable;
