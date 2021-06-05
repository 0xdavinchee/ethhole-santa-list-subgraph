import {
  NewNaughtyLister,
  NewNiceLister,
  WithdrawFees,
} from "../generated/SantasList/SantasList";
import {
  NaughtyLister,
  NiceLister,
  WithdrawalFeeEvent,
} from "../generated/schema";

export function handleNewNaughtyLister(event: NewNaughtyLister): void {
  let naughtyLister = new NaughtyLister(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );
  naughtyLister.address = event.params.naughtyLister;
  naughtyLister.save();
}

export function handleNewNiceLister(event: NewNiceLister): void {
  let niceLister = new NiceLister(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );
  niceLister.address = event.params.niceLister;
  niceLister.feePaid = event.params.feePaid;

  niceLister.save();
}

export function handleWithdrawFees(event: WithdrawFees): void {
  let withdrawalFeeEvent = new WithdrawalFeeEvent(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );
  withdrawalFeeEvent.address = event.params.withdrawer;
  withdrawalFeeEvent.amountWithdrawn = event.params.amount;

  withdrawalFeeEvent.save();
}
