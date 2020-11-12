export interface ItemDetailModel {
  ItemID:number,
  ItemName:string,
  Price:Record<string,number>,
  Description:string,
  AvailableSize:string[],
  Image:string
}
