import { EventEmitter } from './EventEmitter';
import { FileEvents } from './FileEvents';
import { AbstractClassExtension } from '../extension/AbstractClassExtension';

export class EmitterUsage {

    private fileEventEmitter: EventEmitter<FileEvents>;

    constructor(private abstractExtension:AbstractClassExtension) {
        this.fileEventEmitter = new EventEmitter();
    }

    public addFile(fileName: string, filePath: string, fileSize: number):void {
        this.fileEventEmitter.emit('added', { fileName, filePath, fileSize });
     
        this.fileEventEmitter.on('changed', (event) => {
            this.abstractExtension.methodB(event.newContent);
        });
    }

}

