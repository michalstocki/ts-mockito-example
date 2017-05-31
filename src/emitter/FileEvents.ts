interface FileEvent {
    fileName: string;
    filePath: string;
}

export interface FileAddedEvent extends FileEvent {
    fileSize: number;
}

export interface FileChangedEvent extends FileEvent {
    newContent: string;
}

export interface FileErrorEvent extends FileEvent {
    message: string;
}

export interface FileEvents {
    added: FileAddedEvent,
    changed: FileChangedEvent,
    error:FileErrorEvent
}