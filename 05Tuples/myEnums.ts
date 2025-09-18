//Enums

const enum SeatChoice {
  AISLE = "Aisle",
  MIDDLE = "Middle",
  WINDOW = "Window",
  EMERGENCY_EXIT = 99,
}

//similar to type alias but more specific   
let hcSeat: SeatChoice = SeatChoice.AISLE;
hcSeat = SeatChoice.WINDOW;

export {};
// hcSeat = "crew"; //Error: Type '"crew"' is not assignable to type 'SeatChoice'.
// hcSeat = 1; //Error: Type '1' is not assignable to type 'SeatChoice'.

