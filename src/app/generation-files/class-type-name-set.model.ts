export class ClassTypeNameSet {
    private prefix: string;
    private baseName: string;
    private suffix: string;

    public constructor(prefix: string, baseName: string, suffix: string) {
        this.prefix = prefix;
        this.baseName = baseName;
        this.suffix = suffix;
    }

    public getName(): string {
        return this.prefix + ' ' + this.baseName + ' ' + this.suffix
    }
}
