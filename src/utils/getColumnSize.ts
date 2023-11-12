export const getColumnSize = (tableType: string | undefined, row: number) => {
    const threeColumns = ["45%", "25%", "30%"];
    let rowSize;
    if (tableType === "request") {
      rowSize = ["25%", "17.5%", "8%", "8%", "17.5%", "8%", "8%", "8%"];
      return rowSize[row];
    } else if (tableType === "medical") {
      rowSize = ["22%", "8%", "10%", "8%", "12%", "12%", "12%", "6%", "8%"];
      return rowSize[row];
    } else if (tableType === "firm") {
      rowSize = threeColumns;
      return rowSize[row];
    } else if (tableType === "patients") {
      rowSize = ["25%", "15%", "15%", "25%", "12%", "8%"];
      return rowSize[row];
    } else if (tableType === "norms") {
      rowSize = threeColumns;
      return rowSize[row];
    } else if (tableType === "clientusers") {
      rowSize = ["28%", "8%", "25%", "15%", "8%", "8%", "8%"];
      return rowSize[row];
    } else if (tableType === "clientrequest") {
      rowSize = ["25%", "10%", "25%", "8%", "8%", "16%", "8%"];
      return rowSize[row];
    }
    return "12%";
  };
  