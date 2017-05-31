export class EventEmitter<EventMap> {

    public on<Name extends keyof EventMap, Event extends EventMap[Name]>(eventName: Name, callback: (event: Event) => void): void {
        return null;
    }

    public off<Name extends keyof EventMap, Event extends EventMap[Name]>(eventName: Name, callback: (event: Event) => void): void {

    }

    public emit<Name extends keyof EventMap, Event extends EventMap[Name]>(eventName: Name, event: Event): void {

    }
}