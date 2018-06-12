import { OutputState } from "../src-core/fsm/OutputState";
import { InputState } from "../src-core/fsm/InputState";
import { TSTransition } from "./TSTransition";
export declare class SpinnerChangedTransition extends TSTransition {
    constructor(srcState: OutputState<Event>, tgtState: InputState<Event>);
    accept(event: Event): boolean;
    isGuardOK(event: Event): boolean;
    getAcceptedEvents(): Set<string>;
}