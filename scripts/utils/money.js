export function formatCurrency(priceCents) {
  return (Math.round(priceCents) / 100).toFixed(2);
  //cần làm tròn số trước rồi mới fixed 
  //không thì sẽ làm tròn kiểu như 6.005 thành 6.01 thay vì 6.00
};