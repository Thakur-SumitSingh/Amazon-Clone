export const deliveryOption = [{
  id : '1',
  deliveryDays : 7,
  price : 0
}, {
  id : '2',
  deliveryDays : 3,
  price : 499
}, {
  id : '3',
  deliveryDays : 1,
  price : 999
}];

export function getDeliveryOption(deliveryOptionId){
  let delivery;
  deliveryOption.forEach((option) => {
  if(deliveryOptionId === option.id){
      delivery = option;
    }
  });
  return delivery || deliveryOption[0];
}
