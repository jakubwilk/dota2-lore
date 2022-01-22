export class AppError extends Error {
    private readonly _statusCode: number
    private readonly _location: string
    private readonly _isActive: boolean

    constructor(statusCode: number, message: string, location?: string) {
        super(message)
        this._statusCode = statusCode
        this._location = location ?? '/'
        this._isActive = true
    }

    get statusCode(): number {
        return this._statusCode
    }

    get message(): string {
        return this.message
    }

    get location(): string {
        return this._location
    }

    get isActive(): boolean {
        return this._isActive
    }
}
